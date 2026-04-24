export const metadata = {
  title: "About Us - Aaple Tools",
  description:
    "Learn about Aaple Tools, our mission, and how we build fast, free, and privacy-focused online tools.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        About Aaple Tools
      </h1>

      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Aaple Tools is a collection of simple, fast, and free online tools
        designed for developers and everyday users.
      </p>

      <p className="mt-2 text-gray-600 dark:text-gray-400">
        From JSON formatting to text comparison and encoding tools, everything
        is built to save time and improve productivity.
      </p>

      {/* Mission Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Our Mission
        </h2>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Our goal is to create useful tools that are fast, easy to use, and
          accessible to everyone — without unnecessary complexity.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Why Aaple Tools?
        </h2>

        <ul className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-400">
          <li>⚡ Fast and lightweight tools</li>
          <li>🔒 Privacy-first (runs in your browser)</li>
          <li>🆓 Completely free to use</li>
          <li>🎯 Focused on simplicity and usability</li>
        </ul>
      </div>

      {/* Trust Section */}
      <div className="mt-8 border-t pt-6 text-sm text-gray-500">
        <p>
          Most tools on this site run entirely in your browser, ensuring your
          data stays private and is not stored anywhere.
        </p>
      </div>
    </div>
  );
}
