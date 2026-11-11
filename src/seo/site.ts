export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") || "https://www.klarus.io";
export const SITE_NAME = "Talha Speaks AI";
export const PERSON_NAME = "Talha";
export const DEFAULT_TITLE = "Talha Speaks AI | AI Creator, Automations & Claude";
export const DEFAULT_DESCRIPTION =
  "Talha (Talha Speaks AI) is an AI creator teaching Claude, n8n automations and AI skills. Free resources, Claude skills and a 90 day roadmap to remote work.";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const SOCIALS = {
  instagram: "https://www.instagram.com/talhaspeaksai/",
  youtube: "https://www.youtube.com/@Talhaspeaksai",
  x: "https://x.com/talhaspeaksai",
  linkedin: "https://www.linkedin.com/in/muhammad-talha50/",
  github: "https://github.com/Talhaahmd",
};

// Template leftovers that render the home page: canonicalise to "/"
const HOME_ALIASES = new Set(["/index-dark", "/index-5", "/index-5-dark"]);
export function canonicalPath(pathname: string) {
  if (HOME_ALIASES.has(pathname)) return "/";
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
}

export function absUrl(path: string) {
  return SITE_URL + (path === "/" ? "/" : path);
}

type PageMetaInput = { title: string; description?: string; image?: string; noindex?: boolean };

/** Shared by the client (PageMeta effect) and the build-time prerenderer. */
export function buildMeta(input: PageMetaInput, pathname: string, extra: object[] = []) {
  const path = canonicalPath(pathname);
  const url = absUrl(path);
  const isHome = path === "/";
  const fullTitle = input.title.includes(SITE_NAME) ? input.title : `${input.title} | ${SITE_NAME}`;
  const description = input.description || DEFAULT_DESCRIPTION;
  const image = input.image || OG_IMAGE;
  const noindex = !!input.noindex;

  const crumbs = isHome
    ? []
    : [
        { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
        { "@type": "ListItem", position: 2, name: input.title.replace(` | ${SITE_NAME}`, ""), item: url },
      ];
  const jsonLd: object[] = noindex
    ? []
    : [
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: fullTitle,
          description,
          inLanguage: "en",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#person` },
          primaryImageOfPage: { "@type": "ImageObject", url: image },
        },
        ...(crumbs.length ? [{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs }] : []),
        ...extra,
      ];

  return { path, url, isHome, fullTitle, description, image, noindex, jsonLd };
}

export function itemListSchema(name: string, items: { name: string; url?: string; description?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.url ? { url: it.url } : {}),
      ...(it.description ? { description: it.description } : {}),
    })),
  };
}
