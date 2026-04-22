import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import WordCounter from "@/components/clientComponents/tools/WordCounter";

export const metadata = {
  title: "Word Counter - Free Online Tool",
  description:
    "Count words, characters, and sentences instantly with this free online word counter.",
};

export default function Page() {
  return (
    <ToolWrapper
      title="Word Counter"
      description="Count words, characters, and sentences instantly using this simple tool."
    >
      <WordCounter />
    </ToolWrapper>
  );
}
