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
    <main>
      <h1>Free Online Tools</h1>
      <p>
        Simple, fast and free tools for developers and daily use. No login
        required.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {AllTools?.map((tool) =>
          tool.comingSoon ? null : (
            <Link
              key={tool.id}
              href={tool.path}
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                borderRadius: "8px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <h3>{tool.name}</h3>
              <p>Open tool →</p>
            </Link>
          )
        )}
      </div>
    </main>
  );
}
