"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaComments,
  FaChartBar,
  FaChartLine,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const Services = () => {
  const cards = [
    {
      id: 1,
      icon: FaFileAlt,
      title: "Content Creation",
      description: [
        "Craft engaging and shareable posts.",
        "Develop tailored content strategies.",
        "Optimize for platform-specific trends.",
      ],
    },
    {
      id: 2,
      icon: FaComments,
      title: "Community Engagement",
      description: [
        "Respond to audience queries promptly.",
        "Foster meaningful conversations.",
        "Encourage user-generated content.",
      ],
    },
    {
      id: 3,
      icon: FaChartBar,
      title: "Analytics and Reporting",
      description: [
        "Track campaign performance metrics.",
        "Identify audience behavior trends.",
        "Generate actionable insights for growth.",
      ],
    },
    {
      id: 4,
      icon: FaChartLine,
      title: "Strategy Development",
      description: [
        "Define measurable goals and objectives.",
        "Conduct competitor and market analysis.",
        "Create detailed roadmaps for success.",
      ],
    },
    {
      id: 5,
      icon: FaShieldAlt,
      title: "Reputation Management",
      description: [
        "Monitor online brand mentions.",
        "Handle negative feedback professionally.",
        "Promote positive brand image and trust.",
      ],
    },
    {
      id: 6,
      icon: FaExclamationTriangle,
      title: "Crisis Management",
      description: [
        "Develop preemptive crisis plans.",
        "Respond swiftly to reputation threats.",
        "Ensure consistent communication during crises.",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500 font-semibold text-2xl uppercase mb-4 text-center"
        >
          Why Choose Us
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-10 text-center"
        >
          We are specialized in the <br /> following services
        </motion.h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(20, 184, 166, 0.3)",
                }}
                className="group cursor-pointer border border-gray-200 rounded-lg shadow-lg p-6 w-full bg-white text-black hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-600 hover:text-white transition-all duration-300 transform"
              >
                {/* Icon */}
                <div className="text-5xl mb-4 text-teal-500 group-hover:text-white transition-colors duration-300">
                  <IconComponent />
                </div>

                {/* Title */}
                <h2 className="font-semibold text-lg md:text-xl mb-4 group-hover:text-white transition-colors duration-300">
                  {card.title}
                </h2>

                {/* Divider */}
                <div className="border-t-2 border-gray-200 group-hover:border-white/50 my-4 transition-colors duration-300"></div>

                {/* Description */}
                <ul className="text-base md:text-lg mb-4 space-y-2 list-disc pl-5 group-hover:text-white transition-colors duration-300">
                  {card.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
