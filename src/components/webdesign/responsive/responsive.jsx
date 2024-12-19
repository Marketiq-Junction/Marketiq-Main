import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bulletPoints = [
  {
    title: "Responsive Web Design",
    points: [
      "Ensure an optimal experience across all devices.",
      "Reduce bounce rates with seamless navigation.",
      "Adapt to every screen size, including desktop, tablet, and smartphone.",
      "Enhance performance with faster loading times.",
    ],
  },
];

const Responsive = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="w-full bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-3xl lg:text-4xl font-bold text-gray-800"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Responsive Web Design
          </motion.h1>
          <motion.h2
            className="text-xl text-blue-500 mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Engage Your Target Audience and Foster Trust
          </motion.h2>
          <motion.ul
            className="text-gray-600 mt-6 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {bulletPoints[0].points.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="text-blue-500 font-extrabold text-lg">➤</span>
                {point}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            className="mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-transform duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Portfolio
            </motion.button>
            <motion.button
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-transform duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request A Free Quote
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/responsive.png" // Replace with your actual image URL
            alt="Responsive Web Design"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Responsive;
