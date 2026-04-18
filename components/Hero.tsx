"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BOOKING_URL = "https://luveswim.as.me/schedule/a248e30e";

/* Fixed bubble positions — no Math.random() avoids hydration mismatch */
const BUBBLES = [
  { x:  6, size: 4, dur: 2.8, delay: 0.0 },
  { x: 14, size: 6, dur: 3.6, delay: 0.7 },
  { x: 23, size: 3, dur: 2.3, delay: 1.4 },
  { x: 31, size: 5, dur: 3.1, delay: 0.3 },
  { x: 40, size: 4, dur: 2.7, delay: 1.9 },
  { x: 49, size: 7, dur: 4.0, delay: 0.5 },
  { x: 57, size: 3, dur: 2.5, delay: 1.1 },
  { x: 66, size: 5, dur: 3.4, delay: 0.8 },
  { x: 74, size: 4, dur: 2.9, delay: 1.6 },
  { x: 82, size: 6, dur: 3.7, delay: 0.2 },
  { x: 89, size: 3, dur: 2.2, delay: 1.3 },
  { x: 95, size: 5, dur: 3.0, delay: 0.6 },
];

/* Caustic light ray columns */
const CAUSTIC_RAYS = [
  { x:  7, w: 70,  opacity: 0.10, dur: 8,    delay: 0   },
  { x: 18, w: 44,  opacity: 0.07, dur: 11,   delay: 1.2 },
  { x: 33, w: 86,  opacity: 0.11, dur: 7,    delay: 0.4 },
  { x: 49, w: 56,  opacity: 0.08, dur: 9,    delay: 2.0 },
  { x: 63, w: 74,  opacity: 0.09, dur: 10,   delay: 0.8 },
  { x: 78, w: 42,  opacity: 0.07, dur: 8.5,  delay: 1.6 },
  { x: 91, w: 62,  opacity: 0.08, dur: 12,   delay: 0.2 },
];

/* ─── Cartoon Sun ─────────────────────────────────────────────────────────── */
function Sun() {
  const rays = [0, 40, 80, 120, 160, 200, 240, 280, 320];
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {rays.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x2 = Math.round((50 + 44 * Math.cos(rad)) * 1000) / 1000;
        const y2 = Math.round((50 + 44 * Math.sin(rad)) * 1000) / 1000;
        const x1 = Math.round((50 + 29 * Math.cos(rad)) * 1000) / 1000;
        const y1 = Math.round((50 + 29 * Math.sin(rad)) * 1000) / 1000;
        return (
          <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#FFD166" strokeWidth="4" strokeLinecap="round" />
        );
      })}
      <circle cx="50" cy="50" r="24" fill="#FFE082" />
      <circle cx="50" cy="50" r="20" fill="#FFD166" />
      <circle cx="43" cy="46" r="3" fill="#F57F17" />
      <circle cx="57" cy="46" r="3" fill="#F57F17" />
      <path d="M42 56 Q50 63 58 56" stroke="#F57F17" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Fluffy Cloud ────────────────────────────────────────────────────────── */
function Cloud() {
  return (
    <svg viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="80" cy="58" rx="68" ry="22" fill="white" />
      <circle cx="52" cy="44" r="26" fill="white" />
      <circle cx="82" cy="36" r="32" fill="white" />
      <circle cx="114" cy="44" r="22" fill="white" />
    </svg>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */
export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* ── Sky / surface ── */
  const skyOpacity      = useTransform(scrollYProgress, [0.28, 0.55], [1, 0]);
  const cloudsOpacity   = useTransform(scrollYProgress, [0.24, 0.46], [1, 0]);
  const wavesOpacity    = useTransform(scrollYProgress, [0.24, 0.50], [1, 0]);

  /* ── Underwater ── */
  const uwOpacity       = useTransform(scrollYProgress, [0.36, 0.62], [0, 1]);
  const causticOpacity  = useTransform(scrollYProgress, [0.58, 0.74], [0, 1]);
  const bubblesOpacity  = useTransform(scrollYProgress, [0.30, 0.46], [0, 1]);
  const vignetteOpacity = useTransform(scrollYProgress, [0.55, 0.70], [0, 1]);

  /* ── Act 1 text ── */
  const act1Opacity     = useTransform(scrollYProgress, [0.18, 0.34], [1, 0]);
  const act1Y           = useTransform(scrollYProgress, [0.18, 0.34], [0, -50]);

  /* ── Scroll hint ── */
  const hintOpacity     = useTransform(scrollYProgress, [0.0, 0.10], [1, 0]);

  /* ── Act 3 cards (staggered) ── */
  const card1Opacity    = useTransform(scrollYProgress, [0.64, 0.74], [0, 1]);
  const card1X          = useTransform(scrollYProgress, [0.64, 0.74], [-60, 0]);
  const card2Opacity    = useTransform(scrollYProgress, [0.71, 0.80], [0, 1]);
  const card2Y          = useTransform(scrollYProgress, [0.71, 0.80], [50, 0]);
  const card3Opacity    = useTransform(scrollYProgress, [0.78, 0.87], [0, 1]);
  const card3X          = useTransform(scrollYProgress, [0.78, 0.87], [60, 0]);
  const finalOpacity    = useTransform(scrollYProgress, [0.87, 0.95], [0, 1]);
  const finalScale      = useTransform(scrollYProgress, [0.87, 0.95], [0.85, 1]);

  return (
    <section ref={containerRef} id="hero" style={{ height: "400vh" }}>

      {/* ── Sticky viewport ─────────────────────────────────────────────── */}
      <div className="sticky top-0 overflow-hidden" style={{ height: "100svh" }}>

        {/* === BACKGROUND LAYERS === */}

        {/* Sky gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #FEF9EC 0%, #C8EBFB 38%, #7DD5EE 55%, #34BDD8 65%, #0AADCE 75%, #0093B2 100%)",
            opacity: skyOpacity,
          }}
        />

        {/* Underwater gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #005F7A 0%, #003B4A 45%, #002533 100%)",
            opacity: uwOpacity,
          }}
        />

        {/* Underwater depth vignette */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 75% 65% at 50% 50%, transparent 35%, rgba(0,15,28,0.72) 100%)",
            opacity: vignetteOpacity,
          }}
        />

        {/* Sun glare */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 80% at 85% 0%, rgba(255,220,100,0.28) 0%, transparent 70%)",
            opacity: skyOpacity,
          }}
        />

        {/* === SKY ELEMENTS === */}

        {/* Sun */}
        <motion.div
          className="absolute pointer-events-none"
          style={{ top: "5%", right: "6%", width: "clamp(72px,10vw,120px)", opacity: skyOpacity }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <Sun />
        </motion.div>

        {/* Cloud 1 */}
        <motion.div
          className="absolute pointer-events-none"
          style={{ top: "12%", left: "8%", width: "clamp(100px,14vw,180px)", opacity: cloudsOpacity }}
          animate={{ x: [0, 18, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cloud />
        </motion.div>

        {/* Cloud 2 */}
        <motion.div
          className="absolute pointer-events-none"
          style={{ top: "6%", left: "42%", width: "clamp(70px,10vw,130px)", opacity: cloudsOpacity }}
          animate={{ x: [0, -14, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cloud />
        </motion.div>

        {/* === WAVE LAYERS === */}
        <motion.div
          className="absolute left-0 right-0 bottom-0"
          style={{ height: "38%", opacity: wavesOpacity }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <svg className="wave-anim absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 24 150 28" preserveAspectRatio="none"
              style={{ height: "100%", fill: "#005F7A", opacity: 0.55, animationDuration: "20s" }}>
              <defs><path id="wv-a" d="M-160 44c40 0 68-22 108-22s68 22 108 22 68-22 108-22 68 22 108 22v44h-432z" /></defs>
              <use href="#wv-a" x="0" y="0" />
            </svg>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <svg className="wave-anim-slow absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 24 150 28" preserveAspectRatio="none"
              style={{ height: "88%", fill: "#0093B2", opacity: 0.7, animationDuration: "13s" }}>
              <defs><path id="wv-b" d="M-160 44c35 0 60-18 95-18s60 18 95 18 60-18 95-18 60 18 95 18v44h-380z" /></defs>
              <use href="#wv-b" x="0" y="0" />
            </svg>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <svg className="wave-anim absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 24 150 28" preserveAspectRatio="none"
              style={{ height: "70%", fill: "#0CC0DF", animationDuration: "8s" }}>
              <defs><path id="wv-c" d="M-160 44c30 0 55-16 85-16s55 16 85 16 55-16 85-16 55 16 85 16v44h-340z" /></defs>
              <use href="#wv-c" x="0" y="0" />
            </svg>
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <svg className="wave-anim-slow absolute bottom-0 left-0" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 24 150 12" preserveAspectRatio="none"
              style={{ height: "58%", fill: "rgba(255,255,255,0.18)", animationDuration: "6s" }}>
              <defs><path id="wv-d" d="M-160 12c25 0 45-8 70-8s45 8 70 8 45-8 70-8 45 8 70 8v12h-280z" /></defs>
              <use href="#wv-d" x="0" y="0" />
            </svg>
          </div>
        </motion.div>

        {/* === UNDERWATER ELEMENTS === */}

        {/* Caustic light rays */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ opacity: causticOpacity }}
        >
          {CAUSTIC_RAYS.map((ray, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "-10%",
                left: `${ray.x}%`,
                width: `${ray.w}px`,
                height: "130%",
                background: "linear-gradient(180deg, rgba(150,230,255,0.28) 0%, rgba(100,200,240,0.10) 55%, transparent 100%)",
                filter: "blur(20px)",
                opacity: ray.opacity,
                animation: `caustic-sway ${ray.dur}s ease-in-out ${ray.delay}s infinite alternate`,
              }}
            />
          ))}
        </motion.div>

        {/* Bubbles */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ opacity: bubblesOpacity }}
        >
          {BUBBLES.map((b, i) => (
            <div
              key={i}
              className="bubble-rise absolute rounded-full"
              style={{
                left: `${b.x}%`,
                bottom: 0,
                width: `${b.size}px`,
                height: `${b.size}px`,
                background: "rgba(255,255,255,0.45)",
                animationDuration: `${b.dur}s`,
                animationDelay: `${b.delay}s`,
              }}
            />
          ))}
        </motion.div>

        {/* === ACT 1 — text panel === */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center"
          style={{ opacity: act1Opacity, y: act1Y }}
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl px-6 sm:px-10 lg:pl-16 xl:pl-24">

            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-sm"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1.5px solid rgba(255,255,255,0.8)",
                color: "#1A2E3B",
                fontWeight: 700,
                backdropFilter: "blur(6px)",
              }}
            >
              🌊 Houston&apos;s Favourite Swim Instructor
            </span>

            {/* Headline */}
            <h1
              className="font-pacifico leading-tight mb-5"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 6rem)",
                color: "#1A2E3B",
                textShadow: "0 2px 12px rgba(255,255,255,0.6)",
              }}
            >
              Dive Into{" "}
              <span style={{ color: "#FF6B6B" }}>Confidence.</span>
            </h1>

            {/* Sub */}
            <p
              className="leading-relaxed mb-8"
              style={{
                fontSize: "clamp(1rem, 2.2vw, 1.22rem)",
                color: "#1A2E3B",
                opacity: 0.85,
                maxWidth: 460,
              }}
            >
              Private swim lessons for all ages, right at your pool. Kids pick it
              up faster than you&apos;d expect. Adults too. Results guaranteed by
              lesson 10 or your money back.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-8">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pulse inline-flex items-center gap-2 rounded-full text-white transition-transform duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #FF6B6B, #e85555)",
                  padding: "1rem 2.2rem",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  boxShadow: "0 8px 28px rgba(255,107,107,0.45)",
                }}
              >
                🏊 Book Your Lessons
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full transition-all duration-200"
                style={{
                  color: "#1A2E3B",
                  background: "rgba(255,255,255,0.55)",
                  border: "1.5px solid rgba(255,255,255,0.8)",
                  fontWeight: 600,
                  fontSize: "0.98rem",
                  backdropFilter: "blur(6px)",
                }}
              >
                Meet Seth ↓
              </a>
            </div>

            {/* Proof pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {["$65/session", "At your pool", "All ages", "Guaranteed results"].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(255,255,255,0.75)",
                    color: "#1A2E3B",
                    fontWeight: 600,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span style={{ color: "#0CC0DF" }}>✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* === SCROLL HINT === */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 pointer-events-none"
          style={{ opacity: hintOpacity }}
        >
          <span style={{ color: "#1A2E3B", fontSize: "0.75rem", fontWeight: 600, opacity: 0.7 }}>
            scroll to dive in
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <path d="M6 9l6 6 6-6" stroke="#0CC0DF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>

        {/* === ACT 3 — stat cards + final CTA === */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 gap-6">

          {/* 3 cards */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl">

            <motion.div
              style={{ opacity: card1Opacity, x: card1X }}
              className="flex-1"
            >
              <div style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(16px)",
                borderRadius: "1rem",
                padding: "1.5rem",
                textAlign: "center",
              }}>
                <p className="font-pacifico" style={{ color: "#0CC0DF", fontSize: "3rem", lineHeight: 1 }}>10</p>
                <p style={{ color: "rgba(255,255,255,0.95)", fontWeight: 700, marginTop: "0.5rem" }}>
                  Lessons to hit your goal
                </p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", marginTop: "0.35rem" }}>
                  Or a full refund. No fine print.
                </p>
              </div>
            </motion.div>

            <motion.div style={{ opacity: card2Opacity, y: card2Y }} className="flex-1">
              <div style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(16px)",
                borderRadius: "1rem",
                padding: "1.5rem",
                textAlign: "center",
              }}>
                <p className="font-pacifico" style={{ color: "#FFD166", fontSize: "3rem", lineHeight: 1 }}>$65</p>
                <p style={{ color: "rgba(255,255,255,0.95)", fontWeight: 700, marginTop: "0.5rem" }}>
                  Per session
                </p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", marginTop: "0.35rem" }}>
                  Private · At your pool · All ages
                </p>
              </div>
            </motion.div>

            <motion.div style={{ opacity: card3Opacity, x: card3X }} className="flex-1">
              <div style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(16px)",
                borderRadius: "1rem",
                padding: "1.5rem",
                textAlign: "center",
              }}>
                <p className="font-pacifico" style={{ color: "#FF6B6B", fontSize: "3rem", lineHeight: 1 }}>$0</p>
                <p style={{ color: "rgba(255,255,255,0.95)", fontWeight: 700, marginTop: "0.5rem" }}>
                  Weather reschedule fee
                </p>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", marginTop: "0.35rem" }}>
                  Houston weather happens. We get it.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Final CTA */}
          <motion.a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pulse inline-flex items-center gap-2 rounded-full text-white hover:scale-105 active:scale-95 transition-transform duration-200"
            style={{
              opacity: finalOpacity,
              scale: finalScale,
              background: "linear-gradient(135deg, #FF6B6B, #e85555)",
              padding: "1.1rem 2.6rem",
              fontSize: "1.1rem",
              fontWeight: 700,
              boxShadow: "0 8px 36px rgba(255,107,107,0.55)",
            }}
          >
            🏊 Book Your First Lesson
          </motion.a>
        </div>

        {/* === TRANSITION WAVE → About === */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none"
          style={{ lineHeight: 0 }}
        >
          <svg
            className="wave-anim block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 24"
            preserveAspectRatio="none"
            style={{ height: "56px", width: "200%", fill: "#FFF8EE", animationDuration: "11s" }}
          >
            <defs>
              <path id="wv-e" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
            </defs>
            <use href="#wv-e" x="48" y="0" />
          </svg>
        </div>

      </div>
    </section>
  );
}
