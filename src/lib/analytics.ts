// GA4 loader. No-ops unless VITE_GA_MEASUREMENT_ID (e.g. G-XXXXXXXXXX) is set.
const ID = (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) || "G-N1KCHPMKYZ";

type GtagWindow = Window & { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };

export function initAnalytics() {
  if (!ID || typeof window === "undefined") return;
  const w = window as unknown as Partial<GtagWindow> & { dataLayer?: unknown[] };
  if (w.gtag) return;

  w.dataLayer = w.dataLayer || [];
  w.gtag = function () {
    // gtag.js requires the `arguments` object, not a rest array
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`;
  document.head.appendChild(s);

  w.gtag("js", new Date());
  // SPA: page views are sent manually on route change
  w.gtag("config", ID, { send_page_view: false });
}

type DL = Window & { dataLayer?: unknown[] };

// With GTM installed (index.html), events go to the dataLayer; GTM triggers on them.
function push(payload: Record<string, unknown>) {
  const w = window as unknown as DL;
  (w.dataLayer = w.dataLayer || []).push(payload);
}

function gtagEvent(name: string, params: Record<string, unknown>) {
  const w = window as unknown as Partial<GtagWindow>;
  w.gtag?.("event", name, params);
}

export function trackPageView(path: string) {
  gtagEvent("page_view", { page_path: path, page_location: window.location.href, page_title: document.title });
  push({
    event: "virtual_page_view",
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  gtagEvent(name, params);
  push({ event: name, ...params });
}
