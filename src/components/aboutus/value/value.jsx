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
      description:
        "We lead with an attitude of thankfulness and humility and find ways to express our gratitude to those around us every day. We embrace giving back, impacting the world for a greater good.",
      icon: <FavoriteIcon className="text-blue-500 text-6xl" />,
    },
    {
      title: "Respect",
      description:
        "We operate with positive assumptions and give the benefit of the doubt, choosing to see the best in ourselves and others. We respect others at all times and refrain from gossip or reacting with anger.",
      icon: <GroupIcon className="text-blue-500 text-6xl" />,
    },
    {
      title: "Work Ethic",
      description:
        "We give our best effort and have high-performance expectations. We are organized, proactive, and work with a sense of urgency. We emphasize work-life balance where we work hard but prioritize time off for our well-being.",
      icon: <WorkIcon className="text-blue-500 text-6xl" />,
    },
    {
      title: "Ownership",
      description:
        "We take personal responsibility for our actions and commit to responsible stewardship over company and client resources. We apologize when we make mistakes and work to make things right. We can do hard things.",
      icon: <PsychologyIcon className="text-blue-500 text-6xl" />,
    },
    {
      title: "Think Bigger",
      description:
        "We strive for continuous improvement and believe that better never stops! We embrace change, adapt, and overcome.",
      icon: <AutoAwesomeIcon className="text-blue-500 text-6xl" />,
    },
    {
      title: "Honesty",
      description:
        "We seek to build trust and mutual respect by acting with integrity and doing the right thing no matter how difficult.",
      icon: <CheckCircleIcon className="text-blue-500 text-6xl" />,
    },
  ];

  return (
    <div className="bg-white px-6 lg:px-20 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">
          Values and Culture
        </h1>
        <p className="text-lg lg:text-xl text-gray-700">
          Our values define the way we work and interact, both with our clients
          and within our team. They are the foundation of our company culture,
          guiding us toward delivering exceptional results and fostering strong,
          collaborative relationships.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center gap-8">
        {/* First Row */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full max-w-[85rem]">
          {values.slice(0, 2).map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-lg w-full lg:w-[60%] h-[250px]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {value.icon}
              <h2 className="text-xl font-semibold mt-4">{value.title}</h2>
              <p className="text-base text-gray-700 text-center mt-2">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Second Row - Center Logo */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-[85rem]">
          <motion.div
            className="flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-lg w-full lg:w-[60%] h-[250px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {values[2].icon}
            <h2 className="text-xl font-semibold mt-4">{values[2].title}</h2>
            <p className="text-base text-gray-700 text-center mt-2">
              {values[2].description}
            </p>
          </motion.div>

          {/* Logo */}
          <motion.div
            className="bg-white border-4 border-blue-500 rounded-full shadow-lg flex items-center justify-center w-52 h-52"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/logo.png" alt="Logo" className="w-28 h-28" />
          </motion.div>

          <motion.div
            className="flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-lg w-full lg:w-[60%] h-[250px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {values[3].icon}
            <h2 className="text-xl font-semibold mt-4">{values[3].title}</h2>
            <p className="text-base text-gray-700 text-center mt-2">
              {values[3].description}
            </p>
          </motion.div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full max-w-[85rem]">
          {values.slice(4, 6).map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-lg w-full lg:w-[60%] h-[250px]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {value.icon}
              <h2 className="text-xl font-semibold mt-4">{value.title}</h2>
              <p className="text-base text-gray-700 text-center mt-2">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-12 flex justify-center gap-6">
        <button className="bg-black text-white px-8 py-4 text-lg rounded shadow hover:bg-gray-800 transition">
          Request A Quote
        </button>
        <button className="bg-black text-white px-8 py-4 text-lg rounded shadow hover:bg-gray-800 transition">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default ValuesAndCulture;
