import React from "react";
import { motion } from "framer-motion";

const SaveTime = () => {
  return (
    <section className="bg-white text-black py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/time.png"
            alt="Save Time Illustration"
            className="h-auto"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Save Time & Effort With
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#4A9BD3]">Marketiq</span> <span className="text-[#50C3C6]">Junction</span>
          </h1>
          <motion.ul
            className="text-lg mb-6 leading-relaxed space-y-4 pl-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, duration: 0.5 }}
          >
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-[#4A9BD3]">➤</span> Maximize your time and effort by streamlining your marketing processes.
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="text-[#4A9BD3]">➤</span> Focus on growing your business while we handle the complexities of digital marketing.
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <span className="text-[#4A9BD3]">➤</span> Leverage expertise in web design, social media management, and SEO to drive results efficiently.
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <span className="text-[#4A9BD3]">➤</span> Save valuable resources while optimizing your marketing efforts for success.
            </motion.li>
            <motion.li
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <span className="text-[#4A9BD3]">➤</span> Let us handle the digital landscape, so you can concentrate on core business activities.
            </motion.li>
          </motion.ul>
          <motion.div
            className="flex justify-center md:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.button
              className="bg-[#4A9BD3] text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#3a82b2] transition-transform duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
            <motion.button
              className="border border-[#4A9BD3] text-[#4A9BD3] font-semibold px-6 py-2 rounded-md hover:bg-[#4A9BD3] hover:text-white transition duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaveTime;
