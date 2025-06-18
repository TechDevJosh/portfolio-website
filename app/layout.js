'use client';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import './globals.css'; // ⬅️ This line is MISSING!

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
