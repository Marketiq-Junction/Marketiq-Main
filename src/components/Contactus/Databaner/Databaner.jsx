"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Databaner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5, // Trigger when 50% of the section is in view
  });

  const stats = [
    { id: 1, value: 2.7, label: "Digital Marketing Hours", suffix: "M" },
    { id: 2, value: 250, label: "Marketing Experts", suffix: "+" },
    { id: 3, value: 1000, label: "4 Stars Up Reviews", suffix: "+" },
    { id: 4, value: 600, label: "Case Studies", suffix: "+" },
  ];

  const numberAnimation = (from, to, duration) => {
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

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#50C3C6] py-16 mt-20">
      <div
        ref={ref}
        className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
      >
        {stats.map((stat) => {
          const animatedValue = numberAnimation(0, stat.value, 1500);
          return (
            <motion.div
              key={stat.id}
              className="text-white"
              variants={animationVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: stat.id * 0.2 }}
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
    </section>
  );
};

export default Databaner;
