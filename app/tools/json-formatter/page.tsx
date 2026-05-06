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
    </>
  );
}
