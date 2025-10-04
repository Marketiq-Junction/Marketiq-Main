"use client";

import React from "react";

const Results = () => {
  const resultsData = [
    {
      value: "+40%",
      label: "Increase in Website Traffic",
      color: "from-teal-400 to-cyan-500",
    },
    {
      value: "+55%",
      label: "Boost in Social Media Engagement",
      color: "from-teal-500 to-cyan-600",
    },
    {
      value: "+30%",
      label: "Improved SEO Rankings",
      color: "from-teal-400 to-cyan-500",
    },
    {
      value: "+25%",
      label: "Increased Conversion Rate",
      color: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:py-20 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Our Recent Results
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
          We take pride in our recent achievements, showcasing significant
          growth for our clients. Our strategies have led to an average increase
          of 40% in website traffic and a remarkable boost in social media
          engagement. These results demonstrate our commitment to delivering
          effective digital marketing solutions tailored to your business needs.
        </p>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultsData.map((item, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-r ${item.color} text-white h-64 rounded-lg shadow-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300`}
            >
              <h3 className="text-2xl font-bold mb-2">{item.value}</h3>
              <p className="text-base text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
