import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Advantages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      title: "Enhanced User Experience",
      points: [
        "Responsive design adapts to any screen size, ensuring ease of navigation.",
        "Improves user engagement by reducing bounce rates.",
        "Provides a seamless experience across all devices."
      ],
    },
    {
      title: "SEO Benefits",
      points: [
        "Responsive websites rank higher in search engine results.",
        "Enhances discoverability to attract a larger audience.",
        "Improves overall site visibility and performance."
      ],
    },
    {
      title: "Cost Efficiency",
      points: [
        "Eliminates the need for separate mobile and desktop versions.",
        "Reduces development and maintenance costs.",
        "Streamlines resource allocation for better ROI."
      ],
    },
    {
      title: "Future-Proofing",
      points: [
        "Ensures accessibility for new devices with varying screen sizes.",
        "Offers a consistent user experience across future technologies.",
        "Adaptable to changes in device trends and user expectations."
      ],
    },
  ];

  return (
    <section ref={ref} className="bg-gradient-to-b from-cyan-200 to-blue-200 py-16">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Advantages of Responsive Web Design
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                {advantage.title}
              </h3>
              <ul className="text-gray-600 text-left space-y-2">
                {advantage.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: idx * 0.2 }}
                  >
                    <span className="text-blue-600 mr-2">&#10148;</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
