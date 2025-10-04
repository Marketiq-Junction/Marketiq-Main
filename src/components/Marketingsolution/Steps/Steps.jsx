"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <section className="bg-gradient-to-b from-white to-cyan-50 py-12 px-6 md:px-12 lg:px-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Steps to Build a Successful <br /> Marketing Product
        </motion.h1>

        <motion.p
          className="text-gray-600 text-base md:text-lg mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Follow these steps to create an impactful marketing strategy.
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mb-8 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        />

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <Image
              src="/images/socialmedia/step.png"
              alt="Steps to Marketing Product"
              width={600}
              height={400}
              className="object-contain drop-shadow-lg"
            />
            {/* Decorative gradient background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg -z-10 opacity-30 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Steps;
