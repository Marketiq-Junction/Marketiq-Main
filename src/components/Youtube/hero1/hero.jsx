"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [website, setWebsite] = useState("");
  const whatsappNumber = "9920892689";

  const handleWhatsAppClick = () => {
    if (!website) {
      alert("Please enter your website URL.");
      return;
    }

    const message = `Hello, I would like to request a quote for YouTube management services for my website: ${website}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-teal-500 to-cyan-600 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-10 items-center">
        {/* Left Side Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            YouTube Management
          </h1>

          <motion.ul
            className="space-y-4 text-white text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
          >
            {[
              "Establish and optimize your YouTube channel for maximum visibility.",
              "Develop engaging content that resonates with your audience.",
              "Implement strategies to grow your subscriber base organically.",
              "Analyze performance metrics to refine your content strategy.",
              "Drive measurable results through data-driven decisions.",
            ].map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-white font-extrabold text-lg">➤</span>
                {point}
              </li>
            ))}
          </motion.ul>

          
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/youtube/s1.png"
            alt="YouTube Management Illustration"
            className="w-[90%] sm:w-[75%] md:w-[60%] lg:w-[80%] h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
