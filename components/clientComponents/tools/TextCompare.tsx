"use client";

import { useState } from "react";
import { compareText } from "@/lib/textCompare";

export default function TextCompare() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const result = compareText(text1, text2);

  return (
    <div style={{ marginTop: "10px" }}>
      {/* Inputs */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <textarea
          placeholder="Enter first text..."
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          style={{ width: "100%", height: "120px", padding: "10px" }}
        />

        <textarea
          placeholder="Enter second text..."
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          style={{ width: "100%", height: "120px", padding: "10px" }}
        />
      </div>

      {/* Actions */}
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => {
            setText1("");
            setText2("");
          }}
        >
          Clear
        </button>
      </div>

      {/* Result */}
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px",
        }}
      >
        <p>
          <strong>Comparison Result:</strong>
        </p>

        <div style={{ marginTop: "10px", lineHeight: "1.6" }}>
          {result.map((item, index) => (
            <span
              key={index}
              style={{
                background:
                  item.type === "added"
                    ? "#d4f8d4"
                    : item.type === "removed"
                    ? "#ffd6d6"
                    : "transparent",
                padding: "2px 4px",
                marginRight: "4px",
                borderRadius: "4px",
              }}
            >
              {item.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
