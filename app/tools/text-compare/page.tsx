import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import TextCompare from "@/components/clientComponents/tools/TextCompare";

export const metadata = {
  title: "Text Compare Tool - Free Online Diff Checker",
  description:
    "Compare two texts and highlight differences instantly using this free tool.",
};

export default function Page() {
  return (
    <ToolWrapper
      title="Text Compare Tool"
      description="Compare two texts and easily find added and removed words."
    >
      <TextCompare />
    </ToolWrapper>
  );
}
