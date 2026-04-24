import Link from "next/link";

type Tool = {
  name: string;
  path: string;
  comingSoon?: boolean;
};

type Props = {
  tools: Tool[];
  className?: string;
};

export default function ToolsList({ tools, className }: Props) {
  const filteredTools = tools?.filter(
    (tool) => !tool.comingSoon && tool.path !== "#"
  );

  return (
    <>
      <ul className={className ?? "flex flex-wrap gap-2"}>
        {filteredTools.map((tool) => (
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
    </>
  );
}
