import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import items from "@/data/claudeMotionGraphics.json";
import "./MotionGallery.css";

const YOUTUBE_URL = "https://youtu.be/I1t-e21brR8";
const SUBSCRIBE_URL = "https://www.youtube.com/@Talhaspeaksai?sub_confirmation=1";

type Item = (typeof items)[number];

function Card({ item, onOpen }: { item: Item; onOpen: () => void }) {
    const vid = useRef<HTMLVideoElement>(null);
    const play = () => {
        const v = vid.current;
        if (!v) return;
        if (!v.src) v.src = item.video;
        v.play().catch(() => {});
    };
    const stop = () => {
        const v = vid.current;
        if (v) {
            v.pause();
            v.currentTime = 0;
        }
    };
    return (
        <button
            type="button"
            className="mg-card"
            onClick={onOpen}
            onMouseEnter={play}
            onMouseLeave={stop}
            onFocus={play}
            onBlur={stop}
            aria-label={`${item.title} by ${item.handle} — view prompt`}
        >
            <div className="mg-media">
                <img src={item.thumbnail} alt={item.title} loading="lazy" />
                <video ref={vid} muted loop playsInline preload="none" />
                <span className="mg-hint">View prompt</span>
            </div>
            <div className="mg-title">{item.title}</div>
            <div className="mg-user">{item.handle}</div>
        </button>
    );
}

function PromptModal({ item, onClose }: { item: Item; onClose: () => void }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    const copy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(item.prompt);
        } catch {
            const ta = document.createElement("textarea");
            ta.value = item.prompt;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            ta.remove();
        }
        setCopied(true);
    }, [item.prompt]);

    return createPortal(
        <div className="mg-overlay" onClick={onClose}>
            <div className="mg-modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={(e) => e.stopPropagation()}>
                <div className="mg-head">
                    <div>
                        <h3>{item.title}</h3>
                        <a href={item.xUrl} target="_blank" rel="noreferrer">{item.handle}</a>
                    </div>
                    <button type="button" className="mg-close" onClick={onClose} aria-label="Close">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M2 2l12 12M14 2L2 14" />
                        </svg>
                    </button>
                </div>
                <div className="mg-body">
                    <video className="mg-video" src={item.video} poster={item.thumbnail} controls autoPlay loop muted playsInline />
                    <div className="mg-bar">
                        <span className="mg-label">Prompt</span>
                        <div className="mg-btns">
                            <a className="mg-yt" href={YOUTUBE_URL} target="_blank" rel="noreferrer">
                                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill="currentColor" d="M8 5v14l11-7z" />
                                </svg>
                                Watch complete YouTube tutorial
                            </a>
                            {item.post ? (
                                <a className="mg-link" href={item.post} target="_blank" rel="noreferrer">View post on X</a>
                            ) : null}
                            <button type="button" className={`mg-copy${copied ? " done" : ""}`} onClick={copy}>
                                {copied ? "Copied!" : "Copy prompt"}
                            </button>
                        </div>
                    </div>
                    {copied ? (
                        <div className="mg-sub" role="status">
                            <div>
                                <strong>Prompt copied!</strong> Enjoy it, and subscribe to Talha Speaks AI for more.
                            </div>
                            <a className="mg-yt" href={SUBSCRIBE_URL} target="_blank" rel="noreferrer">
                                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill="currentColor" d="M8 5v14l11-7z" />
                                </svg>
                                Subscribe
                            </a>
                        </div>
                    ) : null}
                    <pre className="mg-prompt">{item.prompt}</pre>
                </div>
            </div>
        </div>,
        document.body,
    );
}

export default function MotionGallery() {
    const [active, setActive] = useState<Item | null>(null);
    const close = useCallback(() => setActive(null), []);
    return (
        <section className="mg-section">
            <div className="container-fluid px-3 px-lg-5">
                <div className="mg-grid">
                    {items.map((item) => (
                        <Card key={item.post || item.title} item={item} onOpen={() => setActive(item)} />
                    ))}
                </div>
            </div>
            {active ? <PromptModal item={active} onClose={close} /> : null}
        </section>
    );
}
