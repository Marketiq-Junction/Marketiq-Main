"use client";

import React from "react";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ValuesAndCulture = () => {
  const values = [
    {
      title: "Gratitude",
      description: [
        "Lead with thankfulness and humility.",
        "Express gratitude daily.",
        "Give back to impact the world positively."
      ],
      icon: <StarIcon className="text-black text-4xl opacity-80" />,
    },
    {
      title: "Respect",
      description: [
        "Operate with positive assumptions.",
        "See the best in others.",
        "Refrain from gossip and anger."
      ],
      icon: <GroupIcon className="text-black text-4xl opacity-75" />,
    },
    {
      title: "Ownership",
      description: [
        "Take responsibility for actions.",
        "Steward resources responsibly.",
        "Work to make things right."
      ],
      icon: <PsychologyIcon className="text-black text-4xl opacity-75" />,
    },
    {
      title: "Work Ethic",
      description: [
        "Work smart and proactively.",
        "Maintain high-performance expectations.",
        "Balance work-life priorities."
      ],
      icon: <WorkIcon className="text-black text-4xl opacity-75" />,
    },
    {
      title: "Think Bigger",
      description: [
        "Strive for continuous improvement.",
        "Embrace change and overcome challenges.",
        "Never take the easy way out."
      ],
      icon: <AutoAwesomeIcon className="text-black text-4xl opacity-75" />,
    },
    {
      title: "Honesty",
      description: [
        "Build trust through integrity.",
        "Act with honesty in all situations.",
        "Do the right thing even when difficult."
      ],
      icon: <CheckCircleIcon className="text-black text-4xl opacity-75" />,
    },
  ];

  const handleWhatsAppClick = (message) => {
    const whatsappNumber = "9920892689"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="relative bg-gradient-to-b from-[#E6F9FD] to-white px-6 lg:px-16 py-16">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Values and Culture
        </h1>
        <p className="text-gray-600 text-lg">
          Our values define how we work and interact, fostering exceptional results.
        </p>
      </motion.div>

      {/* Center MJ Logo */}
      <motion.div
        className="z-20 bg-white border-[8px] border-[#4A9BD3] shadow-lg rounded-full w-56 h-56 flex items-center justify-center mx-auto"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/loggo.jpg"
          alt="Center Logo"
          className="w-32 h-32 object-contain"
        />
      </motion.div>

      {/* Cards Positioned as Branches */}
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {values.map((value, index) => (
          <div className="w-full md:w-auto flex justify-center mt-8" key={index}>
            <motion.div
              className="relative group w-80 h-56 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center gap-4 p-6 transition transform hover:scale-110 hover:rotate-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute -top-12 w-20 h-20 bg-gradient-to-br from-[#4A9BD3] to-[#50C3C6] rounded-full flex items-center justify-center shadow-md border-4 border-white">
                {value.icon}
              </div>
              <div className="text-center mt-10">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  {value.description.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.2 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <motion.div
        className="mt-12 flex justify-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* <button
          onClick={() => handleWhatsAppClick("Hello, I would like to request a quote for your services.")}
          className="bg-[#4A9BD3] text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:bg-[#3a82b2] transition duration-300 transform hover:scale-105"
        >
          Request A Quote
        </button> */}
      <button
  onClick={() => {
    handleWhatsAppClick("Hello, I would like to get in touch regarding your services."); // Your existing function

    // Send event to GA4
    gtag('event', 'communicate_with_us_click', {
      event_category: 'button',
      event_label: 'Communicate with Us Button',
      value: 1,
    });
  }}
  className="bg-gray-800 text-white px-8 py-3 text-lg hover:bg-gray-900 transition duration-300 transform hover:scale-105"
>
  Communicate with Us
</button>

      </motion.div>
    </section>
  );
};

export default ValuesAndCulture;
