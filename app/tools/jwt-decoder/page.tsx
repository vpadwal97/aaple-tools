import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import JwtDecoder from "@/components/clientComponents/tools/JwtDecoder";
import { toolSeo } from "@/lib/toolSeo";
import ToolsList from "@/components/ToolsList";
import { AllTools } from "@/app/constant/varaiables";

export const metadata = {
  title: "JWT Decoder Online Free | Decode JSON Web Tokens Instantly",
  description:
    "Decode JWT tokens and view header and payload instantly using this free online JWT decoder.",
};

const seo = toolSeo["jwt-decoder"];

export default function Page() {
  return (
    <>
      <ToolWrapper seo={seo}>
        <JwtDecoder />
      </ToolWrapper>
      <aside className="sidebar mt-8 max-w-screen-xl">
        <h3 className="text-lg font-semibold mb-2">Try Other Useful Tools</h3>
        <ToolsList tools={AllTools} />
      </aside>
    </>
  );
}
