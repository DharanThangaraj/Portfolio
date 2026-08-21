import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full px-4 py-4">
      <nav className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:justify-end">
        <Link
          to="/"
          className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
        >
          Home
        </Link>

        <Link
          to="/project"
          className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
        >
          Project
        </Link>

        <Link
          to="/internship"
          className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
        >
          Internship
        </Link>

        <Link
          to="/education"
          className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
        >
          Education
        </Link>

        <Link
          to="/contact"
          className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;