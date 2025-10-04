import React from "react";
import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const Approach = () => {
  const cards = [
    {
      title: "OPTIMIZE",
      description:
        "Maximize your online visibility with tailored strategies that enhance your website and content.",
      icon: <RocketLaunchIcon className="text-white text-4xl" />,
      bg: "bg-gradient-to-r from-teal-400 to-teal-600",
    },
    {
      title: "GENERATE",
      description:
        "Drive targeted traffic to your business with our innovative lead generation strategies.",
      icon: <TrendingUpIcon className="text-white text-4xl" />,
      bg: "bg-gradient-to-r from-cyan-400 to-cyan-600",
    },
    {
      title: "GROW",
      description:
        "Unlock new opportunities for expansion through our data-driven strategies and dedicated support.",
      icon: <AutoGraphIcon className="text-white text-4xl" />,
      bg: "bg-gradient-to-r from-teal-500 to-cyan-600",
    },
  ];

  const bulletPoints = [
    "We combine strategic optimization and data-driven insights.",
    "Our creativity enhances your digital presence.",
    "Generate high-quality leads for consistent growth.",
    "Provide personalized guidance to elevate your brand.",
    "Ensure sustainable progress and measurable results.",
    "Deliver solutions designed for long-term success.",
  ];

  return (
    <div className="relative bg-gray-50 px-6 sm:px-10 md:px-16 lg:px-20 py-10 lg:py-16 overflow-hidden mb-20 lg:mb-28">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[450px] md:h-[500px] bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <motion.p
            className="text-lg font-semibold text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Approach
          </motion.p>
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Boost Your Business With Decent Guidance and Passion
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-teal-600 italic mb-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Optimize, Generate, and Grow Effortlessly
          </motion.p>

          <ul className="space-y-2 sm:space-y-3">
            {bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-gray-700 text-sm sm:text-base lg:text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
              >
                <span className="text-teal-500 text-lg sm:text-xl mt-1">✔</span>
                {point}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:w-1/2">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center text-center p-6 rounded-2xl shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl ${card.bg}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mb-3">
                {card.icon}
              </div>
              <h2 className="text-xl font-bold text-white mt-2">
                {card.title}
              </h2>
              <p className="text-white mt-2 text-sm sm:text-base">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
