import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import JsonFormatterClientPage from "@/components/clientComponents/tools/json-formatter";

export const metadata = {
  title: "JSON Formatter Online Free | Format & Validate JSON Instantly",
  description:
    "Use this free JSON formatter to format, validate, and beautify JSON instantly. Fast, secure, and browser-based.",
};

export default function JsonFormatterPage() {
  return (
    <ToolWrapper
      title="JSON Formatter"
      description="Format and validate your JSON data instantly using this free online tool."
    >
      <JsonFormatterClientPage />
    </ToolWrapper>
  );
}
