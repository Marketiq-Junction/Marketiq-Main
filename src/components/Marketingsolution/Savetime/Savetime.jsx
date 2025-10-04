"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

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

  const handleWhatsAppClick = () => {
    const whatsappNumber = "9920892689";
    const message =
      "Hello, I would like to get in touch to learn more about your services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white w-full py-12">
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto px-6">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end w-full md:w-1/3 mb-8 md:mb-0"
        >
          <img
            src="/images/socialmedia/three.png"
            alt="Illustration"
            className="w-2/3 md:w-full object-contain rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Content Section */}
        <div className="flex flex-col text-center md:text-left md:w-2/3 justify-center px-6">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Save Time & Effort With Marketiq Junction
          </motion.h1>

          {/* Animated Bullet Points */}
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
                <FaCheckCircle className="text-2xl text-white mt-1 flex-shrink-0" />
                <span className="text-lg text-white leading-7">{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Call-to-Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-center md:justify-start"
          >
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-teal-600 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-cyan-50 hover:scale-105 transition-all transform duration-300"
            >
              Get in Contact
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Savetime;
