import { AllTools } from "@/app/constant/varaiables";
import ToolsList from "@/components/ToolsList";
import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import JsonFormatterClientPage from "@/components/clientComponents/tools/json-formatter";
import { toolSeo } from "@/lib/toolSeo";

export const metadata = {
  title: "JSON Formatter Online Free | Format & Validate JSON Instantly",
  description:
    "Format, validate, and beautify JSON instantly with this free online JSON formatter. Fast, secure, and easy to use.",
};

const seo = toolSeo["json-formatter"];

export default function JsonFormatterPage() {
  return (
    <>
      <ToolWrapper seo={seo}>
        <JsonFormatterClientPage />
      </ToolWrapper>
      <aside className="sidebar mt-8">
        <h3 className="text-lg font-semibold mb-2">Try Other Useful Tools</h3>
        <ToolsList tools={AllTools} />
      </aside>
    </>
  );
}
