#!/usr/bin/env bash
# Renders /cv to public/CV_Marisha-Deroubaix.pdf via headless Chrome.
# Uses a spare port and stops the server again, so it never collides with
# whatever else is running.
set -euo pipefail

PORT=3999
OUT="public/CV_Marisha-Deroubaix.pdf"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

[ -x "$CHROME" ] || { echo "Chrome not found at $CHROME"; exit 1; }

npx next dev -p "$PORT" >/tmp/cv-server.log 2>&1 &
SERVER=$!
trap 'kill $SERVER 2>/dev/null || true' EXIT

for _ in $(seq 1 40); do
  curl -sf -o /dev/null "http://localhost:$PORT/cv" && break
  sleep 1
done

"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$OUT" "http://localhost:$PORT/cv" 2>/dev/null

echo "wrote $OUT"
