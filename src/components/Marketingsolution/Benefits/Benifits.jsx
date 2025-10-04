"use client";

import React from "react";
import { motion } from "framer-motion";
import CampaignIcon from "@mui/icons-material/Campaign";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Benefits = () => {
  const benefits = [
    {
      title: "Increased Brand Awareness",
      icon: <CampaignIcon className="text-white" fontSize="large" />,
      description:
        "Reach a wider audience and improve brand visibility by regularly engaging with users across social platforms.",
    },
    {
      title: "Enhanced Customer Engagement",
      icon: <ChatBubbleOutlineIcon className="text-white" fontSize="large" />,
      description:
        "Interact directly with customers, gather feedback, and build lasting relationships that foster loyalty and trust.",
    },
    {
      title: "Cost-Effective Marketing",
      icon: <AttachMoneyIcon className="text-white" fontSize="large" />,
      description:
        "Achieve higher ROI compared to traditional advertising with affordable and targeted social media campaigns.",
    },
    {
      title: "Increased Website Traffic",
      icon: <BarChartIcon className="text-white" fontSize="large" />,
      description:
        "Share content and links to drive traffic to your website, enhancing leads and conversion opportunities.",
    },
    {
      title: "Access to Analytics",
      icon: <PieChartIcon className="text-white" fontSize="large" />,
      description:
        "Gain valuable insights and analytics to assess performance, understand audience behavior, and refine strategies.",
    },
    {
      title: "Improved Customer Insights",
      icon: <AccountCircleIcon className="text-white" fontSize="large" />,
      description:
        "Analyze customer preferences and behaviors to tailor products and services effectively.",
    },
  ];

  const handleWhatsAppClick = () => {
    const whatsappNumber = "9920892689";
    const message =
      "Hello, I would like to request a quote for social media marketing benefits.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
      {/* Title Section */}
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold">
          Benefits of Social Media Marketing
        </h2>
        <p className="text-cyan-200 mt-4 max-w-2xl mx-auto">
          Discover the impactful benefits of social media marketing in
          increasing brand awareness, improving engagement, and driving results
          effectively.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-r from-teal-400 to-cyan-500 rounded-xl shadow-md p-6 flex flex-col items-center min-h-[260px] cursor-pointer mt-8 transition-all"
            whileHover={{
              scale: 1.05,
              rotate: 1.5,
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          >
            {/* Icon */}
            <div className="absolute -top-8 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg shadow-teal-500/40">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="mt-12 font-bold text-lg text-center">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-cyan-200 text-center mt-4 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action */}
     
    </section>
  );
};

export default Benefits;
