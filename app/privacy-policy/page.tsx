// /app/privacy-policy/page.tsx

export const metadata = {
  title: "Privacy Policy - Aaple Tools",
  description: "Privacy policy for Aaple Tools.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>

      <p>
        Your privacy is important to us. This website does not collect any
        personal data directly. We do not store any user input from our tools.
      </p>

      <h2>Information Usage</h2>
      <p>
        All tools run in your browser. We do not store or process your data on
        our servers.
      </p>

      <h2>Cookies</h2>
      <p>We may use cookies for basic functionality and analytics.</p>

      <h2>Third-party Services</h2>
      <p>
        We may use services like Google AdSense in the future, which may use
        cookies to show relevant ads.
      </p>

      <h2>Contact</h2>
      <p>For any privacy-related concerns, contact us via the Contact page.</p>
    </>
  );
}
