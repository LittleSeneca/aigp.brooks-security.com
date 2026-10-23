# Cross-device progress sync

Status: implemented, 2026-09-24. Sign-in moved to Google on 2026-10-23 (see Google sign-in); the username and password sections below describe the legacy path that remains for existing accounts.

## Goal

Someone studying on aigp.brooks-security.com can create an account with a username and password, sign in on another device, and see the same progress there: quiz answers, flashcard ratings, and exam history.

## Non-goals

- **Account recovery.** There is no email or password reset, so a forgotten password cannot be recovered. The owner can delete the user's DynamoDB item by hand; that frees the username and revokes every token issued for it (see Token).
- **Account management.** There is no password change, "sign out everywhere", MFA, or social login.
- **Real-time sync.** Changes reach another device the next time it loads, regains focus or visibility, or records a change of its own. Nothing polls.
- **Sync from `file://`.** Opening `study.html` from disk still works offline exactly as before, and the sign-in button is hidden there.
- **Protection against a username lockout.** Anyone who knows a username can keep it from signing in on a new device by failing logins. Devices already signed in keep syncing, and the owner can clear `fails` by hand.

## Principles

- **Local-first.** localStorage stays the working copy on every device. The app never waits on the network to record an answer, and sync is a background merge.
- **The server merges.** The client sends its whole state and gets back the merged state in one round trip. The client holds no merge logic.
- **No new hosting pattern.** This is the house pattern from `contact.tf` and `subscribe.tf`: a CloudFront path behavior in front of an API Gateway HTTP API, in front of a Lambda (Python 3.12, stdlib plus boto3) that rejects anything without the CloudFront-injected `X-Origin-Secret`. Function URLs are not an option in this account (see the header of `contact.tf`).

## Where the code lives

| Piece | Repo | Path |
|---|---|---|
| Client (sign-in dialog, sync calls) | aigp-study | `study.html` (inline, like the rest of the app) |
| Lambda | brooks-security.com | `terraform/files/aigp-sync/index.py` |
| Lambda self-check | brooks-security.com | `terraform/files/aigp-sync/test_index.py` (stdlib only; CI runs it) |
| Infrastructure | brooks-security.com | `terraform/aigp-sync.tf` (new), plus an origin and behavior in `terraform/aigp.tf` |

The Lambda lives in the infra repo because the aigp-study deploy role can only write objects into one S3 bucket.

## API

The API is same-origin, at `https://aigp.brooks-security.com/api/aigp/<action>`. Every action is `POST` with a JSON body. The token travels in the body rather than an `Authorization` header, which keeps CloudFront's header-forwarding rules out of the picture.

| Action | Request | Success | Errors |
|---|---|---|---|
| `register` | `{username, password}` | `200 {username, token}` | `400` invalid, `409` username taken |
| `login` | `{username, password}` | `200 {username, token}` | `401` wrong username or password (one message for both, and for missing fields), `429` locked out |
| `sync` | `{token, state}` | `200 {state}` (merged) | `400` state is not an object, `401` bad, expired or revoked token, `409` still conflicting after 3 retries, `413` too large |

Any action can also return `403` (the origin secret is missing) or `503` (throttled, or DynamoDB unavailable). Lambda errors carry `{error: "<message>"}`. API Gateway's own errors carry `{message}` (a throttle is `429`) and CloudFront errors are HTML, so the client falls back to a generic message when `error` is missing.

### Credentials

- **Username:** 3–32 characters from `[a-z0-9._-]`. It is case-insensitive (lowercased) and it is the DynamoDB key.
- **Password:** 8–128 characters after Unicode NFKC normalization, and otherwise anything. There are no composition rules and no blocklist, by choice: the account guards study progress, which holds no PII. Hashing, throttling, and lockout still protect the service itself.
- **Hashing:** PBKDF2-HMAC-SHA256 with 600,000 iterations and a 16-byte random salt. The iteration count is stored per user so it can be raised later, and the comparison uses `hmac.compare_digest`.
- **Lockout:** after 10 consecutive failures, logins return `429` until 15 minutes after the most recent failure. Only a successful login resets the counter, so each failure after a lock locks the account again. Concurrent attempts inside one throttle burst may each be checked, and that is accepted.
  - Every login writes the counter: +1 on failure, 0 on success. The token is returned only after that write succeeds. Otherwise a table that is being throttled could leave failures uncounted while a correct guess still came back `200`.
- **Throttling:** stage-wide, across all callers. `register` and `login` are limited to 2 requests/second (burst 5), which bounds the PBKDF2 compute an attacker can make us pay for. `sync` is limited to 5 requests/second (burst 10). The app syncs at most once per pause, so that covers about 50 people studying at once.

### Token

`<username>.<createdAt>.<expiry>.<base64url HMAC-SHA256(key, "<username>.<createdAt>.<expiry>")>`

- `createdAt` is the registration time stored on the user item. `sync` rejects a token whose `createdAt` doesn't match the item, so deleting a user and re-registering the name revokes every older token.
- Parsing uses `rsplit(".", 3)`, because usernames may contain dots and the other three fields never do.
- Tokens expire after 180 days.
- The key is a `random_password` held in the encrypted Terraform state and passed to the Lambda as an environment variable, like `ORIGIN_SECRET`. Rotating it signs everyone out.

### State and merge

The client sends, and the server returns:

```json
{
  "quiz":    { "<qid>": {"answer": "B", "correct": true, "timestamp": 1758700000000, "right": 2, "wrong": 1} },
  "mastery": { "<term>": true },
  "counts":  { "<term>": {"yes": 3, "no": 1, "ts": 1758700000000} },
  "tests":   [ {"ts": 1758700000000, "mode": "Practice Quiz", "total": 25, "correct": 20, "timeUsedMs": 1500000, "auto": false,
                "items": [{"qid": "q-12", "chosen": "B", "correct": true}]} ],
  "resetAt": 0
}
```

Timestamps are client epoch milliseconds. The server clamps the incoming `resetAt` to its own clock, so a fast device clock can't reset away other devices' later work. It then merges the stored state `S` with the incoming `C`. Ties go to `S`, so conflicting legacy entries (which have no timestamp) settle on whichever device uploaded first instead of flipping on every sync.

1. **Reset:** `resetAt = max(S.resetAt, C.resetAt)`. If `resetAt > 0`, every quiz entry, flashcard term, and test with a timestamp `<= resetAt` is dropped on both sides. This is how Reset on one device reaches the others, while anything recorded after the reset survives. A `resetAt` of 0 means "never reset" and drops nothing.
2. **Quiz,** per question id: the entry with the larger `timestamp` wins. `right` and `wrong` take the max of the two sides.
   - That max is exact when devices take turns. It undercounts when two devices answer the same question between syncs, and a device answering offline across another device's reset carries its old tallies forward. Both are accepted; the alternative is per-device counters.
3. **Flashcards,** per term: if only one side has `mastery[term]`, it is kept. Otherwise the side with the larger `counts[term].ts` supplies it. A missing `counts` entry or `ts` counts as 0. `yes`, `no`, and `ts` each take the max.
4. **Tests:** the union keyed by `ts`, newest first, capped at the 100 most recent attempts.

This needed one client change: `rateCard` stamps `counts[term].ts = Date.now()`. Mastery has no timestamp of its own, so without one a fresh rating can't be told apart from a stale copy. Ratings made before this change count as 0 and lose to any later rating.

**Validation.** The state is the server's trust boundary. Once stored, it renders on every one of the owner's devices, and some fields reach `innerHTML`. The server rebuilds every entry from its known fields, strips unknown keys, and drops any entry that fails a check. It returns `400` only when `state` isn't an object at all, so one odd entry can never block a device.

The checks are on types and character sets, never on specific values, so a new test mode or option letter added to the app is never silently dropped:

| Field | Accepted |
|---|---|
| Timestamps and counters, including a test's `total`, `correct` and `timeUsedMs` | Non-negative integers |
| `correct`, `auto`, and mastery values | Booleans |
| An answer (`answer` or `chosen`) | 1–8 letters, or a list of up to 8 of them; `chosen` may also be `null` |
| `mode` | 1–40 letters, digits, and spaces |
| `items` | Up to 200 per attempt |
| Keys | At most 200 characters |

A quiz entry that is missing `right` or `wrong` is filled in the way the client fills it in (`correct ? 1 : 0` and the inverse).

The client also HTML-escapes `mode` and answers where it renders them, as defense in depth.

### Storage

There is one DynamoDB table, `aigp-study-users`. It uses on-demand billing, with partition key `username` (S), point-in-time recovery, and deletion protection. It also has an `on_demand_throughput` ceiling of 200 WRU/s and 400 RRU/s, which is the cost cap (see Cost).

| Attribute | Type | Notes |
|---|---|---|
| `username` | S | the key, lowercased |
| `salt`, `hash` | B | PBKDF2 |
| `iterations` | N | |
| `fails`, `failedAt` | N | lockout counter, epoch seconds |
| `state` | B | zlib-compressed JSON. A heavy user is roughly 600 KB raw and 80 KB compressed. |
| `version` | N | optimistic lock for `sync` |
| `createdAt`, `updatedAt` | N | epoch seconds. `createdAt` binds tokens. |

- `register` writes the item under the condition `attribute_not_exists(username)`.
- Every `GetItem` uses `ConsistentRead`, because the first sync lands milliseconds after `register` writes.
- `sync` reads, merges, and skips the write entirely when nothing changed. Otherwise it runs `UpdateItem SET #state, version` on the condition that `version` is unchanged, and retries up to 3 times.
- Login's counter writes carry the condition `attribute_exists(username)`, so they can never recreate a deleted item.
- A merged state over 1 MB of JSON or 350 KB compressed gets `413`. The 100-attempt cap keeps real users well under both.
- The DynamoDB client uses `standard` retries with 2 total attempts and short timeouts. At the throughput ceiling it fails fast with `503` instead of riding botocore's legacy 10-retry, ~25 s DynamoDB policy past the Lambda timeout.

## Client behavior

- **Header:** a "Sign in" button that becomes "☁ username" once signed in. It is hidden on `file://`, and on phones the header tabs wrap.
- **Dialog** (a native `<dialog>`):
  - Signed out: username and password fields, **Sign in**, and **Create account**.
  - Signed in: "Signed in as X · last synced HH:MM", **Sync now**, and **Sign out**.
  - App keyboard shortcuts are ignored while the dialog is open.
- **localStorage keys:**
  - `aigp-auth` holds the session `{username, token, resetAt?}`. The password is never stored.
  - `aigp-last-user` names whose progress this browser holds. It is written at sign-in and removed at sign-out.
- **Sign-in and registration** upload whatever progress the device already had ("Progress already on this device is added to your account"). The exception is progress that `aigp-last-user` says belongs to a different account: the client first asks "This browser has progress from X. Discard it and sign in as Y?" and clears it on yes. The same user merges as usual.
- **When sync runs:**
  - right after sign-in;
  - on page load when signed in;
  - 300 ms after the tab becomes visible or the window gains focus (the two collapse into one sync);
  - 1.5 s after any change: an answer, a flashcard rating, a submitted exam, or a reset.
- **In-flight safety:** a generation counter bumps on every local change, on every session change (sign-in, sign-out, 401), and whenever another tab writes an `aigp-*` key. A response is applied only if the counter hasn't moved since the request went out. If it has, another sync is scheduled, and that one carries the newer state.
- **Multiple tabs:** each tab listens for the `storage` event and reloads its in-memory `progress` and session from localStorage. A tab therefore never writes a stale copy over another tab's work, and signing out in one tab signs out all of them.
- **Applying state:** the client writes the four progress keys and sets `progress`, then refreshes totals only (quiz and flashcard counters), plus the test history list or menu.
  - Filters aren't re-run, so the question or card on screen is still the one a key press acts on.
  - An open test review stays on the same attempt, which it finds by `ts`.
  - The mind map is not rebuilt (that would reset zoom and pan). It recolors the next time it's opened.
- **Reset:** it always clears this browser. When signed in, it also stamps `resetAt` on the session and syncs, which clears every device. A signed-out reset records nothing, so it can never leak into an account on a later sign-in.
  - If the device is offline and the session expires before the reset syncs, the reset is lost and the old progress comes back. That loses nothing, and it is accepted.
- **Sign out** syncs first, then clears the session, `aigp-last-user`, and this device's progress. That way the next person on a shared browser doesn't merge your progress into their account.
  - If the final sync fails, the client asks "Can't reach the server. Sign out anyway? Changes on this device since HH:MM will be lost." Keeping the data is the default, but a user on a shared machine can always end the session.
- **Errors:**
  - A `401` on `sync` clears the session, keeps local progress and `aigp-last-user`, and asks the user to sign in again.
  - Every other sync failure is silent: the app is offline-capable, and the next trigger retries. The error is shown in the dialog if it's open.
- **Footer:** the "no account" wording now says an account is optional and used only for sync.

## Infrastructure changes (brooks-security.com)

**New `terraform/aigp-sync.tf`:**

- `random_password.aigp_origin` and `random_password.aigp_token_key`.
- `aws_dynamodb_table.aigp_users`, as described under Storage.
- The Lambda role, allowing `dynamodb:GetItem`, `PutItem`, and `UpdateItem` on that table plus CloudWatch Logs.
- `aws_lambda_function.aigp_sync`: 1024 MB (PBKDF2 is CPU-bound, and the cost per login is about the same at any size), 10 s timeout, and 14-day log retention.
- An HTTP API, `aigp-study`, with three `POST` routes (`for_each`) and a `$default` auto-deploy stage. `route_settings.route_key` references the route resources rather than string literals, so the stage is created after its routes.

**`terraform/aigp.tf`:**

- An `aigp-api` origin carrying `X-Origin-Secret`.
- An `ordered_cache_behavior` for `/api/*` with CachingDisabled, AllViewerExceptHostHeader, and all methods allowed.
- The "NO COMPUTE" header comment is rewritten.

**`.github/workflows/infrastructure.yml`:** the terraform-validate job runs `python3 -m unittest discover -s terraform/files/aigp-sync`. Plan and apply need validate, so a merge regression can't deploy.

## Rollout

1. **Check the CI key's DynamoDB permissions** (the owner does this, since there's no read-only profile for this account). DynamoDB is new to the Infrastructure workflow's static key, and a green PR plan doesn't prove it can create a table, because plan never calls `Create*`. Confirm that the key's principal allows `dynamodb:CreateTable`, `DescribeTable`, `UpdateTable`, `UpdateContinuousBackups`, `DescribeContinuousBackups`, `DescribeTimeToLive`, `ListTagsOfResource`, and `TagResource`. If the apply still fails at the table, grant them and rerun through `workflow_dispatch`. Nothing user-facing breaks, because the app ships second.
2. **Merge the infra PR.** Then check:
   ```
   curl -s -X POST -H 'content-type: application/json' -d '{}' https://aigp.brooks-security.com/api/aigp/login
   ```
   It should print `{"error": "Wrong username or password."}` (the Lambda's 401). A `403` means the behavior or the secret is wrong.
3. **Merge the app PR,** which deploys `study.html`.
4. **Test by hand:**
   - Register on one browser, answer a question, then sign in on a second browser and see the answer there.
   - Rate a flashcard on the second browser and see it arrive on the first when you focus that window.
   - Reset on one browser, and the other clears.

If the app ships before the infra, the sign-in dialog shows the API error. Nothing else breaks, because local progress is untouched.

## Cost

Everything is request-priced, so idle cost is about $0 and PITR costs cents. The worst cases, each sustained by someone scripting against the API:

| Cost | Ceiling |
|---|---|
| DynamoDB | $11/day of writes plus $4/day of reads (the table's throughput cap; writes bill at full item size) |
| PBKDF2 | About $3/day (login plus register at 2 req/s each) |
| Response egress | Up to 5 req/s × 1 MB, about 430 GB/day. Beyond CloudFront's free 1 TB/month that is about $37/day. This is the largest residual. |

An AWS Budgets email alert on the account is the backstop for all of these. It is not part of this change.

## Google sign-in

Password registration is retired. New accounts are created by signing in with Google; existing password accounts can still `login` but there is no migration or linking, so a person with both ends up with two accounts.

- **Flow:** authorization code with PKCE, run by the Lambda so the client secret (SSM SecureString `/brooks-security.com/aigp/google_client_secret`, read at runtime) never reaches the browser.
  1. The app links to `GET /api/aigp/google`. The Lambda sets an HttpOnly, Secure, SameSite=Lax cookie (`aigp_oauth`, path `/auth`, 10 minutes) holding a random state and PKCE verifier, and redirects to Google with scope `openid email`.
  2. Google redirects to `GET /auth/callback` (the client's registered redirect URI; CloudFront routes `/auth/*` to the API). The Lambda checks `state` against the cookie, exchanges the code, and checks the ID token's `iss`, `aud`, `exp`, a numeric `sub`, and `email_verified`. The token comes directly from Google's token endpoint over TLS, so its signature is not re-verified.
  3. The Lambda redirects to `/#login=<token>&name=<email>`, or `/#auth_error=<message>` on any failure. The app reads the fragment, removes it from the URL, and signs in as it would after a password login.
- **Identity:** the DynamoDB key is `g.<google sub>`, never the email, which can change. The item carries `provider = "google"` and the current `email` (refreshed at each sign-in), and has no `salt` or `hash`. Tokens, sync, and merge are unchanged.
- **Squatting:** `login` refuses Google items, and the callback refuses a `g.*` item that lacks `provider = "google"`, so a password account can never occupy or take over a Google identity.
- **Routes and limits:** `register` returns `410`. The two GET routes share the 2 requests/second (burst 5) ceiling with `login`.
- **Google console:** a Web application client with origin `https://aigp.brooks-security.com` and redirect `https://aigp.brooks-security.com/auth/callback`. The Lambda's `REDIRECT_URI` must match it exactly. The consent screen needs only the `openid` and `email` scopes, and if it is in Testing mode only listed test users can sign in.
- **Recovery:** a lost Google account is recovered the way Google recovers it; deleting a user's item still revokes every token issued for it.
