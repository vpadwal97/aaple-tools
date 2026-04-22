"use client";

import { useState } from "react";
import { encodeBase64, decodeBase64 } from "@/lib/base64";
import CopyButton from "@/components/CopyButton";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleEncode = () => {
    setOutput(encodeBase64(input));
  };

  const handleDecode = () => {
    setOutput(decodeBase64(input));
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div style={{ marginTop: "10px" }}>
      {/* Input */}
      <textarea
        placeholder="Enter text or Base64..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          padding: "10px",
        }}
      />

      {/* Actions */}
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
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
