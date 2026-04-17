"use client";
import { useEffect, useState } from "react";
import { formatJSON } from "@/lib/jsonFormatter";

export default function JsonFormatterClientPage() {
  const [count, setCount] = useState(0);

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

  return (
    <>
      <button
        onClick={() => {
          console.log("CLICK WORKS");
          setCount(count + 1);
        }}
      >
        Click {count}
      </button>

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

      <button
        onClick={() => {
          console.log("CLICK WORKING");
          alert("clicked");
        }}
      >
        Format JSON
      </button>
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
