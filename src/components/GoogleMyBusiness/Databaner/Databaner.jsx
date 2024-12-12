"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const Databaner = () => {
  const [stats, setStats] = useState({
    hours: 0,
    experts: 0,
    reviews: 0,
    caseStudies: 0,
  });

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const frameTime = 100; // Interval between updates
    const steps = duration / frameTime;

    const targetStats = {
      hours: 2700000,
      experts: 250,
      reviews: 1000,
      caseStudies: 600,
    };

    const increments = Object.fromEntries(
      Object.entries(targetStats).map(([key, value]) => [key, value / steps])
    );

    let currentStats = { ...stats };
    const interval = setInterval(() => {
      currentStats = Object.fromEntries(
        Object.entries(currentStats).map(([key, value]) => [
          key,
          Math.min(value + increments[key], targetStats[key]),
        ])
      );

      setStats({
        hours: Math.floor(currentStats.hours),
        experts: Math.floor(currentStats.experts),
        reviews: Math.floor(currentStats.reviews),
        caseStudies: Math.floor(currentStats.caseStudies),
      });

      if (
        Object.keys(currentStats).every(
          (key) => currentStats[key] >= targetStats[key]
        )
      ) {
        clearInterval(interval);
      }
    }, frameTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#50C3C6] mt-12 py-12 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        {/* Stats Section */}
        {[
          { label: "Experience Year", value: "25" },
          { label: "Successful Projects", value: `${stats.experts}+` },
          { label: "Happy Customers", value: `${stats.reviews}+` },
          { label: "Team Members", value: `${stats.caseStudies}+` },
        ].map(({ label, value }, index) => (
          <div key={index} className="text-center mb-6 md:mb-0">
            <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white">
              {value}
            </h3>
            <p className="font-syne text-white mt-2">{label}</p>
          </div>
        ))}
      </div>
      {/* Arrow Image */}
      <div className="absolute left-0 bottom-0 w-1/6 md:w-1/10 hidden md:block mt-10">
        <Image
          src="/images/socialmedia/data.png"
          alt="Arrow"
          layout="responsive"
          width={200}
          height={100}
          className="object-contain"
        />
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
