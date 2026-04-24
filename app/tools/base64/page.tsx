import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import Base64Tool from "@/components/clientComponents/tools/Base64Tool";
import { toolSeo } from "@/lib/toolSeo";

export const metadata = {
  title: "Base64 Encoder & Decoder Online Free | Encode & Decode Instantly",
  description:
    "Encode and decode Base64 strings instantly using this free online Base64 tool.",
};
const seo = toolSeo["base64"];

export default function Page() {
  return (
    <ToolWrapper seo={seo}>
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
