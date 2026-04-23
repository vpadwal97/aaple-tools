"use client";

import { useState } from "react";
import { convertCase } from "@/lib/caseConverter";
import CopyButton from "@/components/CopyButton";
import Button from "@/components/Button";

export default function CaseConverter() {
  const [input, setInput] = useState("");

  const result = convertCase(input);

  return (
    <div className="mt-2.5">
      {/* Input */}
      <textarea
        placeholder="Enter text here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-36 p-2.5"
      />

      {/* Buttons */}
      <div className="mt-2.5 flex gap-2.5">
        <Button onClick={() => setInput("")}>Clear</Button>
      </div>

      {/* Output */}
      <div className="mt-3.5">
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
