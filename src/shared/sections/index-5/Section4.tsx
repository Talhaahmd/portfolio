import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 5 Section 4 - Resources showcase

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const ARROW_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path
            d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z"
            fill="currentColor"
        />
    </svg>
);

const PLUS_ICON = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

const RESOURCES = [
    {
        img: thumb("z9LbYi_YeOU"),
        alt: "90 Days Roadmap",
        tags: ["Roadmap", "Remote Jobs", "CV & LinkedIn"],
        title: "Your 90 Days Roadmap",
        description:
            "A step-by-step plan to build in-demand skills, create real projects, polish your CV and LinkedIn, and land international remote jobs from Pakistan.",
        linkText: "START THE ROADMAP",
        href: "/90-days-roadmap",
    },
    {
        img: thumb("I1t-e21brR8"),
        alt: "Claude Motion Graphics",
        tags: ["Motion Graphics", "Claude Code", "Prompts"],
        title: "Claude Motion Graphics",
        description:
            "83 AI motion graphics made with Claude, each with the exact prompt. Copy a prompt or remix the idea into a paid service.",
        linkText: "BROWSE THE GALLERY",
        href: "/resources",
    },
    {
        img: thumb("V9xPG7KTbbI"),
        alt: "Claude Skills",
        tags: ["Claude Skills", "Marketing", "Sales"],
        title: "Claude Skills for Freelancers",
        description:
            "Six Claude skills for marketing, sales and client work, with setup steps and a full video walkthrough.",
        linkText: "SEE THE SKILLS",
        href: "/claude-skills",
    },
];

export default function Section4() {
    return (
        <div className="bg-neutral-50">
            <div className="container-2200">
                <section className="sec-4-home-5 pt-100 pb-100 rounded-5 mx-lg-3 mx-2 fix p-relative bg-neutral-0">
                    <div className="container">
                        <div className="row g-4 align-items-end">
                            <div className="col-lg-7">
                                <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">LEARN &amp; BUILD</span>
                                        <span className="text-2">LEARN &amp; BUILD</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                                <h2 className="reveal-text mb-0">
                                    <RevealText>My resources</RevealText>
                                </h2>
                            </div>
                            <div className="col-lg-3 ms-auto d-flex justify-content-lg-end">
                                <div
                                    className="at-btn-group at_fade_anim"
                                    data-delay=".4"
                                    data-fade-from="bottom"
                                    data-ease="bounce"
                                >
                                    <Link className="at-btn-circle" to="/90-days-roadmap" aria-label="Get free resources">
                                        {ARROW_CIRCLE_SVG}
                                    </Link>
                                    <Link className="at-btn z-index-1" to="/90-days-roadmap">
                                        Get Free Resources
                                    </Link>
                                    <Link className="at-btn-circle" to="/90-days-roadmap" aria-label="Get free resources">
                                        {ARROW_CIRCLE_SVG}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container pt-70">
                        <div className="row g-4">
                            {RESOURCES.map((r) => (
                                <div key={r.href} className="col-lg-4 col-md-6">
                                    <div className="card_case__studies-list card_case__studies-list--row">
                                        <div className="card_case__studies-card card_case__studies-card--overlay bg-neutral-100">
                                            <div className="card_case__studies-visual anim-zoomin">
                                                <Link to={r.href}>
                                                    <img
                                                        src={r.img}
                                                        alt={r.alt}
                                                        width={600}
                                                        height={338}
                                                        loading="lazy"
                                                        style={{ aspectRatio: "16 / 9", objectFit: "cover" }}
                                                    />
                                                </Link>
                                                <div className="card_case__studies-tags-overlay">
                                                    {r.tags.map((tag) => (
                                                        <Link key={tag} to={r.href} className="card_case__studies-tag">
                                                            {tag}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="card_case__studies-footer mt-10 bg-neutral-0 flex-column align-items-start gap-2">
                                                <h3 className="card_case__studies-footer-title neutral-900 mb-0 h5">
                                                    <Link to={r.href}>{r.title}</Link>
                                                </h3>
                                                <p className="neutral-900 mb-0 fz-sm">{r.description}</p>
                                                <Link to={r.href} className="card_case__studies-link neutral-900">
                                                    <span className="neutral-900"> {r.linkText}</span>
                                                    {PLUS_ICON}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
