export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") || "https://talhaspeaksai.com";
export const SITE_NAME = "Talha Speaks AI";
export const PERSON_NAME = "Talha";
export const DEFAULT_TITLE = "Talha Speaks AI | AI Creator, Automations & Claude";
export const DEFAULT_DESCRIPTION =
  "Talha (Talha Speaks AI) is an AI creator teaching Claude, n8n automations and AI skills. Free resources, Claude skills and a 90 day roadmap to remote work.";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
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
