import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import CaseConverter from "@/components/clientComponents/tools/CaseConverter";
import { toolSeo } from "@/lib/toolSeo";
import ToolsList from "@/components/ToolsList";
import { AllTools } from "@/app/constant/varaiables";

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
      <aside className="sidebar mt-8 max-w-screen-xl">
        <h3 className="text-lg font-semibold mb-2">Try Other Useful Tools</h3>
        <ToolsList tools={AllTools} />
      </aside>
    </>
  );
}
