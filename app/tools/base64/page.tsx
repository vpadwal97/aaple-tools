import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import Base64Tool from "@/components/clientComponents/tools/Base64Tool";

export const metadata = {
  title: "Base64 Encoder & Decoder Online Free | Encode & Decode Instantly",
  description:
    "Encode and decode Base64 strings instantly using this free online Base64 tool.",
};

export default function Page() {
  return (
    <ToolWrapper
      title="Base64 Encoder / Decoder"
      description="Convert text to Base64 and decode Base64 back to text instantly."
    >
      <Base64Tool />
      <hr className="my-3" />

      <h2>What is Base64 Encoding?</h2>
      <p>Base64 encoding converts binary data into text format.</p>

      <h2>Why Use It?</h2>
      <ul>
        <li>Data transmission</li>
        <li>API usage</li>
        <li>Encoding binary data</li>
      </ul>
    </ToolWrapper>
  );
}
