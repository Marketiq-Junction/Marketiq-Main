import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center py-10 sm:py-14 bg-gradient-to-r from-teal-500 to-cyan-600">
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-8 px-4 sm:px-8 lg:px-12">
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center md:text-left leading-snug"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Google My Business <br /> Management
          </motion.h1>

          <motion.ul
            className="text-white space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-white font-extrabold text-lg">➤</span>
              Maximize your visibility and connect with local customers.
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-white font-extrabold text-lg">➤</span>
              Optimize your GMB profile to attract more clients.
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-white font-extrabold text-lg">➤</span>
              Drive traffic to your business with strategic updates.
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-white font-extrabold text-lg">➤</span>
              Stay ahead of the competition with enhanced local presence.
            </li>
          </motion.ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/GoogleMyBusiness/first1.png"
            alt="Google My Business Illustration"
            className="max-w-full h-auto sm:max-w-md md:max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
