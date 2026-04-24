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
    <ToolWrapper seo={seo}>
      <TextCompare />
      <hr className="my-3" />

      <h2>What is Text Comparison?</h2>
      <p>Text comparison helps identify differences between two texts.</p>

      <h2>Use Cases</h2>
      <ul>
        <li>Code comparison</li>
        <li>Document changes</li>
        <li>Content editing</li>
      </ul>
    </ToolWrapper>
  );
}
