import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const seoMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Zambrano Electric LLC | Commercial & Industrial Electrician | Hereford & Amarillo TX",
    description: "Top-rated commercial and industrial electrician serving Hereford, Amarillo, and the Texas Panhandle. Zambrano Electric LLC specializes in electrical contracting, underground systems, and compressed air installations. Call for a free estimate."
  },
  "/branch/electrical": {
    title: "Commercial & Industrial Electrical Services | Zambrano Electric | Hereford, TX",
    description: "Industrial and commercial electrical contractor services. From panel upgrades to full facility wiring. Contact Zambrano Electric in Hereford, TX for electrical services."
  },
  "/branch/underground": {
    title: "Underground Utilities & Trenching | Zambrano Electric | Hereford, TX",
    description: "Expert underground electrical utility installations and trenching. Contact Zambrano Electric in Hereford, TX for underground services."
  },
  "/branch/compressed-air": {
    title: "Industrial Compressed Air Systems | Zambrano Electric | Hereford, TX",
    description: "Pneumatic and compressed air system installations and maintenance for manufacturing. Contact Zambrano Electric in Hereford, TX for compressed air services."
  },
  "/schedule": {
    title: "Schedule Service | Zambrano Electric | Hereford, TX",
    description: "Schedule a site visit or consultation with Zambrano Electric. We provide industrial electrical, underground, and pneumatic solutions in Hereford and the Texas Panhandle."
  },
  "/contact": {
    title: "Contact Us | Zambrano Electric | Hereford, TX",
    description: "Contact Zambrano Electric in Hereford, TX for 24/7 emergency dispatch and reliable commercial electrical contracting."
  },
  "/portal": {
    title: "Client Portal | Zambrano Electric | Hereford, TX",
    description: "Secure client portal for Zambrano Electric clients to view project updates and documents."
  }
};

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    const indexPath = path.join(distPath, "index.html");
    
    // Serve static files (assets, js, css, etc.)
    app.use(express.static(distPath, { index: false }));

    // For all other routes, inject SEO metadata into index.html if it exists
    app.get("*", (req, res) => {
      fs.readFile(indexPath, "utf8", (err, htmlData) => {
        if (err) {
          console.error("Error during file reading", err);
          return res.status(404).end();
        }

        const pathWithoutQuery = req.path;
        const meta = seoMetadata[pathWithoutQuery] || seoMetadata["/"];

        // Replace title and description in the HTML
        let injectedHtml = htmlData;
        if (meta) {
          injectedHtml = injectedHtml.replace(
            /<title>(.*?)<\/title>/,
            `<title>${meta.title}</title>`
          );
          injectedHtml = injectedHtml.replace(
            /<meta name="description" content="(.*?)" \/>/,
            `<meta name="description" content="${meta.description}" />\n    <link rel="canonical" href="https://zambranoelectric.com${pathWithoutQuery === '/' ? '' : pathWithoutQuery}" />`
          );
        }

        res.send(injectedHtml);
      });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
