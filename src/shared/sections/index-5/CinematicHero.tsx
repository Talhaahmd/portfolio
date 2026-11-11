import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SocialLinks from "@/shared/elements/SocialLinks";
import "./CinematicHero.css";

const BASE_SRC = "/assets/imgs/pages/webp-images/Hero image.webp";
const UNDER_SRC = "/assets/imgs/pages/webp-images/hero-underlay.webp";

const STATS = [
  { n: "2", label: "Years in SaaS" },
  { n: "10", label: "AI products built" },
  { n: "40", label: "Automation templates" },
];

/**
 * Home hero. The portrait has a hidden "augmented" twin (hero-underlay.webp). Moving the pointer
 * (or dragging a finger) paints a fading trail that reveals it; an automatic sweep plays on load
 * and every few seconds while idle, so touch and keyboard visitors still see the effect.
 */
export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const figureRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const figure = figureRef.current;
    const canvas = canvasRef.current;
    if (!section || !figure || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mask = document.createElement("canvas");
    const mctx = mask.getContext("2d")!;
    const under = new Image();
    let underReady = false;
    let w = 0;
    let h = 0;
    let raf = 0;
    let lastBrush = 0;
    let last: { x: number; y: number } | null = null;
    let lastUserMove = 0;
    let visible = true;
    let demoTimer = 0;
    let demoRaf = 0;
    let disposed = false;

    const resize = () => {
      const r = figure.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = Math.max(1, Math.round(r.width * dpr));
      h = Math.max(1, Math.round(r.height * dpr));
      canvas.width = mask.width = w;
      canvas.height = mask.height = h;
    };

    const stamp = (x: number, y: number, radius: number, alpha: number) => {
      const g = mctx.createRadialGradient(x, y, 0, x, y, radius);
      g.addColorStop(0, `rgba(255,255,255,${alpha})`);
      g.addColorStop(0.55, `rgba(255,255,255,${alpha * 0.55})`);
      g.addColorStop(1, "rgba(255,255,255,0)");
      mctx.globalCompositeOperation = "source-over";
      mctx.fillStyle = g;
      mctx.beginPath();
      mctx.arc(x, y, radius, 0, Math.PI * 2);
      mctx.fill();
    };

    const brushTo = (x: number, y: number) => {
      const radius = Math.max(w, h * 0.55) * 0.2;
      if (last) {
        const dx = x - last.x;
        const dy = y - last.y;
        const steps = Math.max(1, Math.ceil(Math.hypot(dx, dy) / (radius * 0.35)));
        for (let i = 1; i <= steps; i++) stamp(last.x + (dx * i) / steps, last.y + (dy * i) / steps, radius, 0.85);
      } else stamp(x, y, radius, 0.85);
      last = { x, y };
      lastBrush = performance.now();
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const frame = (now: number) => {
      raf = 0;
      if (!underReady || disposed) return;
      // fade the trail
      mctx.globalCompositeOperation = "destination-out";
      mctx.fillStyle = "rgba(0,0,0,0.05)";
      mctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(under, 0, 0, w, h);
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(mask, 0, 0);
      if (now - lastBrush < 2200) raf = requestAnimationFrame(frame);
      else {
        mctx.clearRect(0, 0, w, h);
        ctx.clearRect(0, 0, w, h);
        last = null;
      }
    };

    const toLocal = (e: PointerEvent) => {
      const r = figure.getBoundingClientRect();
      return { x: ((e.clientX - r.left) / r.width) * w, y: ((e.clientY - r.top) / r.height) * h };
    };
    const onMove = (e: PointerEvent) => {
      lastUserMove = performance.now();
      const p = toLocal(e);
      if (p.x < -w * 0.2 || p.x > w * 1.2 || p.y < -h * 0.2 || p.y > h * 1.2) return;
      brushTo(p.x, p.y);
    };
    const onLeave = () => {
      last = null;
    };

    // scripted sweep across face, neck and shoulder
    const sweep = () => {
      if (reduceMotion || !visible || disposed || !underReady) return;
      const path: [number, number][] = [
        [0.3, 0.24], [0.4, 0.3], [0.5, 0.36], [0.46, 0.42], [0.54, 0.5], [0.4, 0.56],
        [0.55, 0.64], [0.7, 0.58], [0.62, 0.7], [0.45, 0.74],
      ];
      const start = performance.now();
      const total = 3200;
      last = null;
      const step = (t: number) => {
        if (disposed) return;
        const p = Math.min(1, (t - start) / total);
        const f = p * (path.length - 1);
        const i = Math.min(path.length - 2, Math.floor(f));
        const k = f - i;
        const x = (path[i][0] + (path[i + 1][0] - path[i][0]) * k) * w;
        const y = (path[i][1] + (path[i + 1][1] - path[i][1]) * k) * h;
        if (performance.now() - lastUserMove > 600) brushTo(x, y);
        if (p < 1) demoRaf = requestAnimationFrame(step);
      };
      demoRaf = requestAnimationFrame(step);
    };
    const scheduleDemo = (delay: number) => {
      window.clearTimeout(demoTimer);
      demoTimer = window.setTimeout(() => {
        if (performance.now() - lastUserMove > 5000) sweep();
        scheduleDemo(9000);
      }, delay);
    };

    const load = () => {
      under.onload = () => {
        underReady = true;
        resize();
        scheduleDemo(900);
      };
      under.src = UNDER_SRC;
    };
    // load the hidden layer after the LCP image so it never competes with first paint
    const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback;
    const loadTimer = idle ? idle(load) : window.setTimeout(load, 400);

    const ro = new ResizeObserver(() => underReady && resize());
    ro.observe(figure);
    const io = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
    });
    io.observe(section);
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      cancelAnimationFrame(demoRaf);
      window.clearTimeout(demoTimer);
      if (!idle) window.clearTimeout(loadTimer);
      ro.disconnect();
      io.disconnect();
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="ch" ref={sectionRef} aria-label="Introduction">
      <span className="ch__ring ch__ring--1" aria-hidden="true" />
      <span className="ch__ring ch__ring--2" aria-hidden="true" />
      <span className="ch__ring ch__ring--3" aria-hidden="true" />

      <div className="ch__inner">
        <div className="ch__head">
          <p className="ch__eyebrow">AI engineer · Builder · Creator</p>
          <h1 className="ch__title">
            Talha <span>Speaks AI</span>
          </h1>
        </div>

        <div className="ch__stage">
          <div className="ch__figure" ref={figureRef}>
            <img
              className="ch__base"
              src={BASE_SRC}
              alt="Talha, the AI engineer behind Talha Speaks AI"
              width={550}
              height={850}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <canvas className="ch__layer" ref={canvasRef} aria-hidden="true" />
          </div>
        </div>

        <div className="ch__body">
          <p className="ch__lead">
            I&apos;m Talha, an AI engineer building intelligent products, automations, and scalable software, while sharing how you can do the same.
          </p>
          <div className="ch__cta">
            <Link className="ch__btn" to="/90-days-roadmap">
              Get Free Resources
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
                <path d="M1 7.5h13M8.5 1.5l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <SocialLinks light />
          </div>
        </div>

        <ul className="ch__stats" aria-label="Highlights">
          {STATS.map((s) => (
            <li className="ch__stat" key={s.label}>
              <span className="ch__dot" aria-hidden="true" />
              <span className="ch__num">
                {s.n}
                <sup>+</sup>
              </span>
              <span className="ch__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
