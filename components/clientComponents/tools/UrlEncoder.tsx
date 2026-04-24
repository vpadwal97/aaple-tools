"use client";

import { useState } from "react";
import { encodeURL, decodeURL } from "@/lib/urlEncoder";
import CopyButton from "@/components/CopyButton";
import Button from "@/components/Button";
import { ResultBox } from "@/components/ResultBox";

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
        id="text"
        name="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="textarea-base w-full h-40 p-2.5"
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
            heightClass="h-40"
          />
        </div>
      )}
    </div>
  );
}
