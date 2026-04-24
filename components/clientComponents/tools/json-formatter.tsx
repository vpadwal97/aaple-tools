"use client";
import { useEffect, useState } from "react";
import { formatJSON } from "@/lib/jsonFormatter";
import CopyButton from "@/components/CopyButton";
import Button from "@/components/Button";
import { ResultBox } from "@/components/ResultBox";

export default function JsonFormatterClientPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    const result = formatJSON(input);
    if (result === "Invalid JSON") {
      setError("Invalid JSON format ❌");
      setOutput("");
    } else {
      setOutput(result);
      setError("");
    }
  };

  useEffect(() => {
    if (input.trim()) {
      const result = formatJSON(input);
      if (result !== "Invalid JSON") {
        setOutput(result);
        setError("");
      }
    }
  }, [input]);
  return (
    <>
      <div className="space-x-3 space-y-4">
        {/* Input */}
        <textarea
          placeholder="Paste your JSON here..."
          id="input"
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="textarea-base w-full h-50 p-2.5"
        />

        {/* Button */}
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
          <Button onClick={handleFormat}>Format JSON</Button>

          <Button onClick={() => setInput("")}>Clear</Button>
        </div>

        {/* Error */}
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Output */}
      {output && (
        <ResultBox
          id="output"
          name="output"
          label="Output:"
          value={output}
          heightClass="h-50"
        />
      )}
    </>
  );
}
