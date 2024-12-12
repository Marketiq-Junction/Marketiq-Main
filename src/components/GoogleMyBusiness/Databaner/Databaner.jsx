"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Custom Hook for Number Animation
const useNumberAnimation = (from, to, duration, inView) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(from + progress * (to - from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return count;
};

const Databaner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the section is in view
  });

  const stats = [
    { id: 1, value: 25, label: "Experience Year", suffix: "+" },
    { id: 2, value: 120, label: "Successful Projects", suffix: "+" },
    { id: 3, value: 160, label: "Happy Customers", suffix: "+" },
    { id: 4, value: 160, label: "Team Members", suffix: "+" },
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#50C3C6] py-16 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        {/* Arrow Image Hidden on Small Screens */}
        <div className="absolute left-0 bottom-0 w-1/12 md:w-1/16 hidden md:block">
          <Image
            src={"/images/socialmedia/data.png"}
            alt="Arrow"
            layout="responsive"
            width={200}
            height={100}
            className="object-contain"
            priority
          />
        </div>

        <div
          ref={ref}
          className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
        >
          {stats.map((stat) => {
            const animatedValue = useNumberAnimation(0, stat.value, 1500, inView);
            return (
              <motion.div
                key={stat.id}
                className="text-white"
                variants={animationVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: stat.id * 0.2 }}
                aria-label={`${stat.value} ${stat.label}`}
              >
                <div className="text-6xl font-bold">
                  {Math.floor(animatedValue).toLocaleString()}
                  {stat.suffix}
                </div>
                <p className="text-lg mt-4 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Databaner;
