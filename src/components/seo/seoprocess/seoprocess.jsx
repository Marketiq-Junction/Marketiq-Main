import React, { useState } from "react";
import Image from "next/image";

const SEOProcess = () => {
  // Data for the steps
  const steps = [
    {
      id: 1,
      title: "Content Creation",
      description:
        "Craft high-quality, engaging content tailored to your audience, including blogs, articles, videos, and infographics.",
      image: "/content.png",
      icon: "✍️",
    },
    {
      id: 2,
      title: "Competitive Analysis",
      description:
        "Identify competitors, evaluate their strengths and weaknesses, and gain insights to improve your strategy.",
      image: "/competitive.png",
      icon: "📊",
    },
    {
      id: 3,
      title: "Keyword Research",
      description:
        "Discover high-value keywords to align content with user intent, driving organic traffic and improving rankings.",
      image: "/keyword.png",
      icon: "🔍",
    },
    {
      id: 4,
      title: " Optimization",
      description:
        "Optimize your website's structure for seamless navigation, improved user experience, and better indexing.",
      image: "/optimization.png",
      icon: "📍",
    },
  ];

  const [activeStep, setActiveStep] = useState(steps[0]); // Default to the first step

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <section className="bg-gray-50 py-16 shadow-lg mb-4">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Our SEO Process
          </h1>
        </div>

        {/* Steps Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 relative">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              <button
                className={`bg-[#A2DFE1] text-black font-semibold text-center py-6 px-4 rounded-lg shadow-md w-48 transition-all duration-200 ${
                  activeStep.id === step.id ? "bg-blue-300 text-black" : ""
                }`}
                onClick={() => handleStepClick(step)}
              >
                <div className="text-2xl mb-2">{step.icon}</div>
                {step.title}
              </button>
              {activeStep.id === step.id && (
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-blue-300 hidden md:block"
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              src={activeStep.image}
              alt={activeStep.title}
              width={400}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {activeStep.title}
            </h2>
            <p className="text-lg text-gray-600">{activeStep.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOProcess;
