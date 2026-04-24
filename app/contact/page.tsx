export const metadata = {
  title: "Contact Us - Aaple Tools",
  description:
    "Contact Aaple Tools for support, feedback, or suggestions. We usually respond within 24–48 hours.",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Contact Us
      </h1>

      <p className="mt-3 text-gray-600 dark:text-gray-400">
        Have a question, suggestion, or found a bug? We'd love to hear from you.
      </p>

      {/* Contact Card */}
      <div className="mt-6 border rounded-xl p-5 bg-white dark:bg-gray-900 shadow-sm">
        <p className="text-gray-700 dark:text-gray-300">
          📧 Email us directly:
        </p>

        <p className="mt-2 font-medium text-lg text-blue-600">
          amcharajya@gmail.com
        </p>

        <p className="mt-3 text-sm text-gray-500">
          We usually respond within <strong>24–48 hours</strong>.
        </p>
      </div>

      {/* Extra Trust Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Why Contact Us?
        </h2>

        <ul className="list-disc ml-5 mt-2 text-gray-600 dark:text-gray-400">
          <li>Report bugs or issues</li>
          <li>Suggest new tools</li>
          <li>Request feature improvements</li>
        </ul>
      </div>
    </div>
  );
}
