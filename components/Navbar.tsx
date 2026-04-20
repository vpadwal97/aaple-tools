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
    <nav className="border-b px-6 py-4 flex justify-between items-center">
      <div className="font-bold text-xl">Aaple Tools</div>

      <div className="flex gap-6 text-sm items-center">
        <Link href="/">Home</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>

        {/* Dark Mode Button */}
        <button onClick={toggleTheme} className="px-3 py-1 border rounded">
          {dark ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
