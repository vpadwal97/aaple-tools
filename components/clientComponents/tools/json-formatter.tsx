"use client";
import { useEffect, useState } from "react";
import { formatJSON } from "@/lib/jsonFormatter";
import CopyButton from "@/components/CopyButton";
import Button from "@/components/Button";

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
          className="w-full h-36 p-2.5"
        />

        {/* Button */}
        <Button onClick={handleFormat}>Format JSON</Button>

        <Button onClick={() => setInput("")}>Clear</Button>

        <CopyButton text={output} />
        {/* Error */}
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Output */}
      {output && (
        <textarea
          id="output"
          name="output"
          value={output}
          readOnly
          className="w-full h-36 p-2.5 mt-2.5"
        />
      )}
    </>
  );
}
