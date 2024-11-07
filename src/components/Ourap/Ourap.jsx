'use client';
import React, { useState, useEffect } from 'react';

function Ourap() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1); // Fading effect on load
  }, []);

  return (
    <div className="transition-opacity duration-700" style={{ opacity }}>
      {/* Approach Section */}
      <section className="max-w-screen-lg mx-auto my-10 p-8 text-center bg-white border border-gray-300 shadow-lg rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Approach</h3>
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Boosts Your Business With Decent Guidance and Passion
        </h1>
        <h4 className="text-lg text-blue-500 font-medium mb-6">
          Optimize, Generate, and Grow Effortlessly
        </h4>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          We’re driven by a passion for helping businesses succeed. Our expert team combines strategic optimization, data-driven insights, and creativity to enhance your digital presence. From generating high-quality leads to driving consistent growth, we provide the guidance and dedication needed to elevate your brand. With our personalized approach, we optimize every step of your digital journey, ensuring sustainable progress and measurable results. Let us take your business to new heights with effective solutions designed for long-term success.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
            Explore Our Services
          </button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
            Get A Free Quote
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 flex-wrap">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center w-full md:w-80">
            <img src="/images/icons/optimize-icon.png" alt="Optimize" className="w-12 mx-auto mb-4" />
            <h3 className=" text-lg font-semibold text-gray-800">OPTIMIZE</h3>
            <p className="text-gray-600 mt-2">
              Maximize your online visibility with tailored strategies that enhance your website and content. Our optimization techniques ensure you reach the right audience, driving engagement and conversions effectively.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center w-full md:w-80">
            <img src="/images/icons/generate-icon.png" alt="Generate" className="w-12 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">GENERATE</h3>
            <p className="text-gray-600 mt-2">
              Drive targeted traffic to your business with our innovative lead generation strategies. We focus on creating compelling content and utilizing effective channels to attract and convert potential customers into loyal clients.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center w-full md:w-80">
            <img src="/images/icons/grow-icon.png" alt="Grow" className="w-12 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">GROW</h3>
            <p className="text-gray-600 mt-2">
              Unlock new opportunities for expansion through our data-driven strategies and dedicated support. With Marketiq Junction, you'll experience sustainable growth as we help you navigate the ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ourap;
