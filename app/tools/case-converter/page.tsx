import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import CaseConverter from "@/components/clientComponents/tools/CaseConverter";

export const metadata = {
  title: "Case Converter - Free Online Tool",
  description:
    "Convert text to uppercase, lowercase, camelCase, snake_case and more instantly.",
};

export default function Page() {
  return (
    <ToolWrapper
      title="Case Converter"
      description="Convert your text into different formats like uppercase, lowercase, camelCase, and snake_case."
    >
      <CaseConverter />
    </ToolWrapper>
  );
}
