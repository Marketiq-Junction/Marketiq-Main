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

    let currentStats = { hours: 0, experts: 0, reviews: 0, caseStudies: 0 };
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
    <section className="bg-gradient-to-r from-teal-500 to-cyan-600 mt-12 py-12 pb-20 sm:pb-24 md:pb-12 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-6 px-4 sm:px-6 lg:px-8 relative z-10">
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

 
    </section>
  );
};

export default Databaner;
