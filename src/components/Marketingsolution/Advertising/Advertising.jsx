"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const services = [
  {
    id: "facebook",
    title: "Facebook Management Services",
    description:
      "Our Facebook Management services enhance your brand's presence on Facebook through optimized content creation and performance analytics. We create engaging posts that resonate with your audience and track performance metrics to achieve better engagement and growth.",
    icon: <FaFacebook />,
  },
  {
    id: "instagram",
    title: "Instagram Management Services",
    description:
      "Our Instagram Management services focus on crafting visually appealing and engaging content to grow your brand's presence. With strategic hashtag usage, story highlights, and consistent posting, we help your brand connect with a wider audience.",
    icon: <FaInstagram />,
  },
  {
    id: "linkedin",
    title: "LinkedIn Management Services",
    description:
      "Our LinkedIn Management services enhance your brand's professional presence. We optimize your profile, share insightful content to establish thought leadership, and expand your network through strategic connections.",
    icon: <FaLinkedin />,
  },
  {
    id: "youtube",
    title: "YouTube Management Services",
    description:
      "Our YouTube Management services enhance your brand's presence through optimized video content creation and channel management. We ensure your videos resonate with your audience for maximum reach and impact.",
    icon: <FaYoutube />,
  },
];

const Advertising = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  const handleServiceClick = (service) => {
    setActiveService(service.id);

    if (typeof gtag === "function") {
      gtag("event", "select_service", {
        event_category: "service_button",
        event_label: service.title,
        value: 1,
      });
    }
  };

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-black mb-4 leading-snug">
          What do our Social Media Advertising <br /> services include?
        </h2>
        <p className="text-lg text-gray-600">
          Our Social Media Management services enhance your brand's <br />
          online presence and engagement. Here's what we include:
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          {services.map((service) => (
            <motion.button
              key={service.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center gap-4 text-left p-4 rounded-lg shadow-md border-l-4 focus:outline-none ${
                activeService === service.id
                  ? "border-teal-500 bg-cyan-100 text-black"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-cyan-50"
              }`}
              onClick={() => handleServiceClick(service)}
            >
              <span className="text-2xl text-teal-500">{service.icon}</span>
              <span className="text-lg font-medium">{service.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Details Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-white p-8 shadow-lg rounded-lg overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-cyan-300 scrollbar-track-gray-200"
          >
            {services
              .filter((service) => service.id === activeService)
              .map((service) => (
                <div key={service.id}>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-teal-600 mb-4 flex items-center gap-2"
                  >
                    <span className="text-3xl">{service.icon}</span>
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg text-gray-600 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Advertising;
