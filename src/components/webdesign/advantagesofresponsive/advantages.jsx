import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Advantages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const advantages = [
    {
      title: "Enhanced User Experience",
      points: [
        "Responsive design adapts to any screen size, ensuring ease of navigation.",
        "Improves user engagement by reducing bounce rates.",
        "Provides a seamless experience across all devices.",
      ],
    },
    {
      title: "SEO Benefits",
      points: [
        "Responsive websites rank higher in search engine results.",
        "Enhances discoverability to attract a larger audience.",
        "Improves overall site visibility and performance.",
      ],
    },
    {
      title: "Cost Efficiency",
      points: [
        "Eliminates the need for separate mobile and desktop versions.",
        "Reduces development and maintenance costs.",
        "Streamlines resource allocation for better ROI.",
      ],
    },
    {
      title: "Future-Proofing",
      points: [
        "Ensures accessibility for new devices with varying screen sizes.",
        "Offers a consistent user experience across future technologies.",
        "Adaptable to changes in device trends and user expectations.",
      ],
    },
  ];

  // Variants for smoother staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-teal-500 to-cyan-600 py-16"
    >
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Advantages of Responsive Web Design
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-left flex flex-col justify-start transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/40"
              variants={itemVariants}
            >
              <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent mb-4">
                {advantage.title}
              </h3>
              <motion.ul
                className="text-gray-600 space-y-2"
                variants={containerVariants}
              >
                {advantage.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-2"
                    variants={listItemVariants}
                  >
                    <span className="text-teal-500">&#10148;</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Advantages;
