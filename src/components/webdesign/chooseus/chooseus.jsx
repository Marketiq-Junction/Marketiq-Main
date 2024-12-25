import React from "react";
import { motion } from "framer-motion";

const   ChooseUs = () => {
  const pointsLeft = [
    "Transform your website into a powerful revenue driver.",
    "Tailored, data-driven strategies for better visibility.",
    "Enhance user engagement and maximize conversions.",
    "Create a seamless path from visitor to loyal customer.",
  ];

  const cardData = [
    {
      title: "Digital Marketing Analysis",
      points: [
        "Understand the effectiveness of your online strategies.",
        "Evaluate key metrics and user behavior.",
        "Identify areas for improvement and optimize campaigns.",
      ],
    },
    {
      title: "Conversion Rate Optimization",
      points: [
        "Increase the percentage of website visitors who take desired actions.",
        "Analyze user behavior and refine user experience.",
        "Enhance conversion rates and maximize ROI.",
      ],
    },
    {
      title: "Social Media Marketing",
      points: [
        "Build brand awareness and engage with your target audience.",
        "Create compelling content and utilize targeted advertising.",
        "Drive traffic to websites and boost customer loyalty.",
      ],
    },
  ];

  return (
    <section className="bg-[#A2DFE1] py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Text Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-gray-700 uppercase mb-4">
             Why Choose Us
          </h3>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Transform your website into a revenue powerhouse with Digital Insides.
          </h1>
          <ul className="text-xl text-gray-700 space-y-4">
            {pointsLeft.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <span className="text-blue-600">&#9656;</span>
                {point}
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="mt-6 flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="px-6 py-3 bg-[#4A9BD3] text-white font-semibold hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Us
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Cards Section */}
        <motion.div
          className="lg:w-1/2 grid grid-cols-1 gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-[#4A9BD3] mb-3">
                {card.title}
              </h3>
              <ul className="text-gray-700 space-y-2">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600">&#9656;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseUs;
