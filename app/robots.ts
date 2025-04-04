import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      crawlDelay: 5,
    },
    sitemap: "https://kwiktionary.vercel.app/sitemap.xml",
  };
}
