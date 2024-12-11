"use client";
import React, { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";

const Benefits = () => {
  // Benefits data for reuse
  const benefitsData = [
    {
      id: "01",
      title: "Increased Discoverability",
      description:
        "Organic strategies optimize your content for visibility, helping your videos reach the right audience by leveraging targeted keywords and SEO techniques.",
      hoverColor: "hover:bg-blue-400",
      activeColor: "bg-blue-600", // Active state color
    },
    {
      id: "02",
      title: "Enhanced Engagement",
      description:
        "Focusing on natural interactions like comments, end screens, and video prompts boosts viewer engagement, creating a loyal subscriber base that grows over time.",
      hoverColor: "hover:bg-blue-500",
      activeColor: "bg-blue-700", // Active state color
    },
    {
      id: "03",
      title: "Sustainable Growth",
      description:
        "With organic methods, your channel builds long-term visibility and credibility, achieving steady growth without the need for paid advertising.",
      hoverColor: "hover:bg-blue-600",
      activeColor: "bg-blue-800", // Active state color
    },
  ];

  // State to track the active card
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard(id); // Set the clicked card as active
  };

  return (
    <section className="py-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Benefits
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          YouTube management offers long-term benefits by building authentic audience
          relationships, <br /> increasing visibility without ad costs, and improving channel ranking.
          Through consistent engagement <br /> and SEO, it ensures that your content remains relevant
          and accessible, growing your channel sustainably and effectively.
        </p>
      </div>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {benefitsData.map((benefit) => (
          <div
            key={benefit.id}
            className={`rounded-lg p-6 shadow-lg transition duration-300 cursor-pointer ${
              activeCard === benefit.id
                ? benefit.activeColor // Active color if selected
                : "bg-[#A2DFE1]" // Default color
            } ${benefit.hoverColor}`} // Hover effect
            onClick={() => handleCardClick(benefit.id)}
          >
            <div className="flex justify-between items-center mb-4">
              <FaRegFileAlt className="text-white text-3xl" />
              <span className="text-white font-semibold text-xl">
                {benefit.id}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              {benefit.title}
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-teal-500 text-white text-sm md:text-base rounded-md hover:bg-teal-600 transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Benefits;
