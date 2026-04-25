import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SquareWidget from "./SquareWidget";

export const metadata: Metadata = {
  title: "Book a Lesson — LUVE Swim",
  description:
    "Book your private swim lesson in Houston, TX. We come to your pool.",
};

const credentials = [
  { icon: "🛡️", label: "CPR/AED Certified" },
  { icon: "🏊", label: "4+ Years Swim Instruction" },
  { icon: "👦", label: "Ages 3–17 Specialist" },
  { icon: "🏆", label: "Competitive Swim Background" },
  { icon: "🏡", label: "Comes to Your Pool" },
];

export default function BookPage() {
  return (
    <div style={{ background: "#001A25", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── HERO SECTION ─────────────────────────────────────────────── */}
      <div
        style={{
          background: "linear-gradient(160deg, #003B4A 0%, #005F7A 30%, #0093B2 60%, #0CC0DF 100%)",
          paddingBottom: 0,
          position: "relative",
        }}
      >
        {/* Nav */}
        <div className="w-full px-6 py-5 flex items-center justify-between max-w-5xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-luveswim.png"
              alt="LUVE SWIM"
              width={120}
              height={44}
              className="object-contain brightness-0 invert"
              priority
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-100"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            ← Back to site
          </Link>
        </div>

        {/* Heading */}
        <div className="text-center px-6 pt-6 pb-16">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "rgba(255,255,255,0.55)", fontWeight: 800, letterSpacing: "0.18em" }}
          >
            HTX&apos;s Best Swim Instructor
          </p>
          <h1
            className="font-pacifico mb-5"
            style={{
              color: "#ffffff",
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              textShadow: "0 2px 30px rgba(0,0,0,0.3)",
              lineHeight: 1.1,
            }}
          >
            Book Your Lesson
          </h1>
          <p
            className="max-w-sm mx-auto"
            style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75, fontSize: "1rem", fontWeight: 500 }}
          >
            Pick a time. We come to your residential or community pool — no driving, no hassle.
          </p>
        </div>

        {/* Wave transition into dark section */}
        <div style={{ lineHeight: 0, fontSize: 0 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 54"
            width="100%"
            height="54"
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            <path
              d="M0 27 Q180 0 360 27 Q540 54 720 27 Q900 0 1080 27 Q1260 54 1440 27 L1440 54 L0 54 Z"
              fill="#001A25"
            />
          </svg>
        </div>
      </div>

      {/* ── BOOKING SECTION ──────────────────────────────────────────── */}
      <div style={{ background: "#001A25", paddingBottom: "5rem" }}>

        {/* Section label */}
        <div className="text-center pt-12 pb-8 px-6">
          <span
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest"
            style={{ color: "#0CC0DF", fontWeight: 800, letterSpacing: "0.16em" }}
          >
            <span style={{ display: "inline-block", width: 20, height: 2, background: "#0CC0DF", borderRadius: 999, opacity: 0.7 }} />
            Select Your Service &amp; Time
            <span style={{ display: "inline-block", width: 20, height: 2, background: "#0CC0DF", borderRadius: 999, opacity: 0.7 }} />
          </span>
        </div>

        {/* Widget frame */}
        <div className="px-4 max-w-4xl mx-auto">
          <div
            style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              border: "1px solid rgba(12,192,223,0.22)",
              boxShadow: "0 0 0 1px rgba(12,192,223,0.08), 0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(12,192,223,0.07)",
              background: "#ffffff",
              minHeight: 520,
            }}
          >
            <SquareWidget />
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-10 px-4 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {credentials.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                background: "rgba(12,192,223,0.07)",
                border: "1px solid rgba(12,192,223,0.2)",
                color: "rgba(255,255,255,0.75)",
                fontWeight: 600,
              }}
            >
              {c.icon} {c.label}
            </span>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-xs mt-10" style={{ color: "rgba(255,255,255,0.25)" }}>
          © 2026 LUVE Enterprises Group LLC &nbsp;·&nbsp; Houston, TX
        </p>
      </div>
    </div>
  );
}
