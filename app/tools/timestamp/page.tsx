import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import TimestampConverter from "@/components/clientComponents/tools/TimestampConverter";
import { toolSeo } from "@/lib/toolSeo";
import ToolsList from "@/components/ToolsList";
import { AllTools } from "@/app/constant/varaiables";

export const metadata = {
  title: "Timestamp Converter Online Free | Unix to Date Converter",
  description:
    "Convert Unix timestamps to readable dates and vice versa instantly using this free tool.",
};
const seo = toolSeo["timestamp"];

export default function Page() {
  return (
    <>
      <ToolWrapper seo={seo}>
        <TimestampConverter />
      </ToolWrapper>
      <aside className="sidebar mt-8 max-w-screen-xl">
        <h3 className="text-lg font-semibold mb-2">Try Other Useful Tools</h3>
        <ToolsList tools={AllTools} />
      </aside>
    </>
  );
}
