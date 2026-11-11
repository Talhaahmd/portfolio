import "./resources-mobile.css";
import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

const EXTERNAL_ICON_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path
            d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
            fill="currentColor"
        />
    </svg>
);

const DIAMOND_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.5 0H0L41.5 41.5H0L41.5 83H83L41.5 41.5H83L41.5 0Z"
            fill="currentColor"
        />
    </svg>
);

const DRIVE_URL =
    "https://drive.google.com/file/d/1t7b0ExP0loxUw5dpWNz7440wJpT4mpXM/view?usp=sharing";

type Resource = {
    number: string;
    title: string;
    description: string;
    /** External URL (new tab) or internal route */
    href: string;
    internal?: boolean;
    label: string;
    img: string;
    imgLg: string;
};

export const RESOURCES: Resource[] = [
    {
        number: "01",
        title: "Portfolio Template",
        description:
            "Clone this portfolio for your projects: a ready-made GSAP portfolio you can customize and make your own.",
        href: "https://github.com/Talhaahmd/GSAP_Portfolio.git",
        label: "GitHub",
        img: "/assets/imgs/roadmap/portfolio-clone.svg",
        imgLg: "/assets/imgs/roadmap/portfolio-clone.svg",
    },
    {
        number: "02",
        title: "90-Day Remote Job Roadmap",
        description:
            "Your complete action plan covering skill development, real-world projects, portfolio building, CV optimization, LinkedIn, and international job applications.",
        href: DRIVE_URL,
        label: "Google Drive",
        img: "/assets/imgs/roadmap/roadmap.svg",
        imgLg: "/assets/imgs/roadmap/roadmap.svg",
    },
    {
        number: "03",
        title: "ATS-Friendly CV Template",
        description:
            "A professional CV template designed to highlight your experience, skills, projects, and achievements while remaining ATS-friendly.",
        href: "https://www.overleaf.com/latex/templates/dphang-cv-template/wygbzfpbdhnj",
        label: "Overleaf",
        img: "/assets/imgs/roadmap/cv-template.svg",
        imgLg: "/assets/imgs/roadmap/cv-template.svg",
    },
    {
        number: "04",
        title: "LinkedIn Optimization Guide",
        description:
            "Learn how to optimize your LinkedIn headline, profile, experience, featured section, and professional positioning to attract international recruiters.",
        href: DRIVE_URL,
        label: "Google Drive",
        img: "/assets/imgs/roadmap/linkedin.svg",
        imgLg: "/assets/imgs/roadmap/linkedin.svg",
    },
    {
        number: "05",
        title: "Portfolio Development Guide",
        description:
            "Learn how to build a professional portfolio that showcases real-world projects, technical capabilities, and measurable results.",
        href: "/resources",
        internal: true,
        label: "Motion Graphics",
        img: "/assets/imgs/roadmap/portfolio-guide.svg",
        imgLg: "/assets/imgs/roadmap/portfolio-guide.svg",
    },
    {
        number: "06",
        title: "Cold Outreach & Networking Templates",
        description:
            "Ready-to-use message templates for connecting with recruiters, hiring managers, founders, and professionals at international companies.",
        href: DRIVE_URL,
        label: "Google Drive",
        img: "/assets/imgs/roadmap/outreach.svg",
        imgLg: "/assets/imgs/roadmap/outreach.svg",
    },
    {
        number: "07",
        title: "Interview Preparation Resources",
        description:
            "Prepare for international job interviews with practical questions, answer frameworks, communication tips, and preparation strategies.",
        href: DRIVE_URL,
        label: "Google Drive",
        img: "/assets/imgs/roadmap/interview.svg",
        imgLg: "/assets/imgs/roadmap/interview.svg",
    },
    {
        number: "08",
        title: "Essential Tools & Platforms",
        description:
            "A curated list of platforms, AI tools, job boards, and productivity resources to support your remote job search.",
        href: DRIVE_URL,
        label: "Google Drive",
        img: "/assets/imgs/roadmap/tools.svg",
        imgLg: "/assets/imgs/roadmap/tools.svg",
    },
    {
        number: "09",
        title: "Claude Skills You Need",
        description:
            "The Claude skills worth learning for marketing, sales, and client work, with setup guides and a full video walkthrough.",
        href: "/claude-skills",
        internal: true,
        label: "Claude Skills",
        img: "/assets/imgs/roadmap/claude-skills.svg",
        imgLg: "/assets/imgs/roadmap/claude-skills.svg",
    },
    {
        number: "10",
        title: "Join the Community",
        description:
            "Join the Instagram community channel for updates, resources, and conversations with others building remote careers.",
        href: "https://www.instagram.com/channel/F9Qy78l22J3o8yXw/",
        label: "Instagram",
        img: "/assets/imgs/roadmap/community.svg",
        imgLg: "/assets/imgs/roadmap/community.svg",
    },
    {
        number: "11",
        title: "Remote Jobs WhatsApp Channel",
        description:
            "Get fresh international remote job openings delivered straight to WhatsApp.",
        href: "https://whatsapp.com/channel/0029VbBvsvK9hXF3tG3ImA3l",
        label: "WhatsApp",
        img: "/assets/imgs/roadmap/whatsapp-jobs.svg",
        imgLg: "/assets/imgs/roadmap/whatsapp-jobs.svg",
    },
    {
        number: "12",
        title: "Connect with me",
        description: "Follow me on Instagram.",
        href: "https://www.instagram.com/talhaspeaksai/",
        label: "Instagram",
        img: "/assets/imgs/roadmap/instagram.svg",
        imgLg: "/assets/imgs/roadmap/instagram.svg",
    },
    {
        number: "13",
        title: "Connect with me",
        description: "Connect with me on LinkedIn.",
        href: "https://www.linkedin.com/in/muhammad-talha50/",
        label: "LinkedIn",
        img: "/assets/imgs/roadmap/linkedin.svg",
        imgLg: "/assets/imgs/roadmap/linkedin.svg",
    },
    {
        number: "14",
        title: "Watch on YouTube",
        description: "Subscribe to Talha Speaks AI on YouTube for Claude, automation and AI tutorials.",
        href: "https://www.youtube.com/@Talhaspeaksai",
        label: "YouTube",
        img: "/assets/imgs/roadmap/youtube.svg",
        imgLg: "/assets/imgs/roadmap/youtube.svg",
    },
    {
        number: "15",
        title: "Follow on X",
        description: "Follow @talhaspeaksai on X for daily AI updates and threads.",
        href: "https://x.com/talhaspeaksai",
        label: "X",
        img: "/assets/imgs/roadmap/x.svg",
        imgLg: "/assets/imgs/roadmap/x.svg",
    },
];

function ResourceList({ items }: { items: Resource[] }) {
    return (
        <>
                <div className="row pt-120">
                    <div className="col-12">
                        {items.map((r) => {
                            const inner = (
                                <>
                                    <span className="card-award-date">[ {r.number} ]</span>
                                    <div className="card-award-content">
                                        <div className="card-award-image">
                                            <img
                                                src={r.img}
                                                alt={`${r.title} resource`}
                                                width={120}
                                                height={80}
                                                className="w-100 h-100"
                                                loading="lazy"
                                            />
                                        </div>
                                        <h3 className="card-award-title mb-0 h6">{r.title}</h3>
                                    </div>
                                    <p className="card-award-web-excellence mb-0 fw-bold">{r.description}</p>
                                    <div className="card-award-meta">
                                        <span className="card-award-url fz-font-lg">{r.label}</span>
                                    </div>
                                    <div className="card-award-icon ms-auto">{EXTERNAL_ICON_SVG}</div>
                                </>
                            );
                            return (
                                <div
                                    key={r.number}
                                    className="card-award scroll-move-up"
                                    data-img-award={r.imgLg}
                                >
                                    {r.internal ? (
                                        <Link to={r.href} className="card-award-link">
                                            {inner}
                                        </Link>
                                    ) : (
                                        <a
                                            href={r.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="card-award-link"
                                        >
                                            {inner}
                                        </a>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

        </>
    );
}

export default function RoadmapResources() {
    return (
        <section className="home-2-section-7 pt-120 pb-120">
            <div className="container">
                <div className="row g-4 align-items-end">
                    <div className="col-12">
                        <h2 className="fw-500 fz-ds-1 mb-0">Resources to download.</h2>
                    </div>
                </div>

                <ResourceList items={RESOURCES} />

                <div className="row">
                    <div className="col-lg-7 col-12 ms-auto pt-80">
                        <div className="award-description d-flex gap-5">
                            <div className="icon">{DIAMOND_SVG}</div>
                            <div className="content">
                                <h3 className="revert-text mb-0 reveal-text h5">
                                    <RevealText>
                                        Everything you need to go from learning to landing your first
                                        international remote role, in one place.
                                    </RevealText>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
