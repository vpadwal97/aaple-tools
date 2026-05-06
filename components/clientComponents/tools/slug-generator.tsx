"use client";

import { useState, useEffect } from "react";
import { generateSlug } from "@/lib/slug";
import CopyButton from "@/components/CopyButton";
import { ResultBox } from "@/components/ResultBox";

export default function SlugGenerator() {
  const [input, setInput] = useState("");
  const [slug, setSlug] = useState("");
  const [lowercase, setLowercase] = useState(true);
  const [separator, setSeparator] = useState("-");
  const [removeStopWords, setRemoveStopWords] = useState(false);

  useEffect(() => {
    const result = generateSlug(input, {
      lowercase,
      separator: separator as "-" | "_",
      removeStopWords,
    });

    setSlug(result);
  }, [input, lowercase, separator, removeStopWords]);

  return (
    <div className="mt-4 space-y-4">
      {/* Input */}
      <textarea
        placeholder="Enter your text..."
        id="sluginput"
        name="sluginput"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="textarea-base w-full h-36 p-2.5"
      />

      {/* Options */}
      <div className="flex flex-wrap gap-4 text-sm">
        <label htmlFor="lowercase_checkbox" className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={lowercase}
            id="lowercase_checkbox"
            name="lowercase_checkbox"
            onChange={() => setLowercase(!lowercase)}
            className="checkbox"
          />
          Lowercase
        </label>

        <label
          htmlFor="removeStopWords_checkbox"
          className="flex items-center gap-2"
        >
          <input
            type="checkbox"
            id="removeStopWords_checkbox"
            name="removeStopWords_checkbox"
            checked={removeStopWords}
            onChange={() => setRemoveStopWords(!removeStopWords)}
            className="checkbox"
          />
          Remove Stop Words
        </label>

        <div className="flex items-center gap-2">
          <label htmlFor="separator">Separator:</label>
          <select
            id="separator"
            name="separator"
            value={separator}
            onChange={(e) => setSeparator(e.target.value)}
            className="select-base p-2"
          >
            <option value="-">- (dash)</option>
            <option value="_">_ (underscore)</option>
          </select>
        </div>
      </div>

      {/* Output */}
      <div>
        <p className="text-sm mb-1">Generated Slug</p>
        <ResultBox
          label="Slug:"
          value={slug}
          id="slug"
          name="slug"
          heightClass="h-20"
        />
      </div>
    </div>
  );
}
