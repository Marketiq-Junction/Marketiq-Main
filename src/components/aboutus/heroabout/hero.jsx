import React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TargetIcon from '@mui/icons-material/Adjust';

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

      {/* Icons Section */}
      <div className="absolute left-4 bottom-0 sm:left-8 md:left-12 lg:left-16 animate-pulse">
        <RocketLaunchIcon
          style={{
            fontSize: '60px', // Default size
          }}
          className="sm:!text-[100px] md:!text-[120px] lg:!text-[100px]" // Responsive font sizes
        />
      </div>
      <div className="absolute right-4 bottom-0 sm:right-8 md:right-12 lg:right-16 animate-pulse">
        <TargetIcon
          style={{
            fontSize: '60px', // Default size
          }}
          className="sm:!text-[100px] md:!text-[120px] lg:!text-[100px]" // Responsive font sizes
        />
      </div>
    </div>
  );
};

export default Hero;
