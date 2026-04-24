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
    <ToolWrapper seo={seo}>
      <TimestampConverter />
      <hr className="my-3" />

      <h2>What is a Timestamp?</h2>
      <p>A timestamp represents a specific point in time.</p>

      <h2>Features</h2>
      <ul>
        <li>Unix to date conversion</li>
        <li>Date to Unix conversion</li>
        <li>Instant results</li>
      </ul>
    </ToolWrapper>
  );
}
