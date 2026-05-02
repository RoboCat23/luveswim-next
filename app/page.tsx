"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const BOOKING_URL = "/book";
const PHONE_TEL = "tel:+18326005534";
const PHONE_DISPLAY = "(832) 600-5534";
const EMAIL_HREF = "mailto:contact@luveswim.com";
const EMAIL = "contact@luveswim.com";

// ─── Inline SVG Creatures ───────────────────────────────────────────────────

function Sun() {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const rad = (i / 12) * Math.PI * 2;
    const x1 = Math.round((50 + 36 * Math.cos(rad)) * 1000) / 1000;
    const y1 = Math.round((50 + 36 * Math.sin(rad)) * 1000) / 1000;
    const x2 = Math.round((50 + 46 * Math.cos(rad)) * 1000) / 1000;
    const y2 = Math.round((50 + 46 * Math.sin(rad)) * 1000) / 1000;
    return { x1, y1, x2, y2 };
  });
  return (
    <svg viewBox="0 0 100 100" width="120" height="120" aria-hidden="true">
      <circle cx="50" cy="50" r="28" fill="#FFD166" opacity="0.95" />
      <circle cx="50" cy="50" r="22" fill="#FFE599" />
      {rays.map((r, i) => (
        <line
          key={i}
          x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
          stroke="#FFD166" strokeWidth="2.5" strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

function Cloud({ w = 140, opacity = 0.92 }: { w?: number; opacity?: number }) {
  return (
    <svg viewBox="0 0 140 60" width={w} height={w * 0.43} aria-hidden="true" style={{ opacity }}>
      <ellipse cx="70" cy="42" rx="60" ry="18" fill="white" />
      <ellipse cx="50" cy="36" rx="28" ry="22" fill="white" />
      <ellipse cx="90" cy="38" rx="22" ry="18" fill="white" />
      <ellipse cx="70" cy="30" rx="24" ry="18" fill="white" />
    </svg>
  );
}

function Bird() {
  return (
    <svg viewBox="0 0 48 24" width="48" height="24" aria-hidden="true">
      <path d="M24 12 Q16 4 4 8 Q12 10 24 12" fill="#1A2E3B" opacity="0.7" />
      <path d="M24 12 Q32 4 44 8 Q36 10 24 12" fill="#1A2E3B" opacity="0.7" />
    </svg>
  );
}

function Fish({ color = "#FFD166", size = 1 }: { color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 64 32" width={64 * size} height={32 * size} aria-hidden="true">
      <ellipse cx="28" cy="16" rx="22" ry="10" fill={color} />
      <path d="M6 16 L-4 6 L-4 26 Z" fill={color} />
      <circle cx="38" cy="13" r="2.5" fill="rgba(0,0,0,0.35)" />
      <path d="M36 16 Q40 20 44 16 Q40 12 36 16" fill={color} opacity="0.6" />
      {/* Fin */}
      <path d="M22 6 Q28 2 34 6 Q28 8 22 6" fill={color} opacity="0.7" />
    </svg>
  );
}

function DeepFish({ size = 1 }: { size?: number }) {
  return (
    <svg viewBox="0 0 80 36" width={80 * size} height={36 * size} aria-hidden="true">
      <ellipse cx="36" cy="18" rx="28" ry="12" fill="#003B4A" opacity="0.7" />
      <path d="M8 18 L-6 6 L-6 30 Z" fill="#003B4A" opacity="0.7" />
      <circle cx="52" cy="15" r="3" fill="rgba(12,192,223,0.5)" />
      {/* bioluminescent dots */}
      <circle cx="20" cy="18" r="1.5" fill="#0CC0DF" opacity="0.6" />
      <circle cx="30" cy="14" r="1" fill="#0CC0DF" opacity="0.5" />
      <circle cx="40" cy="20" r="1" fill="#0CC0DF" opacity="0.4" />
    </svg>
  );
}

function Jellyfish() {
  return (
    <svg viewBox="0 0 60 80" width="60" height="80" aria-hidden="true">
      {/* Bell */}
      <path d="M10 30 Q10 5 30 5 Q50 5 50 30 Z" fill="rgba(12,192,223,0.25)" stroke="rgba(12,192,223,0.5)" strokeWidth="1" />
      {/* Tentacles */}
      {[14, 20, 26, 32, 38, 44].map((x, i) => (
        <path
          key={i}
          d={`M${x} 30 Q${x + (i % 2 === 0 ? -4 : 4)} ${45 + i * 3} ${x} ${55 + i * 2}`}
          fill="none"
          stroke="rgba(12,192,223,0.35)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

function Seaweed({ height = 80, color = "#0CC0DF" }: { height?: number; color?: string }) {
  const h = height;
  return (
    <svg viewBox={`0 0 28 ${h}`} width="28" height={h} aria-hidden="true">
      <path
        d={`M14 ${h} Q4 ${h * 0.75} 14 ${h * 0.55} Q24 ${h * 0.4} 14 ${h * 0.25} Q4 ${h * 0.12} 14 0`}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

function Coral({ color = "#FF6B6B" }: { color?: string }) {
  return (
    <svg viewBox="0 0 60 70" width="60" height="70" aria-hidden="true">
      <path d="M30 70 L30 40" stroke={color} strokeWidth="5" strokeLinecap="round" />
      <path d="M30 55 L18 35" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M30 45 L42 28" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M30 60 L44 48" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="30" cy="38" r="5" fill={color} />
      <circle cx="18" cy="33" r="4" fill={color} />
      <circle cx="42" cy="26" r="4" fill={color} />
      <circle cx="44" cy="46" r="3.5" fill={color} />
    </svg>
  );
}

// ─── Wave SVG ────────────────────────────────────────────────────────────────

function WaveRow({
  fill,
  speed,
  reverse,
  yOffset = 0,
}: {
  fill: string;
  speed: string;
  reverse?: boolean;
  yOffset?: number;
}) {
  return (
    <div
      className="absolute left-0 right-0 overflow-hidden pointer-events-none"
      style={{ top: yOffset, height: 60 }}
    >
      <div
        style={{
          animation: `wave-drift ${speed} linear infinite${reverse ? " reverse" : ""}`,
          width: "200%",
          display: "flex",
        }}
      >
        {[0, 1].map((k) => (
          <svg key={k} viewBox="0 0 1200 60" width="100%" height="60" preserveAspectRatio="none">
            <path
              d="M0 30 Q150 0 300 30 Q450 60 600 30 Q750 0 900 30 Q1050 60 1200 30 L1200 60 L0 60 Z"
              fill={fill}
            />
          </svg>
        ))}
      </div>
    </div>
  );
}

// ─── Fixed-position fish that swim across the screen ─────────────────────────

// ─── Scroll-driven fish config ────────────────────────────────────────────────
// initFrac: initial X position as fraction of viewport width (deterministic, no Math.random)
// speed: how many px the fish moves per px of scroll delta
// dir "r" = faces right and moves right on scroll-down; "l" = faces left, moves left on scroll-down
const FISH_CONFIGS = [
  // Surface zone  (zone container top: 65vh, height: 90vh)  — indices 0-4
  { zone: "surface", top: "8%",  color: "#FFD166", size: 0.8,  dir: "r" as const, speed: 1.2,  initFrac: 0.10, deep: false },
  { zone: "surface", top: "25%", color: "#0CC0DF", size: 1.0,  dir: "l" as const, speed: 0.9,  initFrac: 0.55, deep: false },
  { zone: "surface", top: "45%", color: "#FF6B6B", size: 0.7,  dir: "r" as const, speed: 1.4,  initFrac: 0.30, deep: false },
  { zone: "surface", top: "65%", color: "#FFD166", size: 0.9,  dir: "l" as const, speed: 0.8,  initFrac: 0.75, deep: false },
  { zone: "surface", top: "82%", color: "#0093B2", size: 1.1,  dir: "r" as const, speed: 1.1,  initFrac: 0.50, deep: false },
  // Shallow zone  (zone container top: 160vh, height: 40vh) — indices 5-9
  { zone: "shallow", top: "12%", color: "#FFD166", size: 0.9,  dir: "r" as const, speed: 1.0,  initFrac: 0.20, deep: false },
  { zone: "shallow", top: "28%", color: "#FF6B6B", size: 0.7,  dir: "l" as const, speed: 1.3,  initFrac: 0.65, deep: false },
  { zone: "shallow", top: "45%", color: "#0CC0DF", size: 1.1,  dir: "r" as const, speed: 0.85, initFrac: 0.40, deep: false },
  { zone: "shallow", top: "62%", color: "#FFD166", size: 0.8,  dir: "l" as const, speed: 1.1,  initFrac: 0.85, deep: false },
  { zone: "shallow", top: "78%", color: "#0093B2", size: 1.0,  dir: "r" as const, speed: 0.95, initFrac: 0.05, deep: false },
  // Mid zone      (zone container top: 300vh, height: 40vh) — indices 10-13
  { zone: "mid", top: "8%",  color: "#0093B2", size: 1.2, dir: "r" as const, speed: 0.7,  initFrac: 0.15, deep: false },
  { zone: "mid", top: "25%", color: "#005F7A", size: 0.9, dir: "l" as const, speed: 0.9,  initFrac: 0.60, deep: false },
  { zone: "mid", top: "50%", color: "#0CC0DF", size: 1.4, dir: "r" as const, speed: 0.75, initFrac: 0.35, deep: false },
  { zone: "mid", top: "70%", color: "#003B4A", size: 1.0, dir: "l" as const, speed: 0.85, initFrac: 0.80, deep: false },
  // Deep zone     (zone container top: 460vh, height: 35vh) — indices 14-16
  { zone: "deep", top: "15%", color: "", size: 1.5, dir: "r" as const, speed: 0.5,  initFrac: 0.25, deep: true },
  { zone: "deep", top: "50%", color: "", size: 1.2, dir: "l" as const, speed: 0.6,  initFrac: 0.70, deep: true },
  { zone: "deep", top: "80%", color: "", size: 1.8, dir: "r" as const, speed: 0.45, initFrac: 0.45, deep: true },
  // Mid-deep zone (zone container top: 380vh, height: 70vh) — indices 17-21
  { zone: "mid2", top: "10%", color: "#0CC0DF", size: 1.3, dir: "l" as const, speed: 0.65, initFrac: 0.20, deep: false },
  { zone: "mid2", top: "30%", color: "#FFD166", size: 1.0, dir: "r" as const, speed: 0.80, initFrac: 0.60, deep: false },
  { zone: "mid2", top: "52%", color: "#0093B2", size: 1.5, dir: "l" as const, speed: 0.55, initFrac: 0.38, deep: false },
  { zone: "mid2", top: "72%", color: "#FF6B6B", size: 0.9, dir: "r" as const, speed: 0.70, initFrac: 0.80, deep: false },
  { zone: "mid2", top: "88%", color: "#0CC0DF", size: 1.2, dir: "l" as const, speed: 0.60, initFrac: 0.12, deep: false },
  // Floor zone    (zone container top: 495vh, height: 100vh) — indices 22-26
  { zone: "floor", top: "8%",  color: "", size: 1.0, dir: "r" as const, speed: 0.40, initFrac: 0.15, deep: true },
  { zone: "floor", top: "28%", color: "", size: 1.4, dir: "l" as const, speed: 0.35, initFrac: 0.55, deep: true },
  { zone: "floor", top: "52%", color: "", size: 1.1, dir: "r" as const, speed: 0.45, initFrac: 0.30, deep: true },
  { zone: "floor", top: "72%", color: "", size: 0.9, dir: "l" as const, speed: 0.50, initFrac: 0.72, deep: true },
  { zone: "floor", top: "88%", color: "", size: 1.6, dir: "r" as const, speed: 0.38, initFrac: 0.90, deep: true },
] as const;

// ─── Section wrapper with reveal animation ───────────────────────────────────

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  // ─── Scroll-driven fish ──────────────────────────────────────────────────
  const fishPos = useRef<number[]>(FISH_CONFIGS.map(() => 0));

  // ─── Testimonials horizontal-scroll hijack ──────────────────────────────
  const testiScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = testiScrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const max = el.scrollWidth - el.clientWidth;
      const atStart = el.scrollLeft <= 0;
      const atEnd = el.scrollLeft >= max - 1;
      if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // ─── Contact modal ────────────────────────────────────────────────────────
  const [contactOpen, setContactOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", swimmers: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  useEffect(() => {
    const vw = window.innerWidth;

    // Collect fish elements directly from the DOM — immune to React ref lifecycle.
    // Callback refs fire with null on every re-render (new function instance each render),
    // so we bypass React's ref system entirely and query the DOM once after mount.
    const fishEls = new Array<HTMLElement | null>(FISH_CONFIGS.length).fill(null);
    document.querySelectorAll<HTMLElement>("[data-fish]").forEach(el => {
      const idx = Number(el.dataset.fish);
      if (!isNaN(idx)) fishEls[idx] = el;
    });

    // Spread fish across viewport on mount using deterministic fractions
    FISH_CONFIGS.forEach((cfg, i) => {
      fishPos.current[i] = cfg.initFrac * vw;
      const el = fishEls[i];
      if (el) {
        el.style.transform = `translateX(${fishPos.current[i]}px)${cfg.dir === "l" ? " scaleX(-1)" : ""}`;
      }
    });

    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta    = currentY - lastY;
      lastY = currentY;
      if (delta === 0) return;

      const vw = window.innerWidth;
      FISH_CONFIGS.forEach((cfg, i) => {
        const el = fishEls[i];
        if (!el) return;

        // Right-facing fish move right on scroll-down; left-facing move left
        fishPos.current[i] += delta * cfg.speed * (cfg.dir === "r" ? 1 : -1);

        // Wrap around the viewport edges
        if (fishPos.current[i] > vw + 100)  fishPos.current[i] = -100;
        if (fishPos.current[i] < -100) fishPos.current[i] = vw + 100;

        el.style.transform = `translateX(${fishPos.current[i]}px)${cfg.dir === "l" ? " scaleX(-1)" : ""}`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white"
        style={{ fontWeight: 700 }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        style={{
          position: "relative",
          background: `linear-gradient(180deg,
            #FFF3D0 0%,
            #FFF0C8 4%,
            #D4EEF7 7%,
            #ACDFEF 10%,
            #5BBCD8 13%,
            #2BA8CE 16%,
            #0CC0DF 20%,
            #0093B2 31%,
            #006B8A 38%,
            #005F7A 43%,
            #003B4A 55%,
            #002533 63%,
            #001A25 72%,
            #001018 83%,
            #000A12 90%,
            #000508 100%)`,
          overflowX: "hidden",
        }}
      >

        {/* ══════════════════════════════════════════════════════════
            SKY ZONE — 0–60vh  (top of page, above waterline)
        ══════════════════════════════════════════════════════════ */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "60vh",
            pointerEvents: "none",
          }}
        >
          {/* Sun */}
          <div style={{ position: "absolute", top: "28vh", right: "10%" }}>
            <div className="float-anim">
              <Sun />
            </div>
          </div>

          {/* Clouds */}
          <div style={{ position: "absolute", top: "8vh", left: "6%" }}>
            <Cloud w={160} opacity={0.9} />
          </div>
          <div style={{ position: "absolute", top: "18vh", left: "38%" }}>
            <Cloud w={200} opacity={0.82} />
          </div>
          <div style={{ position: "absolute", top: "6vh", right: "28%" }}>
            <Cloud w={130} opacity={0.78} />
          </div>
          <div style={{ position: "absolute", top: "35vh", left: "22%" }}>
            <Cloud w={110} opacity={0.65} />
          </div>

          {/* Birds */}
          <div
            style={{
              position: "absolute",
              top: "12vh",
              left: "8%",
              animation: "bird-drift 22s linear infinite",
            }}
          >
            <Bird />
          </div>
          <div
            style={{
              position: "absolute",
              top: "20vh",
              left: "14%",
              animation: "bird-drift 28s linear infinite",
              animationDelay: "6s",
            }}
          >
            <Bird />
          </div>
          <div
            style={{
              position: "absolute",
              top: "10vh",
              left: "22%",
              animation: "bird-drift 19s linear infinite",
              animationDelay: "12s",
            }}
          >
            <Bird />
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            HERO TEXT — absolute centered above the waterline
        ══════════════════════════════════════════════════════════ */}
        <div
          style={{
            position: "absolute",
            top: "10vh",
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 1.5rem",
            zIndex: 30,
          }}
        >
          <Reveal delay={0.1}>
            <h1
              style={{
                fontFamily: "'Pacifico', cursive",
                fontSize: "clamp(2.8rem, 8.5vw, 6.5rem)",
                color: "#1A2E3B",
                lineHeight: 1.08,
                textShadow: "0 2px 24px rgba(255,255,255,0.7), 0 4px 40px rgba(255,255,255,0.3)",
                maxWidth: 960,
              }}
            >
              Private Swim Lessons in Houston.{" "}
              <span style={{
                color: "#FF6B6B",
                textShadow: "0 2px 20px rgba(255,107,107,0.4), 0 4px 40px rgba(255,255,255,0.3)",
              }}>We Come to You.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                color: "#1A2E3B",
                fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
                maxWidth: 680,
                marginTop: "1.5rem",
                lineHeight: 1.7,
                fontWeight: 600,
                textShadow: "0 1px 8px rgba(255,255,255,0.4)",
              }}
            >
              Private lessons at your residential or community pool. We work with kids, adults, and everyone in between. Results guaranteed by lesson 10, or you get your money back.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <button
                onClick={() => setContactOpen(true)}
                className="btn-pulse inline-flex items-center gap-2 px-8 py-4 rounded-full text-white"
                style={{
                  background: "linear-gradient(135deg, #FF6B6B, #e85555)",
                  fontWeight: 700,
                  fontSize: "1.08rem",
                  boxShadow: "0 8px 28px rgba(255,107,107,0.45)",
                }}
              >
                Contact Us →
              </button>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.25)",
                  border: "2px solid rgba(255,255,255,0.6)",
                  color: "#1A2E3B",
                  fontWeight: 600,
                  backdropFilter: "blur(8px)",
                }}
              >
                📞 {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>

          {/* Proof pills */}
          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              {["✅ CPR/AED Certified", "🏊 Residential & community pools", "💰 Results guaranteed"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="text-sm px-5 py-2 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.28)",
                      border: "1.5px solid rgba(255,255,255,0.55)",
                      color: "#0D1E2B",
                      fontWeight: 700,
                      backdropFilter: "blur(6px)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
          </Reveal>

        </div>

        {/* ══════════════════════════════════════════════════════════
            WATERLINE WAVES  (position: absolute, ~14vh from top)
        ══════════════════════════════════════════════════════════ */}
        <div
          style={{
            position: "absolute",
            top: "60vh",
            left: 0,
            right: 0,
            height: 120,
            pointerEvents: "none",
            zIndex: 5,
          }}
        >
          <WaveRow fill="rgba(255,255,255,0.65)"  speed="9s"  yOffset={0} />
          <WaveRow fill="rgba(180,228,244,0.52)" speed="13s" reverse yOffset={18} />
          <WaveRow fill="rgba(120,200,228,0.42)" speed="11s" yOffset={34} />
          <WaveRow fill="rgba(60,172,210,0.38)"  speed="16s" reverse yOffset={52} />
        </div>

        {/* ══════════════════════════════════════════════════════════
            SPLASH RINGS — just below waterline
        ══════════════════════════════════════════════════════════ */}
        <div
          style={{
            position: "absolute",
            top: "68vh",
            left: "50%",
            transform: "translateX(-50%)",
            width: 200,
            height: 200,
            pointerEvents: "none",
          }}
        >
          {[0, 0.6, 1.2].map((d) => (
            <div
              key={d}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.5)",
                animation: `splash-ring 2.4s ease-out infinite`,
                animationDelay: `${d}s`,
              }}
            />
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════
            SURFACE FISH — scroll-driven, indices 0-4
        ══════════════════════════════════════════════════════════ */}
        <div
          style={{
            position: "absolute",
            top: "65vh",
            left: 0,
            right: 0,
            height: "90vh",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {FISH_CONFIGS.map((f, i) => f.zone !== "surface" ? null : (
            <div
              key={i}
              data-fish={i}
              style={{ position: "absolute", top: f.top, left: 0 }}
            >
              <Fish color={f.color} size={f.size} />
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════
            SHALLOW WATER FISH — scroll-driven, indices 5-9
        ══════════════════════════════════════════════════════════ */}
        <div
          style={{
            position: "absolute",
            top: "120vh",
            left: 0,
            right: 0,
            height: "40vh",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {FISH_CONFIGS.map((f, i) => f.zone !== "shallow" ? null : (
            <div
              key={i}
              data-fish={i}
              style={{ position: "absolute", top: f.top, left: 0 }}
            >
              <Fish color={f.color} size={f.size} />
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════
            ABOUT — shallow water zone
        ══════════════════════════════════════════════════════════ */}
        <section
          id="about"
          style={{
            position: "relative",
            paddingTop: "120vh",
            paddingBottom: "14vh",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            zIndex: 10,
          }}
        >
          {/* Caustic light rays */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "100%",
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            {[8, 22, 38, 55, 70, 85].map((left, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: 0,
                  left: `${left}%`,
                  width: 40,
                  height: "100%",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.13) 0%, transparent 100%)",
                  filter: "blur(12px)",
                  animation: `caustic-sway ${2.5 + i * 0.4}s ease-in-out infinite alternate`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>

          {/* Bubbles */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "100%",
              pointerEvents: "none",
            }}
          >
            {[
              { left: "8%",  size: 6, dur: "3.2s", del: "0s" },
              { left: "18%", size: 4, dur: "4.1s", del: "0.8s" },
              { left: "32%", size: 7, dur: "2.9s", del: "1.5s" },
              { left: "48%", size: 5, dur: "3.7s", del: "0.4s" },
              { left: "62%", size: 4, dur: "4.5s", del: "2.1s" },
              { left: "75%", size: 6, dur: "3.3s", del: "1.1s" },
              { left: "88%", size: 5, dur: "4.0s", del: "0.6s" },
            ].map((b, i) => (
              <div
                key={i}
                className="bubble-rise"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: b.left,
                  width: b.size,
                  height: b.size,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.55)",
                  animationDuration: b.dur,
                  animationDelay: b.del,
                }}
              />
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Photo */}
              <Reveal className="flex-shrink-0 w-full lg:w-auto flex justify-center">
                <div className="relative">
                  <div
                    className="absolute -inset-3 rounded-3xl"
                    style={{
                      background: "linear-gradient(135deg, #0CC0DF 0%, #FFD166 100%)",
                      opacity: 0.3,
                    }}
                  />
                  <div
                    className="relative overflow-hidden rounded-2xl"
                    style={{ width: 300, height: 380 }}
                  >
                    <Image
                      src="/seth.jpg"
                      alt="Seth Green — LUVESWIM Instructor"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                  <div
                    className="float-anim absolute -bottom-5 -right-5 flex items-center gap-2 px-4 py-3 rounded-2xl shadow-xl"
                    style={{ background: "#FF6B6B" }}
                  >
                    <span className="text-2xl">🌊</span>
                    <div>
                      <p className="text-white text-xs" style={{ fontWeight: 600 }}>Results</p>
                      <p className="text-white text-sm" style={{ fontWeight: 700 }}>Guaranteed</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Text */}
              <Reveal delay={0.15} className="flex-1">
                <div
                  className="rounded-3xl p-8 md:p-10"
                  style={{
                    background: "rgba(0, 20, 35, 0.55)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(12,192,223,0.2)",
                    boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
                  }}
                >
                <p className="section-label mb-3" style={{ color: "#0CC0DF" }}>
                  Meet Your Instructor
                </p>
                <h2
                  className="font-pacifico leading-snug mb-6"
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                  }}
                >
                  Hi, I&apos;m Seth Green,<br />
                  founder of{" "}
                  <span style={{ color: "#FF6B6B" }}>LUVE Swim.</span>
                </h2>
                <p
                  className="leading-relaxed mb-4"
                  style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.08rem" }}
                >
                  I&apos;m currently a freshman at the University of Houston&apos;s Bauer College of Business, with over 4 years of experience in lifeguarding, lifeguard supervision, swim instruction, and childcare.
                </p>
                <p
                  className="leading-relaxed mb-4"
                  style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.08rem" }}
                >
                  I&apos;ve worked with children ages 3&ndash;17 both in and out of the water, focusing on building confidence, safety, and strong swimming fundamentals. Growing up around the water and competing in swimming, I&apos;ve always had a passion for helping others learn.
                </p>
                <p
                  className="leading-relaxed mb-4"
                  style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.08rem" }}
                >
                  I created LUVE Swim to provide personalized, high-quality swim lessons that meet each swimmer where they are, whether they&apos;re just starting or looking to improve. I take pride in creating a safe, fun, and structured environment for every swimmer.
                </p>
                <p
                  className="leading-relaxed mb-4 italic"
                  style={{ color: "#0CC0DF", fontSize: "1.08rem", fontWeight: 600 }}
                >
                  Don&apos;t forget your U CAN energy… i&apos;ll see you in the water 🏊‍♂️
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    { icon: "🛡️", label: "CPR/AED Certified" },
                    { icon: "🏊", label: "4+ Years Swim Instructor" },
                    { icon: "🛟", label: "4+ Years Lifeguard Supervisor" },
                    { icon: "🏡", label: "Residential Pools" },
                    { icon: "🏘️", label: "Community Pools" },
                    { icon: "🏆", label: "Competitive Swim Background" },
                  ].map((c) => (
                    <span
                      key={c.label}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        color: "#ffffff",
                        fontWeight: 600,
                      }}
                    >
                      {c.icon} {c.label}
                    </span>
                  ))}
                </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            MID-WATER FISH (swim across mid section)
        ══════════════════════════════════════════════════════════ */}
        <div
          style={{
            position: "absolute",
            top: "300vh",
            left: 0,
            right: 0,
            height: "40vh",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {FISH_CONFIGS.map((f, i) => f.zone !== "mid" ? null : (
            <div
              key={i}
              data-fish={i}
              style={{ position: "absolute", top: f.top, left: 0 }}
            >
              <Fish color={f.color} size={f.size} />
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════
            SERVICES — going deeper
        ══════════════════════════════════════════════════════════ */}
        <section
          id="services"
          style={{
            position: "relative",
            paddingTop: "14vh",
            paddingBottom: "14vh",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            zIndex: 10,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-20">
              <p className="section-label mb-3" style={{ color: "#0CC0DF" }}>
                What We Offer
              </p>
              <h2
                className="font-pacifico mb-4"
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  textShadow: "0 2px 12px rgba(0,0,0,0.3)",
                }}
              >
                Every Lesson Is Personal
              </h2>
              <p
                className="max-w-xl mx-auto leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.08rem" }}
              >
                No groups. No distractions. Just real results.
              </p>
            </Reveal>

            <div
              className="grid gap-10 items-stretch"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
            >
              {[
                {
                  icon: "🏊",
                  title: "Luxury Private Swim Lessons",
                  tag: "Most Popular",
                  pricing: [
                    { label: "Kids (2yr–17yr)", price: "$65", per: "per session" },
                    { label: "Adults (18+)", price: "$75", per: "per session" },
                  ],
                  duration: "40-Minute Sessions · 10-Lesson Minimum",
                  description:
                    "Every session is fully customized to your swimmer's skill level and goals. Whether they're learning water safety or refining stroke technique, they'll receive focused, one-on-one instruction with zero distractions.",
                  accent: "#FFD166",
                  textOnAccent: "#003B4A",
                  ctaText: "Book a Lesson",
                  ctaHref: BOOKING_URL,
                  onClickContact: false,
                },
                {
                  icon: "👨‍👩‍👧‍👦",
                  title: "Sibling Packages",
                  tag: "Best Value",
                  pricing: [
                    { label: "2 Swimmers", price: "$60", per: "per session" },
                    { label: "3-4 Swimmers", price: "Custom", per: "family packages" },
                  ],
                  duration: "Private Sessions for Each Swimmer · 10-Lesson Minimum",
                  description:
                    "Each sibling gets their own private, 1-on-1 session. No group lessons, ever. Enroll multiple swimmers together and unlock our reduced family rate. The same focused, premium instruction your swimmers deserve, at a price built for the whole family.",
                  accent: "#7BD9C2",
                  textOnAccent: "#003B4A",
                  ctaText: "Reserve Your Package",
                  ctaHref: BOOKING_URL,
                  onClickContact: false,
                },
                {
                  icon: "🛟",
                  title: "Private Lifeguard Hire",
                  tag: "Events & Parties",
                  pricing: null,
                  duration: "CPR/AED Certified · Event-Based",
                  description:
                    "Hosting a pool party or event? Our certified lifeguards ensure a safe, stress-free environment so you can fully enjoy the experience. Ideal for birthdays, private events, and community gatherings.",
                  accent: "#FF6B6B",
                  textOnAccent: "#ffffff",
                  ctaText: "Check Availability",
                  ctaHref: null,
                  onClickContact: true,
                },
              ].map((s, i) => {
                const isPopular = s.tag === "Most Popular";
                return (
                  <Reveal key={s.title} delay={i * 0.08}>
                    <div
                      className="service-card relative flex flex-col rounded-3xl overflow-hidden h-full transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.05) 100%)",
                        border: `1px solid ${isPopular ? "rgba(12,192,223,0.35)" : "rgba(255,255,255,0.14)"}`,
                        backdropFilter: "blur(14px)",
                        boxShadow: isPopular
                          ? `0 0 0 1px ${s.accent}33, 0 24px 60px rgba(12,192,223,0.18)`
                          : "0 12px 40px rgba(0,0,0,0.25)",
                      }}
                    >
                      {/* Top accent bar */}
                      <div style={{ height: 5, background: s.accent }} />

                      <div className="p-8 flex flex-col flex-1">
                        {/* Header: icon + badge */}
                        <div className="flex items-start justify-between mb-3">
                          <span style={{ fontSize: "3rem", lineHeight: 1 }}>{s.icon}</span>
                          <span
                            className="inline-flex items-center px-5 py-2 rounded-full text-sm uppercase"
                            style={{
                              background: `linear-gradient(135deg, ${s.accent}, ${s.accent}cc)`,
                              color: s.textOnAccent,
                              fontWeight: 900,
                              letterSpacing: "0.1em",
                              boxShadow: `0 0 0 2px ${s.accent}33, 0 8px 24px ${s.accent}77, 0 0 32px ${s.accent}55`,
                            }}
                          >
                            {s.tag}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="font-pacifico mb-2"
                          style={{ color: "#ffffff", fontSize: "1.75rem", lineHeight: 1.15 }}
                        >
                          {s.title}
                        </h3>

                        {/* Duration */}
                        <p
                          className="text-xs uppercase mb-5"
                          style={{
                            color: s.accent,
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                          }}
                        >
                          {s.duration}
                        </p>

                        {/* Pricing block */}
                        {s.pricing ? (
                          <div className="grid grid-cols-2 gap-3 mb-6">
                            {s.pricing.map((p) => (
                              <div
                                key={p.label}
                                className="flex flex-col px-4 py-4 rounded-2xl"
                                style={{
                                  background: "rgba(255,255,255,0.06)",
                                  border: "1px solid rgba(255,255,255,0.08)",
                                }}
                              >
                                <span className="text-xs mb-1.5" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 500, letterSpacing: "0.02em" }}>
                                  {p.label}
                                </span>
                                <span
                                  style={{
                                    color: s.accent,
                                    fontWeight: 900,
                                    fontSize: p.price.length > 4 ? "1.5rem" : "2.5rem",
                                    lineHeight: 1.05,
                                    letterSpacing: "-0.02em",
                                  }}
                                >
                                  {p.price}
                                </span>
                                <span className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
                                  {p.per}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div
                            className="mb-6 px-5 py-5 rounded-2xl text-center"
                            style={{
                              background: "rgba(255,255,255,0.06)",
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}
                          >
                            <span className="block text-xs uppercase mb-1.5" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 500, letterSpacing: "0.1em" }}>
                              Pricing
                            </span>
                            <span style={{ color: s.accent, fontWeight: 900, fontSize: "1.75rem", letterSpacing: "-0.01em" }}>
                              Custom Quote
                            </span>
                          </div>
                        )}

                        {/* Description */}
                        <p
                          className="leading-relaxed flex-1 text-sm mb-6"
                          style={{ color: "rgba(255,255,255,0.78)" }}
                        >
                          {s.description}
                        </p>

                        {/* CTA */}
                        {s.onClickContact ? (
                          <button
                            onClick={() => setContactOpen(true)}
                            className="w-full text-center py-4 rounded-2xl text-sm transition-all duration-200 hover:scale-[1.02]"
                            style={{
                              background: `linear-gradient(135deg, ${s.accent}, ${s.accent}dd)`,
                              color: s.textOnAccent,
                              fontWeight: 800,
                              letterSpacing: "0.02em",
                              boxShadow: `0 10px 28px ${s.accent}55`,
                            }}
                          >
                            {s.ctaText} →
                          </button>
                        ) : (
                          <a
                            href={s.ctaHref!}
                            className="block w-full text-center py-4 rounded-2xl text-sm transition-all duration-200 hover:scale-[1.02]"
                            style={{
                              background: `linear-gradient(135deg, ${s.accent}, ${s.accent}dd)`,
                              color: s.textOnAccent,
                              fontWeight: 800,
                              letterSpacing: "0.02em",
                              boxShadow: `0 10px 28px ${s.accent}55`,
                            }}
                          >
                            {s.ctaText} →
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            LUVE PROMISE — mid depth
        ══════════════════════════════════════════════════════════ */}
        <section
          id="promise"
          style={{
            position: "relative",
            paddingTop: "14vh",
            paddingBottom: "14vh",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            zIndex: 10,
          }}
        >
          {/* Jellyfish floating in background */}
          <div style={{ position: "absolute", top: "5%", left: "5%", pointerEvents: "none" }}>
            <div style={{ animation: "bob 4s ease-in-out infinite" }}>
              <Jellyfish />
            </div>
          </div>
          <div style={{ position: "absolute", top: "20%", right: "8%", pointerEvents: "none" }}>
            <div style={{ animation: "bob 5.5s ease-in-out infinite", animationDelay: "1.2s" }}>
              <Jellyfish />
            </div>
          </div>
          <div style={{ position: "absolute", bottom: "10%", left: "18%", pointerEvents: "none" }}>
            <div style={{ animation: "bob 3.8s ease-in-out infinite", animationDelay: "0.6s" }}>
              <Jellyfish />
            </div>
          </div>

          {/* Glow pulse background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(12,192,223,0.12) 0%, transparent 70%)",
              animation: "glow-pulse 4s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />

          <div className="relative max-w-3xl mx-auto text-center">
            <Reveal>
              <div
                className="flex items-center justify-center w-24 h-24 rounded-full mx-auto mb-8"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "3px solid rgba(255,255,255,0.3)",
                  fontSize: "3rem",
                }}
              >
                🛡️
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="section-label mb-3" style={{ color: "rgba(255,255,255,0.65)" }}>
                Our Commitment to You
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <h2
                className="font-pacifico text-white mb-6"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
              >
                The LUVE PROMISE
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p
                className="text-white leading-relaxed mb-4 text-lg"
                style={{ opacity: 0.92, maxWidth: 560, margin: "0 auto 1.5rem" }}
              >
                Every swimmer hits their goal by lesson 10. If it doesn&apos;t happen, you get a full refund.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex justify-center gap-6 mb-10 flex-wrap">
                {[
                  { stat: "10", label: "Lessons to hit your goal" },
                  { stat: "100%", label: "Refund if you don't" },
                ].map((item) => (
                  <div key={item.label} className="promise-stat text-center">
                    <p className="font-pacifico" style={{
                      fontSize: "clamp(3rem, 6vw, 4.5rem)",
                      lineHeight: 1,
                      background: "linear-gradient(135deg, #0CC0DF, #FFD166)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                      {item.stat}
                    </p>
                    <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600, letterSpacing: "0.04em" }}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            DEEP WATER FISH (silhouettes)
        ══════════════════════════════════════════════════════════ */}
        <div
          style={{
            position: "absolute",
            top: "460vh",
            left: 0,
            right: 0,
            height: "35vh",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {FISH_CONFIGS.map((f, i) => f.zone !== "deep" ? null : (
            <div
              key={i}
              data-fish={i}
              style={{ position: "absolute", top: f.top, left: 0 }}
            >
              <DeepFish size={f.size} />
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════
            MID-DEEP FISH (promise / services gap ~380vh)
        ══════════════════════════════════════════════════════════ */}
        <div
          style={{
            position: "absolute",
            top: "380vh",
            left: 0,
            right: 0,
            height: "70vh",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {FISH_CONFIGS.map((f, i) => f.zone !== "mid2" ? null : (
            <div
              key={i}
              data-fish={i}
              style={{ position: "absolute", top: f.top, left: 0 }}
            >
              <Fish color={f.color} size={f.size} />
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════
            FLOOR FISH (testimonials + ocean floor ~495vh)
        ══════════════════════════════════════════════════════════ */}
        <div
          style={{
            position: "absolute",
            top: "495vh",
            left: 0,
            right: 0,
            height: "100vh",
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          {FISH_CONFIGS.map((f, i) => f.zone !== "floor" ? null : (
            <div
              key={i}
              data-fish={i}
              style={{ position: "absolute", top: f.top, left: 0 }}
            >
              <DeepFish size={f.size} />
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════
            TESTIMONIALS — deep water
        ══════════════════════════════════════════════════════════ */}
        <section
          id="testimonials"
          style={{
            position: "relative",
            paddingTop: "14vh",
            paddingBottom: "14vh",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            zIndex: 10,
          }}
        >
          {/* Bioluminescent glow dots */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            {[
              { left: "5%",  top: "20%", r: 60 },
              { left: "20%", top: "70%", r: 40 },
              { left: "50%", top: "15%", r: 80 },
              { left: "75%", top: "60%", r: 50 },
              { left: "88%", top: "30%", r: 35 },
            ].map((g, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: g.left,
                  top: g.top,
                  width: g.r * 2,
                  height: g.r * 2,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(12,192,223,0.18) 0%, transparent 70%)",
                  animation: `glow-pulse ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.7}s`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <Reveal className="text-center mb-20">
              <p className="section-label mb-3" style={{ color: "#0CC0DF" }}>
                From Houston Families
              </p>
              <h2
                className="font-pacifico mb-4"
                style={{
                  color: "#ffffff",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                What Families Are Saying
              </h2>
              <p
                className="max-w-md mx-auto"
                style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem" }}
              >
                A few people who&apos;ve been through it.
              </p>
            </Reveal>

            {(() => {
              const testimonials = [
                {
                  quote: "My daughter just turned 3 and was terrified of the water. By lesson 7 she was jumping in on her own. Didn't expect that kind of progress that fast.",
                  name: "Rachel M.",
                  location: "Houston, TX",
                  emoji: "👩",
                },
                {
                  quote: "Signed up both my kids, 9 and 12. They each got their own full session at different levels. My older one had plateaued before this and started improving again. Worth it.",
                  name: "Marcus T.",
                  location: "Houston, TX",
                  emoji: "👨",
                },
                {
                  quote: "We hired him for my husband's birthday pool party and he was AWESOME. He was in his lifeguard uniform, constantly walking back and forth watching the kiddos. Working with him was easy too. He responds quickly and confirmed everything the week of the party. Several of our guests were very impressed with him.",
                  name: "Noelle C.",
                  location: "Houston, TX · Facebook",
                  emoji: "👩",
                },
                {
                  quote: "Had about 20 kids at my daughter's birthday and wanted someone actually paying attention. He showed up on time, stayed alert the whole time. I'll call again for the next one.",
                  name: "Danielle R.",
                  location: "Houston, TX",
                  emoji: "👩",
                },
                {
                  quote: "I'm 34 and never properly learned to swim. He was patient, never made me feel ridiculous, and now I can actually do laps. Still not fast, but I'm doing it.",
                  name: "James K.",
                  location: "Houston, TX",
                  emoji: "👨",
                },
              ];
              const Card = ({ t }: { t: typeof testimonials[0] }) => (
                <div
                  className="testi-card flex flex-col p-7 rounded-2xl flex-shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(10px)",
                    borderLeft: "4px solid #0CC0DF",
                  }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} style={{ color: "#FFD166", fontSize: "1.2rem" }}>★</span>
                    ))}
                  </div>
                  <p className="leading-relaxed flex-1 italic" style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full text-xl" style={{ background: "rgba(255,255,255,0.1)" }}>
                      {t.emoji}
                    </div>
                    <div>
                      <p style={{ color: "#0CC0DF", fontWeight: 700 }}>{t.name}</p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{t.location}</p>
                    </div>
                  </div>
                </div>
              );

              return (
                <div style={{ position: "relative" }}>
                  {/* Fade edges */}
                  <div style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
                    background: "linear-gradient(to right, rgba(0,40,60,1), transparent)",
                    pointerEvents: "none",
                  }} />
                  <div style={{
                    position: "absolute", right: 0, top: 0, bottom: 0, width: 80, zIndex: 2,
                    background: "linear-gradient(to left, rgba(0,40,60,1), transparent)",
                    pointerEvents: "none",
                  }} />

                  <div
                    ref={testiScrollRef}
                    className="testi-scroll"
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                      overflowX: "auto",
                      overflowY: "hidden",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      paddingBottom: "0.5rem",
                      WebkitOverflowScrolling: "touch",
                      scrollbarWidth: "none",
                    }}
                  >
                    {testimonials.map((t, i) => (
                      <div key={i} style={{ flexShrink: 0, width: "340px" }}>
                        <Card t={t} />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
            <div className="text-center mt-10">
              <a
                href="https://share.google/7otbzsOpvD64LjOZv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "#ffffff",
                  fontWeight: 700,
                  backdropFilter: "blur(8px)",
                }}
              >
                ⭐ See our Google Reviews
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            OCEAN FLOOR — sand, seaweed, coral, CTA
        ══════════════════════════════════════════════════════════ */}
        <section
          id="contact"
          style={{
            position: "relative",
            paddingTop: "14vh",
            paddingBottom: 0,
            zIndex: 10,
          }}
        >
          {/* Sand floor — extends through footer */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "62%",
              background: "linear-gradient(180deg, transparent 0%, rgba(100,68,8,0.6) 18%, #7A5C10 32%, #6B500D 50%, #3a2a06 75%, #1a1200 100%)",
              borderRadius: "55% 55% 0 0 / 12% 12% 0 0",
            }}
          />

          {/* Seaweed clusters */}
          <div
            style={{
              position: "absolute",
              bottom: "70%",
              left: "4%",
              display: "flex",
              gap: 4,
              pointerEvents: "none",
            }}
          >
            {[90, 70, 100, 80].map((h, i) => (
              <div key={i} style={{ animation: `sway ${2.5 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}>
                <Seaweed height={h} color={i % 2 === 0 ? "#0CC0DF" : "#0093B2"} />
              </div>
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "70%",
              right: "6%",
              display: "flex",
              gap: 4,
              pointerEvents: "none",
            }}
          >
            {[85, 110, 75, 95].map((h, i) => (
              <div key={i} style={{ animation: `sway ${2.8 + i * 0.25}s ease-in-out infinite`, animationDelay: `${i * 0.35}s` }}>
                <Seaweed height={h} color={i % 2 === 0 ? "#0093B2" : "#006B8A"} />
              </div>
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "70%",
              left: "40%",
              display: "flex",
              gap: 4,
              pointerEvents: "none",
            }}
          >
            {[75, 95, 65].map((h, i) => (
              <div key={i} style={{ animation: `sway ${3 + i * 0.2}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}>
                <Seaweed height={h} color="#0CC0DF" />
              </div>
            ))}
          </div>

          {/* Coral */}
          <div style={{ position: "absolute", bottom: "67%", left: "15%", pointerEvents: "none" }}>
            <Coral color="#FF6B6B" />
          </div>
          <div style={{ position: "absolute", bottom: "65%", left: "55%", pointerEvents: "none" }}>
            <Coral color="#FFD166" />
          </div>
          <div style={{ position: "absolute", bottom: "66%", right: "20%", pointerEvents: "none" }}>
            <Coral color="#FF6B6B" />
          </div>

          {/* Footer bar — transparent so the sand gradient shows through */}
          <div
            style={{
              position: "relative",
              zIndex: 20,
              background: "transparent",
              paddingTop: "3rem",
              paddingBottom: "2rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10 flex-wrap mb-10">
              {/* Brand */}
              <div>
                <Image
                  src="/logo-luveswim.png"
                  alt="LUVE SWIM"
                  width={140}
                  height={50}
                  className="object-contain brightness-0 invert mb-3"
                />
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  HTX&apos;s Best Swim Instructor
                </p>
                <p className="mt-2 text-sm italic" style={{ color: "rgba(255,255,255,0.4)" }}>
                  &quot;Where U Can Do It&quot;
                </p>
                {/* Social links */}
                <div className="flex gap-3 mt-4">
                  <a
                    href="https://www.instagram.com/luveswim?igsh=N3prazFlcDI0NWJ0&utm_source=qr"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-80"
                    style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1A5bh9JZru/?mibextid=wwXIfr"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-80"
                    style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sethgreenuh"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-80"
                    style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-widest" style={{ color: "#0CC0DF", fontWeight: 700 }}>
                  Get in Touch
                </p>
                <a href={PHONE_TEL} className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.8)" }}>
                  📞 {PHONE_DISPLAY}
                </a>
                <a href={EMAIL_HREF} className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.8)" }}>
                  ✉️ {EMAIL}
                </a>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>📍 Houston, TX area</p>
              </div>

              {/* Quick links */}
              <div className="flex flex-col gap-3">
                <p className="text-xs uppercase tracking-widest" style={{ color: "#0CC0DF", fontWeight: 700 }}>
                  Quick Links
                </p>
                {[
                  { label: "About", href: "#about" },
                  { label: "Services & Pricing", href: "#services" },
                  { label: "The LUVE PROMISE", href: "#promise" },
                  { label: "Testimonials", href: "#testimonials" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              {/* Book */}
              <div className="flex flex-col gap-4">
                <a
                  href={BOOKING_URL}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm transition-all duration-200 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #FF6B6B, #e85555)",
                    color: "#ffffff",
                    fontWeight: 700,
                    boxShadow: "0 4px 16px rgba(255,107,107,0.3)",
                  }}
                >
                  Book a Lesson →
                </a>
              </div>
            </div>

            <div
              className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem" }}
            >
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                © 2026 LUVE Enterprises Group LLC. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a
                  href="/terms"
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Inquiry Modal */}
      {contactOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)" }}
          onClick={() => { setContactOpen(false); setSubmitted(false); setSendError(""); }}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl p-8"
            style={{ background: "#0D2233", border: "1px solid rgba(12,192,223,0.3)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => { setContactOpen(false); setSubmitted(false); setSendError(""); }}
              className="absolute top-4 right-4 text-2xl"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              ×
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🌊</div>
                <h3 className="font-pacifico text-white text-2xl mb-3">Message Sent!</h3>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  We&apos;ll be in touch within 24 hours to set up your first lesson.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-pacifico text-white text-2xl mb-2">Let&apos;s Get in Touch</h3>
                <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Tell us a little about who&apos;s learning. We&apos;ll reach out within 24 hours.
                </p>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setSending(true);
                    setSendError("");
                    try {
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(formState),
                      });
                      if (res.ok) {
                        setSubmitted(true);
                        setFormState({ name: "", email: "", swimmers: "", message: "" });
                      } else {
                        setSendError("Something went wrong. Please try again or email us directly.");
                      }
                    } catch {
                      setSendError("Something went wrong. Please try again or email us directly.");
                    } finally {
                      setSending(false);
                    }
                  }}
                >
                  <input
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
                  />
                  <input
                    placeholder="How many swimmers? (e.g. 2 kids, 1 adult)"
                    value={formState.swimmers}
                    onChange={(e) => setFormState(s => ({ ...s, swimmers: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
                  />
                  <textarea
                    rows={3}
                    placeholder="Anything else we should know?"
                    value={formState.message}
                    onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
                  />
                  {sendError && (
                    <p className="text-sm text-center" style={{ color: "#FF6B6B" }}>{sendError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 rounded-xl text-white transition-all hover:opacity-90 disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #0CC0DF, #0093B2)", fontWeight: 700 }}
                  >
                    {sending ? "Sending…" : "Apply →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
