import type { NextConfig } from "next";
<<<<<<< HEAD
import path from "path";

const nextConfig: NextConfig = {
  // Pin the project root explicitly so Next/Turbopack can't misdetect it
  // when another package.json/lockfile exists in a parent folder (e.g. Desktop).
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: __dirname,
  },
=======

const nextConfig: NextConfig = {
  /* config options here */
>>>>>>> f800b4b783c587c4e89c633aab056d2ab3364a91
};

export default nextConfig;
