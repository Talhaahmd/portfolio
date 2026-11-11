import { Link } from "react-router-dom";

// Visible breadcrumb trail; matches the BreadcrumbList JSON-LD added by PageMeta.
export default function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="tbc">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
