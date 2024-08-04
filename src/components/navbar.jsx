import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
            <Link href={"/products"}>
              <p>
                <svg
                  viewBox="0 0 248 31"
                  className="h-6 w-auto text-green-600 hover:text-green-500 duration-200"
                >
              
                  <path
                    d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
                    fill="currentColor"
                  ></path>
                </svg>
              </p>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href={"/products"}>
                <p className="text-gray-900 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </p>
                </Link>
                <p className="text-gray-900 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </p>
                <p className="text-gray-900 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </p>
                <p className="text-gray-900 hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classes based on menu state. */}
      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href={"/products"}>
            <p className="text-gray-900 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </p>
          </Link>
          <p className="text-gray-900 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </p>
          <p className="text-gray-900 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Services
          </p>
          <p className="text-gray-900 hover:bg-green-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
