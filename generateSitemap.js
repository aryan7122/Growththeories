import { SitemapStream, streamToPromise } from "sitemap";
import { writeFile } from "fs/promises";

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.8 },
  { url: "/privacy-policy", changefreq: "monthly", priority: 0.8 },
  { url: "/terms-service", changefreq: "monthly", priority: 0.8 },
  { url: "/customer-support", changefreq: "monthly", priority: 0.8 },
  { url: "/case-studies", changefreq: "monthly", priority: 0.8 },
  { url: "/blog", changefreq: "weekly", priority: 0.9 },
  { url: "/careers", changefreq: "weekly", priority: 0.9 },
  { url: "/growth-tracks", changefreq: "weekly", priority: 0.9 },
  { url: "/predict-growth", changefreq: "weekly", priority: 0.9 },
  { url: "/validation-service", changefreq: "weekly", priority: 0.9 },
  { url: "/growth-audit", changefreq: "weekly", priority: 0.9 },
];


async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: process.env.VITE_SITE_URL || "https://growththeories.vercel.app" });

  pages.forEach((page) => {
    sitemap.write(page);
  });

  sitemap.end();

  const sitemapBuffer = await streamToPromise(sitemap);
  await writeFile("public/sitemap.xml", sitemapBuffer);

  console.log("✅ Sitemap Generated Successfully!");
}

generateSitemap();
