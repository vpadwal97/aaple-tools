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
    </>
  );
}
