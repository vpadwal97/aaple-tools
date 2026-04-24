import { AllTools } from "@/app/constant/varaiables";
import ToolsList from "@/components/ToolsList";
import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import UrlEncoder from "@/components/clientComponents/tools/UrlEncoder";
import { toolSeo } from "@/lib/toolSeo";

export const metadata = {
  title: "URL Encoder & Decoder Online Free | Encode URLs Instantly",
  description:
    "Encode and decode URLs instantly using this free online URL encoder and decoder tool.",
};
const seo = toolSeo["url-encoder"];

export default function Page() {
  return (
    <>
      <ToolWrapper seo={seo}>
        <UrlEncoder />
      </ToolWrapper>
      <aside className="sidebar mt-8 max-w-screen-xl">
        <h3 className="text-lg font-semibold mb-2">Try Other Useful Tools</h3>
        <ToolsList tools={AllTools} />
      </aside>
    </>
  );
}
