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
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Save Time & Effort With
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Marketiq
            </span>{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Junction
            </span>
          </h1>

          {/* Animated Bullet Points */}
          <motion.ul
            className="text-lg mb-6 leading-relaxed space-y-4 sm:pl-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              "Streamline your marketing to save time and boost results.",
              "Grow your business while we simplify digital marketing for you.",
              "Drive results with expert web design, social media management, and SEO.",
              "Save valuable resources while optimizing your marketing efforts for success.",
              "Let us handle the digital landscape, so you can concentrate on core business activities.",
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-2"
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
                }}
              >
                <span className="text-teal-500 font-bold">➤</span>
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default SaveTime;
