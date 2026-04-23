"use client";

import { useEffect, useState } from "react";
import { decodeJWT } from "@/lib/jwtDecoder";
import CopyButton from "@/components/CopyButton";
import Button from "@/components/Button";

export default function JwtDecoder() {
  const [token, setToken] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState("");

  const handleDecode = () => {
    const result = decodeJWT(token);

    if (result.error) {
      setError(result.error);
      setHeader("");
      setPayload("");
    } else {
      setHeader(JSON.stringify(result.header, null, 2));
      setPayload(JSON.stringify(result.payload, null, 2));
      setError("");
    }
  };

  const handleClear = () => {
    setToken("");
    setHeader("");
    setPayload("");
    setError("");
  };
  useEffect(() => {
    if (token.includes(".")) {
      handleDecode();
    }
  }, [token]);

  return (
    <div className="mt-2.5">
      {/* Input */}
      <textarea
        placeholder="Paste your JWT token here..."
        value={token}
        onChange={(e) => setToken(e.target.value)}
        className="w-full h-36 p-2.5"
      />

      {/* Actions */}
      <div className="mt-2.5 flex gap-2.5">
        <Button onClick={handleDecode}>Decode</Button>
        <Button onClick={handleClear}>Clear</Button>
      </div>

      {/* Error */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Output */}
      {(header || payload) && (
        <div className="mt-3.5">
          <div>
            <p>
              <strong>Header:</strong>
            </p>
            <textarea value={header} readOnly className="w-full h-36 p-2.5" />
            <CopyButton text={header}>Copy Header</CopyButton>
          </div>

          <div className="mt-2.5">
            <p>
              <strong>Payload:</strong>
            </p>
            <textarea value={payload} readOnly className="w-full h-36 p-2.5" />
            <CopyButton text={payload}>Copy Payload</CopyButton>
          </div>
        </div>
      )}
    </div>
  );
}
