import { useState } from "react";
import "./VideoSection.css";

const CHANNEL_URL = "https://www.youtube.com/@Talhaspeaksai";
// Both buttons use ?sub_confirmation=1 so YouTube opens its "Subscribe?" prompt on arrival.
const SUBSCRIBE_URL = `${CHANNEL_URL}?sub_confirmation=1`;

type VideoSectionProps = {
    videoId?: string;
    tag?: string;
    title?: string;
    text?: string;
    bullets?: string[];
};

export default function VideoSection({
    videoId = "I1t-e21brR8",
    tag = "Full YouTube Guide",
    title = "Make Money Creating Motion Graphics With Claude Code",
    text = "Watch the complete step-by-step guide to turning Claude motion graphics into income: how to set up your tools, write prompts that work, and deliver videos clients will pay for.",
    bullets = [
        "Complete setup, from zero to your first render",
        "How to prompt Claude for viral-quality motion graphics",
        "How to turn the videos into a paid service",
    ],
}: VideoSectionProps) {
    const VIDEO_ID = videoId;
    const TITLE = title;
    const [playing, setPlaying] = useState(false);

    return (
        <section className="vs-section">
            <div className="container-fluid px-3 px-lg-5">
                <div className="vs-wrap">
                    <div className="vs-player">
                        {playing ? (
                            <iframe
                                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                                title={TITLE}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        ) : (
                            <button type="button" className="vs-thumb" onClick={() => setPlaying(true)} aria-label={`Play video: ${TITLE}`}>
                                <img
                                    src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                                    alt={TITLE}
                                    onError={(e) => {
                                        e.currentTarget.src = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                                    }}
                                />
                                <span className="vs-play">
                                    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill="currentColor" d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                            </button>
                        )}
                    </div>

                    <div>
                        <span className="vs-tag">{tag}</span>
                        <h2 className="vs-title">{TITLE}</h2>
                        <p className="vs-text">{text}</p>
                        <ul className="vs-list">
                            {bullets.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>
                        <div className="vs-ctas">
                            <a className="vs-btn red" href={SUBSCRIBE_URL} target="_blank" rel="noreferrer">
                                Subscribe
                            </a>
                            <a className="vs-btn white" href={SUBSCRIBE_URL} target="_blank" rel="noreferrer">
                                Visit channel
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
