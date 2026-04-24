import { SeoData } from "@/app/constant/types";

export default function ToolWrapper({
  children,
  seo,
}: {
  children: React.ReactNode;
  seo: SeoData;
}) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {seo.title}
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mt-2">{seo.description}</p>

      <div className="mt-6">{children}</div>

      {/* Dynamic How To */}
      {seo.howToUse && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">How to Use</h2>
          <ul className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-400">
            {seo.howToUse.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      )}

      {seo &&
        seo.sections.map((section, index) => (
          <div key={index} className="mt-6">
            <h2 className="text-xl font-semibold">{section.title}</h2>

            {section.type === "text" && (
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {section.content}
              </p>
            )}

            {section.type === "list" && (
              <ul className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-400">
                {section.content?.map((item: string, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      <p className="mt-4 text-sm text-gray-500">
        This tool runs entirely in your browser and does not store your data.
      </p>
      <hr className="my-3" />
    </div>
  );
}
