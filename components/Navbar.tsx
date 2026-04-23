"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  // Load theme on first render
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
    <nav className="sticky top-0 z-2 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-900">
      <div className="font-bold text-xl text-gray-900 dark:text-white">
        Aaple Tools
      </div>

      <div className="flex gap-6 text-sm items-center text-gray-700 dark:text-gray-300">
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
    </nav>
  );
}
