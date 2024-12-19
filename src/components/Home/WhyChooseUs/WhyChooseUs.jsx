import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="w-full h-[60%] flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center">
        <div className="w-3/4 md:w-1/2 lg:w-[50%] h-auto lg:h-[50%]">
          <img
            src="/images/rb_2148901520.png"
            className="w-full lg:h-full object-cover"
            alt="Why Choose Us Image"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 h-auto lg:h-full pt-8 lg:pt-[3em]">
        {/* Heading */}
        <div className="w-full h-auto lg:h-[30%] flex flex-col items-center lg:justify-center">
          <div className="w-full h-auto lg:h-[30%] flex items-center px-6 md:px-12 lg:px-24">
            <p className="text-[5vw] md:text-[3.5vw] lg:text-[2vw] text-[#4A9BD3] font-bold">
              Why Choose Us
            </p>
          </div>
          <div className="w-full h-auto lg:h-[70%] flex items-center px-6 md:px-12 lg:px-24">
            <h3 className="text-[6vw] md:text-[4.5vw] lg:text-[2.5vw] leading-none font-bold">
              Increase your client for better position of Business
            </h3>
          </div>
        </div>

        {/* Bullet Points Section */}
        <div className="w-full h-auto lg:h-[70%] mt-8 px-6 md:px-12 lg:px-24">
          <ul className="list-disc list-inside text-[3.5vw] md:text-[2vw] lg:text-[1.2vw] font-medium text-gray-700 space-y-2">
            <li className="text-[#4A9BD3] font-semibold">
              Customized, value-driven digital marketing solutions.
            </li>
            <li className="text-[#4A9BD3] font-semibold">
              Affordable services for businesses of all sizes.
            </li>
            <li className="text-[#4A9BD3] font-semibold">
              Comprehensive approach: web design, SEO, and social media.
            </li>
            <li className="text-[#4A9BD3] font-semibold">
              Measurable results and improved online visibility.
            </li>
            <li className="text-[#4A9BD3] font-semibold">
              Data-driven strategies with monthly performance reports.
            </li>
          </ul>

          {/* Button */}
          <button className="px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-3 bg-[#50C3C6] mt-6 md:mt-8 lg:mt-10 text-[3vw] md:text-[2vw] lg:text-[1vw] font-semibold text-white rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
