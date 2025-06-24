'use client';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>WeblitzStack – AI-Powered Web Solutions</title>
        <meta
          name="description"
          content="WeblitzStack helps creators and businesses build AI-first, full-stack web apps with automated forms, smart UIs, and blazing-fast performance."
        />
        <link
          rel="preload"
          as="image"
          href="/weblitzstack logo.png"
          type="image/png"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
