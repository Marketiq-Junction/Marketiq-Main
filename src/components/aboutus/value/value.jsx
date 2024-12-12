"use client";

import React from "react";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ValuesAndCulture = () => {
  const values = [
    {
      title: "Gratitude",
      description: "Thankfulness and humility drive us every day.",
      icon: <FavoriteIcon className="text-blue-500 text-5xl" />,
    },
    {
      title: "Respect",
      description: "We see the best in ourselves and others.",
      icon: <GroupIcon className="text-blue-500 text-5xl" />,
    },
    {
      title: "Work Ethic",
      description: "We work smart, stay balanced, and deliver results.",
      icon: <WorkIcon className="text-blue-500 text-5xl" />,
    },
    {
      title: "Ownership",
      description: "We own our actions and make things right.",
      icon: <PsychologyIcon className="text-blue-500 text-5xl" />,
    },
    {
      title: "Think Bigger",
      description: "We embrace change and strive for growth.",
      icon: <AutoAwesomeIcon className="text-blue-500 text-5xl" />,
    },
    {
      title: "Honesty",
      description: "Integrity and trust guide our every move.",
      icon: <CheckCircleIcon className="text-blue-500 text-5xl" />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white px-6 lg:px-16 py-12">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
          Our Values & Culture
        </h1>
        <p className="text-lg lg:text-xl text-gray-600">
          The heart of who we are and how we thrive together.
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {values.slice(0, 3).map((value, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              {value.icon}
              <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                {value.title}
              </h2>
              <p className="text-gray-600 mt-2">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Center Logo */}
        <motion.div
          className="bg-white border-4 border-blue-200 rounded-full shadow-lg flex items-center justify-center w-60 h-60"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/loggo.jpg"
            alt="Logo"
            className="w-40 h-40 object-cover"
          />
        </motion.div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {values.slice(3, 6).map((value, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              {value.icon}
              <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                {value.title}
              </h2>
              <p className="text-gray-600 mt-2">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
      <motion.div
        className="mt-12 flex justify-center gap-6"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button className="bg-blue-600 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:bg-blue-700 transition">
          Request A Quote
        </button>
        <button className="bg-gray-800 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:bg-gray-900 transition">
          Get In Touch
        </button>
      </motion.div>
    </div>
  );
};

export default ValuesAndCulture;
