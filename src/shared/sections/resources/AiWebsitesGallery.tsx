import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "react-router-dom";
import { AI_SITES, FILTERS, SOURCE_URL, thumb, type AiSite } from "@/data/aiWebsites";
import "./AiWebsitesGallery.css";

const PER_PAGE = 24;
const CHANNEL_URL = "https://www.youtube.com/@Talhaspeaksai?sub_confirmation=1";

function DesignModal({ s, onClose }: { s: AiSite; onClose: () => void }) {
    const [broken, setBroken] = useState(false);
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
    const img = broken ? null : thumb(s.image, 1600);
    return createPortal(
        <div className="aw-overlay" onClick={onClose}>
            <div className="aw-modal" role="dialog" aria-modal="true" aria-label={s.title} onClick={(e) => e.stopPropagation()}>
                <div className="aw-mhead">
                    <div>
                        <h3>{s.title}</h3>
                        <span>{s.category}</span>
                    </div>
                    <button type="button" className="aw-close" onClick={onClose} aria-label="Close">✕</button>
                </div>
                <div className="aw-mbody">
                    <div className="aw-full">
                        {img ? <img src={img} alt={s.title} onError={() => setBroken(true)} /> : null}
                        {s.video ? <video src={s.video} poster={img ?? undefined} muted loop autoPlay playsInline controls /> : null}
                        {!img && !s.video ? <div className="aw-ph">{s.title}</div> : null}
                    </div>
                    <div className="aw-mbtns">
                        <a className="aw-yt" href={CHANNEL_URL} target="_blank" rel="noreferrer">Visit channel</a>
                        <button type="button" className="aw-copy" onClick={() => window.open(s.url, "_blank", "noopener,noreferrer")}>
                            Copy prompt
                        </button>
                    </div>
                    <p className="aw-note">Copy prompt opens this design on MotionSites, where you can copy its prompt.</p>
                </div>
            </div>
        </div>,
        document.body,
    );
}
const SORTS = ["Featured", "Popular", "Recent"] as const;
type Sort = (typeof SORTS)[number];
const SORT_KEY: Record<Sort, "featured" | "popular" | "recent"> = { Featured: "featured", Popular: "popular", Recent: "recent" };

function Card({ s, onOpen }: { s: AiSite; onOpen: () => void }) {
    const vid = useRef<HTMLVideoElement>(null);
    const play = () => {
        const v = vid.current;
        if (!v || !s.video) return;
        if (!v.src) v.src = s.video;
        v.classList.add("on");
        v.play().catch(() => {});
    };
    const stop = () => {
        const v = vid.current;
        if (!v) return;
        v.pause();
        v.currentTime = 0;
        v.classList.remove("on");
    };
    const [broken, setBroken] = useState(false);
    const poster = broken ? null : thumb(s.image);
    return (
        <button type="button" className="aw-card" onClick={onOpen} onMouseEnter={play} onMouseLeave={stop} onFocus={play} onBlur={stop} aria-label={`${s.title}: view design`}>
            <div className="aw-media">
                {poster ? <img src={poster} alt={s.title} width={640} height={400} loading="lazy" decoding="async" onError={() => setBroken(true)} /> : null}
                {s.video ? (
                    <video ref={vid} muted loop playsInline preload={poster ? "none" : "metadata"} className={poster ? "" : "still"} src={poster ? undefined : s.video + "#t=0.1"} />
                ) : null}
                {!poster && (broken || !s.video) ? <div className="aw-ph">{s.title}</div> : null}
                <span className="aw-hint">View design</span>
            </div>
            <div className="aw-title">
                <strong>{s.title}</strong>
                <span>{s.category}</span>
            </div>
        </button>
    );
}

function pageList(cur: number, total: number): (number | "…")[] {
    const out: (number | "…")[] = [];
    for (let p = 1; p <= total; p++) {
        if (p === 1 || p === total || Math.abs(p - cur) <= 1) out.push(p);
        else if (out[out.length - 1] !== "…") out.push("…");
    }
    return out;
}

export default function AiWebsitesGallery() {
    const [params, setParams] = useSearchParams();
    const sort = (SORTS.find((s) => s.toLowerCase() === params.get("sort")) ?? "Recent") as Sort;
    const filter = FILTERS.find((f) => f.label.toLowerCase() === params.get("filter"))?.label ?? "All";
    const page = Math.max(1, parseInt(params.get("page") || "1", 10) || 1);
    const topRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<AiSite | null>(null);

    const update = (patch: Record<string, string | null>, scroll = true) => {
        const next = new URLSearchParams(params);
        for (const [k, v] of Object.entries(patch)) {
            if (v) next.set(k, v);
            else next.delete(k);
        }
        setParams(next, { replace: false });
        if (scroll) topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const list = useMemo(() => {
        const key = SORT_KEY[sort];
        return AI_SITES.filter((s) => filter === "All" || s.tags.includes(filter)).sort((a, b) => a[key] - b[key]);
    }, [sort, filter]);

    const total = Math.max(1, Math.ceil(list.length / PER_PAGE));
    const cur = Math.min(page, total);
    const visible = list.slice((cur - 1) * PER_PAGE, cur * PER_PAGE);

    useEffect(() => {
        if (page !== cur) update({ page: cur === 1 ? null : String(cur) }, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, cur]);

    return (
        <section className="aw-section">
            <div className="container-fluid px-3 px-lg-5" ref={topRef} style={{ scrollMarginTop: 90 }}>
                <div className="aw-bar">
                    <div className="aw-tabs" role="tablist" aria-label="Sort">
                        {SORTS.map((s) => (
                            <button key={s} type="button" className={`aw-pill${s === sort ? " on" : ""}`} onClick={() => update({ sort: s === "Recent" ? null : s.toLowerCase(), page: null })}>
                                {s}
                            </button>
                        ))}
                    </div>
                    <div className="aw-chips" role="group" aria-label="Category">
                        {["All", ...FILTERS.map((f) => f.label)].map((l) => (
                            <button key={l} type="button" className={`aw-pill${l === filter ? " on" : ""}`} onClick={() => update({ filter: l === "All" ? null : l.toLowerCase(), page: null })}>
                                {l}
                            </button>
                        ))}
                    </div>
                    <select className="aw-select" aria-label="Pricing" defaultValue="free" onChange={(e) => (e.target.value = "free")}>
                        <option value="free">Pricing: Free</option>
                    </select>
                </div>

                <p className="aw-count">
                    {list.length} free {list.length === 1 ? "design" : "designs"} · page {cur} of {total}
                </p>

                {visible.length ? (
                    <div className="aw-grid">
                        {visible.map((s) => (
                            <Card key={s.id} s={s} onOpen={() => setOpen(s)} />
                        ))}
                    </div>
                ) : (
                    <div className="aw-empty">No free designs in this category yet.</div>
                )}

                {total > 1 ? (
                    <nav className="aw-pager" aria-label="Pagination">
                        <button type="button" disabled={cur === 1} onClick={() => update({ page: cur - 1 === 1 ? null : String(cur - 1) })}>← Prev</button>
                        {pageList(cur, total).map((p, i) =>
                            p === "…" ? <span key={`e${i}`}>…</span> : (
                                <button key={p} type="button" className={p === cur ? "on" : ""} aria-current={p === cur ? "page" : undefined} onClick={() => update({ page: p === 1 ? null : String(p) })}>{p}</button>
                            ),
                        )}
                        <button type="button" disabled={cur === total} onClick={() => update({ page: String(cur + 1) })}>Next →</button>
                    </nav>
                ) : null}

                <div className="aw-credit">
                    <span>
                        All designs and prompts credit: <a href={SOURCE_URL} target="_blank" rel="noreferrer noopener">motionsites.ai</a>
                    </span>
                </div>
            </div>
            {open ? <DesignModal s={open} onClose={() => setOpen(null)} /> : null}
        </section>
    );
}
