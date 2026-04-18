"use client";

import { motion } from "framer-motion";

const BOOKING_URL = "/book";
const PHONE_TEL = "tel:+18326005534";
const PHONE_DISPLAY = "(832) 600-5534";

export default function BookingCTA() {
  return (
    <section
      id="book"
      className="relative py-28 px-4 overflow-hidden flex items-center justify-center"
      style={{ minHeight: 480 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 hero-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transformOrigin: "center",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(12,192,223,0.8) 0%, rgba(0,40,70,0.88) 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        <p
          className="text-sm font-700 uppercase tracking-widest mb-4"
          style={{ color: "rgba(255,209,102,0.9)", fontWeight: 700 }}
        >
          Spots Fill Up Fast
        </p>

        <h2
          className="font-pacifico text-white mb-5"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
        >
          Ready to Make a Splash?
        </h2>

        <p
          className="text-white leading-relaxed mb-10"
          style={{
            fontSize: "1.1rem",
            opacity: 0.92,
            maxWidth: 520,
            margin: "0 auto 2.5rem",
          }}
        >
          Seth&apos;s schedule fills up fast, especially in summer. Book your
          spot now and get your swimmer going, backed by the full LUVE
          PROMISE guarantee.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BOOKING_URL}
            className="btn-pulse inline-flex items-center gap-3 px-8 py-4 rounded-full font-700 text-white transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #FF6B6B, #e85555)",
              fontWeight: 700,
              fontSize: "1.1rem",
              boxShadow: "0 8px 30px rgba(255,107,107,0.45)",
            }}
          >
            Book Your Lessons Now 🏊
          </a>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-600 text-white transition-all duration-200"
            style={{
              border: "2px solid rgba(255,255,255,0.5)",
              fontWeight: 600,
              fontSize: "1rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            📞 Call Seth: {PHONE_DISPLAY}
          </a>
        </div>

        <p
          className="mt-8 text-sm"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          48-hour cancellation notice required. Weather reschedules always free.
        </p>
      </motion.div>
    </section>
  );
}
