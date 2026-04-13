"use client";

import { motion } from "framer-motion";

const BOOKING_URL = "https://luveswim.as.me/schedule/a248e30e";

export default function LuvePromise() {
  return (
    <section
      id="promise"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0CC0DF 0%, #0093B2 100%)",
      }}
    >
      {/* Decorative background bubbles */}
      <div
        className="absolute top-10 left-10 w-40 h-40 rounded-full pointer-events-none"
        style={{
          background: "rgba(255,255,255,0.06)",
        }}
      />
      <div
        className="absolute bottom-10 right-20 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "rgba(255,255,255,0.05)",
        }}
      />
      <div
        className="absolute top-1/2 right-10 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background: "rgba(255,209,102,0.12)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Shield icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <div
            className="flex items-center justify-center w-24 h-24 rounded-full"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "3px solid rgba(255,255,255,0.4)",
              fontSize: "3rem",
            }}
          >
            🛡️
          </div>
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm font-700 uppercase tracking-widest mb-3"
          style={{ color: "rgba(255,255,255,0.7)", fontWeight: 700 }}
        >
          Our Commitment to You
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-pacifico text-white mb-6"
          style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
        >
          The LUVE PROMISE
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white leading-relaxed mb-4 text-lg"
          style={{ opacity: 0.95, maxWidth: 560, margin: "0 auto 1.5rem" }}
        >
          Every swimmer will accomplish their goal by lesson 10. If they
          don&apos;t, you get a full refund. No questions, no fine print. We
          mean it, and we put it in writing.
        </motion.p>

        {/* Sub-note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm mb-10"
          style={{
            color: "rgba(255,255,255,0.7)",
            maxWidth: 480,
            margin: "0 auto 2.5rem",
          }}
        >
          10-lesson packages available. Flexible payment: 50% upfront, the rest
          before lesson 5. Zelle (no fees) and Square accepted.
        </motion.p>

        {/* Dividers */}
        <div className="flex justify-center gap-8 mb-10 flex-wrap">
          {[
            { stat: "10", label: "Lessons to hit your goal" },
            { stat: "100%", label: "Refund if you don't" },
            { stat: "$0", label: "Fee to reschedule for weather" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p
                className="font-pacifico text-white"
                style={{ fontSize: "2.2rem" }}
              >
                {item.stat}
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.75)", fontWeight: 500 }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-700 transition-all duration-200 hover:scale-105"
          style={{
            background: "#ffffff",
            color: "#0093B2",
            fontWeight: 700,
            fontSize: "1.05rem",
            boxShadow: "0 8px 30px rgba(0,0,0,0.18)",
          }}
        >
          Hold Us to It. Book Now 🤝
        </motion.a>
      </div>
    </section>
  );
}
