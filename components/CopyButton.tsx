"use client";

import { useState } from "react";

type Props = {
  text: string;
  children?: React.ReactNode;
};

export default function CopyButton({ text, children }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  if (!text) return null;

  return (
    <button
      onClick={handleCopy}
      disabled={!text}
      style={{
        cursor: text ? "pointer" : "not-allowed",
        border: "1px solid #ddd",
        padding: "6px 12px",
        borderRadius: "6px",
        background: copied ? "#16a34a" : "#fff",
        color: copied ? "#fff" : "#333",
      }}
    >
      {copied ? "Copied!" : children || "Copy"}
    </button>
  );
}
