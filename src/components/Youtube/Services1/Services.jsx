import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaGoogle, FaSearch, FaFacebook, FaCode, FaChartLine } from "react-icons/fa";

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
    <section className="py-12 bg-[#4A9BD3]">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
      <h1 className="text-center text-3xl text-[#FFFFFF] mb-8">
        Discover what services we provide special for you! </h1>
         <p className="text-center text-1xl text-[#000000] mb-8">
        Our services are designed to amplify your brand's digital impact. From
        social media management  <br />
        to SEO, we provide tailored solutions that
        drive results and growth.
        </p>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-6 rounded-lg shadow-md ${
              index % 2 === 0 ? "bg-[#A2DFE1]" : "bg-[#F7F4F4]"
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                className="text-4xl text-gray-800"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 ml-4">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
