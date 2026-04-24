"use client";

import { useState } from "react";
import { convertCase } from "@/lib/caseConverter";
import CopyButton from "@/components/CopyButton";
import Button from "@/components/Button";
import { ResultBox } from "@/components/ResultBox";

export default function CaseConverter() {
  const [input, setInput] = useState("");

  const result = convertCase(input);

  return (
    <div className="space-x-3 space-y-4">
      {/* Input */}
      <textarea
        placeholder="Enter text here..."
        value={input}
        id="input"
        name="input"
        onChange={(e) => setInput(e.target.value)}
        className="textarea-base w-full h-36 p-2.5"
      />

      {/* Buttons */}
      <div className="mt-2.5 flex gap-2.5">
        <Button onClick={() => setInput("")}>Clear</Button>
      </div>

      {/* Output */}
      <div className="mt-3.5 grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        <ResultBox
          label="UPPERCASE"
          value={result.upper}
          id="uppercase"
          name="uppercase"
          heightClass="h-25"
        />

        <ResultBox
          label="lowercase"
          value={result.lower}
          id="lowercase"
          name="lowercase"
          heightClass="h-25"
        />

        <ResultBox
          label="Title Case"
          value={result.title}
          id="title"
          name="title"
          heightClass="h-25"
        />

        <ResultBox
          label="camelCase"
          value={result.camel}
          id="camelcase"
          name="camelcase"
          heightClass="h-25"
        />

        <ResultBox
          label="snake_case"
          value={result.snake}
          id="snake_case"
          name="snake_case"
          heightClass="h-25"
        />
      </div>
    </div>
  );
}
