import ToolWrapper from "@/components/clientComponents/tools/ToolWrapper";
import SlugGenerator from "@/components/clientComponents/tools/slug-generator";
import { toolSeo } from "@/lib/toolSeo";

const seo = toolSeo["slug-generator"];

export const metadata = {
  title: "Slug Generator Online Free | SEO Friendly URL Generator",
  description:
    "Generate SEO-friendly slugs instantly. Convert text into clean URLs with this free online slug generator.",
};

export default function Page() {
  return (
    <>
      <ToolWrapper seo={seo}>
        <SlugGenerator />
      </ToolWrapper>
    </>
  );
}
