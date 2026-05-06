import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import TimestampConverter from "@/components/clientComponents/tools/TimestampConverter";
import { toolSeo } from "@/lib/toolSeo";

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
    </>
  );
}
