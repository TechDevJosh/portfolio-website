// components/Navbar.js

import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="container mx-auto px-6 py-3">
        {' '}
        {/* Adjusted padding for image logo */}
        <div className="flex items-center justify-between">
          {/* Logo/Brand -- Updated to use your image */}
          <Link href="/#home" aria-label="Return to homepage">
            <Image
              src="/weblitzstack logo.png" // This points to your file in the /public folder
              alt="Weblitzstack Logo"
              width={160} // IMPORTANT: Adjust to your logo's actual width
              height={40} // IMPORTANT: Adjust to your logo's actual height
              priority // Helps load the logo faster
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className="text-gray-300 hover:text-teal-400 transition"
            >
              About
            </Link>
            <Link
              href="/#work"
              className="text-gray-300 hover:text-teal-400 transition"
            >
              Work
            </Link>
            <Link
              href="/#contact"
              className="text-gray-300 hover:text-teal-400 transition"
            >
              Contact
            </Link>
            <Link
              href="/hire-me"
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition font-semibold"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
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
