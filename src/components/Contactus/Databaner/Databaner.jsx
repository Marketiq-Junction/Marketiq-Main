"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
// import arrowImage from '/public/farrowImage.png'; // Replace with your image path

const Databaner = () => {
  const [stats, setStats] = useState({
    hours: 0,
    experts: 0,
    reviews: 0,
    caseStudies: 0,
  });

  useEffect(() => {
    let countInterval;
    const animateNumbers = () => {
      const duration = 2000; // Animation duration in milliseconds
      const increment = (endValue) => endValue / (duration / 100);

      let currentHours = 0;
      let currentExperts = 0;
      let currentReviews = 0;
      let currentCaseStudies = 0;

      countInterval = setInterval(() => {
        currentHours += increment(2700000);
        currentExperts += increment(250);
        currentReviews += increment(1000);
        currentCaseStudies += increment(600);

        if (currentHours >= 2700000) currentHours = 2700000;
        if (currentExperts >= 250) currentExperts = 250;
        if (currentReviews >= 1000) currentReviews = 1000;
        if (currentCaseStudies >= 600) currentCaseStudies = 600;

        setStats({
          hours: Math.floor(currentHours),
          experts: Math.floor(currentExperts),
          reviews: Math.floor(currentReviews),
          caseStudies: Math.floor(currentCaseStudies),
        });

        if (
          currentHours === 2700000 &&
          currentExperts === 250 &&
          currentReviews === 1000 &&
          currentCaseStudies === 600
        ) {
          clearInterval(countInterval);
        }
      }, 100);
    };

    animateNumbers();
    return () => clearInterval(countInterval);
  }, []);

  return (
    <section className="bg-[#50C3C6]  mt-12 py-12 relative">
      <div className="container mx-auto flex flex-col md:flex-row  justify-around items-center">
        {/* Arrow Image Hidden on Small Screens */}
        <div className="absolute left-0 bottom-0 w-1/12 md:w-1/16 hidden md:block">
          <Image
            src={'/A+.svg'}
            alt="Arrow"
            layout="responsive"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Stats Section with Animation */}
        <div className="text-center mb-6 md:mb-0">
          <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white">
            2.7 M
          </h3>
          <p className="font-syne text-white mt-2">Digital Marketing Hours</p>
        </div>

        <div className="text-center mb-6 md:mb-0">
          <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white">
            {stats.experts}+
          </h3>
          <p className="font-syne text-white mt-2">Marketing Experts</p>
        </div>

        <div className="text-center mb-6 md:mb-0">
          <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white">
            {stats.reviews}+
          </h3>
          <p className="font-syne text-white mt-2">4 Stars Up Reviews</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white">
            {stats.caseStudies}+
          </h3>
          <p className="font-syne text-white mt-2">Case Studies</p>
        </div>
      </div>
    </section>
  );
};

export default Databaner;


// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Databaner = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true, // Only trigger the animation once
//     threshold: 0.5, // Trigger when 50% of the section is in view
//   });

//   const stats = [
//     { id: 1, value: 2.7, label: "Digital Marketing Hours", suffix: "M" },
//     { id: 2, value: 250, label: "Marketing Experts", suffix: "+" },
//     { id: 3, value: 1000, label: "4 Stars Up Reviews", suffix: "+" },
//     { id: 4, value: 600, label: "Case Studies", suffix: "+" },
//   ];

//   const numberAnimation = (from, to, duration) => {
//     const [count, setCount] = useState(from);

//     useEffect(() => {
//       if (inView) {
//         let start = null;
//         const step = (timestamp) => {
//           if (!start) start = timestamp;
//           const progress = Math.min((timestamp - start) / duration, 1);
//           setCount(from + progress * (to - from));
//           if (progress < 1) {
//             window.requestAnimationFrame(step);
//           }
//         };
//         window.requestAnimationFrame(step);
//       }
//     }, [inView, from, to, duration]);

//     return count;
//   };

//   const animationVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section className="bg-[#50C3C6] py-16 mt-20">
//       <div
//         ref={ref}
//         className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center"
//       >
//         {stats.map((stat) => {
//           const animatedValue = numberAnimation(0, stat.value, 1500);
//           return (
//             <motion.div
//               key={stat.id}
//               className="text-white"
//               variants={animationVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               transition={{ duration: 0.5, delay: stat.id * 0.2 }}
//             >
//               <div className="text-6xl font-bold">
//                 {Math.floor(animatedValue).toLocaleString()}
//                 {stat.suffix}
//               </div>
//               <p className="text-lg mt-4 font-medium">{stat.label}</p>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Databaner;
