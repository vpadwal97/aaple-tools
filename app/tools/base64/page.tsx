import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import Base64Tool from "@/components/clientComponents/tools/Base64Tool";
import { toolSeo } from "@/lib/toolSeo";
import ToolsList from "@/components/ToolsList";
import { AllTools } from "@/app/constant/varaiables";

export const metadata = {
  title: "Base64 Encoder & Decoder Online Free | Encode & Decode Instantly",
  description:
    "Encode and decode Base64 strings instantly using this free online Base64 tool.",
};
const seo = toolSeo["base64"];

export default function Page() {
  return (
    <>
      <ToolWrapper seo={seo}>
        <Base64Tool />
      </ToolWrapper>
      <aside className="sidebar mt-8 max-w-screen-xl">
        <h3 className="text-lg font-semibold mb-2">Try Other Useful Tools</h3>
        <ToolsList tools={AllTools} />
      </aside>
    </>
  );
}
