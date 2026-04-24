// app/compare/page.tsx
"use client";

import { useState } from "react"; // Import only what's necessary
import * as Diff from "diff"; // Import only the diff module from jsdiff
import MonacoEditorComponent from "@/components/MonacoEditor";

const ComparePage: React.FC = () => {
  const [text1, setText1] = useState(""); // State for Text 1
  const [text2, setText2] = useState(""); // State for Text 2
  const [diffResult, setDiffResult] = useState<any[]>([]); // State to store the diff result

  // Handle comparison when button is clicked
  const handleCompare = () => {
    const diff = Diff.diffWords(text1, text2); // Only diff the text we care about
    setDiffResult(diff); // Store the result in state
  };

  // Render the diff results with color coding for added and removed text
  const renderDiff = () => {
    return diffResult.map((part, index) => {
      const style = part.added
        ? { backgroundColor: "lightgreen", color: "black" }
        : part.removed
        ? { backgroundColor: "lightcoral", color: "black" }
        : {};
      return (
        <span key={index} style={style}>
          {part.value}
        </span>
      );
    });
  };

  return (
    <div className="flex gap-8 justify-center p-8">
      {/* Monaco Editor for Text 1 */}
      <div className="w-1/2">
        <h3 className="text-xl mb-4">Text 1</h3>
        <MonacoEditorComponent value={text1} onChange={setText1} />
      </div>

      {/* Monaco Editor for Text 2 */}
      <div className="w-1/2">
        <h3 className="text-xl mb-4">Text 2</h3>
        <MonacoEditorComponent value={text2} onChange={setText2} />
      </div>

      {/* Compare Button */}
      <div className="mt-4">
        <button
          onClick={handleCompare}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Compare
        </button>
      </div>

      {/* Display Comparison Results */}
      <div className="mt-8">
        <h4 className="text-xl">Comparison Results</h4>
        <div
          className="mt-2 whitespace-pre-wrap break-words"
          style={{ wordBreak: "break-word" }}
        >
          {renderDiff()}
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
