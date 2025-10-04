import React from "react";
import { motion } from "framer-motion";

const Reputation = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-teal-500 to-cyan-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Left Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 text-center md:text-left leading-snug">
            We Help You Control <br /> Your Online Reputation
          </h1>

          <motion.ul
            className="space-y-3 sm:space-y-4 text-white text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-black font-extrabold text-lg sm:text-xl">
                ➤
              </span>
              Actively manage your digital presence across various platforms.
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-black font-extrabold text-lg sm:text-xl">
                ➤
              </span>
              Monitor customer feedback to address concerns promptly.
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-black font-extrabold text-lg sm:text-xl">
                ➤
              </span>
              Engage with your audience to build trust and loyalty.
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-black font-extrabold text-lg sm:text-xl">
                ➤
              </span>
              Implement strategies to enhance your brand image effectively.
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="text-black font-extrabold text-lg sm:text-xl">
                ➤
              </span>
              Build credibility in the digital landscape.
            </li>
          </motion.ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/GoogleMyBusiness/Three.png"
            alt="Online Reputation Management"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Reputation;
