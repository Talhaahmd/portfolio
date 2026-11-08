import RevealText from "@/shared/effects/RevealText";
import "./ClaudeSkillsSection.css";

const TUTORIAL_URL = "https://youtu.be/V9xPG7KTbbI";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const GITHUB_ICON = (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path
            fill="currentColor"
            d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
        />
    </svg>
);

const PLAY_ICON = (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M8 5v14l11-7z" />
    </svg>
);

const SKILLS = [
    {
        number: "01",
        title: "Marketing & SEO",
        tagline: "Turn Claude into your marketing and SEO assistant.",
        description:
            "Audit websites, identify content gaps, develop SEO strategies, optimize landing pages, and create actionable marketing plans.",
        bullets: ["Website audits", "Content gap analysis", "SEO strategy", "Landing page optimization", "Marketing plans"],
        repoName: "Marketing Skills",
        repo: "https://github.com/risukisu/marketing-skills",
        image: "/assets/imgs/skills/marketing-seo.svg",
        itemClass: "pb-40",
    },
    {
        number: "02",
        title: "PRD Writer",
        tagline: "Turn business ideas into developer-ready documentation.",
        description:
            "Create product requirement documents, define software features, map user workflows, and document functional requirements.",
        bullets: ["Product requirement docs", "Feature definitions", "User workflow mapping", "Functional requirements"],
        repoName: "PRD Writer",
        repo: "https://github.com/GarrusHuang/prd-writer",
        image: "/assets/imgs/skills/prd-writer.svg",
        itemClass: "pb-40",
    },
    {
        number: "03",
        title: "Cold Outreach & Lead Generation",
        tagline: "Find prospects and build smarter B2B outreach campaigns.",
        description:
            "Define ideal customer profiles, research prospects, qualify leads, and write personalized cold emails.",
        bullets: ["Ideal customer profiles", "Prospect research", "Lead qualification", "Personalized cold emails"],
        repoName: "Cold Outreach Skills",
        repo: "https://github.com/Mistrymm7/cold-outreach-skills",
        image: "/assets/imgs/skills/cold-outreach.svg",
        itemClass: "pb-40",
    },
    {
        number: "04",
        title: "LinkedIn Growth",
        tagline: "Build a stronger professional presence with Claude.",
        description:
            "Optimize LinkedIn profiles, generate post ideas, write engaging content, and develop consistent personal branding strategies.",
        bullets: ["Profile optimization", "Post ideas", "Engaging content", "Personal branding"],
        repoName: "LinkedIn Agent Skill",
        repo: "https://github.com/Jakeschincariol/linkedin-agent-skill",
        image: "/assets/imgs/skills/linkedin-growth.svg",
        itemClass: "pb-40",
    },
    {
        number: "05",
        title: "Instagram Growth",
        tagline: "Create better Instagram content strategies with AI.",
        description:
            "Research content ideas, generate Reel hooks, write captions, optimize profiles, and plan weekly content calendars.",
        bullets: ["Content research", "Reel hooks", "Captions", "Profile optimization", "Weekly content calendars"],
        repoName: "Instagram Agent Skill",
        repo: "https://github.com/Jakeschincariol/instagram-agent-skill",
        image: "/assets/imgs/skills/instagram-growth.svg",
        itemClass: "pb-40",
    },
    {
        number: "06",
        title: "Sales Engineering & RFP",
        tagline: "Simplify technical sales and business proposal workflows.",
        description:
            "Analyze RFPs, extract client requirements, prepare compliance matrices, and create structured technical proposals.",
        bullets: ["RFP analysis", "Requirement extraction", "Compliance matrices", "Technical proposals"],
        repoName: "Sales Engineer Skill",
        repo: "https://github.com/borghei/Claude-Skills/tree/main/business-growth/sales-engineer",
        image: "/assets/imgs/skills/sales-engineering.svg",
        itemClass: "pb-50",
    },
];

type ClaudeSkillsSectionProps = {
    className?: string;
};

export default function ClaudeSkillsSection({ className }: ClaudeSkillsSectionProps) {
    return (
        <div className={`container-2200 ${className ?? ""}`.trim()}>
            <section className="at-service-area bg-neutral-50 rounded-5 mx-lg-3 mx-2 pt-120 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="at-service-subtitle-wrap at-about-border d-flex justify-content-between gap-3 mb-50">
                                <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                    <span className="text-uppercase">
                                        <span className="text-1">Six Claude Skills</span>
                                        <span className="text-2">Six Claude Skills</span>
                                    </span>
                                    <i>
                                        {ARROW_SVG}
                                        {ARROW_SVG}
                                    </i>
                                </span>
                                <span className="fs-font-md fw-500 text-decoration-underline">© Talha Speaks AI</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-section vertical-section position-relative">
                    <div className="wrapper">
                        {SKILLS.map((skill) => (
                            <div key={skill.number} className="item">
                                <div className={`container bg-neutral-50 pt-20 ${skill.itemClass}`}>
                                    <div className="row align-items-center cs-item">
                                        <div className="col-lg-6 col-12">
                                            <div className="d-flex flex-column justify-content-center h-100 py-4 px-2">
                                                <a
                                                    className="cs-card-link"
                                                    href={skill.repo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={`${skill.title} — open ${skill.repoName} on GitHub`}
                                                >
                                                    <span className="cs-num">{skill.number}</span>
                                                    <h2 className="cs-title">{skill.title}</h2>
                                                </a>
                                                <p className="cs-tagline neutral-950">{skill.tagline}</p>
                                                <p className="fz-font-2xl neutral-950 reveal-text mb-4">
                                                    <RevealText>{skill.description}</RevealText>
                                                </p>
                                                <ul className="cs-list neutral-950">
                                                    {skill.bullets.map((b) => (
                                                        <li key={b}>{b}</li>
                                                    ))}
                                                </ul>
                                                <div className="cs-actions">
                                                    <a className="cs-btn yt" href={TUTORIAL_URL} target="_blank" rel="noreferrer">
                                                        {PLAY_ICON}
                                                        Watch full tutorial
                                                    </a>
                                                    <a className="cs-btn gh" href={skill.repo} target="_blank" rel="noreferrer">
                                                        {GITHUB_ICON}
                                                        GitHub repository
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 offset-lg-1">
                                            <div className="cs-img">
                                                <img
                                                    src={skill.image}
                                                    alt={`${skill.title} illustration`}
                                                    width={600}
                                                    height={400}
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
