'use client';
import React from "react";
import Link from "next/link";

export default function Header() {
      const [isopen, setIsOpen] = React.useState(false);
  return (
    
     <div className="">
      <nav className="relative flex w-full items-center justify-around px-4 md:px-8 lg:px-16">

        {/* Logo */}
      <Link href="/">
        <img
          className="h-14 w-16 md:w-28 md:h-24 lg:h-30 lg:w-36 object-contain"
          src="/ZBLogo.svg"
          alt="logo"
        />
      </Link>
        {/* Desktop Nav Items */}
        <div className="nav-items ">
          <ul className="hidden min-[1150px]:flex items-center gap-10 md:gap-14 bg-gray-200 rounded-full px-6 py-4 md:px-8 md:py-7 md:text-base max-w-fit">
            <li className="hover:text-blue-900 dark:hover:text-blue-500 cursor-pointer">
              Home Broadband
            </li>
            <li className="hover:text-blue-900 dark:hover:text-blue-500 cursor-pointer">
              Business Broadband
            </li>
            <li className="hover:text-blue-900 dark:hover:text-blue-500 cursor-pointer">
              Smart Bundles
            </li>
            <li className="hover:text-blue-900 dark:hover:text-blue-500 cursor-pointer">
              Digital Lines
            </li>
            <li className="hover:text-blue-900 dark:hover:text-blue-500 cursor-pointer">
              All Plans
            </li>
            <li className="hover:text-blue-900 dark:hover:text-blue-500 cursor-pointer">
              Why Zoiko
            </li>
          </ul>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          <button className="bg-[#10446c] text-white px-4 py-2 rounded-md hover:bg-blue-600 h-10 md:h-12 lg:h-14 text-sm md:text-base lg:text-lg">
            MyZoiko
          </button>

          {/* Hamburger */}
          <button
            id="hamburger-button"
            className="flex flex-col gap-1 min-[1150px]:hidden"
            onClick={() => setIsOpen(!isopen)}
          >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`absolute top-full left-0 w-full ${
            isopen ? 'block' : 'hidden'
          } lg:hidden z-50`}
        >
          <ul className="space-y-4 text-md bg-white p-4 text-black-600 dark:text-gray-300">
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-900 cursor-pointer">
              Home Broadband
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-900 cursor-pointer">
              Business Broadband
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-900 cursor-pointer">
              Smart Bundles
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-900 cursor-pointer">
              Digital Lines
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-900 cursor-pointer">
              All Plans
            </li>
            <li onClick={() => setIsOpen(false)} className="hover:text-blue-900 cursor-pointer">
              Why Zoiko
            </li>
          </ul>
        </div>
      </nav>

     
    </div>
  )
}
