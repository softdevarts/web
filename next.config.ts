import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so the build ignores any stray lockfiles in
  // parent directories (otherwise Next can infer the wrong root).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
