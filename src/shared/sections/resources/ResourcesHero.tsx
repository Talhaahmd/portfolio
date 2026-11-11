// Resources page hero — same look as Home 5 hero (grid backdrop, tag, big title, portrait image)
import SocialLinks from "@/shared/elements/SocialLinks";
import Breadcrumbs from "@/shared/elements/Breadcrumbs";
import PageByline from "@/shared/elements/PageByline";
import "@/shared/elements/Breadcrumbs.css";

const DIAMOND_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 38 38" fill="none">
        <path
            d="M19.3621 35.41C20.3107 28.6345 20.785 25.2468 23.0159 23.0158C25.2469 20.7848 28.6347 20.3105 35.4102 19.362L37.9991 18.9995L35.4102 18.6371C28.6347 17.6885 25.2469 17.2142 23.0159 14.9832C20.785 12.7522 20.3107 9.36449 19.3621 2.58901L18.9996 -4.5973e-05L18.6372 2.58898C17.6886 9.36447 17.2143 12.7522 14.9833 14.9832C12.7524 17.2142 9.36462 17.6885 2.58913 18.637L0 18.9995L2.58912 19.362C9.36461 20.3106 12.7524 20.7848 14.9833 23.0158C17.2143 25.2468 17.6886 28.6345 18.6372 35.41L18.9996 37.9991L19.3621 35.41Z"
            fill="currentColor"
        />
    </svg>
);

type ResourcesHeroProps = {
    title?: string;
    subtitle?: string;
    description?: string;
};

export default function ResourcesHero({
    title = "Claude Motion Graphics",
    subtitle = "",
    description = "The best AI motion graphics made with Claude Opus 5.5, 83 videos in all, each with the creator's exact prompt and a link to their post on X. Copy a Claude motion prompt, or remix the idea in Fliki and get a narrated motion graphics video without writing code.",
}: ResourcesHeroProps) {
    const gridColumns = 7;

    return (
        <div className="bg-neutral-50">
            <div className="container-2200 pt-140 p-relative z-0">
                {/* Background grid */}
                <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-n1 opacity-10">
                    {Array.from({ length: gridColumns }, (_, i) => (
                        <div
                            key={i}
                            className={
                                i === 3
                                    ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                    : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                            }
                        />
                    ))}
                </div>

                <div className="pb-100">
                    <div className="container-fluid px-3 px-lg-5">
                        <div className="text-center mx-auto z-index-2 p-relative" style={{ maxWidth: "100%" }}>
                            <Breadcrumbs current={title} />
                            <span className="category-tag mb-30">
                                <span className="dot" />
                                Talha Speaks AI
                            </span>
                            <h1
                                className="fw-600 lh-1 mb-30"
                                style={{ fontSize: "clamp(2.75rem, 8vw, 9rem)", letterSpacing: "-0.04em" }}
                            >
                                {title}
                            </h1>
                            <p className="fz-18 neutral-900 fw-600 mb-30" style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}>
                                {subtitle}
                            </p>
                            <p className="fz-lg neutral-900 mx-auto mb-40" style={{ maxWidth: 760, opacity: 0.8 }}>
                                {description}
                            </p>
                            <PageByline />
                            <div className="d-flex justify-content-center"><SocialLinks variant="labeled" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
