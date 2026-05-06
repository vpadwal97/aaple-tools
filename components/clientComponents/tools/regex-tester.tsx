"use client";

import { useState, useEffect } from "react";
import { runRegex } from "@/lib/regex";
import Button from "@/components/Button";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [flags, setFlags] = useState({
    global: true,
    ignoreCase: false,
    multiline: false,
  });

  const [matches, setMatches] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!pattern) return;

    const result = runRegex(pattern, text, flags);

    if (result.error) {
      setError(result.error);
      setMatches([]);
    } else {
      setError("");
      setMatches(result.matches);
    }
  }, [pattern, text, flags]);

  return (
    <div className="space-y-4 mt-4">
      {/* Pattern */}
      <div>
        <label
          htmlFor="regex-pattern"
          className="block text-sm font-medium mb-1"
        >
          Regex Pattern
        </label>
        <textarea
          id="regex-pattern"
          name="pattern"
          placeholder="Enter regex pattern..."
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          className="textarea-base w-full h-15 p-2.5"
        />
      </div>

      {/* Flags */}
      <div className="flex gap-4 text-sm">
        <label className="inline-flex gap-1" htmlFor="flag-g">
          <input
            id="flag-g"
            name="global"
            type="checkbox"
            className="checkbox me-1"
            checked={flags.global}
            onChange={() => setFlags({ ...flags, global: !flags.global })}
          />
          g
        </label>

        <label className="inline-flex gap-1" htmlFor="flag-i">
          <input
            id="flag-i"
            name="ignoreCase"
            type="checkbox"
            className="checkbox me-1"
            checked={flags.ignoreCase}
            onChange={() =>
              setFlags({ ...flags, ignoreCase: !flags.ignoreCase })
            }
          />
          i
        </label>

        <label className="inline-flex gap-1" htmlFor="flag-m">
          <input
            id="flag-m"
            name="multiline"
            type="checkbox"
            className="checkbox me-1"
            checked={flags.multiline}
            onChange={() => setFlags({ ...flags, multiline: !flags.multiline })}
          />
          m
        </label>
      </div>

      {/* Text */}
      <div>
        <label htmlFor="test-text" className="block text-sm font-medium mb-1">
          Test String
        </label>
        <textarea
          id="test-text"
          name="text"
          placeholder="Enter test string..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="textarea-base w-full h-36 p-2.5"
        />
      </div>
      <Button
        onClick={() => {
          setPattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,}");
          setText(
            "Contact us at support@example.com or admin@test.org. Invalid: user@com"
          );
        }}
        className="px-3 py-1 border rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Try Email Regex
      </Button>

      {/* Error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Matches */}
      <div>
        <h3 className="font-semibold">Matches ({matches.length})</h3>

        <ul className="mt-2 space-y-1 text-sm">
          {matches.map((match, index) => (
            <li key={index} className="border p-2 rounded">
              {match[0]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
