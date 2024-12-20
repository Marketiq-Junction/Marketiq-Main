import React, { useState } from "react";

const stepsData = [
  {
    title: "Your Goals",
    description:
      "Defining your goals is the first step in the process. It involves identifying the purpose of your website, your target audience, and the key functionalities required to achieve your objectives.",
    image: "/goals.png",
    icon: "🎯",
  },
  {
    title: "Creating A Plan",
    description:
      "Creating a plan is the foundation of an effective web design and development process. It ensures that every stage is aligned with the objectives and maximizes resource efficiency.",
    image: "/creating.png",
    icon: "📝",
  },
  {
    title: "Wireframes",
    description:
      "Wireframes and mockups provide a visual representation of the layout and design of your website, helping you understand the structure and flow before actual development begins.",
    image: "/wireframes.png",
    icon: "📐",
  },
  {
    title: "Web Development",
    description:
      "Web development involves translating the design into a functional website using coding languages and frameworks, ensuring responsiveness and compatibility across devices.",
    image: "/webdevelopment.png",
    icon: "💻",
  },
  {
    title: "Quality Assurance",
    description:
      "Quality assurance involves testing the website to identify and fix any bugs or issues, ensuring that it functions smoothly and delivers a seamless user experience.",
    image: "/quality.png",
    icon: "✅",
  },
  {
    title: "Website Launch",
    description:
      "The final step is launching the website, making it live for your audience. This includes final optimizations and ensuring everything runs as expected.",
    image: "/website.png",
    icon: "🚀",
  },
];

const Development = () => {
  const [activeStep, setActiveStep] = useState(stepsData[0]); // Default to the first step

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Web Design & Development Process
          </h1>
          {/* <p className="text-lg text-gray-600">
            The Web Design & Development Process involves a series of structured
            steps to create an effective website, starting from initial planning
            and design to implementation and testing.
          </p> */}
        </div>

        {/* Steps Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 relative">
          {stepsData.map((step, index) => (
            <div key={index} className="relative">
              <button
                className={`bg-[#A2DFE1] text-black font-semibold text-center py-8 px-6 rounded-lg shadow-md w-48 transition-all duration-200 ${
                  activeStep.title === step.title ? "bg-blue-300 text-black" : ""
                }`}
                onClick={() => handleStepClick(step)}
              >
                <div className="text-2xl mb-2">{step.icon}</div>
                {step.title}
              </button>
              {activeStep.title === step.title && (
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 top-full w-[10%] h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#4A9BD3] hidden md:block"
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 border-2 border-black">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={activeStep.image}
              alt={activeStep.title}
              className="w-[70%] rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2">
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

export default Development;
