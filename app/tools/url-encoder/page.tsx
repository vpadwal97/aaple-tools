import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import UrlEncoder from "@/components/clientComponents/tools/UrlEncoder";

export const metadata = {
  title: "URL Encoder & Decoder - Free Online Tool",
  description: "Encode and decode URLs instantly using this free online tool.",
};

export default function Page() {
  return (
    <ToolWrapper
      title="URL Encoder / Decoder"
      description="Convert text into URL-safe format and decode it back instantly."
    >
      <UrlEncoder />
    </ToolWrapper>
  );
}
