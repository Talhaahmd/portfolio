import { Link } from "react-router-dom";
import SocialLinks from "@/shared/elements/SocialLinks";
import "./AboutFaq.css";

// Visible Q&A: also exported as FAQPage structured data (see Home5Page) so search engines
// and AI assistants can answer "who is Talha Speaks AI?" directly.
export const FAQS: { q: string; a: string }[] = [
    {
        q: "Who is Talha Speaks AI?",
        a: "Talha Speaks AI is the brand of Talha, an AI creator based in Lahore, Pakistan. He teaches Claude, AI automation and practical AI skills on YouTube, builds AI software, and shares free resources for people who want to work with AI.",
    },
    {
        q: "What does Talha teach?",
        a: "Claude and Claude skills, AI automation workflows (including n8n), prompting, and how to use AI for marketing, sales and freelance client work. Every topic comes with free videos, prompts or templates.",
    },
    {
        q: "Where can I follow Talha Speaks AI?",
        a: "On YouTube at @Talhaspeaksai, and on X and Instagram at @talhaspeaksai. Talha also shares career and AI content on LinkedIn.",
    },
    {
        q: "What free resources are available?",
        a: "A 90 day roadmap to land international remote jobs, six Claude skills every freelancer should know, and a gallery of 83 AI motion graphics made with Claude, each with the exact prompt.",
    },
    {
        q: "How can I work with Talha or book a call?",
        a: "Use the contact page to send a message or book an appointment, or email muhammad.talha@klarus.io.",
    },
];

export default function AboutFaq() {
    return (
        <section className="about-faq" aria-labelledby="about-faq-title">
            <div className="container">
                <p className="about-faq__eyebrow">About</p>
                <h2 className="about-faq__title" id="about-faq-title">
                    Who is Talha Speaks AI?
                </h2>
                <p className="about-faq__intro">
                    I&apos;m Talha, an AI creator from Lahore, Pakistan. I make videos and free resources that teach Claude, AI automation and the skills that get you hired.
                </p>
                <div className="about-faq__list">
                    {FAQS.map((f, i) => (
                        <details className="about-faq__item" key={f.q} open={i === 0}>
                            <summary>{f.q}</summary>
                            <p>
                                {f.a}
                                {i === 3 ? (
                                    <>
                                        {" "}
                                        Start with the <Link to="/90-days-roadmap">90 day roadmap</Link>, the <Link to="/claude-skills">Claude skills guide</Link> or the{" "}
                                        <Link to="/resources">motion graphics gallery</Link>.
                                    </>
                                ) : i === 4 ? (
                                    <>
                                        {" "}
                                        Go to the <Link to="/contact">contact page</Link>.
                                    </>
                                ) : null}
                            </p>
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
