// /app/terms/page.tsx

export const metadata = {
  title: "Terms & Conditions - Aaple Tools",
  description: "Terms and conditions for using Aaple Tools.",
};

export default function TermsPage() {
  return (
    <main className="p-4">
      <h1>Terms & Conditions</h1>

      <p>
        By using this website, you agree to use the tools for lawful purposes
        only.
      </p>

      <h2>Usage</h2>
      <p>
        All tools are provided "as is" without any guarantees of accuracy or
        reliability.
      </p>

      <h2>Liability</h2>
      <p>
        We are not responsible for any loss or damage resulting from the use of
        our tools.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms at any time without prior notice.</p>
    </main>
  );
}
