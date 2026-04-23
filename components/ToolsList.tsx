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
    <ul className={className ?? "flex flex-wrap gap-3 p-3"}>
      {filteredTools.map((tool) => (
        <li key={tool.path}>
          <Link href={tool.path} title={tool.name}>
            {tool.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
