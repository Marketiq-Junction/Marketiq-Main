import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-blue-400 w-full h-[90%] flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight">
            Professional Web Design <br /> Company
          </h1>
          <p className="text-white mt-4 text-lg">
            Ensuring the best return on investment for your bespoke SEO Campaign requirement.
          </p>
          {/* Input Section */}
          <div
            className="relative w-full md:w-[500px] mt-6"
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input
              type="text"
              placeholder="Enter Your Website"
              className="w-full py-4 px-5 pr-36 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
            >
              Request A Quote
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 lg:mt-0">
          <img
            src="/webdesign1.png" // Replace with your actual image URL
            alt="Web Design Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
