"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Important = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const bulletPoints = [
    "Responsive web design ensures optimal performance across all devices and screen sizes, enhancing user accessibility.",
    "It improves user experience with intuitive layouts, faster loading times, and seamless navigation.",
    "Favored by search engines, responsive design boosts SEO rankings and increases website discoverability.",
    "With the rise in mobile usage, it helps businesses reach a broader audience and stay competitive in the digital era.",
  ];

  return (
    <section ref={ref} className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-start gap-10">
        {/* Left Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <motion.img
            src="/important.png"
            alt="Responsive Web Design Illustration"
            className="w-3/4 lg:w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 text-left flex flex-col">
          <motion.h1
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Why responsive web design is important
          </motion.h1>

          <motion.ul
            className="text-gray-600 text-lg mb-8 space-y-4"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <span className="text-teal-500 text-xl">&#10148;</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Important;
