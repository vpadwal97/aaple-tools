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
    <main style={{ padding: "20px" }}>
      <h1>{title}</h1>
      <p>{description}</p>

      <div style={{ marginTop: "10px" }}>{children}</div>

      <div style={{ marginTop: "20px" }}>
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
