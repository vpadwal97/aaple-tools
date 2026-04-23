import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import WordCounter from "@/components/clientComponents/tools/WordCounter";

export const metadata = {
  title: "Word Counter Online Free | Count Words, Characters Instantly",
  description:
    "Count words, characters, sentences, and reading time instantly with this free online word counter tool.",
};

export default function Page() {
  return (
    <ToolWrapper
      title="Word Counter"
      description="Count words, characters, and sentences instantly using this simple tool."
    >
      <WordCounter />
      <hr className="my-3" />

      <h2>What is a Word Counter?</h2>
      <p>
        A word counter helps you count words, characters, and sentences in your
        text.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Real-time counting</li>
        <li>Character tracking</li>
        <li>Reading time estimation</li>
      </ul>
    </ToolWrapper>
  );
}
