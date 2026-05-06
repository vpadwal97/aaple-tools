"use client";

import { useState } from "react";
import {
  minifyHTML,
  beautifyHTML,
  minifyCSS,
  beautifyCSS,
  minifyJS,
  beautifyJS,
} from "@/lib/minifier";
import { ResultBox } from "@/components/ResultBox";
import Button from "@/components/Button";

type ToolType = "html" | "css" | "js";

export default function MinifierTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [type, setType] = useState<ToolType>("html");

  const handleMinify = () => {
    if (type === "html") setOutput(minifyHTML(input));
    if (type === "css") setOutput(minifyCSS(input));
    if (type === "js") setOutput(minifyJS(input));
  };

  const handleBeautify = () => {
    if (type === "html") setOutput(beautifyHTML(input));
    if (type === "css") setOutput(beautifyCSS(input));
    if (type === "js") setOutput(beautifyJS(input));
  };

  return (
    <div className="space-y-4 mt-4">
      {/* Tabs */}
      <div className="flex gap-2" id="tool-tabs" role="tablist">
        {["html", "css", "js"].map((t) => (
          <button
            key={t}
            id={`tab-${t}`}
            name="tool-type"
            onClick={() => setType(t as ToolType)}
            className={`cursor-pointer px-3 py-1 border rounded ${
              type === t
                ? "bg-black text-white dark:bg-white dark:text-black"
                : ""
            }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Input */}
      <textarea
        id="code-input"
        name={`${type}-input`}
        placeholder={`Enter ${type.toUpperCase()} code...`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="textarea-base w-full h-40 p-2.5"
      />

      {/* Buttons */}
      <div className="flex gap-3" id="action-buttons">
        <Button id="minify-btn" name="minify" onClick={handleMinify}>
          Minify
        </Button>
        <Button id="beautify-btn" name="beautify" onClick={handleBeautify}>
          Beautify
        </Button>
      </div>

      {/* Output */}
      <div id="output-section">
        <p className="text-sm mb-1">Result</p>
        <ResultBox
          label="Output:"
          value={output}
          id="minifier-output"
          name="minifier-output"
          heightClass="h-40"
        />
      </div>
    </div>
  );
}
