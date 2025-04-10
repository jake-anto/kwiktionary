import withSerwistInit from "@serwist/next";
import type { NextConfig } from "next";

const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
  swSrc: "app/service worker/sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV !== "production",
  maximumFileSizeToCacheInBytes: 1 * 1024 * 1024, // 1MB
  reloadOnOnline: true,
  // exclude: [/\.xml$/], // Exclude sitemaps from precaching
  additionalPrecacheEntries: [
    { url: "/", revision },
    { url: "/offline", revision },
    { url: "/about/license", revision },
  ],
});

const nextConfig: NextConfig = {
  // output: "export",
};

export default withSerwist(nextConfig);
