"use client";

import { useState, useEffect } from "react";
import { convertTimestamp } from "@/lib/timestamps";
import CopyButton from "@/components/CopyButton";
import Button from "@/components/Button";
import { ResultBox } from "@/components/ResultBox";

export default function TimestampConverter() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (input.trim()) {
      setResult(convertTimestamp(input));
    } else {
      setResult(null);
    }
  }, [input]);

  return (
    <div className="mt-2.5">
      {/* Input */}
      <textarea
        placeholder="Enter Unix timestamp or date (e.g. 1710000000 or 2024-03-10)"
        id="input"
        name="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="textarea-base w-full h-36 p-2.5"
      />
      <div className="mt-2.5 mt-2.5 grid md:grid-cols-2 sm:grid-cols-1 gap-3">
        <Button onClick={() => setInput(String(Date.now()))}>
          Use Current Time
        </Button>
        {/* Clear */}
        <Button onClick={() => setInput("")}>Clear</Button>
      </div>

      {/* Result */}
      {result && !result.error && (
        <div className="mt-2.5">
          {result.type === "unix" && (
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
              <ResultBox
                label="Readable Date"
                value={result.date}
                id="date"
                name="date"
              />

              <ResultBox
                label="ISO Format"
                value={result.iso}
                id="iso"
                name="iso"
              />
            </div>
          )}

          {result.type === "date" && (
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
              <ResultBox
                label="Unix (seconds)"
                value={String(result.unixSeconds)}
                id="unixSeconds"
                name="unixSeconds"
              />

              <ResultBox
                label="Unix (milliseconds)"
                value={String(result.unixMilliseconds)}
                id="unixMilliseconds"
                name="unixMilliseconds"
              />
            </div>
          )}
        </div>
      )}

      {/* Error */}
      {result?.error && <p className="text-red-500 mt-2.5">{result.error}</p>}
    </div>
  );
}
