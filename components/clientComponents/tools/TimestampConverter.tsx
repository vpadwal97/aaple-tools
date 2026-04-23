"use client";

import { useState, useEffect } from "react";
import { convertTimestamp } from "@/lib/timestamps";
import CopyButton from "@/components/CopyButton";

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
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-36 p-2.5"
      />
      <button onClick={() => setInput(String(Date.now()))}>
        Use Current Time
      </button>
      {/* Clear */}
      <div className="mt-2.5">
        <button onClick={() => setInput("")}>Clear</button>
      </div>

      {/* Result */}
      {result && !result.error && (
        <div className="mt-3.5">
          {result.type === "unix" && (
            <>
              <p>
                <strong>Readable Date:</strong>
              </p>
              <textarea value={result.date} readOnly />
              <CopyButton text={result.date}>Copy</CopyButton>

              <p className="mt-2.5">
                <strong>ISO Format:</strong>
              </p>
              <textarea value={result.iso} readOnly />
              <CopyButton text={result.iso}>Copy</CopyButton>
            </>
          )}

          {result.type === "date" && (
            <>
              <p>
                <strong>Unix (seconds):</strong>
              </p>
              <textarea value={result.unixSeconds} readOnly />
              <CopyButton text={String(result.unixSeconds)}>Copy</CopyButton>

              <p className="mt-2.5">
                <strong>Unix (milliseconds):</strong>
              </p>
              <textarea value={result.unixMilliseconds} readOnly />
              <CopyButton text={String(result.unixMilliseconds)}>
                Copy
              </CopyButton>
            </>
          )}
        </div>
      )}

      {/* Error */}
      {result?.error && <p className="text-red-500 mt-2.5">{result.error}</p>}
    </div>
  );
}
