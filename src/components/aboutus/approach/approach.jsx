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
        "Maximize your online visibility with tailored strategies that enhance your website and content. Our optimization techniques ensure you reach the right audience, driving engagement and conversions effectively.",
      icon: <RocketLaunchIcon className="text-blue-500 text-6xl" />,
    },
    {
      title: "GENERATE",
      description:
        "Drive targeted traffic to your business with our innovative lead generation strategies. We focus on creating compelling content and utilizing effective channels to attract and convert potential customers into loyal clients.",
      icon: <TrendingUpIcon className="text-blue-500 text-6xl" />,
    },
    {
      title: "GROW",
      description:
        "Unlock new opportunities for expansion through our data-driven strategies and dedicated support. With Marketiq Junction, you'll experience sustainable growth as we help you navigate the ever-evolving digital landscape.",
      icon: <AutoGraphIcon className="text-blue-500 text-6xl" />,
    },
  ];

  return (
    <div className="bg-white px-6 lg:px-20 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
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
          journey, ensuring sustainable progress and measurable results. Let us
          take your business to new heights with effective solutions designed
          for long-term success.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-6 mb-12">
        <button className="bg-blue-500 text-white px-6 py-3 text-lg rounded shadow hover:bg-blue-600 transition">
          Explore Our Services
        </button>
        <button className="bg-blue-500 text-white px-6 py-3 text-lg rounded shadow hover:bg-blue-600 transition">
          Get A Free Quote
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
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
  );
};

export default Approach;
