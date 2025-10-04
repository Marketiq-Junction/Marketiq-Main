import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white pt-24 pb-16 relative overflow-hidden">
      {/* Content Section */}
      <div className="text-center px-4 sm:px-8 md:px-12 lg:px-16 mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-8">
          About Us
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
          We specialize in creating tailored solutions that help brands grow in
          the fast-paced digital world.
        </p>
      </div>

      {/* Left Image Section */}
      <div className="hidden sm:block absolute left-4 bottom-0 sm:left-8 md:left-12 lg:left-16">
        <img
          src="/abouthero1.png" // Replace with your left image path
          alt="Rocket"
          className="w-[80px] sm:w-[120px] md:w-[150px] lg:w-[200px]"
        />
      </div>

      {/* Right Image Section */}
      <div className="hidden sm:block absolute right-4 bottom-0 sm:right-8 md:right-12 lg:right-16">
        <img
          src="/abouthero2.png" // Replace with your right image path
          alt="Target"
          className="w-[80px] sm:w-[120px] md:w-[150px] lg:w-[200px]"
        />
      </div>
    </div>
  );
};

export default Hero;
