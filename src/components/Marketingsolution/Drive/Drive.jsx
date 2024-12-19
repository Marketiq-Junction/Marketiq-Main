"use client";

import React from "react";
import { motion } from "framer-motion";

const Drive = () => {
  const bulletPoints = [
    "Targeted campaigns across Instagram, Facebook, and LinkedIn.",
    "Engaging content to enhance brand awareness.",
    "Strategic advertising to convert followers into loyal customers.",
    "Continuous analytics and optimization for measurable results.",
    "Maximize return on investment with sustainable growth.",
  ];

  const pointVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section id="social-media" className="bg-white p-12 h-auto text-left">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-black mb-6 leading-tight">
            Drive More Revenue With <br /> Social Media Marketing Services
          </h1>

          {/* Bullet Points with Animation */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 mb-8"
          >
            {bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                variants={pointVariants}
                custom={index}
                className="flex items-start gap-3"
              >
                {/* Bullet Icon */}
                <div className="w-6 h-6 flex items-center justify-center bg-[#4A9BD3] text-white rounded-full">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    className="font-bold text-lg"
                  >
                    •
                  </motion.span>
                </div>
                {/* Text */}
                <span className="text-lg text-gray-600 font-medium leading-7">
                  {point}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Button */}
          <div className="text-start">
            <button className="bg-[#4A9BD3] border-[#BDB4FF] border-2 text-white px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#BDB4FF] hover:text-black hover:scale-105">
              Get in touch
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <motion.img
            src="/images/socialmedia/two.png"
            alt="Social Media Marketing Illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Drive;
