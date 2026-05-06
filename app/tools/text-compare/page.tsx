import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import TextCompare from "@/components/clientComponents/tools/TextCompare";
import { toolSeo } from "@/lib/toolSeo";

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
    </>
  );
}
