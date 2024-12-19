import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stepsData = [
  {
    title: "Your Goals",
    description: [
      "Identify the purpose of your website.",
      "Determine your target audience.",
      "Define the key functionalities required to achieve your objectives.",
    ],
    image: "/plan.png",
  },
  {
    title: "Creating A Plan",
    description: [
      "Outline an effective web design and development process.",
      "Align every stage with your objectives.",
      "Maximize resource efficiency.",
    ],
    image: "/plan.png",
  },
  {
    title: "Wireframes & Mockups",
    description: [
      "Create visual representations of the website layout.",
      "Understand the structure and flow of the site.",
      "Prepare for actual development with a clear blueprint.",
    ],
    image: "/plan.png",
  },
  {
    title: "Web Development",
    description: [
      "Translate design into a functional website.",
      "Use coding languages and frameworks.",
      "Ensure responsiveness and compatibility across devices.",
    ],
    image: "/plan.png",
  },
  {
    title: "Quality Assurance",
    description: [
      "Test the website for bugs and issues.",
      "Ensure smooth functionality.",
      "Deliver a seamless user experience.",
    ],
    image: "/plan.png",
  },
  {
    title: "Website Launch",
    description: [
      "Finalize optimizations.",
      "Make the website live for your audience.",
      "Ensure everything runs as expected.",
    ],
    image: "/plan.png",
  },
];

const Development = () => {
  const [activeStep, setActiveStep] = useState(stepsData[0]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <section ref={ref} className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Title and Description */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-black mb-4">
            Web Design & Development Process
          </h1>
          <p className="text-lg text-black">
            The Web Design & Development Process involves a series of structured
            steps to create an effective website, starting from initial planning
            and design to implementation and testing.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {stepsData.map((step, index) => (
            <motion.button
              key={index}
              className={`font-semibold text-center py-4 px-6 rounded-lg shadow-md w-48 transition-all duration-200 ${
                activeStep.title === step.title
                  ? "bg-[#4A9BD3] text-white"
                  : "bg-[#A2DFE1] text-black"
              }`}
              onClick={() => handleStepClick(step)}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {step.title}
            </motion.button>
          ))}
        </div>

        {/* Active Step Content */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
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
            <h2 className="text-3xl font-bold text-black mb-4">
              {activeStep.title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-black">
              {activeStep.description.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Development;
