"use client";

import { useState } from "react";
import { encodeBase64, decodeBase64 } from "@/lib/base64";
import CopyButton from "@/components/CopyButton";
import Button from "@/components/Button";

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
    <div className="mt-2.5">
      {/* Input */}
      <textarea
        placeholder="Enter text or Base64..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-36 mt-2.5 p-2.5"
      />

      {/* Actions */}
      <div className="mt-2.5 flex flex-wrap gap-3">
        <Button onClick={handleEncode}>Encode</Button>
        <Button onClick={handleDecode}>Decode</Button>
        <Button onClick={handleClear}>Clear</Button>
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
