import JsonFormatterClientPage from "@/components/clientComponents/tools/json-formatter";

export const metadata = {
  title: "JSON Formatter - Free Online Tool",
  description: "Format and validate JSON instantly with this free tool.",
};

export default function JsonFormatterPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>JSON Formatter</h1>
      <p>
        Format and validate your JSON data instantly using this free online
        tool.
      </p>
      <JsonFormatterClientPage />

      {/* How to use */}
      <div style={{ marginTop: "20px" }}>
        <h2>How to Use</h2>
        <ul>
          <li>Paste your JSON in the input box</li>
          <li>Click "Format JSON"</li>
          <li>Get formatted output instantly</li>
        </ul>
      </div>
    </main>
  );
}
