"use client";

import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white border-b border-primary-200">
      {/* Logo */}
      <div className="nav-left">
        <Link
          href="/"
          className="text-xl font-bold text-primary-800 hover:text-primary-600 transition-colors"
        >
          Vesper
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-center hidden md:block">
        <ul className="flex space-x-2">
          <li>
            <Link
              href="/"
              className="px-4 py-2 text-primary-700 hover:bg-primary-50 hover:text-primary-800 rounded-full transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="px-4 py-2 text-primary-700 hover:bg-primary-50 hover:text-primary-800 rounded-full transition-all duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="px-4 py-2 text-primary-700 hover:bg-primary-50 hover:text-primary-800 rounded-full transition-all duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-4 py-2 text-primary-700 hover:bg-primary-50 hover:text-primary-800 rounded-full transition-all duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="nav-right flex items-center space-x-3">
        <Link
          href="/signin"
          className="px-4 py-2 border rounded-full text-primary-700 hover:text-primary-800 font-medium transition-colors"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="p-2 text-primary-700 hover:text-primary-800">
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
    </nav>
  );
}

export default Navbar;
