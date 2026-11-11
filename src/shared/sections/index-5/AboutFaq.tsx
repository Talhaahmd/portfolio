import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import SocialLinks from "@/shared/elements/SocialLinks";
import "./AboutFaq.css";

const ext = (href: string, label: string) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
    </a>
);

// Visible Q&A: `a` is the plain-text answer used for the FAQPage structured data (see Home5Page);
// `body` is what is rendered on the page (same wording, with links).
export const FAQS: { q: string; a: string; body: ReactNode }[] = [
    {
        q: "Who is Talha Speaks AI?",
        a: "I'm Talha, an AI engineer and entrepreneur from Lahore, Pakistan. I build AI-powered products, intelligent automation systems, and scalable software while sharing what I build and learn along the way.",
        body: (
            <p>
                I&apos;m Talha, an AI engineer and entrepreneur from Lahore, Pakistan. I build AI-powered products, intelligent automation systems, and scalable software while sharing what I build and learn along the way.
            </p>
        ),
    },
    {
        q: "What does Talha do?",
        a: "I work at the intersection of AI engineering, software development, and business growth. I build AI applications, develop automation systems, work with SaaS businesses, and create educational content around emerging AI technologies.",
        body: (
            <p>
                I work at the intersection of AI engineering, software development, and business growth. I build AI applications, develop automation systems, work with SaaS businesses, and create educational content around emerging AI technologies.
            </p>
        ),
    },
    {
        q: "What does Talha teach?",
        a: "I share practical tutorials on Claude, AI agents, Claude Skills, AI automation, software development, and using AI to build products and generate business opportunities.",
        body: (
            <p>
                I share practical tutorials on Claude, AI agents, <Link to="/claude-skills">Claude Skills</Link>, AI automation, software development, and using AI to build products and generate business opportunities.
            </p>
        ),
    },
    {
        q: "Which companies has Talha worked with?",
        a: "I've worked on AI, software development, automation, and digital growth projects for businesses across multiple industries and markets. My experience includes working with two Pakistani banks, Coca-Cola Pakistan, Puma Petroleums, Wusuq, and PetSmart. Beyond these, I've collaborated with startups, SaaS companies, and established businesses across North America, Europe, the Middle East, and Pakistan, helping them build digital products, implement AI solutions, automate workflows, and drive business growth.",
        body: (
            <>
                <p>
                    I&apos;ve worked on AI, software development, automation, and digital growth projects for businesses across multiple industries and markets. My experience includes working with two Pakistani banks, Coca-Cola Pakistan, Puma Petroleums, Wusuq, and PetSmart.
                </p>
                <p>
                    Beyond these, I&apos;ve collaborated with startups, SaaS companies, and established businesses across North America, Europe, the Middle East, and Pakistan, helping them build digital products, implement AI solutions, automate workflows, and drive business growth.
                </p>
            </>
        ),
    },
    {
        q: "Where can I follow Talha?",
        a: "You can find my work, tutorials, and insights across YouTube at @Talhaspeaksai, Instagram at @talhaspeaksai, and X at @talhaspeaksai. I also share professional insights and updates on LinkedIn.",
        body: (
            <p>
                You can find my work, tutorials, and insights across YouTube at {ext("https://www.youtube.com/@Talhaspeaksai", "@Talhaspeaksai")}, Instagram at{" "}
                {ext("https://www.instagram.com/talhaspeaksai/", "@talhaspeaksai")}, and X at {ext("https://x.com/talhaspeaksai", "@talhaspeaksai")}. I also share professional insights and updates on{" "}
                {ext("https://www.linkedin.com/in/muhammad-talha50/", "LinkedIn")}.
            </p>
        ),
    },
    {
        q: "Can I work with Talha?",
        a: "I'm open to collaborating with SaaS companies, startups, and businesses looking to build AI-powered products, develop custom software, implement intelligent automation, or improve their operations with AI. For business inquiries, partnerships, or project discussions, visit the contact page or email muhammad.talha@klarus.io.",
        body: (
            <>
                <p>
                    I&apos;m open to collaborating with SaaS companies, startups, and businesses looking to build AI-powered products, develop custom software, implement intelligent automation, or improve their operations with AI.
                </p>
                <p>
                    For business inquiries, partnerships, or project discussions, visit the <Link to="/contact">contact page</Link> or email{" "}
                    <a href="mailto:muhammad.talha@klarus.io">muhammad.talha@klarus.io</a>.
                </p>
            </>
        ),
    },
];

export default function AboutFaq() {
    return (
        <section className="about-faq" aria-labelledby="about-faq-title">
            <div className="container">
                <p className="about-faq__eyebrow">About</p>
                <h2 className="about-faq__title" id="about-faq-title">
                    About Talha Speaks AI
                </h2>
                <div className="about-faq__list">
                    {FAQS.map((f, i) => (
                        <details className="about-faq__item" key={f.q} open={i === 0}>
                            <summary>{f.q}</summary>
                            {f.body}
                        </details>
                    ))}
                </div>
                <div className="pt-40">
                    <SocialLinks variant="labeled" />
                </div>
            </div>
        </section>
    );
}
