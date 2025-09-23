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
//       experts: 300,
//       reviews: 350,
//       caseStudies: 10,
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
//       <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-6 px-4 sm:px-6 lg:px-8">
//         {/* Stats Section */}
//         {[
//           { label: "Experience in Social Media Management", value: "2+ Years" },
//           { label: "Successful Marketing Campaigns", value: `${stats.experts}+` },
//           { label: "Satisfied Clients Globally", value: `${stats.reviews}+` },
//           { label: "Team Members and Growing", value: `${stats.caseStudies}+` },
//         ].map(({ label, value }, index) => (
//           <div
//             key={index}
//             className="text-center mb-6 md:mb-0 flex-1 min-w-[150px]"
//           >
//             <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat text-white">
//               {value}
//             </h3>
//             <p className="font-syne text-white mt-2 text-sm sm:text-base">
//               {label}
//             </p>
//           </div>
//         ))}
//       </div>
//       {/* Arrow Image */}
//       <div className="absolute left-0 bottom-0 w-1/4 sm:w-1/6 md:w-1/10 hidden sm:block mt-10">
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
    const duration = 2000; // Animation duration in milliseconds
    const frameTime = 100; // Interval between updates
    const steps = duration / frameTime;

    const targetStats = {
      hours: 2700000,
      experts: 300,
      reviews: 350,
      caseStudies: 10,
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
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-6 px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        {[
          { label: "Experience in Social Media Management", value: "2+ Years" },
          {
            label: "Successful Marketing Campaigns",
            value: `${stats.experts}+`,
          },
          { label: "Satisfied Clients Globally", value: `${stats.reviews}+` },
          { label: "Team Members and Growing", value: `${stats.caseStudies}+` },
        ].map(({ label, value }, index) => (
          <div
            key={index}
            className="text-center mb-6 md:mb-0 flex-1 min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat text-white">
              {value}
            </h3>
            <p className="font-syne text-white mt-2 text-xs sm:text-sm md:text-base lg:text-lg">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Arrow Image */}
      <div className="absolute left-0 bottom-0 w-1/3 sm:w-1/6 md:w-1/5 lg:w-1/6 xl:w-1/12 hidden sm:block mt-10">
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
