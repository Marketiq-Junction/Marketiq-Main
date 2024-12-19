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
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl md:text-3xl font-bold text-white mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Google My Business <br /> Management
          </motion.h1>

          <motion.ul
            className="text-white space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li className="flex items-start gap-3">
              <span className="text-teal-300 font-extrabold text-lg">➤</span>
              Maximize your visibility and connect with local customers.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-300 font-extrabold text-lg">➤</span>
              Optimize your GMB profile to attract more clients.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-300 font-extrabold text-lg">➤</span>
              Drive traffic to your business with strategic updates.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-300 font-extrabold text-lg">➤</span>
              Stay ahead of the competition with enhanced local presence.
            </li>
          </motion.ul>

          <motion.div
            className="relative w-full md:w-[500px] mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input
              type="text"
              placeholder="Enter Your Website"
              className="w-full py-4 px-5 pr-36 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            >
              Request A Quote
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex-1 flex justify-end items-center px-6 md:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/GoogleMyBusiness/first1.png"
            alt="Google My Business Illustration"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
