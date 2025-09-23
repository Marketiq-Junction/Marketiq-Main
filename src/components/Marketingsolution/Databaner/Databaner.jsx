// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// const Databaner = () => {
//   const [stats, setStats] = useState({
//     hours: 0,
//     experts: 0,
//     reviews: 0,
//     caseStudies: 0,
//   });

//   useEffect(() => {
//     const duration = 2000; // Animation duration in milliseconds
//     const frameTime = 100; // Interval between updates
//     const steps = duration / frameTime;

//     const targetStats = {
//       hours: 2700000,
//       experts: 200,
//       reviews: 300,
//       caseStudies: 100,
//     };

//     const increments = Object.fromEntries(
//       Object.entries(targetStats).map(([key, value]) => [key, value / steps])
//     );

//     let currentStats = { ...stats };
//     const interval = setInterval(() => {
//       currentStats = Object.fromEntries(
//         Object.entries(currentStats).map(([key, value]) => [
//           key,
//           Math.min(value + increments[key], targetStats[key]),
//         ])
//       );

//       setStats({
//         hours: Math.floor(currentStats.hours),
//         experts: Math.floor(currentStats.experts),
//         reviews: Math.floor(currentStats.reviews),
//         caseStudies: Math.floor(currentStats.caseStudies),
//       });

//       if (
//         Object.keys(currentStats).every(
//           (key) => currentStats[key] >= targetStats[key]
//         )
//       ) {
//         clearInterval(interval);
//       }
//     }, frameTime);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="bg-[#4A9BD3] mt-12 py-12 relative">
//       <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
//         {/* Stats Section */}
//         {[
//           { label: "Social Media Engagements Handled", value: "2.5 M" },
//           { label: "Social Media Campaigns Managed", value: `${stats.experts}+` },
//           { label: "Brands Assisted in Growth", value: `${stats.reviews}+` },
//           { label: "Case Studies Across Various Industries", value: `${stats.caseStudies}+` },
//         ].map(({ label, value }, index) => (
//           <div key={index} className="text-center mb-6 md:mb-0">
//             <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white">
//               {value}
//             </h3>
//             <p className="font-syne text-white mt-2">{label}</p>
//           </div>
//         ))}
//       </div>
//       {/* Arrow Image */}
//       {/* <div className="absolute left-0 bottom-0 w-1/6 md:w-1/10 hidden md:block mt-10">
//         <Image
//           src="/images/socialmedia/data.png"
//           alt="Arrow"
//           layout="responsive"
//           width={200}
//           height={100}
//           className="object-contain"
//         />
//       </div> */}
//     </section>
//   );
// };

// export default Databaner;

"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Databaner = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [stats, setStats] = useState({
    hours: 0,
    experts: 0,
    reviews: 0,
    caseStudies: 0,
  });

  const targetStats = {
    hours: 2700000,
    experts: 200,
    reviews: 300,
    caseStudies: 100,
  };

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const frameTime = 100;
    const steps = duration / frameTime;

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
  }, [inView]);

  return (
    <section ref={ref} className="bg-[#4A9BD3] mt-12 py-12 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
        {[
          { label: "Social Media Engagements Handled", value: "2.5 M" },
          {
            label: "Social Media Campaigns Managed",
            value: `${stats.experts}+`,
          },
          { label: "Brands Assisted in Growth", value: `${stats.reviews}+` },
          {
            label: "Case Studies Across Various Industries",
            value: `${stats.caseStudies}+`,
          },
        ].map(({ label, value }, index) => (
          <div key={index} className="text-center mb-6 md:mb-0">
            <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white">
              {value}
            </h3>
            <p className="font-syne text-white mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Databaner;
