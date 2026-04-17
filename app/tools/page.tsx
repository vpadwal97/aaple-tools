import Link from "next/link";

const tools = [
  {
    name: "JSON Formatter",
    path: "/tools/json-formatter",
    description: "Format and validate JSON data easily.",
  },
  {
    name: "Word Counter",
    path: "/tools/word-counter",
    description: "Count words, characters and sentences instantly.",
  },
  {
    name: "Case Converter",
    path: "/tools/case-converter",
    description: "Convert text to uppercase, lowercase and more.",
  },
  {
    name: "Text Compare",
    path: "/tools/text-compare",
    description: "Compare two texts and find differences.",
  },
  {
    name: "Base64 Tool",
    path: "/tools/base64",
    description: "Encode and decode Base64 strings.",
  },

  // Future tools (keep them visible for now)
  {
    name: "API Response Tester",
    path: "#",
    description: "Test API responses quickly (coming soon).",
  },
  {
    name: "Webhook Tester",
    path: "#",
    description: "Test and debug webhooks (coming soon).",
  },
  {
    name: "Image Optimizer",
    path: "#",
    description: "Compress and optimize images (coming soon).",
  },
];

export const metadata = {
  title: "All Tools - Aaple Tools",
  description:
    "Explore all free developer and utility tools like JSON formatter, Base64 encoder, and more.",
};

export default function ToolsPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>All Tools</h1>
      <p>Explore all available and upcoming tools.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {tools.map((tool, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>

            {tool.path === "#" ? (
              <span style={{ color: "gray" }}>Coming Soon</span>
            ) : (
              <Link href={tool.path}>Open Tool →</Link>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
