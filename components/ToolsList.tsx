"use client";

import { AllTools } from "@/app/constant/varaiables";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
};

export default function ToolsList({ className }: Props) {
  const pathname = usePathname();

  const relatedTools = AllTools.filter(
    (tool) => tool.path !== pathname && !tool.comingSoon && tool.path !== "#"
  );

  return (
    <>
      <aside className="sidebar mt-8 max-w-screen-xl">
        <h3 className="text-lg font-semibold mb-2">Try Other Useful Tools</h3>

        <ul className={className ?? "flex flex-wrap gap-2"}>
          {relatedTools.map((tool) => (
            <li key={tool.path}>
              <Link
                href={tool.path}
                title={`Use ${tool.name} tool`}
                className="px-3 py-1 border rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {tool.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
