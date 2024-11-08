

'use client';
import React, { useState, useEffect } from 'react';
import CardSection from './CardSection';

function Approachsection() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1); 
  }, []);

  return (
    <div className="transition-opacity duration-700" style={{ opacity }}>
      <section className="max-w-screen-lg mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Approach</h3>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Boosts Your Business With Decent Guidance and Passion
        </h1>
        <h4 className="text-lg text-blue-500 font-medium mb-6">
          Optimize, Generate, and Grow Effortlessly
        </h4>
        <p className="text-gray-600 max-w-2xl mb-8 leading-relaxed">
          We’re driven by a passion for helping businesses succeed. Our expert team combines strategic optimization, data-driven insights, and creativity to enhance your digital presence. From generating high-quality leads to driving consistent growth, we provide the guidance and dedication needed to elevate your brand. With our personalized approach, we optimize every step of your digital journey, ensuring sustainable progress and measurable results. Let us take your business to new heights with effective solutions designed for long-term success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 text-lg">
            Explore Our Services
          </button>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 text-lg">
            Get A Free Quote
          </button>
        </div>
      </section>

      <CardSection />
    </div>
  );
}

export default Approachsection;
