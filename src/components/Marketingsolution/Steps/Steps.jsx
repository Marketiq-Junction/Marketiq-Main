"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Steps = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Establish Objectives",
      description:
        "Establish clear objectives for your social media strategy to guide your efforts effectively. Ensure these goals are specific, measurable, and aligned with your overall business aims for optimal results.",
    },
    {
      id: 2,
      title: "Editorial Calendar",
      description:
        "An editorial calendar is crucial for organizing and scheduling your social media content.",
    },
    {
      id: 3,
      title: "Writing & Editing",
      description:
        "Effective writing and editing are essential for crafting clear, engaging social media content. This process involves refining messages for clarity and ensuring they resonate with your target audience.",
    },
    {
      id: 4,
      title: "Graphic Design",
      description:
        "Our graphic design services focus on creating visually compelling content that captures attention and enhances your brand identity.",
    },
    {
      id: 5,
      title: "Publication & Promotion",
      description:
        "Our publication and promotion services ensure that your content reaches the right audience through strategic distribution.",
    },
  ];

  const toggleStep = (id) => {
    setActiveStep((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-black">
          Steps to Build a Successful Marketing Product
        </h2>

        <p className="text-base sm:text-lg text-gray-600 text-center mb-12">
          Accumsan magna varius bibendum. Morbi nisl nisi vestibulum euismod
          habitasse nibh. Vivamus nullam hymenaeos semper et sociis est luctus.
        </p>

        {/* Steps Timeline */}
        <div className="relative flex flex-wrap justify-center items-start">
          {/* Horizontal Line */}
          <div className="absolute inset-0 top-1/2 transform -translate-y-1/2 h-1 bg-[#4A9BD3] w-full max-w-6xl mx-auto z-0"></div>

          {steps.map((step) => {
            const isOdd = step.id % 2 !== 0;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center w-full md:w-1/2 lg:w-1/5 px-4 py-8 text-center z-10"
              >
                {/* Step Description */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    activeStep === step.id
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden w-10/12 sm:w-64 md:w-72 text-sm md:text-base text-black p-4 border rounded-lg shadow-lg bg-gray-50 z-20"
                >
                  {step.description}
                </motion.div>

                {/* Step Circle */}
                <div
                  onClick={() => toggleStep(step.id)}
                  aria-expanded={activeStep === step.id}
                  className={`cursor-pointer w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
                    activeStep === step.id
                      ? "bg-[#4A9BD3] text-white scale-110"
                      : "bg-gray-200 text-black hover:bg-[#4A9BD3] hover:text-white"
                  }`}
                >
                  {step.id}
                </div>

                {/* Step Title */}
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold mt-4 text-[#4A9BD3]">
                  {step.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
