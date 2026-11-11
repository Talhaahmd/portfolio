import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackEvent, trackPageView } from "@/lib/analytics";

initAnalytics();

export default function Analytics() {
  const { pathname, search } = useLocation();

  // Page view on every route change. Delay a tick so PageMeta has set document.title.
  useEffect(() => {
    const t = window.setTimeout(() => trackPageView(pathname + search), 150);
    return () => window.clearTimeout(t);
  }, [pathname, search]);

  // Outbound link + email click tracking
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      if (a.protocol === "mailto:") {
        trackEvent("email_click", { link_url: a.href });
      } else if ((a.protocol === "http:" || a.protocol === "https:") && a.hostname !== window.location.hostname) {
        trackEvent("click", { link_url: a.href, link_domain: a.hostname, outbound: true });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
