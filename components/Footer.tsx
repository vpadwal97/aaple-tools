import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 20px",
        marginTop: "60px",
        borderTop: "1px solid #1e293b",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "30px",
        }}
      >
        {/* Brand Section */}
        <div>
          <h2 style={{ marginBottom: "10px" }}>Aaple Tools</h2>
          <p style={{ fontSize: "14px" }}>
            Free online tools for developers and daily productivity.
          </p>
        </div>

        {/* Links */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 style={{ marginBottom: "10px" }}>{section.title}</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {section.links.map((link) => (
                <li key={link.name} style={{ marginBottom: "8px" }}>
                  <Link
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid #1e293b",
          marginTop: "30px",
          paddingTop: "15px",
          textAlign: "center",
          fontSize: "13px",
        }}
      >
        © {new Date().getFullYear()} Aaple Tools. All rights reserved.
      </div>
    </footer>
  );
}
