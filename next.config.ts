import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.csb.app",
    "*.codesandbox.io",
    "*.preview.csb.app",
    "*.vercel.app",
  ],
  // reactCompiler: true,
};

export default nextConfig;
