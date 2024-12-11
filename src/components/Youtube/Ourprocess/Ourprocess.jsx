import React, { useState } from "react";
import { FaCogs, FaEdit, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const Ourprocess = () => {
  const [activeCard, setActiveCard] = useState(null); // Track which card is clicked

  const steps = [
    {
      id: 1,
      title: "Channel Setup and Optimization",
      description:
        "We begin by setting up your YouTube channel with a compelling design, relevant keywords, and optimized descriptions. This includes creating visually appealing banners, thumbnails, and an informative 'About' section to enhance your channel's appeal and discoverability.",
      icon: <FaCogs />,
    },
    {
      id: 2,
      title: "Content Strategy and Planning",
      description:
        "Our team collaborates with you to create a tailored content strategy that aligns with your target audience's interests and trending topics. This process involves planning video topics, formats, and a consistent publishing schedule to maximize engagement and growth.",
      icon: <FaEdit />,
    },
    {
      id: 3,
      title: "Performance Monitoring and Analytics",
      description:
        "We continuously monitor your channel's performance through detailed analytics. Our reporting includes insights on viewer engagement, retention rates, and demographics, allowing us to make informed adjustments to your content strategy for sustained growth and improved ROI.",
      icon: <FaChartLine />,
    },
  ];

  return (
    <section className="py-12 bg-[#4A9BD3] mt-10">
      <h1 className="text-3xl font-bold text-center text-white mb-8">
        Our Process
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            className={`p-6 rounded-lg shadow-md w-full lg:w-1/3 text-center transition transform ${
              activeCard === step.id
                ? "bg-[#4A9BD3] text-white"
                : "bg-[#A2DFE1] text-gray-800 hover:bg-[black] hover:text-white hover:shadow-lg"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveCard(step.id)} // Set the active card on click
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                className={`text-4xl ${
                  activeCard === step.id ? "text-white" : "text-[#4A9BD3]"
                } mr-4 transition-colors duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold">
                {step.title}
              </h3>
            </div>
            <p className="text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <motion.button
          className="px-6 py-2 bg-black text-blue-500 font-semibold rounded-lg shadow hover:bg-white hover:text-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
        <motion.button
          className="px-6 py-2 bg-white border border-blue-500 text-blue-500 font-semibold rounded-lg shadow hover:bg-black hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get A Quote
        </motion.button>
      </div>
    </section>
  );
};

export default Ourprocess;
