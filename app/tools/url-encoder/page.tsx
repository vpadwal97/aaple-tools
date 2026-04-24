import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import UrlEncoder from "@/components/clientComponents/tools/UrlEncoder";
import { toolSeo } from "@/lib/toolSeo";

export const metadata = {
  title: "URL Encoder & Decoder Online Free | Encode URLs Instantly",
  description:
    "Encode and decode URLs instantly using this free online URL encoder and decoder tool.",
};
const seo = toolSeo["url-encoder"];

export default function Page() {
  return (
    <ToolWrapper seo={seo}>
      <UrlEncoder />
      <hr className="my-3" />

      <h2>What is URL Encoding?</h2>
      <p>
        URL encoding converts special characters into a format safe for URLs.
      </p>

      <h2>Use Cases</h2>
      <ul>
        <li>Query parameters</li>
        <li>API requests</li>
        <li>Web development</li>
      </ul>
    </ToolWrapper>
  );
}
