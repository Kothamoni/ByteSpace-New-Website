import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the project root explicitly so Next/Turbopack can't misdetect it
  // when another package.json/lockfile exists in a parent folder (e.g. Desktop).
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
