import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCaseStudies, getRelatedCaseStudies, type CaseStudy } from "@/lib/supabase";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const PLUS_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
        <path d="M4.512 10.8V0H6.984V10.8H4.512ZM0 6.6V4.2H11.52V6.6H0Z" fill="currentColor" />
    </svg>
);

type RelatedCard = {
    img: string;
    alt: string;
    tag: string;
    title: string;
    description: string;
    projectName: string;
    href: string;
    contentMt15: boolean;
};

const FALLBACK_RELATED_PROJECTS: RelatedCard[] = [
    {
        img: "/assets/imgs/pages/img-184.webp",
        alt: "Data Intelligence",
        tag: "Analytics",
        title: "Decision Systems & Analytics",
        description: "Intelligent data pipelines and real-time decision metrics for scale.",
        projectName: "Data Intelligence",
        href: "/portfolio-details-1/data-intelligence",
        contentMt15: true,
    },
    {
        img: "/assets/imgs/pages/img-185.webp",
        alt: "AI Workflows",
        tag: "LLMs & Automation",
        title: "Autonomous Agent Integration",
        description: "Custom agentic workflows built to handle automated task routing.",
        projectName: "AI Workflows",
        href: "/portfolio-details-1/ai-workflows",
        contentMt15: true,
    },
    {
        img: "/assets/imgs/pages/img-186.webp",
        alt: "Distributed ML Pipeline",
        tag: "Cloud-Native",
        title: "Scalable Infrastructure & Kubernetes",
        description: "Auto-scaling ML model serving with low-latency execution.",
        projectName: "Distributed ML Pipeline",
        href: "/portfolio-details-1/distributed-ml-pipeline",
        contentMt15: false,
    },
];

function RelatedCardItem({ img, alt, tag, title, description, projectName, href, contentMt15 }: RelatedCard) {
    return (
        <div className="alt-portfolio-item at-hover-item mb-30">
            <Link
                to={href}
                className={`alt-portfolio-thumb p-relative fix d-block ${contentMt15 ? "" : "mb-15"}`.trim()}
            >
                <span className="w-100 d-block scale-img-from-to" data-value-1="1.5" data-value-2="1">
                    <img
                        className="w-100 img-cover"
                        src={img}
                        alt={alt}
                        width={400}
                        height={500}
                        loading="lazy"
                    />
                </span>
                <div className="alt-portfolio-btn">
                    <div className="content">
                        <span className="bg-transparent text-uppercase border px-3 py-1 rounded-pill text-white fz-font-label">
                            {tag}
                        </span>
                        <h2 className="fw-400 fz-font-3xl text-white mb-0 mt-20">{title}</h2>
                        <p className="text-white fz-font-md mb-0 mt-10 text-truncate-2 des">{description}</p>
                    </div>
                </div>
            </Link>
            <div className={`alt-portfolio-content d-flex justify-content-between align-items-center ${contentMt15 ? "mt-15" : ""}`.trim()}>
                <h5 className="alt-portfolio-title mb-0">
                    <Link to={href} className="common-underline">
                        {projectName}
                    </Link>
                </h5>
                <span className="alt-portfolio-plus neutral-950">{PLUS_SVG}</span>
            </div>
        </div>
    );
}

type Section2Props = {
    currentSlug?: string;
    relatedSlugs?: string[];
};

export default function Section2({ currentSlug, relatedSlugs }: Section2Props) {
    const [relatedCards, setRelatedCards] = useState<RelatedCard[]>(FALLBACK_RELATED_PROJECTS);

    useEffect(() => {
        if (relatedSlugs && relatedSlugs.length > 0) {
            getRelatedCaseStudies(relatedSlugs).then((data) => {
                if (data && data.length > 0) {
                    setRelatedCards(mapCaseStudiesToCards(data));
                }
            });
        } else {
            getCaseStudies().then((data) => {
                if (data && data.length > 0) {
                    const filtered = data.filter((cs) => cs.slug !== currentSlug).slice(0, 3);
                    if (filtered.length > 0) {
                        setRelatedCards(mapCaseStudiesToCards(filtered));
                    }
                }
            });
        }
    }, [currentSlug, relatedSlugs]);

    function mapCaseStudiesToCards(list: CaseStudy[]): RelatedCard[] {
        return list.map((cs, idx) => ({
            img: cs.card_image || cs.featured_image || `/assets/imgs/pages/img-18${4 + (idx % 3)}.webp`,
            alt: cs.title,
            tag: cs.category || (cs.tags && cs.tags[0]) || "Case Study",
            title: cs.tagline || cs.title,
            description: cs.featured_description || cs.intro_paragraph || "Explore our latest system architecture and engineering work.",
            projectName: cs.title,
            href: `/portfolio-details-1/${cs.slug}`,
            contentMt15: idx % 2 === 0,
        }));
    }

    return (
        <section className="sec-2-portfolio-details-1 overflow-hidden pt-100 pb-100 bg-neutral-50">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">Related projects</span>
                                <span className="text-2">Related projects</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                    </div>
                </div>
                <div className="row mt-30">
                    {relatedCards.map((card, idx) => (
                        <div key={`${card.projectName}-${idx}`} className="col-lg-4 col-md-6">
                            <RelatedCardItem {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
