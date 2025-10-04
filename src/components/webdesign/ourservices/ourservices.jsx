import React from "react";
import {
  FaPalette,
  FaMobileAlt,
  FaShoppingCart,
  FaFileAlt,
  FaSearch,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "Custom Web Design",
    description: [
      "Tailored website designs to reflect your unique brand identity.",
      "Innovative layouts to captivate and engage your audience.",
      "Seamless navigation for a superior user experience.",
    ],
    icon: <FaPalette />,
  },
  {
    title: "Responsive Web Development",
    description: [
      "Mobile-first design approach for optimal performance.",
      "Cross-platform compatibility to reach a wider audience.",
      "Fast loading speeds for a seamless browsing experience.",
    ],
    icon: <FaMobileAlt />,
  },
  {
    title: "E-commerce Development",
    description: [
      "Custom e-commerce solutions for seamless online shopping.",
      "Secure payment gateways to protect customer transactions.",
      "Advanced features to boost sales and conversions.",
    ],
    icon: <FaShoppingCart />,
  },
  {
    title: "Content Management System",
    description: [
      "User-friendly CMS platforms for effortless management.",
      "Scalable solutions to accommodate business growth.",
      "Custom integrations tailored to your specific needs.",
    ],
    icon: <FaFileAlt />,
  },
  {
    title: "SEO Optimization",
    description: [
      "In-depth keyword research to enhance visibility.",
      "On-page and off-page optimization for better rankings.",
      "Analytics-driven strategies to maximize ROI.",
    ],
    icon: <FaSearch />,
  },
  {
    title: "Maintenance & Support",
    description: [
      "24/7 technical support for uninterrupted operations.",
      "Regular updates to ensure security and performance.",
      "Proactive monitoring to prevent potential issues.",
    ],
    icon: <FaTools />,
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-gradient-to-b from-teal-500 to-cyan-600 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-white text-xl md:text-2xl max-w-4xl mx-auto mb-12">
          Discover the specialized services crafted to meet your digital needs!
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-cyan-400/40 transform transition-all duration-300 hover:scale-105 flex flex-col"
            >
              <div className="text-teal-500 text-5xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent mb-4">
                {service.title}
              </h3>
              <ul className="text-gray-700 text-left space-y-2">
                {service.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-teal-500 mr-2">➤</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
