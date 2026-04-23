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
      className="p-2 cursor-pointer"
    >
      {copied ? "Copied!" : children || "Copy"}
    </button>
  );
}
