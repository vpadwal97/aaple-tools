"use client";

import { useState } from "react";
import { getWordStats } from "@/lib/wordCounter";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = getWordStats(text);

  return (
    <div style={{ marginTop: "10px" }}>
      {/* Input */}
      <textarea
        placeholder="Type or paste your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          height: "150px",
          padding: "10px",
        }}
      />

      {/* Actions */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setText("")}>Clear</button>
      </div>

      {/* Stats */}
      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "10px",
        }}
      >
        <div>
          <strong>Words:</strong> {stats.words}
        </div>
        <div>
          <strong>Characters:</strong> {stats.characters}
        </div>
        <div>
          <strong>Characters (no spaces):</strong> {stats.charactersNoSpaces}
        </div>
        <div>
          <strong>Sentences:</strong> {stats.sentences}
        </div>
        <div>
          <strong>Reading Time:</strong> {stats.readingTime} min
        </div>
      </div>
    </div>
  );
}
