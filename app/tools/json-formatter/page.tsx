import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import JsonFormatterClientPage from "@/components/clientComponents/tools/json-formatter";

export const metadata = {
  title: "JSON Formatter - Free Online Tool",
  description: "Format and validate JSON instantly with this free tool.",
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
