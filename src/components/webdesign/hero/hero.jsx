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
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              placeholder="Enter Your Website"
              className="px-4 py-3 rounded-lg w-full sm:w-72 border-2 border-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition duration-300">
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
