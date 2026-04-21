"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "🛡️",
    title: "Certified & Experienced",
    body: "CPR/AED certified with 4+ years of professional lifeguard experience. Your swimmer is always in the safest hands.",
  },
  {
    icon: "🏠",
    title: "We Come to You",
    body: "Lessons happen at your residential pool or community pool — we come to you. No driving, no strangers' locker rooms, no stress.",
  },
  {
    icon: "👶",
    title: "All Ages Welcome",
    body: "Infants, toddlers, school kids, teenagers, and adults. Wherever you are in your swim journey, we meet you there.",
  },
  {
    icon: "💰",
    title: "Results Guaranteed",
    body: "The LUVE PROMISE: your swimmer achieves their goal by lesson 10 or you get a full refund. Simple as that.",
  },
  {
    icon: "🎉",
    title: "Fun First, Always",
    body: "Toys, games, and prizes at every session. We believe kids learn best when they're too busy having fun to realise it.",
  },
  {
    icon: "🎯",
    title: "Personal, Not Generic",
    body: "Private and sibling-only sessions. No sharing the pool with strangers, no generic lesson plans. Every session is shaped around your swimmer specifically.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 px-4"
      style={{ background: "#FFF8EE" }}
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
            Why LUVESWIM
          </p>
          <h2
            className="font-pacifico mb-4"
            style={{
              color: "#1A2E3B",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Why Houston Families Choose Us
          </h2>
          <p
            className="max-w-lg mx-auto leading-relaxed"
            style={{ color: "#3d5260", fontSize: "1.05rem" }}
          >
            There are plenty of swim instructors in Houston. Here&apos;s why
            families keep coming back.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              className="flex flex-col items-start p-7 rounded-2xl bg-white transition-shadow duration-200 hover:shadow-xl"
              style={{
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                style={{
                  background: "rgba(12,192,223,0.1)",
                  fontSize: "1.75rem",
                }}
              >
                {reason.icon}
              </div>
              <h3
                className="font-700 mb-2 text-lg"
                style={{ color: "#1A2E3B", fontWeight: 700 }}
              >
                {reason.title}
              </h3>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "#4a6070" }}
              >
                {reason.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
