"use client";

import React from "react";
import { motion } from "framer-motion";

const Clienthero = () => {
  const data = [
    {
      category: "After Social Media Strategy Implementation",
      metrics: [
        { label: "Impressions", value: 57 },
        { label: "Engagement", value: 90 },
      ],
    },
    {
      category: "After Taking Over Content Development",
      metrics: [{ label: "Click Through Rate", value: 90 }],
    },
  ];

  const handleWhatsAppClick = (message) => {
    const whatsappNumber = "9920892689";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white py-12 lg:mb-28">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 gap-12">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/images/socialmedia/four.png"
            alt="Analytics Visualization"
            className="w-[60%] h-auto object-contain"
          />
        </motion.div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="text-4xl font-bold text-black mb-6 leading-snug">
            We make the Client the hero <br /> of our story.
          </h2>

          {data.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                {section.category}
              </h3>
              {section.metrics.map((metric, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-teal-600">{metric.label}</span>
                    <span className="text-teal-600">{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-teal-500 to-cyan-600 h-1 rounded-full"
                    />
                  </div>
                  <span className="text-sm text-gray-500 mt-1 block">
                    Average Client Increase
                  </span>
                </div>
              ))}
            </div>
          ))}

         
        </div>
      </div>
    </section>
  );
};

export default Clienthero;
