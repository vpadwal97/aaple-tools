import Link from "next/link";
import { AllTools } from "../constant/varaiables";
import React from "react";

export const metadata = {
  title: "All Tools - Aaple Tools",
  description:
    "Explore all free developer and utility tools like JSON formatter, Base64 encoder, and more.",
};

export default function ToolsPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>All Tools</h1>
      <p>Explore all available and upcoming tools.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {AllTools?.map((tool, index) =>
          tool.comingSoon ? (
            <React.Fragment key={index}>
              {/* <h2>Available Tools</h2> */}
              {/* map tools without comingSoon */}
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  padding: "16px",
                  borderRadius: "8px",
                }}
              >
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>

                {tool.path === "#" ? (
                  <span style={{ color: "gray" }}>Coming Soon</span>
                ) : (
                  <Link href={tool.path}>Open Tool →</Link>
                )}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>
              {/* <h2 style={{ marginTop: "30px" }}>Coming Soon</h2> */}
              {/* map tools with comingSoon */}
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  padding: "16px",
                  borderRadius: "8px",
                }}
              >
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>

                {tool.path === "#" ? (
                  <span style={{ color: "gray" }}>Coming Soon</span>
                ) : (
                  <Link href={tool.path}>Open Tool →</Link>
                )}
              </div>
            </React.Fragment>
          )
        )}
      </div>
    </main>
  );
}
