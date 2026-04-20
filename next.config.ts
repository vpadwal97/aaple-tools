import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.csb.app", "*.codesandbox.io", "*.preview.csb.app"],
  // reactCompiler: true,
};

export default nextConfig;
