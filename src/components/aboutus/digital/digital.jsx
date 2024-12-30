"use client";

import React, { useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import { motion, AnimatePresence } from "framer-motion";

const DigitalAgency = () => {
  const [activeCard, setActiveCard] = useState("mission");

  const content = {
    mission: {
      title: "Our mission at Marketiq Junction",
      description: [
        "Empower businesses of all sizes with affordable and effective digital marketing solutions.",
        "Enhance online presence and connect with target audiences through tailored strategies.",
        "Leverage cutting-edge, results-focused strategies to ensure measurable growth.",
        "Adapt to the ever-evolving digital landscape with scalable and customer-centric solutions."
      ],
      image: "/missionofourcompany.png",
    },
    vision: {
      title: "Our Vision at Marketiq Junction",
      description: [
        "Lead the digital marketing landscape with innovative and sustainable solutions.",
        "Empower businesses to thrive in a rapidly changing online environment.",
        "Foster partnerships built on trust, collaboration, and shared success."
      ],
      image: "/ourvisionatmarketiqjunction.png",
    },
    goals: {
      title: "Our Goals at Marketiq Junction",
      description: [
        "Consistently deliver high-quality digital marketing services to drive growth.",
        "Maximize ROI through strategies tailored to each business's unique challenges.",
        "Ensure long-term success by aligning strategies with clients' goals in competitive markets."
      ],
      image: "/about2.png",
    },
  };

  return (
    <div className="bg-white px-4 lg:px-16 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          Exclusive Digital Agency To <br /> Provide Solution
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700">
          Our specialized team focuses on providing personalized strategies that
          align with your <br /> business goals, ensuring that your digital marketing
          efforts deliver the best outcomes.<br /> Partner with us for exclusive
          access to cutting-edge digital tools and expertise <br /> designed to solve
          your business challenges!
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
        <div
          className={`cursor-pointer flex items-center p-6 rounded-lg shadow-lg transition-transform transform ${
            activeCard === "mission"
              ? "scale-105 bg-gradient-to-r from-[#A2DFE1] to-[#4A9BD3] text-white"
              : "bg-[#A2DFE1] text-black hover:scale-105 hover:bg-gradient-to-r from-[#A2DFE1] to-[#4A9BD3] hover:text-white"
          }`}
          onClick={() => setActiveCard("mission")}
        >
          <div
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white mr-4"
          >
            <RocketLaunchIcon className="text-3xl text-[#4A9BD3]" />
          </div>
          <div className="text-lg md:text-2xl font-bold">
            Mission
          </div>
        </div>
        <div
          className={`cursor-pointer flex items-center p-6 rounded-lg shadow-lg transition-transform transform ${
            activeCard === "vision"
              ? "scale-105 bg-gradient-to-r from-[#A2DFE1] to-[#4A9BD3] text-white"
              : "bg-[#A2DFE1] text-black hover:scale-105 hover:bg-gradient-to-r from-[#A2DFE1] to-[#4A9BD3] hover:text-white"
          }`}
          onClick={() => setActiveCard("vision")}
        >
          <div
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white mr-4"
          >
            <VisibilityIcon className="text-3xl text-[#4A9BD3]" />
          </div>
          <div className="text-lg md:text-2xl font-bold">
            Vision 
          </div>
        </div>
        <div
          className={`cursor-pointer flex items-center p-6 rounded-lg shadow-lg transition-transform transform ${
            activeCard === "goals"
              ? "scale-105 bg-gradient-to-r from-[#A2DFE1] to-[#4A9BD3] text-white"
              : "bg-[#A2DFE1] text-black hover:scale-105 hover:bg-gradient-to-r from-[#A2DFE1] to-[#4A9BD3] hover:text-white"
          }`}
          onClick={() => setActiveCard("goals")}
        >
          <div
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white mr-4"
          >
            <CenterFocusStrongIcon className="text-3xl text-[#4A9BD3]" />
          </div>
          <div className="text-lg md:text-2xl font-bold">
            Goals
          </div>
        </div>
      </div>

      {/* Active Content Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6 border-2 border-black">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            {content[activeCard].title}
          </h2>
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeCard}
              className="list-disc list-inside text-base md:text-lg lg:text-xl text-gray-700 space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              {content[activeCard].description.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <motion.img
            src={content[activeCard].image}
            alt={activeCard}
            className="w-full max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalAgency;
