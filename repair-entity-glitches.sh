#!/bin/bash

echo "🧹 Repairing corrupted entity strings (napos; / hapos;)..."

find . -type f \( -name "*.js" -o -name "*.jsx" \) \
  ! -path "./node_modules/*" ! -path "./.git/*" ! -path "./.next/*" | while read file; do
  echo "🔧 Fixing: $file"
  cp "$file" "$file.bak"

  sed -i '' -E \
    -e "s/napos;//g" \
    -e "s/hapos;//g" \
    "$file"
done

echo "✅ Repair complete. Backups saved as *.bak"
