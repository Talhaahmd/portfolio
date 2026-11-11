import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Pages that should appear in sitemap.xml (keep in sync with src/App.tsx)
const SITEMAP_PATHS = [
  { path: "/", priority: "1.0" },
  { path: "/resources", priority: "0.8" },
  { path: "/claude-skills", priority: "0.8" },
  { path: "/90-days-roadmap", priority: "0.8" },
];

function seoFiles(siteUrl: string): Plugin {
  return {
    name: "seo-files",
    transformIndexHtml: { order: "pre", handler: (html) => html.replaceAll("__SITE_URL__", siteUrl) },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      const urls = SITEMAP_PATHS.map(
        (p) =>
          `  <url><loc>${siteUrl}${p.path === "/" ? "/" : p.path}</loc><lastmod>${today}</lastmod><priority>${p.priority}</priority></url>`,
      ).join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env.VITE_SITE_URL || "https://www.klarus.io").replace(/\/$/, "");
  return {
    plugins: [react(), seoFiles(siteUrl)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 5173,
      strictPort: true,
    },
  };
});
