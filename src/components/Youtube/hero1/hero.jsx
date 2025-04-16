"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [website, setWebsite] = useState("");
  const whatsappNumber = "9920892689"; // Replace with your WhatsApp number

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
    <section className="flex flex-col items-center justify-center py-12 bg-[#4A9BD3] px-4 sm:px-6 lg:px-8">
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
            <li className="flex items-start gap-3">
              <span className="text-white font-extrabold text-lg">➤</span>
              Establish and optimize your YouTube channel for maximum visibility.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white font-extrabold text-lg">➤</span>
              Develop engaging content that resonates with your audience.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white font-extrabold text-lg">➤</span>
              Implement strategies to grow your subscriber base organically.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white font-extrabold text-lg">➤</span>
              Analyze performance metrics to refine your content strategy.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-white font-extrabold text-lg">➤</span>
              Drive measurable results through data-driven decisions.
            </li>
          </motion.ul>

          {/* Input Section */}
          <div className="relative w-full sm:w-[400px] md:w-[500px] mt-6">
            <input
              type="text"
              placeholder="Enter Your Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full py-3 px-4 pr-36 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          <button
  onClick={() => {
    handleWhatsAppClick(); // Your existing function

    // Send event to GA4
    gtag('event', 'request_audit_click', {
      event_category: 'button',
      event_label: 'Request a Audit Button',
      value: 1,
    });
  }}
  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#50C3C6] text-white px-4 py-2 hover:bg-[#4A9BD3] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
>
  Request a Audit
</button>

          </div>
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
