// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="font-bold text-xl">
              Our App
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link
                to="/auth"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Sign In
              </Link>
              <Link
                to="/dashboard"
                className="hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Dashboard
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}">
          <Link to="/" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link
            to="/auth"
            className="block hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Sign In
          </Link>
          <Link
            to="/dashboard"
            className="block hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
