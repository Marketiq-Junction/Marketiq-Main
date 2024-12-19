"use client";
import React from "react";
import { motion } from "framer-motion";

const Savetime = () => {
  const points = [
    "Maximize your time and effort with streamlined digital marketing solutions.",
    "Expertise in web design, social media management, and SEO to drive results.",
    "Implement effective strategies that save valuable resources efficiently.",
    "Focus on growing your business while we handle the digital landscape.",
    "Optimize marketing efforts for sustainable success.",
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
    <div className="bg-[#4A9BD3] text-white w-full py-10">
      <div className="flex flex-col md:flex-row items-center w-full max-w-screen-xl mx-auto px-6">
        {/* Left Image Section with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end w-full md:w-1/4 mb-6 md:mb-0"
        >
          <img
            src="/images/socialmedia/three.png" // Replace with your image path
            alt="Illustration"
            className="w-2/3 md:w-2/3 object-contain rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Content Section */}
        <div className="flex flex-col text-center md:text-left md:w-3/4 justify-center px-6">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Save Time & Effort With the Marketiq Junction
          </h1>

          {/* Bullet Points with Animation */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 mb-8"
          >
            {points.map((point, index) => (
              <motion.li
                key={index}
                variants={pointVariants}
                custom={index}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 flex items-center justify-center bg-[#FFFFFF] text-[#4A9BD3] font-bold rounded-full shadow-md">
                  ✓
                </div>
                <span className="text-lg text-gray-200 leading-7">{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-[#FFFFFF] border-[#4A9BD3] border-2 text-[#000000] px-8 py-3 rounded transition hover:bg-gray-100 hover:scale-105 shadow-md">
              Contact Us
            </button>
            <button className="bg-[#4A9BD3] border-[#FFFFFF] border-2 text-[#FFFFFF] px-8 py-3 rounded transition hover:bg-[#3a82b2] hover:scale-105 shadow-md">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savetime;
