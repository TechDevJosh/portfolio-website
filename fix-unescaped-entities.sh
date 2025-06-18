#!/bin/bash

# Automatically fix unescaped apostrophes in JSX files
# Use with caution — always commit changes before running

echo "🔍 Scanning for unescaped apostrophes in .js/.jsx files..."

# Find all .js/.jsx files (exclude node_modules, .next, .git)
FILES=$(find . -type f \( -name "*.js" -o -name "*.jsx" \) \
    ! -path "./node_modules/*" \
    ! -path "./.next/*" \
    ! -path "./.git/*")

for file in $FILES; do
  echo "🔧 Fixing: $file"

  # Replace problematic apostrophes inside JSX text
  # (e.g., I'm → I&apos;m), also handles smart quotes
  sed -i.bak -E \
    -e "s/([^a-zA-Z0-9])'([a-zA-Z])/\\1&apos;\\2/g" \
    -e "s/‘/&lsquo;/g" \
    -e "s/’/&rsquo;/g" \
    -e "s/“/&ldquo;/g" \
    -e "s/”/&rdquo;/g" \
    "$file"

  # Optionally wrap lines that use ' in JSX inside backticks
  # Example: change "I'm Josiah" to `I'm Josiah` if needed (manual alternative)
done

echo "✅ Done. Backups saved as .bak files."
