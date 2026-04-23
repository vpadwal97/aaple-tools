"use client";

import { useEffect, useState } from "react";
import { decodeJWT } from "@/lib/jwtDecoder";
import CopyButton from "@/components/CopyButton";

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
    <div style={{ marginTop: "10px" }}>
      {/* Input */}
      <textarea
        placeholder="Paste your JWT token here..."
        value={token}
        onChange={(e) => setToken(e.target.value)}
        style={{ width: "100%", height: "120px", padding: "10px" }}
      />

      {/* Actions */}
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button onClick={handleDecode}>Decode</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      {/* Error */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* Output */}
      {(header || payload) && (
        <div style={{ marginTop: "20px" }}>
          <div>
            <p>
              <strong>Header:</strong>
            </p>
            <textarea
              value={header}
              readOnly
              style={{ width: "100%", height: "120px" }}
            />
            <CopyButton text={header}>Copy Header</CopyButton>
          </div>

          <div style={{ marginTop: "15px" }}>
            <p>
              <strong>Payload:</strong>
            </p>
            <textarea
              value={payload}
              readOnly
              style={{ width: "100%", height: "120px" }}
            />
            <CopyButton text={payload}>Copy Payload</CopyButton>
          </div>
        </div>
      )}
    </div>
  );
}
