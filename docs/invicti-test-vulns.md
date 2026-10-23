# Planted vulnerabilities for the Invicti scans

This project is a test bed for the Invicti platform, so it carries deliberate, harmless flaws. Nothing in the
repo is a real secret, and the site holds no sensitive data. Every flaw is tagged `INVICTI-TEST-nn` in a
comment, so `grep -rn INVICTI-TEST-` finds them all. To remove them: delete `notices.js` and `vuln-lab/`,
the lines tagged 09 and 10 in `study.html`, and `notices.js` from the staging list in
`.github/workflows/deploy-aigp.yml`.

`tests/vuln_lab_guard_test.py` checks that `vuln-lab/` is never staged for deploy and that every tag in the
repo is listed here.

## Served by the app (found by DAST, and by SAST on the same source)

All of these live in `notices.js` and `study.html`, and none runs unless the URL, a message or a stored key
triggers it.

| Tag | Flaw | How to trigger it | Class |
|---|---|---|---|
| 01 | DOM XSS from `location.hash` into `innerHTML` | `/#notice=<img src=x onerror=alert(1)>` | CWE-79 |
| 02 | `postMessage` handler with no origin check, writes `innerHTML` | `window.postMessage({notice:'<img src=x onerror=alert(1)>'},'*')` | CWE-79, CWE-346 |
| 03 | Open redirect | `/?return=https://example.com` | CWE-601 |
| 04 | `eval` of a stored preference | `localStorage['aigp-notice-prefs']='alert(1)'` | CWE-95 |
| 05 | Hardcoded credentials in shipped JS (AWS documentation example pair, a fake password) | Always present | CWE-798 |
| 06 | `Math.random` for a visitor identifier | Always present | CWE-330 |
| 07 | Cookie without Secure, HttpOnly or SameSite | Always present | CWE-614, CWE-1004 |
| 08 | Credential fragment written to the console | Always present | CWE-532 |
| 09 | jQuery 1.12.4 (known XSS CVEs) from a CDN, no SRI | Always present | CWE-1104, CWE-353 |
| 10 | `target=_blank` without `rel`, plain `http` link | Always present | CWE-1022, CWE-319 |

Also expected without any change: the site is served with no security headers (no CSP, HSTS,
X-Content-Type-Options, X-Frame-Options or Referrer-Policy).

## Source only, never deployed (found by SAST and SCA)

All of these live in `vuln-lab/`.

| Tag | File | Flaw | Class |
|---|---|---|---|
| 20 | `app.py` | Hardcoded password and Flask secret key | CWE-798 |
| 21 | `app.py` | SQL injection | CWE-89 |
| 22 | `app.py` | OS command injection (`shell=True`) | CWE-78 |
| 23 | `app.py` | `pickle.loads` of request data | CWE-502 |
| 24 | `app.py` | Unsafe `yaml.load` | CWE-502 |
| 25 | `app.py` | Path traversal | CWE-22 |
| 26 | `app.py` | SSRF, TLS verification off | CWE-918, CWE-295 |
| 27 | `app.py` | Open redirect | CWE-601 |
| 28 | `app.py` | XML from untrusted input | CWE-611 |
| 29 | `app.py` | Reflected XSS | CWE-79 |
| 30 | `app.py` | MD5 password hash | CWE-328 |
| 31 | `app.py` | Predictable reset token | CWE-338 |
| 32 | `app.py` | `tempfile.mktemp` | CWE-377 |
| 33 | `app.py` | Flask debug on, bound to 0.0.0.0 | CWE-489 |
| 40 | `lab.js` | Hardcoded JWT secret | CWE-798 |
| 41 | `lab.js` | Command injection via `exec` | CWE-78 |
| 42 | `lab.js` | Prototype pollution | CWE-1321 |
| 43 | `lab.js` | ReDoS | CWE-1333 |
| 44 | `lab.js` | DES with no IV | CWE-327 |
| 45 | `lab.js` | Path traversal | CWE-22 |
| 46 | `lab.js` | `eval` plus `innerHTML` | CWE-95, CWE-79 |
| 50 | `requirements.txt` | Old pins with CVEs | CWE-1104 |
| 51 | `package.json` | Old pins with CVEs | CWE-1104 |
| 52 | `Dockerfile` | Unpinned base, root, ENV secret, remote ADD, SSH port | CWE-250, CWE-798 |
| 53 | `ci/insecure-workflow.yml` | `pull_request_target` with head checkout, script injection, `write-all`, unpinned action | CWE-94, CWE-829 |

## The gate

`invicti-scan.yml` runs with `continue-on-error: true`, so findings are reported in the platform and the job
log but no longer fail the build. `INVICTI_MINIMUM_SEVERITY` is left as is.
