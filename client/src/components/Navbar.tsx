"use client";

import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white border-b border-primary-200 font-sans">
      {/* Logo */}
      <div className="nav-left">
        <Link
          href="/"
          className="text-2xl font-bold text-primary-800 hover:text-primary-600 transition-colors tracking-tight"
        >
          Vesper
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-center hidden md:block">
        <ul className="flex space-x-1">
          <li>
            <Link
              href="/features"
              className="px-4 py-2 text-lg  text-primary-700 hover:bg-primary-50 hover:text-primary-800 rounded-md transition-all duration-200 hover:rounded-full"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/channels"
              className="px-4 py-2 text-lg  text-primary-700 hover:bg-primary-50 hover:text-primary-800 rounded-md transition-all duration-200 hover:rounded-full"
            >
              Channels
            </Link>
          </li>
          <li>
            <Link
              href="/resources"
              className="px-4 py-2 text-lg  text-primary-700 hover:bg-primary-50 hover:text-primary-800 rounded-md transition-all duration-200 hover:rounded-full"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="px-4 py-2 text-lg  text-primary-700 hover:bg-primary-50 hover:text-primary-800 rounded-md transition-all duration-200 hover:rounded-full"
            >
              Pricing
            </Link>
          </li>
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="nav-right flex items-center space-x-3">
        <Link
          href="/signin"
          className="px-4 py-2 text-sm  text-primary-700 hover:text-primary-800 transition-colors rounded-full border border-primary-500"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm  rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="p-2 text-primary-700 hover:text-primary-800 hover:bg-primary-50 rounded-md transition-colors">
          <svg
            className="w-5 h-5"
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
    </nav>
  );
}

export default Navbar;
