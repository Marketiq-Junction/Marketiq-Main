"use client";

import React from "react";

const Clienthero = () => {
  const data = [
    {
      category: "After Social Media Strategy Implementation",
      metrics: [
        { label: "Impressions", value: 97 },
        { label: "Engagement", value: 100 },
      ],
    },
    {
      category: "After Taking Over Content Development",
      metrics: [{ label: "Click Through Rate", value: 100 }],
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6">
        {/* Left Image Section */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img
            src="/images/socialmedia/four.png" // Replace with your image path
            alt="Analytics Visualization"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="text-4xl font-bold text-black mb-4">
            We make the Client the hero of our story.
          </h2>
          <p className="text-gray-600 mb-6">
            Facilisis. Consequat. Litora. Pede eleifend lacus. Massa risus turpis ultrices urna 
            vulputate non non nisl amet commodo. Sollicitudin. Leo mi curabitur euismod orci. 
            Ridiculus sem. Torquent. Ornare euismod, per nullam, ligula morbi natoque nibh 
            faucibus vitae sapien.
          </p>

          {data.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                {section.category}
              </h3>
              {section.metrics.map((metric, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-blue-600 font-semibold">
                      {metric.label}
                    </span>
                    <span className="text-blue-600 font-semibold">
                      {metric.value}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-500 h-3 rounded-full"
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 mt-1 block">
                    Average Client Increase
                  </span>
                </div>
              ))}
            </div>
          ))}

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition">
              Discover More
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition">
              Book A Meeting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clienthero;
