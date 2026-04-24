import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import TextCompare from "@/components/clientComponents/tools/TextCompare";
import { toolSeo } from "@/lib/toolSeo";
import ToolsList from "@/components/ToolsList";
import { AllTools } from "@/app/constant/varaiables";

export const metadata = {
  title: "Text Compare Tool Online Free | Find Differences Instantly",
  description:
    "Compare two texts and highlight differences instantly using this free online text comparison tool.",
};
const seo = toolSeo["text-compare"];

export default function Page() {
  return (
    <>
      <ToolWrapper seo={seo}>
        <TextCompare />
      </ToolWrapper>
      <aside className="sidebar mt-8 max-w-screen-xl">
        <h3 className="text-lg font-semibold mb-2">Try Other Useful Tools</h3>
        <ToolsList tools={AllTools} />
      </aside>
    </>
  );
}
