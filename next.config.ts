import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so the build ignores any stray lockfiles in
  // parent directories (otherwise Next can infer the wrong root).
  // Use process.cwd() (ESM-safe) — next.config is loaded from the project
  // root, so this resolves there during both `next dev` and `next build`.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
