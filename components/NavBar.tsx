"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-5">
        
        {/* LEFT MENU */}
        <div className="flex flex-1 items-center justify-end gap-8 text-[18px] tracking-wide text-gray-800">
          <a href="#home" className="group relative font-medium text-gray-800 transition duration-300 hover:text-black hover:font-semibold">
            Home
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C6A96B] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#about" className="group relative font-medium text-gray-800 transition duration-300 hover:text-black hover:font-semibold">
            About
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C6A96B] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* CENTER LOGO */}
        <div className="mx-6 flex shrink-0 justify-center">
          <a href="#home">
            <img
              src="/logo.png"
              alt="BearHauz Logo"
              className="h-20 cursor-pointer object-contain transition duration-300 hover:scale-105"
            />
          </a>
        </div>

        {/* RIGHT MENU */}
        <div className="flex flex-1 items-center justify-start gap-8 text-[18px] tracking-wide text-gray-800">
          <a href="#projects" className="group relative font-medium text-gray-800 transition duration-300 hover:text-black hover:font-semibold">
            Projects
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C6A96B] transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#contact" className="group relative font-medium text-gray-800 transition duration-300 hover:text-black hover:font-semibold">
            Contact
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C6A96B] transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

      </div>
    </nav>
  );
}