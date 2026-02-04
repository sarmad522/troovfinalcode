import type { NextConfig } from "next";
// next.config.ts

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ required for static export
  },
};

module.exports = nextConfig;

