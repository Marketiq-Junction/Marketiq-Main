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
        "Adapt to the ever-evolving digital landscape with scalable and customer-centric solutions.",
      ],
      image: "/missionofourcompany.png",
    },
    vision: {
      title: "Our Vision at Marketiq Junction",
      description: [
        "Lead the digital marketing landscape with innovative and sustainable solutions.",
        "Empower businesses to thrive in a rapidly changing online environment.",
        "Foster partnerships built on trust, collaboration, and shared success.",
      ],
      image: "/ourvisionatmarketiqjunction.png",
    },
    goals: {
      title: "Our Goals at Marketiq Junction",
      description: [
        "Consistently deliver high-quality digital marketing services to drive growth.",
        "Maximize ROI through strategies tailored to each business's unique challenges.",
        "Ensure long-term success by aligning strategies with clients' goals in competitive markets.",
      ],
      image: "/about2.png",
    },
  };

  return (
    <div className="bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-12 lg:py-16">
      {/* Header */}
      <div className="text-center mb-10 px-2 sm:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Exclusive Digital Agency To <br /> Provide Solution
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
          Our specialized team focuses on providing personalized strategies that
          align with your <br className="hidden sm:inline" /> business goals,
          ensuring that your digital marketing efforts deliver the best
          outcomes. <br className="hidden sm:inline" /> Partner with us for
          exclusive access to cutting-edge digital tools and expertise designed
          to solve your business challenges!
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 flex-wrap">
        {[
          { key: "mission", icon: <RocketLaunchIcon />, label: "Mission" },
          { key: "vision", icon: <VisibilityIcon />, label: "Vision" },
          { key: "goals", icon: <CenterFocusStrongIcon />, label: "Goals" },
        ].map((card) => (
          <div
            key={card.key}
            className={`cursor-pointer flex items-center p-5 sm:p-6 rounded-lg shadow-lg transition-transform transform w-full sm:w-auto ${
              activeCard === card.key
                ? "scale-105 bg-gradient-to-r from-teal-400 to-cyan-500 text-white"
                : "bg-cyan-100 text-black hover:scale-105 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:text-white"
            }`}
            onClick={() => setActiveCard(card.key)}
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white mr-3 sm:mr-4">
              {React.cloneElement(card.icon, {
                className: "text-2xl sm:text-3xl text-teal-500",
              })}
            </div>
            <div className="text-lg sm:text-xl md:text-2xl font-bold">
              {card.label}
            </div>
          </div>
        ))}
      </div>

      {/* Active Content Section */}
      <div className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6 md:gap-8 border-2 border-teal-500">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {content[activeCard].title}
          </h2>
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeCard}
              className="list-disc list-inside text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 space-y-2"
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
                  transition={{ delay: idx * 0.15 }}
                >
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <motion.img
            src={content[activeCard].image}
            alt={activeCard}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
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
