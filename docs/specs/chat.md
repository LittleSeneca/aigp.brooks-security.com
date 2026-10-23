# Study chat

Status: built and tested against stubs, 2026-10-23. Not deployed. The corpus is a four-document seed; widening it is the next piece of work (see Corpus).

## Goal

A Chat tab, shown only to people signed in with Google, that answers questions about the AIGP material using the study materials in this repo as its only source of truth. It cites the sections it used.

## Non-goals

- **Answering from the model's own knowledge.** The prompt tells it to say "That isn't covered in the study materials" instead.
- **Streaming.** Function URLs are not available in this account, and HTTP API cannot stream. The UI shows the model's search steps while it works instead.
- **Saved conversations.** History lives in the page's memory. A reload starts over, and nothing is stored server-side beyond the job (24 hours).
- **Semantic search.** Keyword search (BM25). See Search.

## Is it an agent?

Not an autonomous one. It is a bounded retrieval loop, which is the simplest thing that handles questions needing a variable number of lookups ("compare high-risk obligations under the EU AI Act and NIST MAP" needs two; "what is Article 5" needs one):

1. **Pre-retrieval.** The Lambda searches the corpus for the user's message and puts the top 4 sections in the system prompt. Most questions are answerable from that with one model call, which matters with a slow model.
2. **Two read-only tools.** `search_docs(query, limit)` returns `{id, title, where, snippet}`. `fetch_doc(id)` returns a section in full plus the ids of its neighbours. Neither can change anything.
3. **Hard cap of 4 model calls.** The last call is made without tools and with an instruction to answer from what it has, so the loop always ends in an answer. A bad tool call (empty query, unknown id, garbled arguments) comes back as a readable message the model can recover from.
4. **Grounding.** Every claim is cited `[[section-id]]`. The server drops ids that aren't in the corpus and returns the rest as `sources`; the client numbers them.

Passages and tool results are marked as reference text, not instructions. The corpus is ours, so the realistic injection route is the user's own message, which only affects their own conversation, and the client sanitises what the model returns (see Client).

`reasoning_details` is passed back unmodified within a question's tool loop, as OpenRouter requires. Between questions only plain `{role, content}` turns are kept, so the client never holds opaque model state and cannot tamper with it.

## Architecture

```
browser -> CloudFront /api/* -> HTTP API -> aigp-study-chat-api  (quota, jobs, status; 10 s)
                                                |  async invoke
                                                v
                                       aigp-study-chat-worker (loop; 300 s)
                                          |            |            |
                                   private S3       DynamoDB      OpenRouter
                                   corpus.json.gz   aigp-study-chat
```

HTTP API cuts an integration off at 30 s and the model is slow, so a question is a job:

| Route | Request | Response |
|---|---|---|
| `POST /api/aigp/chat` | `{token, message, history}` | `202 {id, remaining}`, `429` at the weekly or daily limit |
| `POST /api/aigp/chat/status` | `{token, id}` | `{status: queued\|running\|done\|error, steps, answer, sources, error, remaining}` |
| `POST /api/aigp/chat/usage` | `{token}` | `{remaining, limit, resetsAt}` |

The client polls `status` every 1.5 s for the first three polls and every 2.5 s after. A job still running after 330 s (the worker's timeout plus slack) is closed as an error by `status` and its question is given back.

### Who may use it

The sync API's session token is verified (same HMAC key), and then the user's item in `aigp-study-users` must have `provider = "google"` and a matching `createdAt`. Password accounts get `401`. The tab is hidden for them, but that is a courtesy: the server is the gate. A job can only be read by the user who started it.

### Limits

| Limit | Value | Where |
|---|---|---|
| Questions per user per week | 200 | `u#<user>#<ISO week>` item, calendar week in UTC, resets Monday 00:00 UTC |
| Questions per day, whole app | 1,000 | `d#<date>` item. The backstop behind OpenRouter's own spending limit. |
| Model calls per question | 4 | the loop |
| Message / history | 2,000 characters / 10 turns, 60,000 characters | `start` |
| Start rate | 1/s, burst 3 | API stage, `POST /api/aigp/chat` |

A question is one user message, however many model calls it takes. The count is taken with one conditional `UpdateItem` (`n < limit`), so parallel tabs cannot overshoot. A question that fails on our side or the provider's (model down, timeout, empty answer, lost worker) is given back, once: the worker's result write is conditional on the job still running, so a job `status` already closed as stale can't refund twice. A refused question is never counted.

### Model

`z-ai/glm-5.3-flash`, `reasoning: {enabled: true}`, provider `open-inference/fp4` only with fallbacks off. If that provider is down, chat is down; the user sees "The model is unavailable right now". The key is read from SSM SecureString `/brooks-security.com/aigp/openrouter_api_key` by the worker only. The API function can neither read it nor the corpus.

### Storage

`aigp-study-chat`, on-demand with a throughput cap and TTL on `ttl`. Three item kinds: weekly counts (kept 7 days past the week), daily counts (3 days), jobs (24 hours). A job holds `user`, `status`, `steps`, `answer`, `sources`, and the two quota keys it must refund. Questions and answers are stored only in the job, for polling. Logs carry call counts and token usage, never question or answer text.

## Search

BM25 over sections, built in memory at cold start (a few ms for the seed; the full corpus is a few MB). Headings count double, the document's own title does not, query words adjacent in a heading get a bonus, and tokens get light stemming (`prohibited`/`prohibits`, `systems`) with question words dropped.

What this is good at: specific terms, which is how the model writes tool queries ("Article 5 prohibited practices", "GOVERN 1.2"). What it is weaker at: a raw natural-language question over a corpus where most sections share words like "EU AI Act", which is what pre-retrieval searches with. On the seed, "prohibited AI systems" ranks the right section first and "Which practices does the EU AI Act prohibit?" does not. The model is told to search again when the passages aren't enough, and that is what the tool loop is for.

When the full corpus is in, build a small set of real questions with the section each should find and measure it before changing anything. The upgrade path is hybrid keyword plus embeddings behind the same `search_docs` interface; nothing else changes.

## Corpus

`build_chat_corpus.py` cuts markdown at `##` and `###` headings into sections `{id, doc, title, breadcrumb, text}`, merges runs smaller than 600 characters, splits larger than 6,000 on paragraphs, turns Obsidian `[[links]]` into their labels (the model cites with `[[id]]`, so none may survive), and refuses to write a corpus with duplicate or malformed ids. Ids look like `the-eu-ai-act#1-1-prohibited-ai-systems` and are stable while headings are.

`SOURCES` in that file is a four-document seed: the EU AI Act note, NIST AI RMF, ISO 42005 and Agentic AI Governance (102 sections, 49 KB gzipped). **Populating the rest is deliberately not done.** The remaining work, to be handed to a larger inference job once the seed is proved out:

- the other `Map/` notes (mostly adding to `SOURCES`);
- `aigp-book.md` (chapter and section headings already exist);
- the enrichments in `enrichments/*.json` (per-node summaries, deep dives, key points), which needs a reader for the JSON.

The deploy workflow builds the corpus and uploads it to the private bucket after the site syncs. A warm Lambda keeps the corpus it loaded, so a new corpus is picked up by new containers, not instantly.

## Client

`chat.js`, plus a panel in `study.html`. `renderAuth` shows the tab when the session's username starts with `g.`; losing a Google session (sign-out, expiry, a 401) hides the tab, returns to Quiz, and clears the conversation.

The answer is rendered with `marked` and then **sanitised**, because model output can be steered by the question and by anything quoted from the materials. The HTML is parsed inertly and rebuilt from an allowlist of formatting tags with no attributes at all, so there are no links, images, handlers or styles. Other tags keep their text and lose their markup. `tests/chat_ui_test.py` feeds it a hostile answer (script, `onerror`, `javascript:` link, iframe) and checks nothing survives.

## Infrastructure (brooks-security.com)

`terraform/aigp-chat.tf` (new): the private corpus bucket, the DynamoDB table, two Lambda roles (the API's can count, read jobs and start the worker; the worker's can read the corpus and the key), the two functions (one source file, two handlers), async retries off (a failed run reports through the job, and a retry would bill the question again), and three routes on the existing `aigp-study` API. `aigp-sync.tf` gains a route setting for the start rate. `aigp-deploy.tf`'s role gains `s3:PutObject` on `corpus.json.gz` only. Lambda self-check: `python3 -m unittest discover -s terraform/files/aigp-chat`, run in CI beside the sync one.

## Rollout

1. Merge the infra PR. Terraform creates the bucket, table, functions and routes. The OpenRouter key parameter already exists.
2. Merge the app PR. The deploy builds and uploads the corpus, and ships the tab. Until the corpus exists, a question fails with "The study materials aren't available right now" and is given back.
3. By hand: sign in with Google, open Chat, ask "What does Article 5 prohibit?", and check the answer cites a section and the counter drops to 199.

## Cost

Everything is request-priced; idle cost is about zero. The ceilings: 1,000 questions a day across the app at up to 4 cheap model calls each, plus OpenRouter's own spending limit on the key, plus the table's throughput cap.
