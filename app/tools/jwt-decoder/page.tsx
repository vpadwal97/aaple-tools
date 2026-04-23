import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import JwtDecoder from "@/components/clientComponents/tools/JwtDecoder";

export const metadata = {
  title: "JWT Decoder - Free Online Tool",
  description:
    "Decode JWT tokens and view header and payload instantly with this free tool.",
};

export default function Page() {
  return (
    <ToolWrapper
      title="JWT Decoder"
      description="Decode JWT tokens and inspect header and payload easily."
    >
      <JwtDecoder />
    </ToolWrapper>
  );
}
