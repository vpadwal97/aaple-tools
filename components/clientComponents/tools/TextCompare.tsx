"use client";

import { useState } from "react";
import { compareText } from "@/lib/textCompare";
import Button from "@/components/Button";

export default function TextCompare() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const result = compareText(text1, text2);

  return (
    <div className="mt-2.5">
      {/* Inputs */}
      <div className="mt-2.5 flex flex-wrap gap-2.5">
        <textarea
          placeholder="Enter first text..."
          value={text1}
          id="text1"
          name="text1"
          onChange={(e) => setText1(e.target.value)}
          className="textarea-base w-full h-36 p-2.5"
        />

        <textarea
          placeholder="Enter second text..."
          value={text2}
          id="text2"
          name="text2"
          onChange={(e) => setText2(e.target.value)}
          className="textarea-base w-full h-36 p-2.5"
        />
      </div>

      {/* Actions */}
      <div className="mt-2.5">
        <Button
          onClick={() => {
            setText1("");
            setText2("");
          }}
        >
          Clear
        </Button>
      </div>

      {/* Result */}
      <div className="mt-5 p-2.5 border border-gray-300 rounded-md">
        <p>
          <strong>Comparison Result:</strong>
        </p>

        <div className="mt-2.5 leading-relaxed">
          {result.map((item, index) => (
            <span
              key={index}
              className={`${
                item.type === "added"
                  ? "bg-green-200 dark:bg-green-800"
                  : item.type === "removed"
                  ? "bg-red-200 dark:bg-red-800"
                  : "bg-transparent"
              } p-1 mr-1 rounded`}
            >
              {item.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
