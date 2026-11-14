import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { execSync } from "node:child_process";

// Pages that should appear in sitemap.xml (keep in sync with src/App.tsx)
// Source file whose git history decides each page's published/modified dates
const PAGE_SOURCES: Record<string, string> = {
  "/": "src/pages/Home5Page.tsx",
  "/resources": "src/pages/ResourcesPage.tsx",
  "/claude-skills": "src/pages/ClaudeSkillsPage.tsx",
  "/ai-websites": "src/pages/AiWebsitesPage.tsx",
  "/lead-generation": "src/pages/LeadGenerationPage.tsx",
  "/90-days-roadmap": "src/pages/RoadmapPage.tsx",
  "/contact": "src/pages/ContactPage.tsx",
};

function git(cmd: string) {
  try {
    return execSync(`git ${cmd}`, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return "";
  }
}

/** Real dates from git (first and last commit touching the page file); falls back to today. */
function pageDates() {
  const today = new Date().toISOString().slice(0, 10);
  const out: Record<string, { published: string; modified: string }> = {};
  for (const [route, file] of Object.entries(PAGE_SOURCES)) {
    const log = git(`log --format=%cs -- ${file}`).split("\n").filter(Boolean);
    out[route] = { modified: log[0] || today, published: log[log.length - 1] || today };
  }
  return out;
}

const SITEMAP_PATHS = [
  { path: "/", priority: "1.0" },
  { path: "/resources", priority: "0.8" },
  { path: "/claude-skills", priority: "0.8" },
  { path: "/ai-websites", priority: "0.8" },
  { path: "/lead-generation", priority: "0.8" },
  { path: "/90-days-roadmap", priority: "0.8" },
  { path: "/contact", priority: "0.6" },
];

function seoFiles(siteUrl: string, env: Record<string, string>, dates: ReturnType<typeof pageDates>): Plugin {
  return {
    name: "seo-files",
    transformIndexHtml: {
      order: "pre",
      handler: (html) => {
        const verify = [
          env.VITE_GSC_VERIFICATION && `<meta name="google-site-verification" content="${env.VITE_GSC_VERIFICATION}" />`,
          env.VITE_BING_VERIFICATION && `<meta name="msvalidate.01" content="${env.VITE_BING_VERIFICATION}" />`,
        ]
          .filter(Boolean)
          .join("\n    ");
        return html.replaceAll("__SITE_URL__", siteUrl).replace("<!--SEO_VERIFY-->", verify);
      },
    },
    generateBundle() {
      const urls = SITEMAP_PATHS.map(
        (p) =>
          `  <url><loc>${siteUrl}${p.path === "/" ? "/" : p.path}</loc><lastmod>${dates[p.path]?.modified ?? ""}</lastmod><priority>${p.priority}</priority></url>`,
      ).join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
      const bots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended", "CCBot"];
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\n# AI search and assistant crawlers are welcome\n${bots.map((b) => `User-agent: ${b}\nAllow: /\n`).join("\n")}\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "llms.txt",
        source: `# Talha Speaks AI\n\n> Talha (Talha Speaks AI, @talhaspeaksai) is an AI creator based in Lahore, Pakistan. He teaches Claude, AI automation (n8n) and practical AI skills on YouTube and builds AI software.\n\n## Key pages\n- [Home](${siteUrl}/): Who Talha Speaks AI is, what he teaches, and FAQs\n- [Claude Motion Graphics](${siteUrl}/resources): 83 AI motion graphics made with Claude, each with the exact prompt\n- [Claude Skills for Freelancers](${siteUrl}/claude-skills): Six Claude skills for marketing, sales and client work\n- [90 Days Roadmap](${siteUrl}/90-days-roadmap): Action plan and free downloads to land international remote jobs\n- [Contact](${siteUrl}/contact): Book a call or send a message\n\n## Official profiles\n- YouTube: https://www.youtube.com/@Talhaspeaksai\n- X: https://x.com/talhaspeaksai\n- Instagram: https://www.instagram.com/talhaspeaksai/\n- LinkedIn: https://www.linkedin.com/in/muhammad-talha50/\n- GitHub: https://github.com/Talhaahmd\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const dates = pageDates();
  const siteUrl = (env.VITE_SITE_URL || "https://www.klarus.io").replace(/\/$/, "");
  return {
    plugins: [react(), seoFiles(siteUrl, env, dates)],
    define: { __PAGE_DATES__: JSON.stringify(dates) },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom", "react-router-dom"],
            gsap: ["gsap"],
            swiper: ["swiper"],
          },
        },
      },
    },
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
