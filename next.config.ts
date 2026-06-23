import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  reactStrictMode: true,
  // Pin the workspace root so a stray parent lockfile doesn't confuse Turbopack.
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ghostwhite-goldfinch-864066.hostingersite.com",
        pathname: "/uploads/UPLODESYSTEME/images/**",
      },
      {
        protocol: "https",
        hostname: "www.menaramall.com",
        pathname: "/img/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
