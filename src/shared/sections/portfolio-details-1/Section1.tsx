import { Link } from "react-router-dom";
import type { CaseStudy } from "@/lib/supabase";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="d-flex justify-content-between border-bottom-100 py-4">
            <p className="fz-font-md neutral-900 mb-0">{label}</p>
            <p className="fz-font-lg fw-600 mb-0 neutral-900">{value}</p>
        </div>
    );
}

type Section1Props = {
    caseStudy?: CaseStudy | null;
};

export default function Section1({ caseStudy }: Section1Props) {
    const title = caseStudy?.title || "Smart Automation & AI Systems";
    const tagline = caseStudy?.tagline || caseStudy?.eyebrow || "AI Architecture & Engineering";
    const demoUrl = caseStudy?.demo_url || "#";

    const client = caseStudy?.meta_client || caseStudy?.client_name || "Klarus Enterprise Partner";
    const releaseDate = caseStudy?.meta_year || "2024";
    const role = caseStudy?.meta_role || "AI & Automation Engineer";
    const duration = caseStudy?.meta_duration || "6 Weeks";

    const introParagraph =
        caseStudy?.intro_paragraph ||
        caseStudy?.featured_description ||
        "A comprehensive AI architecture and automation deployment designed to streamline complex business workflows, boost operational efficiency, and establish a scalable infrastructure.";

    const processTitle = caseStudy?.process_title || "Challenge & Approach";
    const challengeIntro =
        caseStudy?.intro_headline ||
        "The objective was to transform fragmented operational processes into an automated, high-throughput system—balancing speed, security, and accuracy.";

    const processSteps =
        caseStudy?.process_steps && caseStudy.process_steps.length > 0
            ? caseStudy.process_steps
            : [
                  { num: "01", title: "Analysis", desc: "Deep analysis of system architecture and business goals" },
                  { num: "02", title: "Architecture", desc: "Designing modular, resilient workflow pipelines" },
                  { num: "03", title: "Integration", desc: "Seamless API & LLM integration with error handling" },
                  { num: "04", title: "Deployment", desc: "Automated testing and cloud-native scaling" },
              ];

    const solutionHeading = caseStudy?.solution_heading || "The Solution";
    const solutionParagraph =
        caseStudy?.solution_paragraph ||
        "We engineered an end-to-end automated pipeline featuring intelligent LLM routing, real-time monitoring, and robust state management. This solution eliminated bottlenecks and significantly reduced operational overhead.";

    const solutionItems =
        caseStudy?.solution_items && caseStudy.solution_items.length > 0
            ? caseStudy.solution_items
            : [
                  "Custom autonomous AI agents tailored for domain tasks",
                  "Real-time fallback handling and structured output validation",
                  "Production-ready deployment with enterprise-grade security",
                  "Comprehensive analytics dashboard for performance monitoring",
              ];

    const outcomeHeading = caseStudy?.outcome_heading || "Outcome";
    const outcomeParagraph =
        caseStudy?.outcome_paragraph ||
        "The deployed solution achieved over 40% reduction in manual effort while maintaining 99.9% uptime. It empowers the client team to focus on strategic growth while automated systems handle routine execution smoothly.";

    const quoteText =
        caseStudy?.quote_text ||
        "\"Klarus AI completely transformed how we operate. Their strategic engineering and attention to reliability delivered an automated system that drives measurable impact every single day.\"";
    const quoteAuthor = caseStudy?.quote_author || "Engineering Lead";
    const quoteRole = caseStudy?.quote_role || "Klarus Enterprise Partner";

    return (
        <section className="sec-1-portfolio-details-1 overflow-hidden pt-150 pb-100">
            <div className="container">
                {/* Header */}
                <div className="row g-3 align-items-end">
                    <div className="col-md-9">
                        <h1 className="fz-ds-1 lh-1 fw-500 d-flex mb-0">
                            {title}
                        </h1>
                        <h5 className="fw-600 mb-0 mt-2 neutral-600">{tagline}</h5>
                    </div>
                    {demoUrl && demoUrl !== "#" && (
                        <div className="col-md-3 ms-auto text-md-end">
                            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="border-bottom-900 d-inline-block">
                                <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">live demo</span>
                                        <span className="text-2">live demo</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                            </a>
                        </div>
                    )}
                    <div className="col-12">
                        <div className="border-bottom-100 pb-30" />
                    </div>
                </div>

                {/* Introduction */}
                <div className="row mt-50">
                    <div className="col-lg-5">
                        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
                            <ul className="sec-2-home-5__list list-unstyled mb-0">
                                <li className="sec-2-home-5__list-item">
                                    <h6 className="mb-0 fw-600">Introduction</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <InfoRow label="Client" value={client} />
                        <InfoRow label="Release Date" value={releaseDate} />
                        <InfoRow label="Role" value={role} />
                        <InfoRow label="Duration" value={duration} />
                        <p className="fz-font-2xl fw-400 neutral-900 mt-40">
                            {introParagraph}
                        </p>
                    </div>
                </div>

                {/* Challenge & Approach */}
                <div className="row mt-80">
                    <div className="col-lg-5">
                        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
                            <ul className="sec-2-home-5__list list-unstyled mb-0">
                                <li className="sec-2-home-5__list-item">
                                    <h6 className="mb-0 fw-600">{processTitle}</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className="fz-font-xl neutral-900 mt-40">
                            {challengeIntro}
                        </p>
                        <ul className="ps-4 mt-3">
                            {processSteps.map((step, idx) => (
                                <li key={idx} className="neutral-950 mb-2">
                                    <strong>{step.title || `Step ${step.num}`}:</strong> {step.desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Solution */}
                <div className="row mt-80">
                    <div className="col-lg-5">
                        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
                            <ul className="sec-2-home-5__list list-unstyled mb-0">
                                <li className="sec-2-home-5__list-item">
                                    <h6 className="mb-0 fw-600">{solutionHeading}</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className="fz-font-xl neutral-900 mt-40">
                            {solutionParagraph}
                        </p>
                        <h6 className="py-3">Key Solution Features</h6>
                        <ul className="ps-4">
                            {solutionItems.map((item, idx) => (
                                <li key={idx} className="neutral-950 mb-2">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Outcome */}
                <div className="row mt-80">
                    <div className="col-lg-5">
                        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
                            <ul className="sec-2-home-5__list list-unstyled mb-0">
                                <li className="sec-2-home-5__list-item">
                                    <h6 className="mb-0 fw-600">{outcomeHeading}</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className="fz-font-xl fw-500 neutral-900 mt-40">
                            {outcomeParagraph}
                        </p>
                        <div className="py-3 border-bottom-100" />
                        <div className="testimonial-content pt-60">
                            <p className="fz-3xl neutral-900 fw-400">
                                {quoteText}
                            </p>
                            <h6 className="testimonial-content-author-name fw-600 mb-0 fz-font-md">
                                {quoteAuthor}
                            </h6>
                            <p className="testimonial-content-author-position m-0 fz-font-label">
                                {quoteRole}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
