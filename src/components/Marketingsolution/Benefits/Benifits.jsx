"use client";
import React from "react";

const Benefits = () => {
  const benefits = [
    {
      title: "Increased Brand Awareness",
      icon: "fas fa-bullhorn",
      description:
        "Social media platforms allow businesses to reach a wider audience, digitally improving brand visibility and recognition. Regularly engaging with users helps maintain a strong online presence.",
    },
    {
      title: "Enhanced Customer Engagement",
      icon: "fas fa-comments",
      description:
        "Social media facilitates direct interaction with customers, enabling businesses to respond to inquiries, gather feedback, and build relationships, which fosters loyalty and trust.",
    },
    {
      title: "Cost-Effective Marketing",
      icon: "fas fa-money-bill-wave",
      description:
        "Compared to traditional advertising, social media marketing is more affordable and can yield higher returns on investment (ROI). Businesses can reach their target audience without significant expenditure.",
    },
    {
      title: "Increased Website Traffic",
      icon: "fas fa-chart-line",
      description:
        "By sharing content and links on social media, businesses can drive traffic to their websites, enhancing lead generation and potential conversions.",
    },
    {
      title: "Access to Analytics",
      icon: "fas fa-chart-pie",
      description:
        "Social media platforms provide valuable insights and analytics, helping businesses assess their performance, understand audience behavior, and refine their strategies for better results.",
    },
    {
      title: "Improved Customer Insights",
      icon: "fas fa-user-check",
      description:
        "Social media provides valuable data about customer preferences and behaviors. Businesses can analyze this information to tailor their products and services to better meet customer needs.",
    },
  ];

  return (
    <div className="py-10 bg-white">
      {/* Title Section */}
      <div className="text-center mb-10 px-4 sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-black">Benefits of Social Media Marketing</h2>
        <p className="text-gray-500 mt-4">
          Accumsan. Magna varius. Bibendum. Morbi nisl sit, hac vestibulum euismod habitasse nibh. Vivamus nullam
          <br />
          hymenaeos. Semper et sociis est luctus ante ornare. Leo.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-[#4A9BD3] text-white rounded-lg shadow-md flex flex-col items-center"
          >
            {/* Icon */}
            <div className="w-16 h-16 bg-[#A2DFE1] rounded-full flex items-center justify-center mb-4">
              <i className={`${item.icon} text-[#4A9BD3] text-2xl`} aria-hidden="true"></i>
            </div>
            {/* Title */}
            <h3 className="font-bold text-lg mb-2 text-center">{item.title}</h3>
            {/* Description */}
            <p className="text-sm text-white text-center">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-10 px-4">
        <button
          className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition"
          aria-label="Request A Quote"
        >
          Request A Quote
        </button>
      </div>
    </div>
  );
};

export default Benefits;
