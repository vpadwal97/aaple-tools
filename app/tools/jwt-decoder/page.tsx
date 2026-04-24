import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import JwtDecoder from "@/components/clientComponents/tools/JwtDecoder";
import { toolSeo } from "@/lib/toolSeo";

export const metadata = {
  title: "JWT Decoder Online Free | Decode JSON Web Tokens Instantly",
  description:
    "Decode JWT tokens and view header and payload instantly using this free online JWT decoder.",
};

const seo = toolSeo["jwt-decoder"];

export default function Page() {
  return (
    <ToolWrapper seo={seo}>
      <JwtDecoder />
      <hr className="my-3" />

      <h2>What is JWT?</h2>
      <p>
        JWT (JSON Web Token) is used for secure data transmission between
        systems.
      </p>

      <h2>What Can You Do?</h2>
      <ul>
        <li>Decode header</li>
        <li>Inspect payload</li>
        <li>Debug authentication</li>
      </ul>
    </ToolWrapper>
  );
}
