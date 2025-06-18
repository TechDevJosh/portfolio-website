#!/bin/bash
# Fix missing commas between array object blocks

find ./app -name "*.js" -print0 | while IFS= read -r -d '' file; do
  echo "Scanning $file"
  sed -i.bak -E ':a;N;$!ba;s/}\n[ \t]*{/},\n{/g' "$file"
done
