import { Link } from "react-router-dom";
import "@/shared/sections/index-5/AboutFaq.css";

export const CONTACT_FAQS: { q: string; a: string }[] = [
    {
        q: "How fast will I get a reply?",
        a: "Messages sent through the contact details on this page get a reply within 1 to 2 business days. Talha is based in Lahore, Pakistan (Pakistan Standard Time, UTC+5).",
    },
    {
        q: "What can I contact Talha about?",
        a: "Questions about the free Claude skills, roadmap and motion graphics resources, collaborations and sponsored content, and AI automation projects such as n8n workflows, Claude and OpenAI integrations and MVP builds.",
    },
    {
        q: "How do I book a call?",
        a: "Use the Book an appointment button on this page to pick a time in Talha's calendar. If no slot suits you, send an email and propose a time.",
    },
    {
        q: "Where can I follow Talha instead?",
        a: "New videos and tutorials are on YouTube at @Talhaspeaksai, with shorter updates on X and Instagram at @talhaspeaksai and career content on LinkedIn.",
    },
];

export default function ContactDetails() {
    return (
        <section className="about-faq" aria-labelledby="contact-faq-title" style={{ paddingTop: 0 }}>
            <div className="container">
                <h2 className="about-faq__title" id="contact-faq-title" style={{ fontSize: "clamp(28px,4.5vw,52px)" }}>
                    Before you reach out
                </h2>
                <p className="about-faq__intro">
                    The fastest way to get what you need: check the free resources first (<Link to="/90-days-roadmap">90 days roadmap</Link>,{" "}
                    <Link to="/claude-skills">Claude skills</Link>, <Link to="/resources">motion graphics</Link>), then message or book a call.
                </p>
                <div className="about-faq__list">
                    {CONTACT_FAQS.map((f) => (
                        <details className="about-faq__item" key={f.q}>
                            <summary>{f.q}</summary>
                            <p>{f.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
