import { Link, useLocation } from "react-router-dom";
import { canonicalPath } from "@/seo/site";
import "./Breadcrumbs.css";

const ALL = [
  { to: "/90-days-roadmap", title: "90 Days Roadmap", text: "A step-by-step plan and free downloads to land international remote jobs." },
  { to: "/claude-skills", title: "Claude Skills for Freelancers", text: "Six Claude skills for marketing, sales and client work, with setup steps." },
  { to: "/ai-websites", title: "AI Websites", text: "239 free AI website designs with hover previews and filters." },
  { to: "/lead-generation", title: "Lead Generation", text: "Generate leads with Claude and LinkedIn, with a full video guide." },
  { to: "/resources", title: "Claude Motion Graphics", text: "83 AI motion graphics made with Claude, each with the exact prompt." },
  { to: "/contact", title: "Contact and book a call", text: "Questions, collaborations or a project? Send a message or book a call." },
];

// "Keep exploring" cards: internal links to the other pages (current page excluded).
export default function RelatedLinks() {
  const here = canonicalPath(useLocation().pathname);
  return (
    <section className="tbc-related" aria-labelledby="related-title">
      <div className="container">
        <h2 id="related-title">Keep exploring</h2>
        <div className="tbc-related__grid">
          {ALL.filter((l) => l.to !== here).map((l) => (
            <Link key={l.to} to={l.to} className="tbc-related__card">
              <strong>{l.title}</strong>
              <span>{l.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
