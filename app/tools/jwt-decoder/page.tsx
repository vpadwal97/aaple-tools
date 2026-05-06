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
    <>
      <ToolWrapper seo={seo}>
        <JwtDecoder />
      </ToolWrapper>
    </>
  );
}
