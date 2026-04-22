"use client";

import { useState } from "react";
import { convertCase } from "@/lib/caseConverter";
import CopyButton from "@/components/CopyButton";

export default function CaseConverter() {
  const [input, setInput] = useState("");

  const result = convertCase(input);

  return (
    <div style={{ marginTop: "10px" }}>
      {/* Input */}
      <textarea
        placeholder="Enter text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: "120px",
          padding: "10px",
        }}
      />

      {/* Buttons */}
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button onClick={() => setInput("")}>Clear</button>
      </div>

      {/* Output */}
      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>UPPERCASE:</strong>
          <CopyButton text={result.upper} />
        </p>
        <textarea value={result.upper} readOnly />
        <p>
          <strong>lowercase:</strong>
          <CopyButton text={result.lower} />
        </p>
        <textarea value={result.lower} readOnly />
        <p>
          <strong>Title Case:</strong>
          <CopyButton text={result.title} />
        </p>
        <textarea value={result.title} readOnly />
        <p>
          <strong>camelCase:</strong>
          <CopyButton text={result.camel} />
        </p>
        <textarea value={result.camel} readOnly />
        <p>
          <strong>snake_case:</strong>
          <CopyButton text={result.snake} />
        </p>
        <textarea value={result.snake} readOnly />
      </div>
    </div>
  );
}
