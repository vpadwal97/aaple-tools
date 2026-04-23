import Link from "next/link";
import { AllTools } from "../constant/varaiables";
import React from "react";

export const metadata = {
  title: "All Tools - Aaple Tools",
  description:
    "Explore all free developer and utility tools like JSON formatter, Base64 encoder, and more.",
};

export default function ToolsPage() {
  return (
    <main className="p-4">
      <h1>All Tools</h1>
      <p>Explore all available and upcoming tools.</p>

      <div className="grid gap-4 mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {AllTools?.map((tool, index) =>
          tool.comingSoon ? (
            <React.Fragment key={index}>
              {/* <h2>Available Tools</h2> */}
              {/* map tools without comingSoon */}
              <div
                key={index}
                className="
  border border-gray-300 dark:border-gray-700
  p-4 rounded-lg
  transition-all duration-200 ease-in-out
  hover:scale-105
  hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10
"
              >
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>

                {tool.path === "#" ? (
                  <span className="text-gray-800 dark:text-gray-400">
                    Coming Soon
                  </span>
                ) : (
                  <Link href={tool.path}>Open Tool →</Link>
                )}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>
              <div
                key={index}
                className="
  border border-gray-300 dark:border-gray-700
  p-4 rounded-lg
  transition-all duration-200 ease-in-out
  hover:scale-105
  hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10
"
              >
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>

                {tool.path === "#" ? (
                  <span className="text-gray-600 dark:text-gray-400">
                    Coming Soon
                  </span>
                ) : (
                  <Link href={tool.path}>Open Tool →</Link>
                )}
              </div>
            </React.Fragment>
          )
        )}
      </div>
    </main>
  );
}
