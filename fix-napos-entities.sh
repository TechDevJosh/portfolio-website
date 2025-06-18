#!/bin/bash

echo "🛠 Fixing corrupted 'napos;' and 'hapos;' strings in JS/JSX files..."

# Find all .js/.jsx files, excluding node_modules/.git/.next
FILES=$(find . -type f \( -name "*.js" -o -name "*.jsx" \) \
  ! -path "./node_modules/*" ! -path "./.git/*" ! -path "./.next/*")

for file in $FILES; do
  echo "🔧 Processing: $file"

  # Backup the file before changes
  cp "$file" "$file.bak"

  # Fix corrupted import paths or string values
  sed -i '' -E \
    -e "s/'napos;([^']+)'/'\1'/g" \
    -e "s/\"napos;([^\"]+)\"/\"\1\"/g" \
    -e "s/'hapos;([^']+)'/'\1'/g" \
    -e "s/\"hapos;([^\"]+)\"/\"\1\"/g" \
    "$file"
done

echo "✅ Done! All 'napos;' and 'hapos;' entities corrected. Backups saved as .bak"
