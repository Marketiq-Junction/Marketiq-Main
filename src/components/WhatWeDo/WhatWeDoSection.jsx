// components/WhatWeDoSection.js
import React from "react";

const WhatWeDoSection = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row mt-8 md:mt-0">
      {/* Left Section */}
      <div className="md:w-[60%] w-full h-full px-6 md:px-24 flex justify-center flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0">
        <p className="text-[5vw] md:text-[1.2vw] font-semibold mt-4 md:mt-0">
          WHAT WE DO
        </p>
        <h3 className="text-[7vw] md:text-[2.5vw] font-bold md:w-[60%] leading-tight md:leading-none mt-2">
          Driving a better way of doing marketing
        </h3>
      </div>

      {/* Right Section */}
      <div className="md:w-[40%] w-full h-full flex items-center justify-center px-6 md:px-0 mt-6 md:mt-10 ">
        <span className="text-[4vw] md:text-[1vw] font-semibold text-center md:text-left ">
          We provide smart and affordable digital marketing solutions tailored
          to your business needs. Whether you're looking to improve your
          website, enhance your social media presence, or optimize for search
          engines, we've got you covered.
        </span>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
