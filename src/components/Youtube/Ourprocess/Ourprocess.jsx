// "use client";
// import React from "react";
// import { FaCogs, FaLightbulb, FaChartBar } from "react-icons/fa";

// const Ourprocess = () => {
//   const processSteps = [
//     {
//       title: "Channel Setup and Optimization",
//       description:
//         "We begin by setting up <br /> your YouTube channel with <br /> a compelling design, <br /> relevant keywords, and <br /> optimized descriptions. This <br /> includes creating visually <br /> appealing banners, <br /> thumbnails, and an <br /> informative 'About' section <br /> to enhance your channel’s <br /> appeal and discoverability.",
//       icon: <FaCogs />,
//     },
//     {
//       title: "Tailored Content Strategy",
//       description:
//         "Our team collaborates with <br /> you to create a tailored <br /> content strategy that aligns <br /> with your target audience's <br /> interests and trending <br /> topics. This process involves <br /> planning video topics, <br /> formats, and a consistent <br /> publishing schedule to <br /> maximize engagement and <br /> growth.",
//       icon: <FaLightbulb />,
//     },
//     {
//       title: "Performance Monitoring and Analytics",
//       description:
//         "We continuously monitor <br /> your channel’s performance <br /> through detailed analytics. <br /> Our reporting includes <br /> insights on viewer <br /> engagement, retention <br /> rates, and demographics, <br /> allowing us to make <br /> informed adjustments to <br /> your content strategy for <br /> sustained growth and <br /> improved ROI.",
//       icon: <FaChartBar />,
//     },
//   ];

//   const handleWhatsAppClick = (message) => {
//     const whatsappNumber = "9920892689"; // Replace with your WhatsApp number
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <section className="py-16 bg-[#4A9BD3] lg:mb-28">
//       <div className="container mx-auto px-4 md:px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
//           Our Process
//         </h2>

//         {/* Steps Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative space-y-8 md:space-y-0">
//           {processSteps.map((step, index) => (
//             <div
//               key={index}
//               className="flex-1 flex flex-col items-center text-center px-4 mb-8 md:mb-0"
//             >
//               {/* Arrow Image Between Steps */}
//               {index > 0 && (
//                 <div
//                   className="absolute hidden md:flex justify-start"
//                   style={{
//                     left: `${index * 33.33}%`,
//                     top: "10%",
//                     transform: "translateX(-50%)",
//                   }}
//                 >
//                   <img
//                     src="/images/youtube/arrow.png" // Replace with correct arrow image path
//                     alt="Arrow"
//                     className="h-6 md:h-8"
//                   />
//                 </div>
//               )}

//               {/* Icon */}
//               <div className="flex justify-center items-center w-16 h-16 bg-[#A2DFE1] rounded-sm mb-6 shadow-md">
//                 {React.cloneElement(step.icon, {
//                   className: "text-2xl text-[#4A9BD3]",
//                 })}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-bold text-white mb-4">
//                 {step.title}
//               </h3>

//               {/* Step Details */}
//               <div className="text-center">
//                 <p
//                   className="text-sm text-white"
//                   dangerouslySetInnerHTML={{ __html: step.description }}
//                 ></p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row justify-center mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
//       <button
//   onClick={() => {
//     handleWhatsAppClick("Hello, I would like to contact you for more information.");

//     // Send event to GA4
//     gtag('event', 'speak_with_us_click', {
//       event_category: 'button',
//       event_label: 'Speak With Us Button',
//       value: 1,
//     });
//   }}
//   className="bg-[#FFFFFF] text-[#4A9BD3] px-6 py-3 font-bold border-2 border-[#FFFFFF] hover:bg-[#4A9BD3] hover:text-white transition"
// >
//   Speak With Us
// </button>

//         {/* <button
//           onClick={() => handleWhatsAppClick("Hello, I would like to get a quote for your services.")}
//           className="bg-[#FFFFFF] text-[#4A9BD3] px-6 py-3 font-bold rounded-md border-2 border-[#FFFFFF] hover:bg-[#4A9BD3] hover:text-white transition"
//         >
//           Get A Quote
//         </button> */}
//       </div>
//     </section>
//   );
// };

// export default Ourprocess;


"use client";
import React from "react";
import { FaCogs, FaLightbulb, FaChartBar } from "react-icons/fa";

const OurProcess = () => {
  const processSteps = [
    {
      title: "Channel Setup and Optimization",
      description:
        "We begin by setting up your YouTube channel with a compelling design, relevant keywords, and optimized descriptions. This includes creating visually appealing banners, thumbnails, and an informative 'About' section to enhance your channel’s appeal and discoverability.",
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
        "We continuously monitor your channel’s performance through detailed analytics. Our reporting includes insights on viewer engagement, retention rates, and demographics, allowing us to make informed adjustments to your content strategy for sustained growth and improved ROI.",
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
    <section className="py-16 bg-[#4A9BD3] lg:mb-28">
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
              <div className="flex justify-center items-center w-16 h-16 bg-[#A2DFE1] rounded-sm mb-6 shadow-md">
                {React.cloneElement(step.icon, {
                  className: "text-2xl text-[#4A9BD3]",
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

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => {
              handleWhatsAppClick(
                "Hello, I would like to contact you for more information."
              );

              if (typeof gtag === "function") {
                gtag("event", "speak_with_us_click", {
                  event_category: "button",
                  event_label: "Speak With Us Button",
                  value: 1,
                });
              }
            }}
            className="bg-white text-[#4A9BD3] px-6 py-3 font-bold border-2 border-white hover:bg-[#4A9BD3] hover:text-white transition rounded-md"
          >
            Speak With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
