export default function ToolWrapper({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>

      <div className="mt-6">{children}</div>

      <div className="mt-3.5">
        <h2>How to Use</h2>
        <ul>
          <li>Enter your input</li>
          <li>Click the button</li>
          <li>Get result instantly</li>
        </ul>
      </div>
    </main>
  );
}
