"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-teal-500 to-cyan-600 w-full min-h-[80vh] flex items-center py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 gap-8">
        <div className="text-center lg:text-left lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Professional <span className="text-purple-900">Web Design</span>{" "}
            <br />
            Company
          </h1>
          <p className="text-white mt-6 text-lg sm:text-xl max-w-md">
            Ensuring the best return on investment for your bespoke SEO campaign
            requirements.
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/webdesign1.png"
            alt="Web Design Illustration"
            className="max-w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
