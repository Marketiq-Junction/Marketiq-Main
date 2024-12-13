import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-400 text-white py-16 relative">
      {/* Content Section */}
      <div className="text-center px-4 mb-12">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          About Us
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
          We specialize in creating tailored solutions that help brands grow in
          the fast-paced digital world.
        </p>
      </div>

      {/* Left Image Section */}
      <div className="absolute left-4 bottom-0 sm:left-8 md:left-12 lg:left-16">
        <img
          src="/abouthero1.png" // Replace with your left image path
          alt="Rocket"
          className="w-[60px] sm:w-[100px] md:w-[120px] lg:w-[100px]"
        />
      </div>

      {/* Right Image Section */}
      <div className="absolute right-4 bottom-0 sm:right-8 md:right-12 lg:right-16">
        <img
          src="/abouthero2.png" // Replace with your right image path
          alt="Target"
          className="w-[60px] sm:w-[100px] md:w-[120px] lg:w-[100px]"
        />
      </div>
    </div>
  );
};

export default Hero;
