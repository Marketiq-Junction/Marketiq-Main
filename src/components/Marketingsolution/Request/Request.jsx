"use client";

import React from "react";
import { motion } from "framer-motion";

const Request = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "9920892689";
    const message = "Hello, I would like to request a free quote.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-gray-100 py-12 flex items-center justify-center lg:mb-28 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-teal-500 to-cyan-600 max-w-5xl w-full py-12 px-6 md:px-8 rounded-3xl shadow-2xl text-center"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Want More Engagement? Get 3 Tips From an Expert!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl font-medium text-white mb-8"
        >
          Boost engagement by posting high-value, audience-centered content, and
          actively responding to your community—interaction drives results!
        </motion.p>

        {/* Form Fields */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        >
          <input
            type="text"
            placeholder="Select Platform"
            className="w-full py-3 px-4 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 transition shadow-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 px-4 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 transition shadow-md"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full py-3 px-4 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 transition shadow-md"
          />
          <input
            type="url"
            placeholder="Website URL"
            className="w-full py-3 px-4 text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 transition shadow-md"
          />
        </motion.div>

        {/* Captcha Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-sm text-white mb-6"
        >
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-cyan-200 transition"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-cyan-200 transition"
          >
            Terms of Service
          </a>{" "}
          apply.
        </motion.p>

        {/* Submit Button */}
  
      </motion.div>
    </section>
  );
};

export default Request;
