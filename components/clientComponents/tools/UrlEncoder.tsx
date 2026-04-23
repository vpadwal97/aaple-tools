"use client";

import { useState } from "react";
import { encodeURL, decodeURL } from "@/lib/urlEncoder";
import CopyButton from "@/components/CopyButton";

export default function UrlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleEncode = () => {
    setOutput(encodeURL(input));
  };

  const handleDecode = () => {
    setOutput(decodeURL(input));
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="mt-2.5">
      {/* Input */}
      <textarea
        placeholder="Enter text or URL..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-36 p-2.5"
      />

      {/* Actions */}
      <div className="mt-2.5 flex gap-2.5">
        <button onClick={handleEncode}>Encode</button>
        <button onClick={handleDecode}>Decode</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      {/* Output */}
      {output && (
        <div className="mt-3.5">
          <p>
            <strong>Output:</strong>
          </p>

          <textarea value={output} readOnly className="w-full h-36 p-2.5" />

          <div className="mt-2.5">
            <CopyButton text={output}>Copy Output</CopyButton>
          </div>
        </div>
      )}
    </div>
  );
}
