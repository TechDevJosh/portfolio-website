// app/layout.js

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      {/* All extra classes have been removed to ensure default browser scrolling */}
      <body>{children}</body>
    </html>
  );
}
