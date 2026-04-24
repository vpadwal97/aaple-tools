// components/MonacoEditor.tsx
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

interface MonacoEditorProps {
  value: string;
  onChange: (newValue: string) => void;
}

const MonacoEditorComponent: React.FC<MonacoEditorProps> = ({
  value,
  onChange,
}) => {
  const editorRef = useRef<any>(null);
  const [editorReady, setEditorReady] = useState(false);

  // Handle editor mount
  const handleEditorMount = (editor: any) => {
    editorRef.current = editor;
    setEditorReady(true); // Mark editor as ready once mounted

    // Force LTR for all inputs
    editor.updateOptions({
      rtl: false, // Ensures text is LTR (Left-To-Right)
      ltr: true, // Ensures text is LTR (Left-To-Right)
    });
  };

  // Update the value in Monaco Editor once it's ready
  useEffect(() => {
    if (editorReady && editorRef.current) {
      editorRef.current.setValue(value); // Only set the value after Monaco is mounted
    }
  }, [value, editorReady]);

  return (
    <textarea
      language="plaintext" // Can be adjusted based on your needs
      theme="vs-dark" // Dark theme
      value={value}
      onChange={onChange}
      //   options={{
      //     selectOnLineNumbers: true,
      //     minimap: { enabled: false }, // Disable the minimap
      //   }}
      //   editorDidMount={handleEditorMount} // Set the editor reference once it is mounted
    />
  );
};

export default MonacoEditorComponent;
