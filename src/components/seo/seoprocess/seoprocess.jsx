"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaPen, FaChartLine, FaSearch, FaCog } from "react-icons/fa";

const SEOProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Content Creation",
      description:
        "Craft high-quality, engaging content tailored to your audience, including blogs, articles, videos, and infographics.",
      image: "/content.png",
      icon: <FaPen />,
    },
    {
      id: 2,
      title: "Competitive Analysis",
      description:
        "Identify competitors, evaluate their strengths and weaknesses, and gain insights to improve your strategy.",
      image: "/competitive.png",
      icon: <FaChartLine />,
    },
    {
      id: 3,
      title: "Keyword Research",
      description:
        "Discover high-value keywords to align content with user intent, driving organic traffic and improving rankings.",
      image: "/keyword.png",
      icon: <FaSearch />,
    },
    {
      id: 4,
      title: "Optimization",
      description:
        "Optimize your website's structure for seamless navigation, improved user experience, and better indexing.",
      image: "/optimization.png",
      icon: <FaCog />,
    },
  ];

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleStepClick = (step) => {
    if (typeof window !== "undefined" && typeof gtag === "function") {
      gtag("event", "step_click", {
        event_category: "Step Interaction",
        event_label: `Step Clicked: ${step.title}`,
        value: step.id,
      });
    }
    setActiveStep(step);
  };

  return (
    <section className="bg-gradient-to-r from-teal-500 to-cyan-600 p-12 md:p-20 max-w-8xl mx-auto my-12 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our SEO Process
          </h1>
        </div>

        {/* Step Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 relative">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              <button
                className={`bg-white text-teal-600 font-semibold text-center py-6 px-4 rounded-lg shadow-md w-44 md:w-48 transition-all duration-200 hover:scale-105 hover:shadow-xl ${
                  activeStep.id === step.id
                    ? "bg-cyan-400 text-white shadow-lg"
                    : ""
                }`}
                aria-pressed={activeStep.id === step.id}
                onClick={() => handleStepClick(step)}
              >
                <div className="text-2xl mb-2">{step.icon}</div>
                {step.title}
              </button>

              {/* Active Arrow */}
              {activeStep.id === step.id && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-cyan-400 md:block"></div>
              )}
            </div>
          ))}
        </div>

        {/* Active Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row items-center gap-8 text-white"
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <Image
                src={activeStep.image}
                alt={activeStep.title}
                width={500}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{activeStep.title}</h2>
              <p className="text-lg">{activeStep.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SEOProcess;
