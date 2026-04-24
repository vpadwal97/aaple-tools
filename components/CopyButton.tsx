// "use client";

// import { useState } from "react";

// type Props = {
//   text: string;
//   children?: React.ReactNode;
// };

// export default function CopyButton({ text, children }: Props) {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = async () => {
//     if (!text) return;

//     try {
//       await navigator.clipboard.writeText(text);
//     } catch {
//       const textarea = document.createElement("textarea");
//       textarea.value = text;
//       document.body.appendChild(textarea);
//       textarea.select();
//       document.execCommand("copy");
//       document.body.removeChild(textarea);
//     }

//     setCopied(true);
//     setTimeout(() => setCopied(false), 1500);
//   };
//   if (!text) return null;

//   return (
//     <button
//       onClick={handleCopy}
//       disabled={!text}
//       className="p-2 cursor-pointer"
//     >
//       {copied ? "Copied!" : children || "Copy"}
//     </button>
//   );
// }

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
      className="p-2 cursor-pointer
        rounded-md
        text-gray-400 hover:text-gray-200
        hover:bg-white/10
        transition
        group
      "
      aria-label="Copy"
    >
      {copied ? (
        // Check icon (copied state)
        <svg
          className="w-4 h-4 text-green-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ) : (
        // Copy icon (ChatGPT-like)
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
      )}

      {/* Tooltip like ChatGPT */}
      <span
        className="
          absolute -top-8 scale-0 group-hover:scale-100
          transition bg-black text-white text-xs px-2 py-1 rounded
          whitespace-nowrap
        "
      >
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
