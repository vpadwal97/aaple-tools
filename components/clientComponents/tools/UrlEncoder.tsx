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
    <div style={{ marginTop: "10px" }}>
      {/* Input */}
      <textarea
        placeholder="Enter text or URL..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          padding: "10px",
        }}
      />

      {/* Actions */}
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button onClick={handleEncode}>Encode</button>
        <button onClick={handleDecode}>Decode</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      {/* Output */}
      {output && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Output:</strong>
          </p>

          <textarea
            value={output}
            readOnly
            style={{
              width: "100%",
              height: "120px",
              padding: "10px",
            }}
          />

          <div style={{ marginTop: "10px" }}>
            <CopyButton text={output}>Copy Output</CopyButton>
          </div>
        </div>
      )}
    </div>
  );
}
