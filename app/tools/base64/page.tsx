import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import Base64Tool from "@/components/clientComponents/tools/Base64Tool";

export const metadata = {
  title: "Base64 Encoder & Decoder - Free Tool",
  description:
    "Encode and decode Base64 strings instantly using this free online tool.",
};

export default function Page() {
  return (
    <ToolWrapper
      title="Base64 Encoder / Decoder"
      description="Convert text to Base64 and decode Base64 back to text instantly."
    >
      <Base64Tool />
    </ToolWrapper>
  );
}
