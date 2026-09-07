import { useState } from "react";
import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 5 Section 6 - Career Path & Expertise (My Journey)

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
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
        <path d="M4.512 10.8V0H6.984V10.8H4.512ZM0 6.6V4.2H11.52V6.6H0Z" fill="currentColor" />
    </svg>
);

const JOURNEY_ITEMS = [
    {
        date: "Jan 2025 – Present",
        title: "Customer Success Manager - ",
        company: "Integriti Pvt Ltd",
        desc: "Driving client retention strategies and overseeing onboarding processes to ensure seamless product adoption.",
    },
    {
        date: "Aug 2025 – Present",
        title: "Founder - ",
        company: "Talhaspeaksai",
        desc: "Building and scaling an AI-focused venture, overseeing product strategy, partnerships, and growth.",
    },
    {
        date: "Nov 2024 – Dec 2025",
        title: "Software Development Lead - ",
        company: "Talha Speaks AI",
        desc: "Led go-to-market campaigns and managed development pipelines for AI-powered solutions.",
    },
    {
        date: "June 2024 – Sept 2024",
        title: "Software Engineer - ",
        company: "UX Huts",
        desc: "Designed intuitive user interfaces and conducted code updates for python based applications.",
    },
];

function CVEmailModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setError("");
        setSubmitted(true);
        setTimeout(() => {
            onClose();
            setSubmitted(false);
            setEmail("");
        }, 2200);
    };

    if (!isOpen) return null;

    return (
        <>
            <div id="cv-modal-overlay" onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", animation: "cvFadeIn .25s ease" }} />
            <div id="cv-modal-card" role="dialog" aria-modal="true" aria-labelledby="cv-modal-title" style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", pointerEvents: "none" }}>
                <div style={{ pointerEvents: "auto", background: "linear-gradient(145deg, #1a1a1a 0%, #111111 100%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "clamp(28px, 6vw, 48px) clamp(24px, 5vw, 44px)", width: "100%", maxWidth: "480px", boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)", animation: "cvSlideUp .3s cubic-bezier(.34,1.56,.64,1)", position: "relative" }}>
                    <button id="cv-modal-close" onClick={onClose} aria-label="Close modal" style={{ position: "absolute", top: "16px", right: "18px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "50%", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#ffffff", fontSize: "18px", lineHeight: 1, transition: "background .2s, transform .2s" }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.18)"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)"; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; }}>×</button>
                    <div style={{ marginBottom: "20px" }}>
                        <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg, #3b3b3b 0%, #2a2a2a 100%)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 18V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 15L12 18L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                    </div>
                    <h2 id="cv-modal-title" style={{ color: "#ffffff", fontSize: "clamp(20px, 4vw, 26px)", fontWeight: 600, marginBottom: "8px", lineHeight: 1.25 }}>Get My CV</h2>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", marginBottom: "28px", lineHeight: 1.6 }}>To receive my CV, please enter your email address below. I'll send it straight to your inbox.</p>
                    {submitted ? (
                        <div style={{ textAlign: "center", padding: "24px 0", animation: "cvFadeIn .3s ease" }}><div style={{ fontSize: "40px", marginBottom: "12px" }}>🎉</div><p style={{ color: "#ffffff", fontWeight: 600, fontSize: "16px", marginBottom: "4px" }}>You're all set!</p><p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>Check your inbox — the CV is on its way.</p></div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            <label htmlFor="cv-email-input" style={{ display: "block", color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500, marginBottom: "8px", letterSpacing: "0.02em" }}>Email Address</label>
                            <input id="cv-email-input" type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={e => { setEmail(e.target.value); setError(""); }} style={{ width: "100%", padding: "14px 16px", background: "rgba(255,255,255,0.06)", border: `1px solid ${error ? "#ff6b6b" : "rgba(255,255,255,0.14)"}`, borderRadius: "12px", color: "#ffffff", fontSize: "16px", outline: "none", boxSizing: "border-box", transition: "border-color .2s", marginBottom: error ? "6px" : "20px" }} onFocus={e => { (e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.4)"; }} onBlur={e => { (e.currentTarget as HTMLInputElement).style.borderColor = error ? "#ff6b6b" : "rgba(255,255,255,0.14)"; }} />
                            {error && (<p style={{ color: "#ff6b6b", fontSize: "12px", marginBottom: "16px", marginTop: "2px" }}>{error}</p>)}
                            <button id="cv-submit-btn" type="submit" style={{ width: "100%", padding: "15px", background: "#ffffff", color: "#111111", border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: 600, cursor: "pointer", letterSpacing: "0.01em", transition: "opacity .2s, transform .15s" }} onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.88"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}>Send Me the CV →</button>
                            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", textAlign: "center", marginTop: "14px" }}>No spam. Your email is safe with me.</p>
                        </form>
                    )}
                </div>
            </div>
            <style>{`
                @keyframes cvFadeIn  { from { opacity: 0 }          to { opacity: 1 } }
                @keyframes cvSlideUp { from { opacity: 0; transform: translateY(28px) scale(.97) } to { opacity: 1; transform: translateY(0) scale(1) } }
                #cv-email-input::placeholder { color: rgba(255,255,255,0.25); }
                #cv-email-input:focus { border-color: rgba(255,255,255,0.4) !important; }
            `}</style>
        </>
    );
}

export default function Section6() {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = (e: React.MouseEvent) => { e.preventDefault(); setModalOpen(true); };

    return (
        <>
            <CVEmailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
            <div className="sec-6-home-5 block-journey pt-120 pb-120 bg-neutral-900 changeless">
                <div className="container">
                    <div className="row g-4 align-items-end pb-60">
                        <div className="col-xxl-7 col-lg-9">
                            <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase text-white">
                                    <span className="text-1">My journey</span>
                                    <span className="text-2">My journey</span>
                                </span>
                                <i>{ARROW_SVG}{ARROW_SVG}</i>
                            </span>
                            <h3 className="text-white reveal-text"><RevealText>Career Path & Expertise</RevealText></h3>
                            <p className="text-white fz-font-lg m-0">Tracking the evolution of successful Product Lifecycle, Market Experience, and reliable automations.</p>
                        </div>
                        <div className="col-lg-3 ms-lg-auto d-flex justify-content-lg-end">
                            <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                                <Link className="at-btn-circle bg-neutral-700" to="https://calendar.app.google/8o7kWArjFZQchGAEA">{ARROW_CIRCLE_SVG}</Link>
                                <Link className="at-btn z-index-1 bg-neutral-700" to="https://calendar.app.google/8o7kWArjFZQchGAEA">Book A Call Now</Link>
                                <Link className="at-btn-circle bg-neutral-700" to="https://calendar.app.google/8o7kWArjFZQchGAEA">{ARROW_CIRCLE_SVG}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-xxl-4 col-lg-5">
                            <div className="alt-portfolio-item mb-30 at-hover-item">
                                <a href="#" id="cv-download-card" onClick={openModal} className="alt-portfolio-thumb mb-15 p-relative fix d-block">
                                    <img className="w-100 scale-img-from-to" data-value-1="1.5" data-value-2="1" src="public/assets/imgs/pages/Untitled design.svg" alt="Talha Speaks AI" width={550} height={540} loading="lazy" />
                                    <div className="alt-portfolio-btn">
                                        <div className="content">
                                            <h2 className="fw-400 fz-font-3xl text-white mb-0 mt-20">Click to download my Résumé.</h2>
                                            <p className="text-white fz-font-md mb-0 mt-10 text-truncate-2 des">I have had the privilege of working on a diverse range of projects.</p>
                                        </div>
                                    </div>
                                </a>
                                <div className="alt-portfolio-content d-flex justify-content-between align-items-center bg-neutral-700">
                                    <h5 className="alt-portfolio-title mb-0">
                                        <a href="#" id="cv-download-link" onClick={openModal} className="common-underline text-white">Download CV.</a>
                                    </h5>
                                    <span className="alt-portfolio-plus text-white">{PLUS_ICON}</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 ms-auto pt-80">
                            <ul className="journey-list" role="list">
                                {JOURNEY_ITEMS.map((item, i) => (
                                    <li key={i} className="journey-list__item scroll-move-up">
                                        <span className="journey-list__date">{item.date}</span>
                                        <div className="journey-list__body">
                                            <h6 className="journey-list__title neutral-0">{item.title} <span className="journey-list__company">{item.company}</span></h6>
                                            <p className="journey-list__desc">{item.desc}</p>
                                        </div>
                                        <Link to="#" className="journey-list__link" aria-label="View details">{ARROW_SVG}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
