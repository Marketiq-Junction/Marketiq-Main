"use client";
import React from "react";
import { FaCogs, FaLightbulb, FaChartBar } from "react-icons/fa";

const Ourprocess = () => {
  const processSteps = [
    {
      title: "Channel Setup and Optimization",
      description:
        "We begin by setting up <br /> your YouTube channel with <br /> a compelling design, <br /> relevant keywords, and <br /> optimized descriptions.This <br /> includes creating visually <br />appealing banners,<br /> thumbnails, and an <br /> informative 'About' section <br /> to enhance your channel’s <br /> appeal and discoverability.",
      icon: <FaCogs />,
    },
    {
      title: "Tailored Content Strategy",
      description:
        "Our team collaborates with <br /> you to create a tailored <br /> content strategy that aligns <br /> with your target audience's <br /> interests and trending <br /> topics.This process involves <br /> planning video topics, <br />formats, and a consistent <br /> publishing schedule to <br /> maximize engagement and <br /> growth.",
      icon: <FaLightbulb />,
    },
    {
      title: "Performance Monitoring and Analytics",
      description:
        "We continuously monitor <br /> your channel’s performance <br />through detailed analytics.<br />Our reporting includes <br /> insights on viewer <br /> engagement, retention <br /> rates, and demographics, <br /> allowing us to make <br />informed adjustments to <br /> your content strategy for <br /> sustained growth and <br /> improved ROI.",
      icon: <FaChartBar />,
    },
  ];

  return (
    <section className="py-16 bg-[#4A9BD3]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FFFFFF] mb-12">
          Our Process
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-12 text-center">
          {processSteps.map((step, index) => (
            <div key={index} className="flex-1">
              {/* Icon */}
              <div className="flex justify-center items-center w-16 h-16 mx-auto bg-[#A2DFE1] text-white mb-6">
                {React.cloneElement(step.icon, {
                  className: "text-2xl text-[#4A9BD3]",
                })}
              </div>
              {/* Title */}
              <h3 className="text-lg font-bold text-[#FFFFFF] mb-4">
                {step.title}
              </h3>
              {/* Description */}
              <p
                className="text-sm text-[#000000]"
                dangerouslySetInnerHTML={{ __html: step.description }}
              ></p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-4">
          <button className="bg-[#4A9BD3] border-2 border-[#FFFFFF] text-[#000000] px-6 py-3">
            Contact Us
          </button>
          <button className="bg-[#4A9BD3] border-2 border-[#FFFFFF] text-[#000000] px-6 py-3 ">
            Get A Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Ourprocess;
