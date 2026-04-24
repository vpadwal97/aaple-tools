"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl text-gray-900 dark:text-white">
          Aaple Tools
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm items-center text-gray-700 dark:text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <button
            onClick={toggleTheme}
            className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
              dark ? "bg-gray-800" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center text-[10px] transition-transform duration-300 ${
                dark ? "translate-x-7" : "translate-x-0"
              }`}
            >
              {dark ? "🌙" : "☀️"}
            </div>
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-800 dark:text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-gray-700 dark:text-gray-300">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/tools" onClick={() => setOpen(false)}>
            Tools
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
              dark ? "bg-gray-800" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center text-[10px] transition-transform duration-300 ${
                dark ? "translate-x-7" : "translate-x-0"
              }`}
            >
              {dark ? "🌙" : "☀️"}
            </div>
          </button>
        </div>
      )}
    </nav>
  );
}
