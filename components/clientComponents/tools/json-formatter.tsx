"use client";
import { useEffect, useState } from "react";
import { formatJSON } from "@/lib/jsonFormatter";

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
      {/* Input */}
      <textarea
        placeholder="Paste your JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: "150px",
          marginTop: "10px",
          padding: "10px",
        }}
      />

      {/* Button */}
      <button
        onClick={handleFormat}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Format JSON
      </button>

      <button
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
        onClick={() => setInput("")}
      >
        Clear
      </button>

      <button
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
        onClick={() => navigator.clipboard.writeText(output)}
      >
        Copy Output
      </button>
      {/* Error */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* Output */}
      {output && (
        <textarea
          value={output}
          readOnly
          style={{
            width: "100%",
            height: "150px",
            marginTop: "10px",
            padding: "10px",
          }}
        />
      )}
    </>
  );
}
