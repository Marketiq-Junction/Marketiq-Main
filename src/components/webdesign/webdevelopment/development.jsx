import React, { useState } from "react";

const stepsData = [
  {
    title: "Your Goals",
    description:
      "Defining your goals is the first step in the process. It involves identifying the purpose of your website, your target audience, and the key functionalities required to achieve your objectives.",
    image: "/plan.png",
  },
  {
    title: "Creating A Plan",
    description:
      "Creating a plan is the foundation of an effective web design and development process. It ensures that every stage is aligned with the objectives and maximizes resource efficiency.",
    image: "/plan.png",
  },
  {
    title: "Wireframes & Mockups",
    description:
      "Wireframes and mockups provide a visual representation of the layout and design of your website, helping you understand the structure and flow before actual development begins.",
    image: "/plan.png",
  },
  {
    title: "Web Development",
    description:
      "Web development involves translating the design into a functional website using coding languages and frameworks, ensuring responsiveness and compatibility across devices.",
    image: "/plan.png",
  },
  {
    title: "Quality Assurance",
    description:
      "Quality assurance involves testing the website to identify and fix any bugs or issues, ensuring that it functions smoothly and delivers a seamless user experience.",
    image: "/plan.png",
  },
  {
    title: "Website Launch",
    description:
      "The final step is launching the website, making it live for your audience. This includes final optimizations and ensuring everything runs as expected.",
    image: "/plan.png",
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
          <p className="text-lg text-gray-600">
            The Web Design & Development Process involves a series of structured
            steps to create an effective website, starting from initial planning
            and design to implementation and testing.
          </p>
        </div>

        {/* Steps Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {stepsData.map((step, index) => (
            <button
              key={index}
              className={`bg-blue-100 text-blue-600 font-semibold text-center py-4 px-6 rounded-lg shadow-md w-48 transition-all duration-200 ${
                activeStep.title === step.title ? "bg-blue-600 text-white" : ""
              }`}
              onClick={() => handleStepClick(step)}
            >
              {step.title}
            </button>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
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
