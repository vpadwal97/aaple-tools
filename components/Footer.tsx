import { AllTools } from "@/app/constant/varaiables";
import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="pt-10 px-5 mt-16 border-t border-slate-800">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="mb-2 text-xl font-semibold">Aaple Tools</h2>
          <p className="text-sm">
            Free online tools for developers and daily productivity.
          </p>
        </div>

        {/* Links */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="mb-2 text-lg font-medium">{section.title}</h4>
            <ul className="list-none p-0 m-0">
              {section.links.map((link) => (
                <li key={link.name} className="mb-2">
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 mt-8 py-4 text-center text-xs text-gray-600 dark:text-gray-300">
        © {new Date().getFullYear()} Aaple Tools. All rights reserved.
      </div>
    </footer>
  );
}
