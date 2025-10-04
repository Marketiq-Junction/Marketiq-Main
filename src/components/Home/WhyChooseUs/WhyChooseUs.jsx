"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const whatsappNumber = "9920892689";
  const predefinedMessage =
    "Hello, I would like to know more about your services.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(predefinedMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full min-h-[70vh] flex flex-col lg:flex-row items-center">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 flex items-center justify-center p-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="/images/rb_2148901520.png"
          className="w-3/4 md:w-2/3 lg:w-1/2 h-auto object-contain"
          alt="Why Choose Us"
        />
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-6 lg:p-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="text-center lg:text-left">
          <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
            Why Choose Us
          </p>
          <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
            Increase your client for better position of Business
          </h3>
        </div>

        {/* Bullet Points */}
        <ul className="mt-6 space-y-4 text-lg md:text-xl text-gray-700">
          {[
            "Customized, value-driven digital marketing solutions.",
            "Affordable services for businesses of all sizes.",
            "Comprehensive approach: web design, SEO, and social media.",
            "Measurable results and improved online visibility.",
            "Data-driven strategies with monthly performance reports.",
          ].map((point, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 * idx }}
              viewport={{ once: true }}
            >
              <FaCheckCircle className="text-teal-500 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          onClick={() => {
            if (typeof window !== "undefined" && typeof gtag === "function") {
              gtag("event", "whatsapp_button_click", {
                event_category: "CTA",
                event_label: "Let's Chat - WhatsApp",
              });
            }
            handleWhatsAppClick();
          }}
          className="mt-8 px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-teal-500 hover:to-cyan-600 hover:scale-105 hover:shadow-cyan-400/40 transition-all"
          whileTap={{ scale: 0.95 }}
        >
          Let's Chat
        </motion.button>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
