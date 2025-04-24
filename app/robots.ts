import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 30,
      },
      {
        // Disallow AI and non-search engine bots
        userAgent: ["meta-externalagent", "GoogleOther", "SemrushBot"],
        disallow: "/",
      },
    ],
    sitemap: "https://kwiktionary.vercel.app/sitemap.xml",
  };
}
