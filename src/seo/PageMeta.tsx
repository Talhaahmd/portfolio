import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { buildMeta } from "@/seo/site";

type Props = {
  title: string;
  description?: string;
  favicon?: string;
  image?: string;
  noindex?: boolean;
  /** Extra schema.org nodes for this page (breadcrumbs + WebPage are added automatically) */
  jsonLd?: object[];
};

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}
const meta = (key: "name" | "property", name: string, content: string) =>
  upsert(
    `meta[${key}="${name}"]`,
    () => {
      const m = document.createElement("meta");
      m.setAttribute(key, name);
      return m;
    },
    "content",
    content,
  );

export default function PageMeta({ title, description, favicon, image, noindex, jsonLd }: Props) {
  const { pathname } = useLocation();
  const m = buildMeta({ title, description, image, noindex }, pathname, jsonLd);

  // Build-time prerender (scripts/prerender.mjs) reads this after renderToString
  if (typeof window === "undefined") {
    (globalThis as unknown as { __SEO__?: unknown }).__SEO__ = m;
  }

  const ld = JSON.stringify(m.jsonLd);
  useEffect(() => {
    document.title = m.fullTitle;
    meta("name", "description", m.description);
    meta("name", "robots", m.noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    upsert('link[rel="canonical"]', () => Object.assign(document.createElement("link"), { rel: "canonical" }), "href", m.url);

    meta("property", "og:type", m.isHome ? "website" : "article");
    meta("property", "og:site_name", "Talha Speaks AI");
    meta("property", "og:title", m.fullTitle);
    meta("property", "og:description", m.description);
    meta("property", "og:url", m.url);
    meta("property", "og:image", m.image);
    meta("name", "twitter:card", "summary_large_image");
    meta("name", "twitter:site", "@talhaspeaksai");
    meta("name", "twitter:creator", "@talhaspeaksai");
    meta("name", "twitter:title", m.fullTitle);
    meta("name", "twitter:description", m.description);
    meta("name", "twitter:image", m.image);

    let s = document.head.querySelector<HTMLScriptElement>('script[data-page-jsonld]');
    if (!s) {
      s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute("data-page-jsonld", "");
      document.head.appendChild(s);
    }
    s.textContent = ld;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [m.fullTitle, m.description, m.url, m.image, m.noindex, ld]);

  useEffect(() => {
    if (!favicon) return;
    const link: HTMLLinkElement =
      document.querySelector('link[rel="shortcut icon"]') ??
      document.querySelector('link[rel="icon"]') ??
      (() => {
        const el = document.createElement("link");
        el.rel = "shortcut icon";
        document.head.appendChild(el);
        return el;
      })();
    const prev = link.href;
    link.type = "image/png";
    link.href = favicon;
    return () => {
      link.href = prev;
    };
  }, [favicon]);

  return null;
}
