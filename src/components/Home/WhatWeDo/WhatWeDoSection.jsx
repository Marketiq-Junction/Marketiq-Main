// // components/WhatWeDoSection.js
// import React from "react";

// const WhatWeDoSection = () => {
//   return (
//     <div className="w-full h-auto flex flex-col md:flex-row mt-8 md:mt-0">
//       {/* Left Section */}
//       <div className="md:w-[60%] w-full h-full px-6 md:px-24 flex justify-center flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
//         <p className="text-[5vw] md:text-[1.2vw] font-semibold mt-4 md:mt-0">
//           WHAT WE DO
//         </p>
//         <h3 className="text-[7vw] md:text-[2.5vw] font-bold md:w-[60%] leading-tight md:leading-none mt-2">
//           Driving a better way of doing marketing
//         </h3>
//       </div>

//       {/* Right Section */}
//       <div className="md:w-[40%] w-full h-full flex items-center justify-center px-6 md:px-0 mt-6 md:mt-10 ">
//         <span className="text-[4vw] md:text-[1vw] font-semibold text-center md:text-left ">
//           We provide smart and affordable digital marketing solutions tailored
//           to your business needs. Whether you're looking to improve your
//           website, enhance your social media presence, or optimize for search
//           engines, we've got you covered.
//         </span>
//       </div>
//     </div>
//   );
// };

// export default WhatWeDoSection;

// components/WhatWeDoSection.js
"use client";
import React from "react";
import { motion } from "framer-motion";

const WhatWeDoSection = () => {
  return (
    <section className="w-full h-auto flex flex-col md:flex-row mt-12 md:mt-16 px-6 md:px-16 lg:px-24">
      {/* Left Section */}
      <motion.div
        className="md:w-[60%] w-full flex flex-col justify-center items-center md:items-start text-center md:text-left mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 text-[clamp(14px,3vw,18px)] font-semibold tracking-wider mb-2">
          WHAT WE DO
        </p>
        <h3 className="font-extrabold text-[clamp(22px,5vw,36px)] leading-snug md:leading-tight md:w-[70%] bg-gradient-to-r from-[#3F85B5] to-[#50C3C6] bg-clip-text text-transparent">
          Driving a better way of doing marketing
        </h3>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="md:w-[40%] w-full flex items-center justify-center md:justify-start"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-700 text-[clamp(14px,3.5vw,18px)] leading-relaxed text-center md:text-left">
          We provide smart and affordable digital marketing solutions tailored
          to your business needs. Whether you're looking to improve your
          website, enhance your social media presence, or optimize for search
          engines, we've got you covered.
        </p>
      </motion.div>
    </section>
  );
};

export default WhatWeDoSection;
