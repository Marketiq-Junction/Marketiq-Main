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
//       hours: 27,
//       experts: 250,
//       reviews: 1000,
//       caseStudies: 600,
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
//     <section className="bg-[#50C3C6] mt-12 py-12 relative">
//       <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
//         {/* Stats Section */}
//         {[
//           { label: "Digital Marketing Hours", value: `${stats.hours}M` },
//           { label: "Marketing Experts", value: `${stats.experts}+` },
//           { label: "4 Stars Up Reviews", value: `${stats.reviews}+` },
//           { label: "Case Studies", value: `${stats.caseStudies}+` },
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
//       <div className="absolute left-0 bottom-0 w-1/6 md:w-1/10 hidden md:block mt-10">
//         <Image
//           src="/images/socialmedia/data.png"
//           alt="Arrow"
//           layout="responsive"
//           width={200}
//           height={100}
//           className="object-contain"
//         />
//       </div>
//     </section>
//   );
// };

// export default Databaner;

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
    const duration = 2000; // animation duration in ms
    const frameTime = 50; // interval between updates (smaller for smoother animation)
    const steps = duration / frameTime;

    const targetStats = {
      hours: 27,
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
    <section className="bg-[#50C3C6] mt-12 py-16 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-8">
        {/* Stats Section */}
        {[
          { label: "Digital Marketing Hours", value: `${stats.hours}M` },
          { label: "Marketing Experts", value: `${stats.experts}+` },
          { label: "4 Stars Up Reviews", value: `${stats.reviews}+` },
          { label: "Case Studies", value: `${stats.caseStudies}+` },
        ].map(({ label, value }, index) => (
          <div key={index} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white">
              {value}
            </h3>
            <p className="font-syne text-white mt-2">{label}</p>
          </div>
        ))}
      </div>

      {/* Decorative Arrow Image */}
      <div className="absolute left-0 bottom-0 w-1/4 md:w-1/10 hidden md:block">
        <Image
          src="/images/socialmedia/data.png"
          alt="Arrow"
          width={200}
          height={100}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Databaner;
