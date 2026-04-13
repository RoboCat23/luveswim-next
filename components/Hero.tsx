"use client";

import { motion } from "framer-motion";

const BOOKING_URL = "https://luveswim.as.me/schedule/a248e30e";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background image with Ken Burns effect */}
      <div
        className="absolute inset-0 hero-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transformOrigin: "center",
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(12,192,223,0.62) 0%, rgba(0,27,46,0.78) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Pre-heading badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-600"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#ffffff",
            backdropFilter: "blur(8px)",
            fontWeight: 600,
          }}
        >
          <span>🌊</span>
          <span>Houston&apos;s Favorite Swim Instructor</span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-pacifico text-white leading-tight mb-6"
          style={{
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            textShadow: "0 4px 20px rgba(0,0,0,0.25)",
          }}
        >
          Dive Into
          <br />
          <span style={{ color: "#FFD166" }}>Confidence.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white mb-8 max-w-xl leading-relaxed"
          style={{
            fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
            opacity: 0.93,
          }}
        >
          Private swim lessons for all ages, right at your pool. Kids pick it
          up faster than you&apos;d expect. Adults too. Results guaranteed by
          lesson 10 or your money back.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-6"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pulse inline-flex items-center gap-3 text-white font-700 rounded-full transition-transform duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #FF6B6B, #e85555)",
              padding: "1rem 2.5rem",
              fontSize: "1.15rem",
              fontWeight: 700,
              boxShadow: "0 8px 30px rgba(255,107,107,0.4)",
            }}
          >
            <span>🏊</span>
            Book Your Lessons
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-600 transition-all duration-200"
            style={{
              color: "#ffffff",
              border: "2px solid rgba(255,255,255,0.5)",
              fontWeight: 600,
              fontSize: "1rem",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.8)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.5)";
            }}
          >
            Meet Seth ↓
          </a>
        </motion.div>

        {/* Pricing strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-wrap justify-center gap-4 text-sm"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          {[
            "Starting at $65/session",
            "Lessons at your pool",
            "All ages welcome",
            "10-lesson guarantee",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span style={{ color: "#FFD166" }}>✓</span>
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Animated wave divider */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        style={{ lineHeight: 0 }}
      >
        <div className="relative" style={{ height: "80px" }}>
          <svg
            className="wave-anim absolute bottom-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            style={{ height: "80px", fill: "#FFF8EE", opacity: 0.6 }}
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
              />
            </defs>
            <use href="#wave-path" x="48" y="0" />
            <use href="#wave-path" x="48" y="3" />
            <use href="#wave-path" x="48" y="5" />
          </svg>
          <svg
            className="wave-anim-slow absolute bottom-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            style={{ height: "80px", fill: "#FFF8EE" }}
          >
            <defs>
              <path
                id="wave-path-2"
                d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
              />
            </defs>
            <use href="#wave-path-2" x="48" y="0" />
          </svg>
        </div>
      </div>
    </section>
  );
}
