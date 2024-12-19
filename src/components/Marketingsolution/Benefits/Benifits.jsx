"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SpeakerphoneIcon,
  ChatAltIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ChartPieIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

const Benefits = () => {
  const benefits = [
    {
      title: "Increased Brand Awareness",
      icon: <SpeakerphoneIcon className="h-8 w-8 text-white" />,
      description:
        "Social media platforms allow businesses to reach a wider audience, digitally improving brand visibility and recognition. Regularly engaging with users helps maintain a strong online presence.",
    },
    {
      title: "Enhanced Customer Engagement",
      icon: <ChatAltIcon className="h-8 w-8 text-white" />,
      description:
        "Social media facilitates direct interaction with customers, enabling businesses to respond to inquiries, gather feedback, and build relationships, which fosters loyalty and trust.",
    },
    {
      title: "Cost-Effective Marketing",
      icon: <CurrencyDollarIcon className="h-8 w-8 text-white" />,
      description:
        "Compared to traditional advertising, social media marketing is more affordable and can yield higher returns on investment (ROI). Businesses can reach their target audience without significant expenditure.",
    },
    {
      title: "Increased Website Traffic",
      icon: <ChartBarIcon className="h-8 w-8 text-white" />,
      description:
        "By sharing content and links on social media, businesses can drive traffic to their websites, enhancing lead generation and potential conversions.",
    },
    {
      title: "Access to Analytics",
      icon: <ChartPieIcon className="h-8 w-8 text-white" />,
      description:
        "Social media platforms provide valuable insights and analytics, helping businesses assess their performance, understand audience behavior, and refine their strategies for better results.",
    },
    {
      title: "Improved Customer Insights",
      icon: <UserCircleIcon className="h-8 w-8 text-white" />,
      description:
        "Social media provides valuable data about customer preferences and behaviors. Businesses can analyze this information to tailor their products and services to better meet customer needs.",
    },
  ];

  return (
    <div className="py-10 bg-white">
      {/* Title Section */}
      <div className="text-center mb-10 px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-black">
          Benefits of Social Media Marketing
        </h2>
        <p className="text-gray-500 mt-4">
          Discover the impactful benefits of social media marketing in
          increasing brand awareness, <br /> improving engagement, and driving
          results effectively.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-[#4A9BD3] text-white rounded-lg shadow-md p-6 flex flex-col items-center min-h-[260px] cursor-pointer"
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Icon at the Top */}
            <div className="absolute -top-8 w-16 h-16 bg-[#A2DFE1] rounded-full flex items-center justify-center">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="mt-12 font-bold text-lg text-center">{item.title}</h3>

            {/* Description */}
            <p className="text-sm text-white text-center mt-4">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-10">
        <motion.button
          whileHover={{
            scale: 1.1,
            backgroundColor: "#4A9BD3",
            color: "#FFFFFF",
            borderColor: "#4A9BD3",
          }}
          transition={{ duration: 0.3 }}
          className="bg-white border-[#4A9BD3] border-2 text-black px-8 py-3 rounded-lg shadow-md hover:text-white transition-all"
        >
          Request A Quote
        </motion.button>
      </div>
    </div>
  );
};

export default Benefits;
