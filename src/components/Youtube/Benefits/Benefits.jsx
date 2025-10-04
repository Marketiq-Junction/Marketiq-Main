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

  const handleWhatsAppClick = () => {
    const whatsappNumber = "9920892689";
    const message =
      "Hello, I would like to request a free quote for your services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-16 bg-[#FFFFFF]">
      {/* Header */}
      <div className="text-center px-4 mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits</h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
          YouTube management offers long-term benefits by building authentic
          audience relationships, increasing visibility without ad costs, and
          improving channel ranking. Through consistent engagement and SEO, it
          ensures that your content remains relevant and accessible, growing
          your channel sustainably and effectively.
        </p>
      </div>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
        {benefitsData.map((benefit) => (
          <div
            key={benefit.id}
            className={`relative h-[360px] w-full p-6 rounded-tr-3xl rounded-bl-3xl transition-transform transform cursor-pointer duration-300 shadow-md ${
              activeCard === benefit.id
                ? "bg-[#FFFFFF] border-2 border-[#4534B8] scale-105"
                : "bg-[#A2DFE1] border-2 border-transparent"
            }`}
            onMouseEnter={() => setActiveCard(benefit.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Top-left triangle with ID */}
            <div className="absolute top-0 left-0 w-20 h-20">
              <svg className="w-full h-full">
                <defs>
                  <linearGradient
                    id="tealGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#14b8a6", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#0891b2", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <polygon points="0,0 80,0 0,80" fill="url(#tealGradient)" />
                <text
                  x="10"
                  y="30"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                  className="pointer-events-none"
                >
                  {benefit.id}
                </text>
              </svg>
            </div>

            {/* Bottom-right triangle with Icon */}
            <div className="absolute bottom-0 right-0 w-20 h-20">
              <svg className="w-full h-full">
                <defs>
                  <linearGradient
                    id="tealGradientBottom"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#14b8a6", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#0891b2", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <polygon
                  points="80,80 0,80 80,0"
                  fill="url(#tealGradientBottom)"
                />
              </svg>
              <div className="absolute bottom-3 right-3 text-white text-2xl">
                {React.cloneElement(benefit.icon)}
              </div>
            </div>

            {/* Centered Title & Description */}
            <div className="flex flex-col justify-center items-center h-full text-center px-2">
              <h3 className="text-base md:text-xl font-bold mb-4 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-700">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Benefits;
