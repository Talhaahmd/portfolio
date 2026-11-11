import { Link, useLocation } from "react-router-dom";
import { canonicalPath, formatDate, pageDates } from "@/seo/site";

// "By Talha · Updated 11 Nov 2026" with real dates taken from git history at build time.
export default function PageByline() {
  const { pathname } = useLocation();
  const d = pageDates(canonicalPath(pathname));
  if (!d) return null;
  return (
    <p className="tbc-byline">
      By <Link to="/#about-faq-title">Talha</Link> · Published <time dateTime={d.published}>{formatDate(d.published)}</time> · Updated{" "}
      <time dateTime={d.modified}>{formatDate(d.modified)}</time>
    </p>
  );
}
