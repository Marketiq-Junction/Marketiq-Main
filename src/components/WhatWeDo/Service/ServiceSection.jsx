// components/ServiceSection.js
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceSection = ({ services, serviceContent, activeIndex, setActiveIndex }) => {
  return (
    <div className="w-full h-[80%] px-24 md:flex hidden items-center">
      <div className="w-full h-[80%] bg-[#50C3C6] rounded-3xl flex overflow-hidden">
        <div className="w-[25%] pt-5 h-full bg-[#50C3C6] gap-3 flex flex-col items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-[90%] h-[14%] rounded-full flex items-center justify-between px-10 cursor-pointer transition-all duration-500 ease-in-out group ${
                activeIndex === index
                  ? "bg-white text-black" // Active item styling
                  : "text-black hover:bg-white hover:text-black" // Hover styling for other items
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h1 className="text-[1.2vw] leading-none font-semibold">
                {service}
              </h1>
              {/* Show the right arrow icon only for the active item or on hover */}
              {activeIndex === index || (
                <div className="hidden group-hover:flex w-10 h-8 bg-[#50C3C6] rounded-full items-center justify-center">
                  <FaArrowRight />
                </div>
              )}
              {activeIndex === index && (
                <div className="w-12 h-8 bg-[#50C3C6] rounded-full flex items-center justify-center">
                  <FaArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right content area that changes based on active service */}
        <div className="w-[75%] h-full flex items-center justify-center px-10 bg-[#4A9BD3] rounded-l-3xl">
          <span className="text-[1.5vw] text-white">
            {serviceContent[activeIndex]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
