"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Seth is absolutely incredible with kids. My 5-year-old was terrified of the water. By lesson 4 she was jumping in on her own and asking when we could come back. Honestly the best thing we did this summer.",
    name: "Sarah M.",
    location: "Katy, TX",
    stars: 5,
    emoji: "👩",
  },
  {
    quote:
      "I'm an adult who never learned to swim and I'd been embarrassed about it for years. Seth was patient, warm, and made every session feel completely judgment-free. I can swim proper laps now. I'm still shocked.",
    name: "David R.",
    location: "Sugar Land, TX",
    stars: 5,
    emoji: "👨",
  },
  {
    quote:
      "We booked the sibling package for our three kids and it was honestly the best thing we did all year. The LUVE PROMISE is what sealed the deal. They definitely didn't need to use it. All three are swimming now!",
    name: "Jennifer T.",
    location: "Houston, TX",
    stars: 5,
    emoji: "👩",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} style={{ color: "#FFD166", fontSize: "1.2rem" }}>
        ★
      </span>
    ))}
  </div>
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-4"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-700 uppercase tracking-widest mb-3"
            style={{ color: "#0CC0DF", fontWeight: 700 }}
          >
            Real Families, Real Results
          </p>
          <h2
            className="font-pacifico mb-4"
            style={{
              color: "#1A2E3B",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            What Families Are Saying
          </h2>
          <p
            className="max-w-md mx-auto"
            style={{ color: "#3d5260", fontSize: "1.05rem" }}
          >
            Don&apos;t take our word for it. Here&apos;s what real Houston
            families had to say.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="testi-card flex flex-col p-7 rounded-2xl bg-white"
              style={{
                borderLeft: "4px solid #0CC0DF",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              }}
            >
              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <p
                className="mt-4 leading-relaxed flex-1 italic"
                style={{ color: "#3d5260", fontSize: "1rem" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5" style={{ borderTop: "1px solid #f0f4f6" }}>
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full text-xl"
                  style={{ background: "#F0FAFB" }}
                >
                  {t.emoji}
                </div>
                <div>
                  <p className="font-700" style={{ color: "#0CC0DF", fontWeight: 700 }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#88a0ad" }}>
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <p
          className="text-center text-xs mt-8"
          style={{ color: "#aabbcc" }}
        >
          * Testimonials are representative. Real reviews will be added before
          launch.
        </p>
      </div>
    </section>
  );
}
