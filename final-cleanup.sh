#!/bin/bash

echo "🧹 Final cleanup: removing corrupted apos entities from .js/.jsx files..."

find . -type f \( -name "*.js" -o -name "*.jsx" \) \
  ! -path "./node_modules/*" ! -path "./.git/*" ! -path "./.next/*" | while read file; do
  echo "🧼 Cleaning: $file"
  cp "$file" "$file.bak"

  sed -i.bak -E \
    -e "s/napos;//g" \
    -e "s/hapos;//g" \
    -e "s/&apos;//g" \
    -e "s/&rsquo;/’/g" \
    -e "s/&lsquo;/‘/g" \
    -e "s/&rdquo;/”/g" \
    -e "s/&ldquo;/“/g" \
    "$file"
done

echo "✅ Cleanup complete. All backups saved as *.bak"
