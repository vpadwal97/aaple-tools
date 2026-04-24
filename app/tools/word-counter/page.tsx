import { AllTools } from "@/app/constant/varaiables";
import ToolsList from "@/components/ToolsList";
import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import WordCounter from "@/components/clientComponents/tools/WordCounter";
import { toolSeo } from "@/lib/toolSeo";

export const metadata = {
  title: "Word Counter Online Free | Count Words, Characters Instantly",
  description:
    "Count words, characters, sentences, and reading time instantly with this free online word counter tool.",
};
const seo = toolSeo["word-counter"];

export default function Page() {
  return (
    <>
      <ToolWrapper seo={seo}>
        <WordCounter />
      </ToolWrapper>
      <aside className="sidebar mt-8 max-w-screen-xl">
        <h3 className="text-lg font-semibold mb-2">Try Other Useful Tools</h3>
        <ToolsList tools={AllTools} />
      </aside>
    </>
  );
}
