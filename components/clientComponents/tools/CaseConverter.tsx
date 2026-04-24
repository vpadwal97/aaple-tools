"use client";

import { useState } from "react";
import { convertCase } from "@/lib/caseConverter";
import CopyButton from "@/components/CopyButton";
import Button from "@/components/Button";

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
      <div className="mt-3.5">
        <p>
          <strong>UPPERCASE:</strong>
          <CopyButton text={result.upper} />
        </p>
        <textarea
          className="textarea-base "
          value={result.upper}
          id="upper"
          name="upper"
          readOnly
        />
        <p>
          <strong>lowercase:</strong>
          <CopyButton text={result.lower} />
        </p>
        <textarea
          className="textarea-base "
          value={result.lower}
          id="lower"
          name="lower"
          readOnly
        />
        <p>
          <strong>Title Case:</strong>
          <CopyButton text={result.title} />
        </p>
        <textarea
          className="textarea-base "
          value={result.title}
          id="title"
          name="title"
          readOnly
        />
        <p>
          <strong>camelCase:</strong>
          <CopyButton text={result.camel} />
        </p>
        <textarea
          className="textarea-base "
          value={result.camel}
          id="camel"
          name="camel"
          readOnly
        />
        <p>
          <strong>snake_case:</strong>
          <CopyButton text={result.snake} />
        </p>
        <textarea
          className="textarea-base "
          value={result.snake}
          id="snake"
          name="snake"
          readOnly
        />
      </div>
    </div>
  );
}
