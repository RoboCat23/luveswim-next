"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const credentials = [
  { icon: "🛡️", label: "CPR/AED Certified" },
  { icon: "🏊", label: "4+ Years Lifeguard Experience" },
  { icon: "🏡", label: "Comes to Your Pool" },
  { icon: "🏆", label: "Competitive Swim Background" },
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
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"
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
              Hi, I&apos;m Seth Green.<br />
              And I{" "}
              <span style={{ color: "#FF6B6B" }}>
                LUVE
              </span>{" "}
              to swim.
            </h2>
            <p
              className="leading-relaxed mb-4"
              style={{ color: "#3d5260", fontSize: "1.08rem" }}
            >
              I&apos;m a CPR/AED certified swim instructor with over 4 years of
              lifeguard experience. I work with swimmers of all ages, from
              splash-happy toddlers to adults who&apos;ve been putting this off
              for years, and I genuinely love watching people get comfortable
              in the water.
            </p>
            <p
              className="leading-relaxed mb-8"
              style={{ color: "#3d5260", fontSize: "1.08rem" }}
            >
              I bring toys, games, and prizes to every lesson because kids
              learn way better when they&apos;re too busy having fun to notice.
              And I come right to your pool. You never have to pack up the kids
              and drive anywhere.
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
