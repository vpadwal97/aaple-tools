"use client";

import { useState } from "react";
import { getWordStats } from "@/lib/wordCounter";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = getWordStats(text);

  return (
    <div className="mt-2.5">
      {/* Input */}
      <textarea
        placeholder="Type or paste your text..."
        value={text}
        id="text"
        name="text"
        onChange={(e) => setText(e.target.value)}
        className="w-full h-36 p-2.5"
      />

      {/* Actions */}
      <div className="mt-2.5">
        <button onClick={() => setText("")}>Clear</button>
      </div>

      {/* Stats */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
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
