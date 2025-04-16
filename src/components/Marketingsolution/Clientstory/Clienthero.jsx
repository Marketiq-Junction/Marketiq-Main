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
    const whatsappNumber = "9920892689"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white py-12 lg:mb-28">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 gap-12 ">
        {/* Left Image Section with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/images/socialmedia/four.png" // Replace with your image path
            alt="Analytics Visualization"
            className="w-[60%] h-auto object-contain"
          />
        </motion.div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="text-4xl font-bold text-black mb-6 leading-snug">
            We make the Client the hero <br /> of our story.
          </h2>
          {/* <p className="text-gray-600 mb-8 leading-relaxed">
            Facilisis. Consequat. Litora. Pede eleifend lacus. Massa risus turpis
            ultrices urna vulputate non non nisl amet commodo. Sollicitudin. Leo mi
            curabitur euismod orci. Ridiculus sem. Torquent. Ornare euismod, per
            nullam, ligula morbi natoque nibh faucibus vitae sapien.
          </p> */}

          {data.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                {section.category}
              </h3>
              {section.metrics.map((metric, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-[#3863F5]">{metric.label}</span>
                    <span className="text-[#3863F5]">{metric.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-[#3863F5] h-1 rounded-full"
                    ></motion.div>
                  </div>
                  <span className="text-sm text-gray-500 mt-1 block">
                    Average Client Increase
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start mt-6">
          <motion.button
  whileHover={{ scale: 1.05, backgroundColor: "#3863F5" }}
  transition={{ duration: 0.3 }}
  onClick={() => {
    handleWhatsAppClick(
      "Hello, I would like to book a meeting to discuss your services."
    );
    
    // Send event to GA4
    gtag('event', 'book_meeting_click', {
      event_category: 'button',
      event_label: 'Book A Meeting Button',
      value: 1,
    });
  }}
  className="bg-[#4A9BD3] text-white px-6 py-3 shadow-md transition-all"
>
  Book A Meeting
</motion.button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Clienthero;
