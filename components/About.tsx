"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const credentials = [
  { icon: "🛡️", label: "CPR/AED Certified" },
  { icon: "🏊", label: "4+ Years Swim Instruction" },
  { icon: "👦", label: "Ages 3–17 Specialist" },
  { icon: "🏆", label: "Competitive Swim Background" },
  { icon: "🏡", label: "Comes to Your Pool" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4"
      style={{ background: "#FFF8EE" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0 w-full lg:w-auto flex justify-center"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-3 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, #0CC0DF 0%, #FFD166 100%)",
                  opacity: 0.25,
                }}
              />
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ width: 340, height: 420 }}
              >
                <Image
                  src="/seth.jpg"
                  alt="Seth Green — LUVESWIM Instructor"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="340px"
                />
              </div>
              {/* Float badge */}
              <div
                className="float-anim absolute -bottom-5 -right-5 flex items-center gap-2 px-4 py-3 rounded-2xl shadow-xl"
                style={{ background: "#FF6B6B" }}
              >
                <span className="text-2xl">🌊</span>
                <div>
                  <p className="text-white text-xs font-600" style={{ fontWeight: 600 }}>
                    Results
                  </p>
                  <p className="text-white text-sm font-700" style={{ fontWeight: 700 }}>
                    Guaranteed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1"
          >
            <p
              className="text-sm font-700 uppercase tracking-widest mb-3"
              style={{ color: "#0CC0DF", fontWeight: 700 }}
            >
              Meet Your Instructor
            </p>
            <h2
              className="font-pacifico leading-snug mb-6"
              style={{
                color: "#1A2E3B",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Hi, I&apos;m Seth Green,<br />
              founder of{" "}
              <span style={{ color: "#FF6B6B" }}>LUVE Swim.</span>
            </h2>
            <p
              className="leading-relaxed mb-4"
              style={{ color: "#3d5260", fontSize: "1.08rem" }}
            >
              I&apos;m currently a freshman at the University of Houston&apos;s
              Bauer College of Business, with over 4 years of experience in
              lifeguarding, lifeguard supervision, swim instruction, and childcare.
            </p>
            <p
              className="leading-relaxed mb-4"
              style={{ color: "#3d5260", fontSize: "1.08rem" }}
            >
              I&apos;ve worked with children ages 3&ndash;17 both in and out of
              the water, focusing on building confidence, safety, and strong
              swimming fundamentals. Growing up around the water and competing in
              swimming, I&apos;ve always had a passion for helping others learn.
            </p>
            <p
              className="leading-relaxed mb-4"
              style={{ color: "#3d5260", fontSize: "1.08rem" }}
            >
              I created LUVE Swim to provide personalized, high-quality swim
              lessons that meet each swimmer where they are, whether they&apos;re
              just starting or looking to improve. I take pride in creating a
              safe, fun, and structured environment for every swimmer.
            </p>
            {/* Credential chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {credentials.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-600"
                  style={{
                    background: "rgba(12,192,223,0.1)",
                    border: "1px solid rgba(12,192,223,0.25)",
                    color: "#003B4A",
                    fontWeight: 600,
                  }}
                >
                  <span>{c.icon}</span>
                  {c.label}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mb-8">
              <a
                href="https://www.instagram.com/luveswim?igsh=N3prazFlcDI0NWJ0&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(12,192,223,0.12)", color: "#0CC0DF" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#0CC0DF";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(12,192,223,0.12)";
                  (e.currentTarget as HTMLElement).style.color = "#0CC0DF";
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1A5bh9JZru/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-200 hover:scale-110"
                style={{ background: "rgba(12,192,223,0.12)", color: "#0CC0DF" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#0CC0DF";
                  (e.currentTarget as HTMLElement).style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(12,192,223,0.12)";
                  (e.currentTarget as HTMLElement).style.color = "#0CC0DF";
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>

            <a
              href="https://luveswim.as.me/schedule/a248e30e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-700 text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0CC0DF, #0093B2)",
                fontWeight: 700,
                boxShadow: "0 6px 24px rgba(12,192,223,0.35)",
              }}
            >
              Book a Lesson with Seth →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
