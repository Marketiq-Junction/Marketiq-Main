"use client";

import React from "react";
import {
  FaLink,
  FaChartBar,
  FaTools,
  FaSearch,
  FaCogs,
  FaFileAlt,
} from "react-icons/fa";

const Offers = () => {
  const services = [
    {
      title: "Link Building",
      description: [
        "Improve site's authority and visibility.",
        "Secure high-quality backlinks.",
        "Boost search engine rankings.",
      ],
      icon: <FaLink />,
    },
    {
      title: "Content Optimization",
      description: [
        "Optimize content for search engines and users.",
        "Use high-performing keywords.",
        "Ensure relevance and engagement.",
      ],
      icon: <FaChartBar />,
    },
    {
      title: "On-Page SEO",
      description: [
        "Optimize meta tags, headers, and images.",
        "Align content with search engine guidelines.",
        "Enhance website relevance and reach.",
      ],
      icon: <FaTools />,
    },
    {
      title: "Keyword Research",
      description: [
        "Identify high-value keywords.",
        "Drive relevant traffic to your site.",
        "Improve content rankings.",
      ],
      icon: <FaSearch />,
    },
    {
      title: "Technical SEO",
      description: [
        "Improve website speed and mobile-friendliness.",
        "Ensure easy indexing by search engines.",
        "Enhance overall user experience.",
      ],
      icon: <FaCogs />,
    },
    {
      title: "Off-Page SEO",
      description: [
        "Build website authority with quality backlinks.",
        "Leverage content marketing and collaborations.",
        "Improve credibility and search rankings.",
      ],
      icon: <FaFileAlt />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-12 md:p-20 max-w-8xl mx-auto my-12 rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-xl uppercase text-white font-semibold mb-4">
          What We're Offering
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          We are specialized in the <br /> following services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:text-white cursor-pointer"
              onMouseEnter={() => {
                if (
                  typeof window !== "undefined" &&
                  typeof gtag === "function"
                ) {
                  gtag("event", "hover", {
                    event_category: "Service Interaction",
                    event_label: `Service Hovered: ${service.title}`,
                  });
                }
              }}
            >
              <div className="text-5xl mb-4 text-teal-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <ul className="text-sm mb-6 list-disc list-inside text-left">
                {service.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <hr className="border-t border-gray-300 mb-4" />
              <h4 className="text-lg font-semibold">{service.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
