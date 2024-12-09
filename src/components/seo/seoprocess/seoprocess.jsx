import React, { useState } from "react";
import Image from "next/image";

const SEOProcess = () => {
  // Data for the steps
  const steps = [
    {
      id: 1,
      title: "Content Creation",
      description:
        "Content creation involves crafting high-quality, engaging, and relevant content tailored to your target audience. This includes blogs, articles, videos, and infographics designed to attract, inform, and convert visitors into customers.",
      image: "/seomarketing.png", // Replace with actual image path
    },
    {
      id: 2,
      title: "Competitive Analysis",
      description:
        "A competitive analysis is essential for understanding your market landscape. It involves identifying direct and indirect competitors, evaluating their strengths and weaknesses, and analyzing their marketing strategies. By assessing customer feedback and benchmarking performance metrics, you can gain valuable insights into areas for improvement.",
      image: "/seomarketing.png", // Replace with actual image path
    },
    {
      id: 3,
      title: "Keyword Research",
      description:
        "Keyword research identifies high-value, relevant keywords that your audience is searching for. This ensures your content aligns with user intent, driving organic traffic and improving search engine rankings.",
      image: "/seomarketing.png", // Replace with actual image path
    },
    {
      id: 4,
      title: "Mapping Optimization",
      description:
        "Mapping optimization involves aligning your website's structure and content with target keywords. It ensures seamless navigation, improved user experience, and better search engine indexing.",
      image: "/seomarketing.png", // Replace with actual image path
    },
  ];

  const [activeStep, setActiveStep] = useState(steps[1]); // Default to Competitive Analysis

  return (
    <section className="bg-white py-12 px-8 md:py-16 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our SEO Process</h2>
        </div>

        {/* Step Selection */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              onClick={() => setActiveStep(step)}
              className={`cursor-pointer p-4 rounded-lg shadow-lg text-center w-48 transition-transform transform hover:scale-105 ${
                activeStep.id === step.id
                  ? "bg-blue-500 text-white"
                  : "bg-blue-100 text-black"
              }`}
            >
              <p className="text-lg font-semibold">{step.title}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section: Image */}
          <div className="lg:w-1/2">
            <Image
              src={activeStep.image}
              alt={activeStep.title}
              width={500}
              height={350}
              className="rounded-lg"
            />
          </div>

          {/* Right Section: Text */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {activeStep.title}
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              {activeStep.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOProcess;
