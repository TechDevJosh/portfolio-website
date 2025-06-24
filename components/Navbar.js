'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkBaseClass = 'text-sm font-medium transition duration-200';
  const inactiveClass = 'text-white/80 hover:text-white';
  const activeClass = 'text-white';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0e1525]/95 backdrop-blur-md border-b border-white/10 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/#home" aria-label="Return to homepage">
            <Image
              src="/weblitzstack logo.png"
              alt="Weblitzstack Logo"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className={`${linkBaseClass} ${
                pathname === '/#about' ? activeClass : inactiveClass
              }`}
            >
              About
            </Link>
            <Link
              href="/#work"
              className={`${linkBaseClass} ${
                pathname === '/#work' ? activeClass : inactiveClass
              }`}
            >
              Work
            </Link>
            <Link
              href="/blog"
              className={`${linkBaseClass} ${
                pathname.startsWith('/blog') ? activeClass : inactiveClass
              }`}
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              className={`${linkBaseClass} ${
                pathname === '/#contact' ? activeClass : inactiveClass
              }`}
            >
              Contact
            </Link>
            <Link
              href="/hire-me"
              className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-md font-semibold transition"
              aria-label="Hire me"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white"
              aria-label="Open mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
