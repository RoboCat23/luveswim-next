import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

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
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(160deg, #003B4A 0%, #0093B2 40%, #0CC0DF 70%, #D4EEF7 100%)",
      }}
    >
      {/* Top nav bar */}
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
          className="flex items-center gap-1.5 text-sm transition-colors duration-200"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          ← Back to site
        </Link>
      </div>

      {/* Hero heading */}
      <div className="text-center px-6 pt-8 pb-10">
        <p
          className="text-sm uppercase tracking-widest mb-3"
          style={{ color: "rgba(255,255,255,0.65)", fontWeight: 700 }}
        >
          Houston&apos;s Best Swim Instructor
        </p>
        <h1
          className="font-pacifico mb-4"
          style={{
            color: "#ffffff",
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            textShadow: "0 2px 20px rgba(0,0,0,0.25)",
          }}
        >
          Book Your Lesson
        </h1>
        <p
          className="max-w-md mx-auto text-base"
          style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
        >
          Pick a time that works for you. Your instructor comes right to your pool — no driving, no hassle.
        </p>
      </div>

      {/* ── Booking widget container ───────────────────────────────────────────
          TO INTEGRATE CALENDLY:
            1. Replace the placeholder <div> below with:
               <div
                 className="calendly-inline-widget"
                 data-url="https://calendly.com/YOUR_CALENDLY_LINK"
                 style={{ minWidth: "320px", height: "700px" }}
               />
            2. Add this <Script> tag (next/script, strategy="lazyOnload"):
               <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

          TO INTEGRATE CAL.COM instead:
            npm install @calcom/embed-react
            import Cal from "@calcom/embed-react"
            <Cal calLink="YOUR_CAL_LINK" style={{ width: "100%", height: "700px" }} />
      ─────────────────────────────────────────────────────────────────────── */}
      <div className="px-4 pb-16 max-w-3xl mx-auto">
        <div
          id="booking-widget-container"
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.96)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
          }}
        >
          {/* Placeholder shown until widget is connected */}
          <div
            className="flex flex-col items-center justify-center text-center py-24 px-8"
            style={{ minHeight: 480 }}
          >
            <span className="text-5xl mb-5">🗓️</span>
            <h2
              className="font-pacifico mb-3"
              style={{ color: "#003B4A", fontSize: "1.8rem" }}
            >
              Booking Coming Soon
            </h2>
            <p className="text-base mb-6 max-w-xs" style={{ color: "#3d5260", lineHeight: 1.7 }}>
              Online scheduling will be live here shortly. In the meantime, reach out directly to get on the calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:contact@luveswim.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #FF6B6B, #e85555)", boxShadow: "0 4px 16px rgba(255,107,107,0.3)" }}
              >
                ✉️ Email Us
              </a>
              <a
                href="tel:+18326005534"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{ background: "rgba(12,192,223,0.12)", border: "1.5px solid #0CC0DF", color: "#0093B2" }}
              >
                📞 (832) 600-5534
              </a>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {credentials.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#ffffff",
              }}
            >
              {c.icon} {c.label}
            </span>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs mt-8" style={{ color: "rgba(255,255,255,0.45)" }}>
          48-hour cancellation required · Weather reschedules always free · Houston, TX area
        </p>
      </div>
    </div>
  );
}
