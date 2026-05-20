import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 1. Dynamic Sitemap route
  app.get("/sitemap.xml", (req, res) => {
    const host = req.get("host") || "zambranoelectric.com";
    // Check if behind secure proxy (like Cloud Run or Cloudflare)
    const protocol = req.headers["x-forwarded-proto"] || req.protocol || "https";
    const baseUrl = `${protocol}://${host}`;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/branch/electrical</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/branch/underground</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/branch/compressed-air</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/schedule</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/portal</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

    res.header("Content-Type", "application/xml");
    res.status(200).send(sitemap);
  });

  // 2. Dynamic Robots.txt route
  app.get("/robots.txt", (req, res) => {
    const host = req.get("host") || "zambranoelectric.com";
    const protocol = req.headers["x-forwarded-proto"] || req.protocol || "https";
    const baseUrl = `${protocol}://${host}`;

    const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

    res.header("Content-Type", "text/plain");
    res.status(200).send(robots);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
