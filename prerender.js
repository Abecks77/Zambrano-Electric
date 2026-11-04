// Static pre-render: turns the built React app into one real .html file per
// route, with full page content + per-page SEO tags baked into the markup.
// Runs after `vite build` (client) and `vite build --ssr` (server entry).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const ssrEntry = path.join(__dirname, 'dist-ssr', 'entry-server.js');

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const { render, prerenderRoutes } = await import(pathToFileURL(ssrEntry).href);

for (const url of prerenderRoutes) {
  const { html: appHtml, helmet } = render(url);

  const headTags = [
    helmet?.title?.toString(),
    helmet?.meta?.toString(),
    helmet?.link?.toString(),
    helmet?.script?.toString(),
  ]
    .filter(Boolean)
    .join('\n    ');

  let html = template;
  // Drop the template's default title + description so per-page Helmet tags
  // are the only ones present (no duplicates for crawlers).
  html = html.replace(/\n?\s*<title>[\s\S]*?<\/title>/, '');
  html = html.replace(/\n?\s*<meta name="description"[^>]*\/?>/, '');
  html = html.replace('</head>', `    ${headTags}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const outPath =
    url === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, url, 'index.html');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`prerendered  ${url}  ->  ${path.relative(distDir, outPath)}`);
}

// The SSR bundle is a build artifact only; keep the published dist clean.
fs.rmSync(path.join(__dirname, 'dist-ssr'), { recursive: true, force: true });
console.log('\n✓ static pre-render complete');
