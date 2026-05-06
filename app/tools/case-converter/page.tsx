import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import CaseConverter from "@/components/clientComponents/tools/CaseConverter";
import { toolSeo } from "@/lib/toolSeo";

export const metadata = {
  title: "Case Converter Online Free | Uppercase, Lowercase, CamelCase",
  description:
    "Convert text to uppercase, lowercase, camelCase, snake_case and more instantly with this free tool.",
};
const seo = toolSeo["case-converter"];

export default function Page() {
  return (
    <>
      <ToolWrapper seo={seo}>
        <CaseConverter />
      </ToolWrapper>
    </>
  );
}
