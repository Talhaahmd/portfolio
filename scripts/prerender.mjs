// Build-time prerender: renders each route with React SSR and writes static HTML into dist/
// so crawlers (Google, AI search, social scrapers) get full content + per-page meta without running JS.
import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const ROUTES = ["/", "/resources", "/claude-skills", "/90-days-roadmap", "/contact", "/404"];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setMeta(html, re, tag) {
  if (!re.test(html)) throw new Error(`template is missing ${re}`);
  return html.replace(re, tag);
}

const vite = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
  for (const route of ROUTES) {
    globalThis.__SEO__ = undefined;
    const body = render(route === "/404" ? "/__not-found__" : route);
    const m = globalThis.__SEO__;
    if (!m) throw new Error(`No PageMeta rendered for ${route}`);
    const url = route === "/404" ? m.url.replace("__not-found__", "") : m.url;

    let html = template.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    html = setMeta(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(m.fullTitle)}</title>`);
    html = setMeta(html, /<meta\s+name="description"[\s\S]*?\/>/, `<meta name="description" content="${esc(m.description)}" />`);
    html = setMeta(html, /<meta name="robots"[^>]*>/, `<meta name="robots" content="${m.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />`);
    html = setMeta(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${esc(url)}" />`);
    html = setMeta(html, /<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${m.isHome ? "website" : "article"}" />`);
    html = setMeta(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(m.fullTitle)}" />`);
    html = setMeta(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(m.description)}" />`);
    html = setMeta(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${esc(url)}" />`);
    html = setMeta(html, /<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${esc(m.image)}" />`);
    html = setMeta(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(m.fullTitle)}" />`);
    html = setMeta(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(m.description)}" />`);
    html = setMeta(html, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${esc(m.image)}" />`);
    if (m.jsonLd.length) {
      const ld = `<script type="application/ld+json" data-page-jsonld>${JSON.stringify(m.jsonLd).replace(/</g, "\\u003c")}</script>`;
      html = html.replace("</head>", `    ${ld}\n  </head>`);
    }

    const out = route === "/" ? path.join(dist, "index.html") : route === "/404" ? path.join(dist, "404.html") : path.join(dist, route, "index.html");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    console.log(`prerendered ${route.padEnd(18)} ${(html.length / 1024).toFixed(0)} KB`);
  }
} finally {
  await vite.close();
}
