import React from "react";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaGoogle,
  FaSearch,
  FaFacebook,
  FaCode,
  FaChartLine,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "YouTube Marketing",
      description:
        "Our YouTube marketing services help boost your channel's visibility with optimized video SEO, tailored content strategies, and detailed analytics to enhance audience engagement.",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      title: "Google My Business",
      description:
        "We provide a Google My Business service designed to enhance your brand's local presence. By optimizing your profile and managing reviews, we help improve visibility.",
      icon: <FaGoogle />,
    },
    {
      id: 3,
      title: "Search Engine Optimization",
      description:
        "Our SEO services enhance your visibility using on-page and off-page optimization strategies, keyword research, and technical improvements.",
      icon: <FaSearch />,
    },
    {
      id: 4,
      title: "Social Media Management",
      description:
        "We create engaging content tailored to your brand's voice and ensure a strategic approach to boost your brand's visibility.",
      icon: <FaFacebook />,
    },
    {
      id: 5,
      title: "Web Development",
      description:
        "We provide custom web development services, ensuring your website is optimized for performance and user experience.",
      icon: <FaCode />,
    },
    {
      id: 6,
      title: "Analytics & Reporting",
      description:
        "Our analytics services provide insights into your performance, helping you make data-driven decisions to maximize growth.",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="text-center px-4 md:px-16 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 mb-4">
          Our Services
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
          Our services are designed to amplify your brand's digital impact. From
          social media management to SEO, we provide tailored solutions that
          drive results and growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className={`p-6 rounded-2xl transition-all duration-300 shadow-lg ${
              index % 2 === 0
                ? "bg-white border-t-4 border-teal-400"
                : "bg-gradient-to-br from-teal-400 to-cyan-500 text-white"
            }`}
          >
            <div className="flex flex-col items-center justify-center mb-4 text-center">
              <motion.div
                className={`text-5xl mb-3 ${
                  index % 2 === 0 ? "text-teal-500" : "text-white"
                }`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                {service.icon}
              </motion.div>
              <h3
                className={`text-xl font-semibold ${
                  index % 2 === 0 ? "text-gray-800" : "text-white"
                }`}
              >
                {service.title}
              </h3>
            </div>
            <p
              className={`text-center ${
                index % 2 === 0 ? "text-gray-600" : "text-white/90"
              }`}
            >
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
