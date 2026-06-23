import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root so a stray parent lockfile doesn't confuse Turbopack.
  turbopack: { root: __dirname },
  images: {
    // Art-directed placeholders render locally. When the Menara Mall team
    // supplies a media/CDN domain, whitelist it via `remotePatterns` here.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
