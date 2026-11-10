#!/usr/bin/env bash
# Uploads a SARIF file to the Invicti Platform's AST Import API.
#   usage: import-sarif.sh <file.sarif>
# Needs INVICTI_API_BASE_URL and INVICTI_API_TOKEN in the environment.
set -euo pipefail

sarif="$1"
payload="$(mktemp)"
response="$(mktemp)"

# The file goes in as a base64 string inside JSON, which can be too large for an
# argument list, so it is written to a file and posted with -d @file.
base64 -w0 "$sarif" | jq -Rs '{sarifFile: .}' > "$payload"

post() {
  curl -sS -o "$response" -w '%{http_code}' -X POST \
    "$INVICTI_API_BASE_URL/api/external-scan/v1/import/sarif-imports" \
    -H 'Content-Type: application/json' \
    -H "$1" \
    --data-binary "@$payload"
}

# The API documents two auth schemes (bearer JWT and an X-Auth header); try the
# bearer form first and fall back if the token is rejected.
status="$(post "Authorization: Bearer $INVICTI_API_TOKEN")"
if [ "$status" = 401 ]; then
  echo "Bearer auth rejected (401), retrying with X-Auth"
  status="$(post "X-Auth: $INVICTI_API_TOKEN")"
fi

echo "Import API returned HTTP $status"
cat "$response"; echo

case "$status" in
  2??) ;;
  *) echo "SARIF import failed" >&2; exit 1 ;;
esac
