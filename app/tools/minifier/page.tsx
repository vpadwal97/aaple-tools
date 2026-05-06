import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import MinifierTool from "@/components/clientComponents/tools/minifier";
import { toolSeo } from "@/lib/toolSeo";

const seo = toolSeo["minifier"];

export const metadata = {
  title: "Minify & Beautify HTML CSS JS Online Free",
  description:
    "Minify and beautify HTML, CSS, and JavaScript code instantly with this free tool.",
};

export default function Page() {
  return (
    <ToolWrapper seo={seo}>
      <MinifierTool />
    </ToolWrapper>
  );
}
