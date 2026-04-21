"use client";

import { motion } from "framer-motion";

const BOOKING_URL = "/book";

const services = [
  {
    icon: "🏊",
    title: "Private 1-on-1 Lessons",
    tag: "Most Popular",
    pricing: [
      { label: "Kids (6mo–17yr)", price: "$65/session" },
      { label: "Adults (18+)", price: "$75/session" },
    ],
    duration: "40 min sessions",
    description:
      "Fully private, fully focused. Every session is built around your swimmer's goals, pace, and confidence level. Awards, toys, and rewards are part of every class.",
    accentColor: "#0CC0DF",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Sibling Packages",
    tag: "Best Value",
    pricing: [
      { label: "2 siblings", price: "$60/each" },
      { label: "3-4 siblings", price: "From $60/each" },
    ],
    duration: "10-lesson minimum",
    description:
      "Every lesson is still 1-on-1. When you enroll both siblings, each gets the same private, focused attention — just at a reduced rate. No group format, just a better deal for families.",
    accentColor: "#FF6B6B",
  },
  {
    icon: "🐥",
    title: "Kids Lessons",
    tag: "Ages 6mo–17yr",
    pricing: [{ label: "Per session", price: "$65" }],
    duration: "40 min sessions",
    description:
      "From first splashes to confident strokes, every lesson is tailored to your child's age and energy. Toddlers, kids, and teens all progress at their own pace, with games and prizes built into every session.",
    accentColor: "#FFD166",
  },
  {
    icon: "🌊",
    title: "Adult Lessons",
    tag: "Judgment-free zone",
    pricing: [{ label: "Per session", price: "$75" }],
    duration: "40 min sessions",
    description:
      "It's never too late. Adult lessons are private, relaxed, and designed around your goals. Whether that's basic water safety, treading water, or swimming proper laps, we work at your pace.",
    accentColor: "#0093B2",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-4"
      style={{ background: "#F0FAFB" }}
    >
      <div className="max-w-7xl mx-auto">
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
            What We Offer
          </p>
          <h2
            className="font-pacifico mb-4"
            style={{
              color: "#1A2E3B",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Every Lesson Is Personal
          </h2>
          <p
            className="max-w-xl mx-auto leading-relaxed"
            style={{ color: "#3d5260", fontSize: "1.08rem" }}
          >
            No crowded classes, no generic programs. Every session is private
            and built around your swimmer. That&apos;s just how we do it.
          </p>
        </motion.div>

        {/* Cards grid */}
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
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="service-card flex flex-col rounded-2xl overflow-hidden bg-white"
              style={{
                borderTop: `4px solid ${service.accentColor}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              }}
            >
              <div className="p-7 flex flex-col flex-1">
                {/* Icon + tag */}
                <div className="flex items-start justify-between mb-4">
                  <span style={{ fontSize: "2.5rem" }}>{service.icon}</span>
                  <span
                    className="text-xs font-700 px-3 py-1 rounded-full"
                    style={{
                      background: `${service.accentColor}18`,
                      color: service.accentColor,
                      fontWeight: 700,
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-700 mb-1 text-lg"
                  style={{ color: "#1A2E3B", fontWeight: 700 }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-xs mb-4"
                  style={{ color: "#88a0ad", fontWeight: 500 }}
                >
                  {service.duration}
                </p>

                {/* Pricing */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.pricing.map((p) => (
                    <div
                      key={p.label}
                      className="flex flex-col px-3 py-2 rounded-xl"
                      style={{ background: "#F0FAFB" }}
                    >
                      <span
                        className="text-xs"
                        style={{ color: "#88a0ad" }}
                      >
                        {p.label}
                      </span>
                      <span
                        className="text-lg font-800"
                        style={{
                          color: service.accentColor,
                          fontWeight: 800,
                        }}
                      >
                        {p.price}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p
                  className="leading-relaxed flex-1 text-sm"
                  style={{ color: "#4a6070" }}
                >
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href={BOOKING_URL}
                  className="mt-6 block text-center py-3 rounded-xl font-700 text-sm transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                  style={{
                    background: service.accentColor,
                    color: "#ffffff",
                    fontWeight: 700,
                  }}
                >
                  Book Now →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
