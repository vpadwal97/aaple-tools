import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import RegexTester from "@/components/clientComponents/tools/regex-tester";
import { toolSeo } from "@/lib/toolSeo";

const seo = toolSeo["regex-tester"];

export const metadata = {
  title: "Regex Tester Online Free | Test Regular Expressions",
  description:
    "Test and debug regex patterns instantly using this free online regex tester.",
};

export default function Page() {
  return (
    <ToolWrapper seo={seo}>
      <RegexTester />
    </ToolWrapper>
  );
}
