// Static pre-render: turns the built React app into one real .html file per
// route, with full page content + per-page SEO tags baked into the markup.
// Also writes 404.html, sitemap.xml and llms.txt from the same route list.
// Runs after `vite build` (client) and `vite build --ssr` (server entry).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SITE = 'https://zambranoelectric.com';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const ssrEntry = path.join(__dirname, 'dist-ssr', 'entry-server.js');

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const { render, prerenderRoutes, notFoundRoute, buildLlmsTxt } = await import(pathToFileURL(ssrEntry).href);

const pick = (str, re) => (str && str.match(re) ? str.match(re)[1] : null);

// Point an existing <meta property|name="key" content="..."> at a new value.
const setMeta = (html, attr, key, value) =>
  value == null
    ? html
    : html.replace(new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`), `$1${value}$2`);

// React 19 renders <title>/<meta>/<link> where the component declares them
// (inside <body>) during renderToString. Search engines only honor
// meta description and canonical inside <head>, so hoist them there.
// (JSON-LD <script> blocks stay in the body: valid there and needed for hydration.)
const HOISTABLE = /<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*rel="canonical"[^>]*\/?>/g;

function renderPage(url) {
  let { html: appHtml } = render(url);
  const headTags = appHtml.match(HOISTABLE) ?? [];
  appHtml = appHtml.replace(HOISTABLE, '');
  const headStr = headTags.join('');

  const titleText = pick(headStr, /<title[^>]*>([\s\S]*?)<\/title>/);
  const description = pick(headStr, /name="description" content="([^"]*)"/);
  const canonical = pick(headStr, /rel="canonical" href="([^"]*)"/);

  let html = template;
  // Drop the template defaults so the per-page tags are the only ones.
  html = html.replace(/\n?\s*<title>[\s\S]*?<\/title>/, '');
  html = html.replace(/\n?\s*<meta name="description"[^>]*\/?>/, '');
  // Per-page social preview tags (template defaults are the homepage's).
  for (const [attr, key, value] of [
    ['property', 'og:title', titleText],
    ['property', 'og:description', description],
    ['property', 'og:url', canonical],
    ['property', 'twitter:title', titleText],
    ['property', 'twitter:description', description],
    ['property', 'twitter:url', canonical],
  ]) {
    html = setMeta(html, attr, key, value);
  }
  html = html.replace('</head>', `    ${headTags.join('\n    ')}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  return html;
}

const write = (rel, contents) => {
  const out = path.join(distDir, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, contents);
  console.log(`wrote  ${rel}`);
};

for (const url of prerenderRoutes) {
  write(url === '/' ? 'index.html' : path.join(url, 'index.html'), renderPage(url));
}
write('404.html', renderPage(notFoundRoute));

const today = new Date().toISOString().slice(0, 10);
write(
  'sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    prerenderRoutes
      .map((url) => `  <url>\n    <loc>${SITE}${url === '/' ? '/' : url}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
      .join('\n') +
    `\n</urlset>\n`,
);
write('llms.txt', buildLlmsTxt());

// The SSR bundle is a build artifact only; keep the published dist clean.
fs.rmSync(path.join(__dirname, 'dist-ssr'), { recursive: true, force: true });
console.log('\n✓ static pre-render complete');
