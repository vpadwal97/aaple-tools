import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import CaseConverter from "@/components/clientComponents/tools/CaseConverter";

export const metadata = {
  title: "Case Converter Online Free | Uppercase, Lowercase, CamelCase",
  description:
    "Convert text to uppercase, lowercase, camelCase, snake_case and more instantly with this free tool.",
};

export default function Page() {
  return (
    <ToolWrapper
      title="Case Converter"
      description="Convert your text into different formats like uppercase, lowercase, camelCase, and snake_case."
    >
      <CaseConverter />
      <hr className="my-3" />

      <h2>What is a Case Converter?</h2>
      <p>This tool helps you convert text into different formats quickly.</p>

      <h2>Supported Formats</h2>
      <ul>
        <li>Uppercase</li>
        <li>Lowercase</li>
        <li>CamelCase</li>
        <li>Snake_case</li>
      </ul>
    </ToolWrapper>
  );
}
