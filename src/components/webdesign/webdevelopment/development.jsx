import React, { useState } from "react";
import {
  FaBullseye,
  FaClipboardList,
  FaPencilRuler,
  FaCode,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";

const stepsData = [
  {
    title: "Your Goals",
    description:
      "Defining your goals is the first step in the process. It involves identifying the purpose of your website, your target audience, and the key functionalities required to achieve your objectives.",
    image: "/goals.png",
    icon: <FaBullseye />,
  },
  {
    title: "Creating A Plan",
    description:
      "Creating a plan is the foundation of an effective web design and development process. It ensures that every stage is aligned with the objectives and maximizes resource efficiency.",
    image: "/creating.png",
    icon: <FaClipboardList />,
  },
  {
    title: "Wireframes",
    description:
      "Wireframes and mockups provide a visual representation of the layout and design of your website, helping you understand the structure and flow before actual development begins.",
    image: "/wireframes.png",
    icon: <FaPencilRuler />,
  },
  {
    title: "Web Development",
    description:
      "Web development involves translating the design into a functional website using coding languages and frameworks, ensuring responsiveness and compatibility across devices.",
    image: "/webdevelopment.png",
    icon: <FaCode />,
  },
  {
    title: "Quality Assurance",
    description:
      "Quality assurance involves testing the website to identify and fix any bugs or issues, ensuring that it functions smoothly and delivers a seamless user experience.",
    image: "/quality.png",
    icon: <FaCheckCircle />,
  },
  {
    title: "Website Launch",
    description:
      "The final step is launching the website, making it live for your audience. This includes final optimizations and ensuring everything runs as expected.",
    image: "/website.png",
    icon: <FaRocket />,
  },
];

const Development = () => {
  const [activeStep, setActiveStep] = useState(stepsData[0]);

  const handleStepClick = (step) => {
    setActiveStep(step);
    if (typeof window !== "undefined" && typeof gtag === "function") {
      gtag("event", "button_click", {
        event_category: "User Interaction",
        event_label: `Step Clicked: ${step.title}`,
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
            Web Design & Development Process
          </h1>
        </div>

        {/* Steps Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-items-center mb-12">
          {stepsData.map((step, index) => (
            <div key={index} className="relative w-full flex justify-center">
              <button
                onClick={() => handleStepClick(step)}
                className={`flex flex-col items-center font-semibold text-center py-6 px-3 sm:px-4 rounded-lg shadow-md w-28 sm:w-36 md:w-44 transition-all duration-200 ${
                  activeStep.title === step.title
                    ? "bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg shadow-cyan-400/40"
                    : "bg-white text-gray-700 hover:bg-cyan-200"
                }`}
              >
                <div className="text-3xl mb-2">{step.icon}</div>
                <span className="text-sm sm:text-base">{step.title}</span>
              </button>

              {activeStep.title === step.title && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-cyan-500 hidden md:block"></div>
              )}
            </div>
          ))}
        </div>

        {/* Active Step Content */}
        <div className="flex flex-col md:flex-row items-center gap-8 border-2 border-teal-500 p-6 rounded-lg bg-white shadow-xl hover:shadow-2xl hover:shadow-cyan-400/40 transition-all">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img
              src={activeStep.image}
              alt={activeStep.title}
              className="w-full max-w-md rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent mb-4">
              {activeStep.title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl">
              {activeStep.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
