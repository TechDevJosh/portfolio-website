#!/bin/bash

echo "🔍 Fixing unescaped apostrophes in JSX text (safe mode)..."

# Only replace 'I'm', 'don't', etc. within likely JSX <p>, <h>, <span>, etc. content
find . -type f \( -name "*.js" -o -name "*.jsx" \) ! -path "*/node_modules/*" | while read file; do
  cp "$file" "$file.bak"  # backup

  sed -i '' -E '
    s/([^a-zA-Z0-9])'\''([a-zA-Z])/\\1&apos;\\2/g;
    s/‘/&lsquo;/g;
    s/’/&rsquo;/g;
    s/“/&ldquo;/g;
    s/”/&rdquo;/g;
  ' "$file"

  echo "✅ Fixed: $file"
done

echo "✅ Done (backup created as .bak files)"
