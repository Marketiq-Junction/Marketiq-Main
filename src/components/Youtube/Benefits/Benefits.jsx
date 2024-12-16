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

  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="text-center px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits</h2>
        <p className="text-[#000000] text-sm sm:text-base md:text-lg">
          YouTube management offers long-term benefits by building authentic audience
          relationships, <br /> increasing visibility without ad costs, and improving channel ranking.
          Through consistent <br /> engagement and SEO, it ensures that your content remains relevant
          and accessible, growing your channel sustainably and effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-28">
        {benefitsData.map((benefit) => (
          <div
            key={benefit.id}
            className={`relative h-[390px] w-full sm:w-[350px] md:w-[307px] p-6 rounded-tr-3xl rounded-bl-3xl transition-transform transform cursor-pointer duration-300 ${
              activeCard === benefit.id
              ? "bg-[#FFFFFF] border-2 border-[#4534B8]"
              : "bg-[#A2DFE1] border-2 border-transparent"
              
            }`}
            onMouseEnter={() => setActiveCard(benefit.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Top-left triangle with ID */}
            <div className="absolute top-0 left-0">
              <svg width="100" height="100">
                <polygon points="0,0 100,0 0,100" style={{ fill: "#4A9BD3" }} />
                <text
                  x="10"
                  y="40"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                >
                  {benefit.id}
                </text>
              </svg>
            </div>

            {/* Bottom-right triangle with Icon */}
            <div className="absolute bottom-0 right-0">
              <svg width="100" height="100">
                <polygon points="100,100 0,100 100,0" style={{ fill: "#4A9BD3" }} />
              </svg>
              <div className="absolute bottom-3 right-3 text-white">
                {React.cloneElement(benefit.icon, { className: "text-3xl" })}
              </div>
            </div>

            {/* Centered Title and Description */}
            <div className="flex flex-col justify-center items-center h-full text-center">
              <h3 className="text-lg md:text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-sm md:text-base">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-[#FFFFFF] border-[#4A9BD3] border-2 text-[#000000] px-8 py-3">
          Request A Free Quote
        </button>
      </div>
    </section>
  );
};

export default Benefits;
