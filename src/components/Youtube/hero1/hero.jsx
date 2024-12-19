"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-row justify-center items-center py-12 bg-[#4A9BD3]">
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-10">
        {/* Left Side Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center ml-6 px-6 md:px-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Youtube Management
          </h1>
          <motion.ul
            className="space-y-4 text-white text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
          >
            <li className="flex items-start gap-3">
              <span className="text-green-300 font-extrabold text-lg">➤</span>
              Establish and optimize your YouTube channel for maximum visibility.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-300 font-extrabold text-lg">➤</span>
              Develop engaging content that resonates with your audience.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-300 font-extrabold text-lg">➤</span>
              Implement strategies to grow your subscriber base organically.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-300 font-extrabold text-lg">➤</span>
              Analyze performance metrics to refine your content strategy.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-300 font-extrabold text-lg">➤</span>
              Drive measurable results through data-driven decisions.
            </li>
          </motion.ul>
          <div className="relative w-full md:w-[500px] mt-6">
            <motion.input
              type="text"
              placeholder="Enter Your Website"
              className="w-full py-4 px-5 pr-36 border border-gray-300 rounded-md text-gray-700"
              whileHover={{ scale: 1.05 }}
            />
            <motion.button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Request A Quote
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex-1 flex justify-end items-center px-6 md:px-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/youtube/s1.png"
            alt="YouTube Management Illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
