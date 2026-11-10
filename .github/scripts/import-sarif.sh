#!/usr/bin/env bash
# Uploads a SARIF file to the Invicti Platform's AST Import API.
#   usage: import-sarif.sh <file.sarif>
# Needs INVICTI_API_BASE_URL and INVICTI_API_TOKEN in the environment.
#
# Optional: CHUNK (results per import, default 25), FAIL_DIR (where payloads of
# failed imports are kept, default import-failures).
#
# The API sits behind an nginx request-size limit (HTTP 413), so the file is
# slimmed (rule help text dropped) and sent as several imports of CHUNK results
# each, every one carrying only the rules its results use.
#
# The API answers a bad request with an opaque 500, so on failure this script
# gathers what it can: the request's correlation ID and the response headers
# (quote these to Invicti support), a probe with a minimal SARIF document to tell
# "every import fails" apart from "this content fails", and the failing payload.
set -uo pipefail

sarif="$1"
chunk="${CHUNK:-25}"
fail_dir="${FAIL_DIR:-import-failures}"
api="$INVICTI_API_BASE_URL/api/external-scan/v1"
work="$(mktemp -d)"
auth="X-Auth: $INVICTI_API_TOKEN" # sent as a bearer, a non-JWT token gets a 500
failed=0

summary() { [ -n "${GITHUB_STEP_SUMMARY:-}" ] && echo "$*" >> "$GITHUB_STEP_SUMMARY"; return 0; }

# request METHOD URL [payload-file]: sets $status and $corr (the correlation ID
# sent), leaves the body in $work/body and the response headers in $work/headers.
request() {
  corr="$(cat /proc/sys/kernel/random/uuid)"
  local args=(-sS -m 120 -o "$work/body" -D "$work/headers" -w '%{http_code}'
    -X "$1" -H "$auth" -H "X-Correlation-ID: $corr")
  [ -n "${3:-}" ] && args+=(-H 'Content-Type: application/json' --data-binary "@$3")
  status="$(curl "${args[@]}" "$2" 2>"$work/curl-err")" || status="000 ($(cat "$work/curl-err"))"
}

payload_for() { # SARIF on stdin -> import payload file $1
  base64 -w0 | jq -Rs '{sarifFile: .}' > "$1"
}

# Preflight: is the token accepted, and what does the tenant have configured?
echo "Preflight"
for ep in scanners connections; do
  request GET "$api/$ep"
  echo "  GET $ep: HTTP $status"
  case "$status" in
    401) echo "::error::INVICTI_API_TOKEN was rejected (401); it is not valid for the AST Import API"; exit 1 ;;
    2??) head -c 600 "$work/body"; echo ;;
  esac
done

# One compact SARIF document per line. A run with no results still yields one,
# so an empty scan is recorded as well.
jq -c --argjson n "$chunk" '
  . as $doc
  | .runs
  | to_entries[]
  | .value as $run
  | ([$run.results // [] | range(0; length; $n) as $i | .[$i:$i+$n]] | if length == 0 then [[]] else . end)[]
  | . as $part
  | ([$part[].ruleId] | unique) as $ids
  | $doc + {runs: [
      $run
      | .results = $part
      | if .tool.driver.rules then
          .tool.driver.rules |= (map(select(.id as $id | $ids | index($id))) | map(del(.help, .fullDescription)))
        else . end
    ]}
' "$sarif" > "$work/parts.jsonl" || { echo "::error::could not read $sarif as SARIF"; exit 1; }

total="$(wc -l < "$work/parts.jsonl")"
echo "Importing $sarif in $total part(s)"

probed=0
i=0
while IFS= read -r part; do
  i=$((i + 1))
  payload_for "$work/payload.json" <<<"$part"

  # Retry server errors and timeouts; a 4xx will not change on a retry.
  for delay in 0 3 10; do
    sleep "$delay"
    request POST "$api/import/sarif-imports" "$work/payload.json"
    case "$status" in 5??|000*) ;; *) break ;; esac
    echo "  part $i/$total: HTTP $status, retrying"
  done

  size="$(wc -c < "$work/payload.json")"
  case "$status" in
    2??) echo "part $i/$total: HTTP $status ($size bytes)"; continue ;;
  esac

  failed=$((failed + 1))
  echo "::error::part $i/$total failed with HTTP $status"
  echo "  payload: $size bytes, $(jq '.runs[0].results | length' <<<"$part") results, $(jq '.runs[0].tool.driver.rules | length' <<<"$part") rules"
  echo "  X-Correlation-ID: $corr"
  echo "  response headers:"; sed 's/^/    /' "$work/headers" | tr -d '\r'
  echo "  response body:";    head -c 1500 "$work/body" | sed 's/^/    /'; echo

  mkdir -p "$fail_dir"
  printf '%s\n' "$part" > "$fail_dir/part-$i.sarif"

  # Once per file: does a minimal, valid SARIF document import? If it does, the
  # tenant and token are fine and the content of this part is the problem; if
  # it fails too, no import works from here (licence, connection or service).
  if [ "$probed" = 0 ]; then
    probed=1
    echo '{"version":"2.1.0","runs":[{"tool":{"driver":{"name":"probe"}},"results":[]}]}' | payload_for "$work/probe.json"
    request POST "$api/import/sarif-imports" "$work/probe.json"
    echo "  probe with a minimal SARIF document: HTTP $status"
    if [[ $status == 2* ]]; then
      echo "  -> imports work; the content of part $i is what the server rejects (see $fail_dir/part-$i.sarif)"
    else
      echo "  -> even an empty import fails; this is the service or tenant, not the file, so the remaining parts are skipped"
      summary "- $sarif: import service rejects every request (probe HTTP $status)"
      break
    fi
  fi
  summary "- $sarif part $i/$total: HTTP $status"
done < "$work/parts.jsonl"

if [ "$failed" -gt 0 ]; then
  echo "::error::$failed of $total part(s) of $sarif failed to import"
  exit 1
fi
