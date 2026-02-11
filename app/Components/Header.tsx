'use client';
import React from "react";
import Link from "next/link";

export default function Header() {
      const [isOpen, setIsOpen] = React.useState(false);
  return (
  
    <div className="relative">
      <nav className="bg-white fixed top-0 z-50 flex w-full items-center justify-around px-4 md:px-8 lg:px-16 ">
        {/* Logo */}
        <Link href="/">
          <img
            className="h-18 w-22 md:w-28 md:h-24 lg:h-30 lg:w-36 object-contain"
            src="/ZBLogo.svg"
            alt="logo"
          />
        </Link>

        {/* Desktop Nav Items */}
        <div className="nav-items">
          <ul className="hidden min-[1150px]:flex items-center gap-10 md:gap-14 bg-gray-100 rounded-full px-6 py-4 md:px-7 md:py-6 md:text-base max-w-fit">
            <li className="hover:text-blue-900 dark:hover:text-blue-500 cursor-pointer">
              <Link href="/home-broadband">Home Broadband</Link>
            </li>
            <li className="hover:text-blue-900 dark:hover:text-blue-500 cursor-pointer">
              <Link href="/business-broadband">Business Broadband</Link>
            </li>
            <li className="hover:text-blue-900 dark:hover:text-blue-500 cursor-pointer">
              <Link href="/smart-bundles">Smart Bundles</Link>
            </li>
            <li className="hover:text-blue-900 dark:hover:text-blue-500 cursor-pointer">
              <Link href="/digital-lines">Digital Lines</Link>
            </li>
            <li className="hover:text-blue-900 dark:hover:text-blue-500 cursor-pointer">
              <Link href="/all-plans">All Plans</Link>
            </li>
            <li className="hover:text-blue-900 dark:hover:text-blue-500 cursor-pointer">
              <Link href="/why-zoiko">Why Zoiko</Link>
            </li>
          </ul>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <button className="bg-[#10446c] text-white px-2 py-2 rounded-md hover:bg-blue-600 h-9 md:h-12 lg:h-13 text-sm md:text-base lg:text-lg">
              MyZoiko{" "}
              <span>
                <select className="bg-transparent text-white text-sm md:text-base lg:text-lg justify-center"></select>
              </span>
            </button>
          </Link>

          {/* Hamburger Button with Animation */}
          <button
            id="hamburger-button"
            className="flex flex-col text-black rounded-xl gap-1.5 min-[1150px]:hidden w-8 h-8 md:w-12 md:h-12 justify-center items-center relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {/* Top Line */}
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            {/* Middle Line */}
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            {/* Bottom Line */}
            <span
              className={`block h-0.5 w-6 bg-gray-600 transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div
          id="mobile-menu"
          className={`absolute top-full left-0 w-full min-[1150px]:hidden z-50 transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="space-y-4 text-md bg-white p-6 text-gray-700 shadow-lg border-t border-gray-200">
            <li
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-900 cursor-pointer transition-colors py-2 border-b border-gray-100"
            >
              <Link href="/home-broadband">Home Broadband</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-900 cursor-pointer transition-colors py-2 border-b border-gray-100"
            >
              <Link href="/business-broadband">Business Broadband</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-900 cursor-pointer transition-colors py-2 border-b border-gray-100"
            >
              <Link href="/smart-bundles">Smart Bundles</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-900 cursor-pointer transition-colors py-2 border-b border-gray-100"
            >
              <Link href="/digital-lines">Digital Lines</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-900 cursor-pointer transition-colors py-2 border-b border-gray-100"
            >
              <Link href="/all-plans">All Plans</Link>
            </li>
            <li
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-900 cursor-pointer transition-colors py-2"
            >
              <Link href="/why-zoiko">Why Zoiko</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
