#!/usr/bin/env bash
# Uploads a SARIF file to the Invicti Platform's AST Import API.
#   usage: import-sarif.sh <file.sarif>
# Needs INVICTI_API_BASE_URL and INVICTI_API_TOKEN in the environment.
#
# The API sits behind an nginx request-size limit (HTTP 413), and a full SARIF
# file base64-encoded is larger than it allows. So the file is slimmed (rule help
# text dropped) and sent as several imports of CHUNK results each, every one
# carrying only the rules its results use.
set -euo pipefail

sarif="$1"
chunk="${CHUNK:-25}"
work="$(mktemp -d)"
response="$work/response"

post() { # $1 = payload file, $2 = auth header
  curl -sS -o "$response" -w '%{http_code}' -X POST \
    "$INVICTI_API_BASE_URL/api/external-scan/v1/import/sarif-imports" \
    -H 'Content-Type: application/json' \
    -H "$2" \
    --data-binary "@$1"
}

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
' "$sarif" > "$work/parts.jsonl"

total="$(wc -l < "$work/parts.jsonl")"
echo "Importing $sarif in $total part(s)"

# The platform's API tokens go in X-Auth. Sent as a bearer, a non-JWT token makes
# the server answer 500 instead of 401, so it is not tried first.
auth="X-Auth: $INVICTI_API_TOKEN"
i=0
while IFS= read -r part; do
  i=$((i + 1))
  base64 -w0 <<<"$part" | jq -Rs '{sarifFile: .}' > "$work/payload.json"

  status="$(post "$work/payload.json" "$auth")"
  if [ "$status" = 401 ]; then
    echo "X-Auth rejected (401): INVICTI_API_TOKEN is not valid for the AST Import API" >&2
  fi

  echo "part $i/$total: HTTP $status"
  case "$status" in
    2??) ;;
    *) cat "$response"; echo; echo "SARIF import failed" >&2; exit 1 ;;
  esac
done < "$work/parts.jsonl"
