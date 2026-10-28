import type { MetadataRoute } from "next";

// Serves /robots.txt — tells search engines not to crawl the lab at all.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
