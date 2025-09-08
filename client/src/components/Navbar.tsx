"use client";

import Link from "next/link";
import NavMenu from "./NavMenu";
function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <nav className=" flex justify-between items-center px-6 py-4 bg-white font-sans">
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
          <NavMenu />
        </div>

        {/* Auth Buttons */}
        <div className="nav-right flex items-center space-x-3">
          <Link
            href="/signin"
            className="px-4 py-2 text-base text-primary-700 hover:text-primary-800 transition-colors rounded-full border border-primary-500"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-base bg-primary-500 hover:bg-primary-600 text-white  rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
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
    </header>
  );
}

export default Navbar;
