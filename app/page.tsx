import Link from "next/link";
import { AllTools } from "./constant/varaiables";

// const tools = [
//   { name: "JSON Formatter", path: "/tools/json-formatter" },
//   { name: "Word Counter", path: "/tools/word-counter" },
//   { name: "Case Converter", path: "/tools/case-converter" },
//   { name: "Text Compare", path: "/tools/text-compare" },
//   { name: "Base64 Encoder/Decoder", path: "/tools/base64" },
// ];

export const metadata = {
  title: "Free Online Tools - Aaple Tools",
  description:
    "A collection of free online tools like JSON formatter, word counter, case converter and more.",
};

export default function HomePage() {
  return (
    <>
      <h1>Free Online Tools</h1>
      <p>
        Simple, fast and free tools for developers and daily use. No login
        required.
      </p>

      <div className="grid gap-4 mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {AllTools?.map((tool) =>
          tool.comingSoon ? null : (
            <Link
              key={tool.id}
              href={tool.path}
              className="
  border border-gray-300 dark:border-gray-700
  p-4 rounded-lg
  transition-all duration-200 ease-in-out
  hover:scale-105
  hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10
"
            >
              <h3>{tool.name}</h3>
              <p>Open tool →</p>
            </Link>
          )
        )}
      </div>
    </>
  );
}
