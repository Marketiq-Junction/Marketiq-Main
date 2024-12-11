"use client";
import React, { useState } from "react";
import { FaSearch, FaUsers, FaChartLine } from "react-icons/fa";

const Benefits = () => {
  const benefitsData = [
    {
      id: "01",
      title: "Increased Discoverability",
      description:
        "Organic strategies optimize your content for visibility, helping your videos reach the right audience by leveraging targeted keywords and SEO techniques.",
      icon: <FaSearch />,
    },
    {
      id: "02",
      title: "Enhanced Engagement",
      description:
        "Focusing on natural interactions like comments, end screens, and video prompts boosts viewer engagement, creating a loyal subscriber base that grows over time.",
      icon: <FaUsers />,
    },
    {
      id: "03",
      title: "Sustainable Growth",
      description:
        "With organic methods, your channel builds long-term visibility and credibility, achieving steady growth without the need for paid advertising.",
      icon: <FaChartLine />,
    },
  ];

  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard(id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits</h2>
        <p className="text-base md:text-lg text-gray-600">
          YouTube management offers long-term benefits by building authentic audience
          relationships, increasing visibility without ad costs, and improving channel ranking.
          Through consistent engagement and SEO, it ensures that your content remains relevant
          and accessible, growing your channel sustainably and effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {benefitsData.map((benefit) => (
          <div
            key={benefit.id}
            className={`rounded-lg p-6 shadow-lg transition-transform transform cursor-pointer duration-300 ${
              activeCard === benefit.id ? "bg-black text-white" : "bg-[#A2DFE1] text-black"
            } hover:bg-black hover:text-white`}
            onMouseEnter={() => setActiveCard(benefit.id)} // Change icon animation on hover
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="flex justify-between items-center mb-6">
              <div
                className={`transition-colors duration-300 ${
                  activeCard === benefit.id ? "text-white" : "text-black"
                } hover:text-teal-500`}
              >
                {React.cloneElement(benefit.icon, { className: "text-3xl" })}
              </div>
              <span className="font-bold text-xl">{benefit.id}</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-4">{benefit.title}</h3>
            <p className="text-sm md:text-base">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-4 bg-teal-500 text-white text-sm md:text-base font-medium rounded-lg hover:bg-teal-600 transition duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Benefits;
