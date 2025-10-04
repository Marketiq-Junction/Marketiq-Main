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
    <section
      ref={ref}
      className="w-full py-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl lg:text-4xl font-bold text-gray-800"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Responsive{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Web Design
            </span>
          </motion.h1>
          <motion.h2
            className="text-xl text-gray-700 mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Engage Your{" "}
            <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent font-semibold">
              Target Audience
            </span>{" "}
            and Foster Trust
          </motion.h2>

          {/* Bullet Points */}
          <motion.ul
            className="text-gray-600 mt-6 space-y-4 text-left lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {bulletPoints[0].points.map((point, index) => (
              <motion.li
                key={index}
                className="flex sm:items-start items-center gap-3 hover:text-teal-600 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.15 }}
              >
                <span className="text-teal-500 font-extrabold text-lg">➤</span>
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <img
            src="/responsive.png"
            alt="Responsive Web Design"
            className="max-w-full h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Responsive;
