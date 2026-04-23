import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import JsonFormatterClientPage from "@/components/clientComponents/tools/json-formatter";

export const metadata = {
  title: "JSON Formatter Online Free | Format & Validate JSON Instantly",
  description:
    "Format, validate, and beautify JSON instantly with this free online JSON formatter. Fast, secure, and easy to use.",
};

export default function JsonFormatterPage() {
  return (
    <>
      <ToolWrapper
        title="JSON Formatter"
        description="Format and validate your JSON data instantly using this free online tool."
      >
        <JsonFormatterClientPage />
        <hr className="my-3" />

        <h2>What is a JSON Formatter?</h2>
        <p>
          A JSON formatter helps you format and validate JSON data into a
          readable structure.
        </p>

        <h2>Why Use This Tool?</h2>
        <ul>
          <li>Instant formatting</li>
          <li>Error detection</li>
          <li>Improves readability</li>
        </ul>
      </ToolWrapper>
    </>
  );
}
