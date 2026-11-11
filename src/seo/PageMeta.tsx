import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { canonicalPath, DEFAULT_DESCRIPTION, OG_IMAGE, SITE_NAME, SITE_URL } from "@/seo/site";

type Props = {
  title: string;
  description?: string;
  favicon?: string;
  image?: string;
  noindex?: boolean;
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

export default function PageMeta({ title, description, favicon, image, noindex }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = SITE_URL + canonicalPath(pathname);
    const img = image || OG_IMAGE;
    const isHome = canonicalPath(pathname) === "/";
    // Template pages still using the "Klarus AI" placeholder, 404s and alias routes stay out of search
    const hide = noindex || /klarus/i.test(title);

    document.title = fullTitle;
    meta("name", "description", desc);
    meta("name", "robots", hide ? "noindex, follow" : "index, follow, max-image-preview:large");
    upsert('link[rel="canonical"]', () => Object.assign(document.createElement("link"), { rel: "canonical" }), "href", url);

    meta("property", "og:type", isHome ? "website" : "article");
    meta("property", "og:site_name", SITE_NAME);
    meta("property", "og:title", fullTitle);
    meta("property", "og:description", desc);
    meta("property", "og:url", url);
    meta("property", "og:image", img);
    meta("name", "twitter:card", "summary_large_image");
    meta("name", "twitter:site", "@talhaspeaksai");
    meta("name", "twitter:creator", "@talhaspeaksai");
    meta("name", "twitter:title", fullTitle);
    meta("name", "twitter:description", desc);
    meta("name", "twitter:image", img);
  }, [title, description, image, noindex, pathname]);

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
