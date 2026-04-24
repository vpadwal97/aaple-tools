"use client";

import { useState } from "react";
import { encodeBase64, decodeBase64 } from "@/lib/base64";
import CopyButton from "@/components/CopyButton";
import Button from "@/components/Button";
import { ResultBox } from "@/components/ResultBox";

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
    <div className="space-x-3 space-y-4">
      {/* Input */}
      <textarea
        placeholder="Enter text or Base64..."
        id="input"
        name="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="textarea-base w-full h-36 mt-2.5 p-2.5"
      />

      {/* Actions */}
      <div className="mt-2.5 grid md:grid-cols-3 sm:grid-cols-1 gap-3">
        <Button onClick={handleEncode}>Encode</Button>
        <Button onClick={handleDecode}>Decode</Button>
        <Button onClick={handleClear}>Clear</Button>
      </div>

      {/* Output */}
      {output && (
        <div className="mt-3.5">
          <ResultBox
            label="Output:"
            value={output}
            id="output"
            name="output"
            heightClass="h-36"
          />
        </div>
      )}
    </div>
  );
}
