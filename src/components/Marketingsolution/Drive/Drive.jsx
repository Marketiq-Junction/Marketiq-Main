"use client";

import React from "react";

const Drive = () => {
  return (
    <section id="social-media" className="bg-white p-12 h-auto text-left">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-black mb-6 leading-tight">
            Drive More Revenue With <br /> Social Media Marketing Services
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-8">
            Drive more revenue with our social media marketing services by leveraging
            targeted campaigns across platforms like Instagram, Facebook, and LinkedIn.
            Our engaging content and strategic advertising not only enhance brand
            awareness but also convert followers into loyal customers. With a focus on
            analytics and optimization, we continuously refine our approach to ensure
            your investment translates into measurable results, helping you maximize
            your return on investment and achieve sustainable growth.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Let us transform your social media presence into a powerful
            revenue-generating tool!
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
            Get In Touch
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="/images/socialmedia/two.png"
            alt="Social Media Marketing Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Drive;
