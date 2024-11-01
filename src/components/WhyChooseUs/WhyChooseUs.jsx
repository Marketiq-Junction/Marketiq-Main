import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="whychoose us w-full h-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center">
        <div className="w-3/4 md:w-1/2 lg:w-[50%] h-auto lg:h-[50%]">
          <img
            src="/images/rb_2148901520.png"
            className="w-full h-auto lg:h-full object-cover"
            alt="Why Choose Us Image"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-auto lg:h-full pt-8 lg:pt-[3em]">
        <div className="w-full h-auto lg:h-[30%] flex flex-col items-center lg:justify-center">
          <div className="w-full h-auto lg:h-[30%] flex items-center px-6 md:px-12 lg:px-24">
            <p className="text-[5vw] md:text-[3.5vw] lg:text-[2vw] text-[#4A9BD3]">
              Why Choose Us
            </p>
          </div>
          <div className="w-full h-auto lg:h[70%] flex items-center px-6 md:px-12 lg:px-24">
            <h3 className="text-[6vw] md:text-[4.5vw] lg:text-[2.5vw] leading-none font-bold">
              Increase your client for better position of Business
            </h3>
          </div>
        </div>
        <div className="w-full h-auto lg:h-[70%]">
          <div className="w-full h-auto lg:h-[60%] px-6 md:px-12 lg:px-24">
            <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.2vw] font-medium">
              We offer customized, value-driven digital marketing solutions at
              an affordable price, ensuring that businesses of all sizes can
              thrive online. Our holistic approach, from web design to SEO and
              social media management, guarantees measurable results while
              keeping your budget in check. With our data-driven strategies and
              monthly performance reports, you'll always stay ahead of the
              competition!
            </p>
            <button className="px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-3 bg-[#50C3C6] mt-4 md:mt-6 lg:mt-8 text-[3vw] md:text-[2vw] lg:text-[1vw] font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
