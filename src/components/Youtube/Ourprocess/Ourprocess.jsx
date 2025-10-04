"use client";
import React from "react";
import { FaCogs, FaLightbulb, FaChartBar } from "react-icons/fa";

const OurProcess = () => {
  const processSteps = [
    {
      title: "Channel Setup and Optimization",
      description:
        "We begin by setting up your YouTube channel with a compelling design, relevant keywords, and optimized descriptions. This includes creating visually appealing banners, thumbnails, and an informative 'About' section to enhance your channel's appeal and discoverability.",
      icon: <FaCogs />,
    },
    {
      title: "Tailored Content Strategy",
      description:
        "Our team collaborates with you to create a tailored content strategy that aligns with your target audience's interests and trending topics. This process involves planning video topics, formats, and a consistent publishing schedule to maximize engagement and growth.",
      icon: <FaLightbulb />,
    },
    {
      title: "Performance Monitoring and Analytics",
      description:
        "We continuously monitor your channel's performance through detailed analytics. Our reporting includes insights on viewer engagement, retention rates, and demographics, allowing us to make informed adjustments to your content strategy for sustained growth and improved ROI.",
      icon: <FaChartBar />,
    },
  ];

  const handleWhatsAppClick = (message) => {
    const whatsappNumber = "9920892689";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-teal-500 to-cyan-600 lg:mb-28">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Our Process
        </h2>

        <div className="relative flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center text-center px-4"
            >
              {/* Arrow Between Steps */}
              {index > 0 && (
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2">
                  <img
                    src="/images/youtube/arrow.png"
                    alt="Arrow"
                    className="h-6 md:h-8"
                  />
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center items-center w-16 h-16 bg-[#A2DFE1] rounded-sm mb-6 shadow-md hover:shadow-cyan-400/40 transition-shadow">
                {React.cloneElement(step.icon, {
                  className: "text-2xl text-teal-600",
                })}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white">{step.description}</p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default OurProcess;
