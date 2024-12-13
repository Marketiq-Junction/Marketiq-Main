"use client";

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
      icon: <RocketLaunchIcon className="text-blue-500 text-6xl" />,
    },
    {
      title: "GENERATE",
      description:
        "Drive targeted traffic to your business with our innovative lead generation strategies.",
      icon: <TrendingUpIcon className="text-blue-500 text-6xl" />,
    },
    {
      title: "GROW",
      description:
        "Unlock new opportunities for expansion through our data-driven strategies and dedicated support.",
      icon: <AutoGraphIcon className="text-blue-500 text-6xl" />,
    },
  ];

  return (
    <div className="bg-white px-6 lg:px-20 py-12">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <p className="text-lg font-semibold text-gray-600">Our Approach</p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Boosts Your Business With Decent Guidance and Passion
          </h1>
          <p className="text-xl text-blue-500 italic mb-4">
            Optimize, Generate, and Grow Effortlessly
          </p>
          <p className="text-gray-700 text-lg lg:text-xl">
            We’re driven by a passion for helping businesses succeed. Our expert
            team combines strategic optimization, data-driven insights, and
            creativity to enhance your digital presence. From generating
            high-quality leads to driving consistent growth, we provide the
            guidance and dedication needed to elevate your brand. With our
            personalized approach, we optimize every step of your digital
            journey, ensuring sustainable progress and measurable results. Let
            us take your business to new heights with effective solutions
            designed for long-term success.
          </p>
          <div className="flex gap-6 mt-8">
            <button className="bg-[#4A9BD3] text-white px-6 py-3 text-lg  shadow hover:bg-white hover:text-black transition">
              Explore Our Services
            </button>
            <button className="bg-[#4A9BD3] text-white px-6 py-3 text-lg  shadow hover:bg-white hover:text-black transition">
              Get A Free Quote
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:w-1/2 ">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center text-center">
                {card.icon}
                <h2 className="text-2xl font-bold mt-4">{card.title}</h2>
                <p className="text-gray-700 mt-4">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
