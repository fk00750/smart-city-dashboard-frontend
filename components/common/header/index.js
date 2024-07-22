import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GiFlexibleLamp } from "react-icons/gi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    // Check if refreshToken exists in localStorage or cookies
    const token = localStorage.getItem("refreshToken");
    setHasToken(!!token);
  }, []);

  return (
    <nav className="bg-black">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <GiFlexibleLamp
            className="text-white"
            style={{ width: "24px", height: "24px" }}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white poppins-bold">
            SmartCity
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {hasToken ? (
            <Link href="/profile">
              <button
                type="button"
                className="text-white livvic-medium bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Profile
              </button>
            </Link>
          ) : (
            <Link href="/register">
              <button
                type="button"
                className="text-white livvic-medium bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Get started
              </button>
            </Link>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${isOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="livvic-medium flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 md:p-0 text-white bg-green-600 rounded md:bg-transparent md:text-green-600"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/fk00750"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="https://smartcityserver-prod.onrender.com/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/faizalikhan-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
