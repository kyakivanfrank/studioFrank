import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The old site called this page "plans"; it is now "services".
      { source: "/plans", destination: "/services", permanent: true },
      // Old modal deep-links: /portfolio/:tab/:index/:name -> the project page.
      { source: "/portfolio/:tab/:index/:name", destination: "/portfolio", permanent: false },
    ];
  },
};

export default nextConfig;
