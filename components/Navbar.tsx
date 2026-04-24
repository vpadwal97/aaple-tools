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
            className="px-3 py-1 border border-gray-300 dark:border-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {dark ? "🌙" : "☀️"}
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
            onClick={() => {
              toggleTheme();
              setOpen(false);
            }}
            className="mt-2 px-3 py-1 border border-gray-300 dark:border-gray-700 rounded"
          >
            {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
