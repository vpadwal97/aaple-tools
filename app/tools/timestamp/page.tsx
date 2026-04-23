import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import TimestampConverter from "@/components/clientComponents/tools/TimestampConverter";

export const metadata = {
  title: "Timestamp Converter - Free Online Tool",
  description:
    "Convert Unix timestamps to readable dates and vice versa instantly.",
};

export default function Page() {
  return (
    <ToolWrapper
      title="Timestamp Converter"
      description="Convert Unix timestamps into readable dates and convert dates back into timestamps instantly."
    >
      <TimestampConverter />
    </ToolWrapper>
  );
}
