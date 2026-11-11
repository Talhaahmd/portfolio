import { Link } from "react-router-dom";
import SocialLinks from "@/shared/elements/SocialLinks";
import "./MobileHero.css";

// Mobile-only hero for the home page (< 768px). Desktop uses Section1.
export default function MobileHero() {
    return (
        <section className="mh" aria-label="Introduction">
            <div className="mh__inner">
            <span className="mh__tag">
                <i />
                AI creator · Claude · Automation
            </span>
            <p className="mh__title" aria-hidden="true">
                <span className="mh__line">Talha</span>
                <span className="mh__line">
                    Speaks AI<sup>®</sup>
                </span>
            </p>
            <div className="mh__stage">
                <img
                    src="/assets/imgs/pages/webp-images/Hero image.webp"
                    alt="Talha, AI creator behind Talha Speaks AI"
                    width={560}
                    height={860}
                    fetchPriority="high"
                />
            </div>
            <p className="mh__lead">
                I&apos;m Talha, an AI creator. I teach Claude and automation on YouTube, build AI software, and help SaaS companies scale.
            </p>
            <div className="mh__cta">
                <Link className="mh__btn" to="/90-days-roadmap">
                    Get Free Resources
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
                        <path d="M1 7.5h13M8.5 1.5l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
            <div className="mh__socials">
                <p className="mh__socials-label">Follow along</p>
                <SocialLinks />
            </div>
            </div>
        </section>
    );
}
