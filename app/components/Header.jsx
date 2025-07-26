// #205a6a as hover effect color
// #0f313d as hover effect for button text
// #EEFCFD as hover effect for button bg

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleUser } from "lucide-react";

const navLinks = [
  {
    title: "RESOURCES",
    link: "/resources",
  },
  {
    title: "PEOPLE",
    link: "/people",
  },
  {
    title: "ABOUT US",
    link: "/about-us",
  },
  {
    title: "IMPACT",
    link: "/feed",
  },
  {
    title: "KNOWLEDGE SYSTEM",
    link: "/feed",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 px-2 flex justify-between items-center xl:py-2">
      {/* Logo */}
      <div className="cursor-pointer flex justify-center items-center">
        <Image
          src="/Bluelog.svg"
          width={100} 
          height={40}
          alt="nav_logo"
          className="transition-all duration-300 hover:scale-105 object-contain"
        />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex">
        <ul className="flex gap-12">
          {navLinks.map((navLink, i) => (
            <li key={i}>
              <Link
                href={navLink.link}
                className="group relative inline-block text-lg font-medium"
              >
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-105">
                  {navLink.title}
                </span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100 bg-[#205a6a] " />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Login */}

      <div className="hidden lg:inline-flex items-center gap-2 cursor-pointer px-7 py-[0.9375rem] rounded-[2rem] hover:bg-[#EEFCFD] hover:text-[#0f313d]  transition-all duration-300 hover:scale-105">
        <CircleUser size={22} />
        <div className="font-medium text-lg">Login</div>
      </div>

      {/* below this section's ui is still being developed  */}
      {/* Hamburger for mobile */}
      <div
        className="lg:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#0F313D] z-10 px-5 pb-4 lg:hidden transition-all">
          <ul className="flex flex-col gap-4">
            {navLinks.map((navLink, i) => (
              <li key={i}>
                <Link
                  href={navLink.link}
                  className="block text-lg font-medium py-2 border-b border-white/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
            <li className="flex gap-2 items-center mt-2 cursor-pointer">
              <CircleUser size={20} />
              <div className="font-medium text-lg">LOGIN</div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
