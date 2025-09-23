// "use client";
// import React, { useState } from "react";
// import { FaSearch, FaUsers, FaChartLine } from "react-icons/fa";

// const Benefits = () => {
//   const benefitsData = [
//     {
//       id: "01",
//       title: "Increased Discoverability",
//       description:
//         "Organic strategies optimize your content for visibility, helping your videos reach the right audience by leveraging targeted keywords and SEO techniques.",
//       icon: <FaSearch />,
//     },
//     {
//       id: "02",
//       title: "Enhanced Engagement",
//       description:
//         "Focusing on natural interactions like comments, end screens, and video prompts boosts viewer engagement, creating a loyal subscriber base that grows over time.",
//       icon: <FaUsers />,
//     },
//     {
//       id: "03",
//       title: "Sustainable Growth",
//       description:
//         "With organic methods, your channel builds long-term visibility and credibility, achieving steady growth without the need for paid advertising.",
//       icon: <FaChartLine />,
//     },
//   ];

//   const [activeCard, setActiveCard] = useState(null);

//   const handleWhatsAppClick = () => {
//     const whatsappNumber = "9920892689"; // Replace with your WhatsApp number
//     const message = "Hello, I would like to request a free quote for your services.";
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <section className="py-16 bg-[#FFFFFF]">
//       <div className="text-center px-4 mb-12">
//         <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits</h2>
//         <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
//           YouTube management offers long-term benefits by building authentic audience
//           relationships, increasing visibility without ad costs, and improving channel ranking.
//           Through consistent engagement and SEO, it ensures that your content remains relevant
//           and accessible, growing your channel sustainably and effectively.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-28">
//         {benefitsData.map((benefit) => (
//           <div
//             key={benefit.id}
//             className={`relative h-[350px] md:h-[390px] w-full p-6 rounded-tr-3xl rounded-bl-3xl transition-transform transform cursor-pointer duration-300 shadow-md ${
//               activeCard === benefit.id
//                 ? "bg-[#FFFFFF] border-2 border-[#4534B8] scale-105"
//                 : "bg-[#A2DFE1] border-2 border-transparent"
//             }`}
//             onMouseEnter={() => setActiveCard(benefit.id)}
//             onMouseLeave={() => setActiveCard(null)}
//           >
//             {/* Top-left triangle with ID */}
//             <div className="absolute top-0 left-0">
//               <svg width="80" height="80" className="md:w-100 md:h-100">
//                 <polygon points="0,0 80,0 0,80" style={{ fill: "#4A9BD3" }} />
//                 <text
//                   x="10"
//                   y="35"
//                   fill="white"
//                   fontSize="14"
//                   fontWeight="bold"
//                   className="md:font-semibold md:text-base"
//                 >
//                   {benefit.id}
//                 </text>
//               </svg>
//             </div>

//             {/* Bottom-right triangle with Icon */}
//             <div className="absolute bottom-0 right-0">
//               <svg width="80" height="80" className="md:w-100 md:h-100">
//                 <polygon points="80,80 0,80 80,0" style={{ fill: "#4A9BD3" }} />
//               </svg>
//               <div className="absolute bottom-3 right-3 text-white">
//                 {React.cloneElement(benefit.icon, { className: "text-2xl md:text-3xl" })}
//               </div>
//             </div>

//             {/* Centered Title and Description */}
//             <div className="flex flex-col justify-center items-center h-full text-center">
//               <h3 className="text-base md:text-xl font-bold mb-4 text-gray-900">
//                 {benefit.title}
//               </h3>
//               <p className="text-xs md:text-sm lg:text-base text-gray-700">
//                 {benefit.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-8">
//       <button
//   onClick={() => {
//     handleWhatsAppClick(); // Your existing function

//     // Send event to GA4
//     gtag('event', 'request_free_audit_click', {
//       event_category: 'button',
//       event_label: 'Request a Free Audit Button',
//       value: 1,
//     });
//   }}
//   className="bg-[#FFFFFF] border-[#4A9BD3] border-2 text-[#000000] px-6 py-2 md:px-8 md:py-3 hover:bg-[#4A9BD3] hover:text-white transition-colors duration-300"
// >
//   Request a Free Audit
// </button>

//       </div>
//     </section>
//   );
// };

// export default Benefits;

"use client";
import React, { useState } from "react";
import { FaSearch, FaUsers, FaChartLine } from "react-icons/fa";

const Benefits = () => {
  const benefitsData = [
    {
      id: "01",
      title: "Increased Discoverability",
      description:
        "Organic strategies optimize your content for visibility, helping your videos reach the right audience by leveraging targeted keywords and SEO techniques.",
      icon: <FaSearch />,
    },
    {
      id: "02",
      title: "Enhanced Engagement",
      description:
        "Focusing on natural interactions like comments, end screens, and video prompts boosts viewer engagement, creating a loyal subscriber base that grows over time.",
      icon: <FaUsers />,
    },
    {
      id: "03",
      title: "Sustainable Growth",
      description:
        "With organic methods, your channel builds long-term visibility and credibility, achieving steady growth without the need for paid advertising.",
      icon: <FaChartLine />,
    },
  ];

  const [activeCard, setActiveCard] = useState(null);

  const handleWhatsAppClick = () => {
    const whatsappNumber = "9920892689"; // Replace with your WhatsApp number
    const message =
      "Hello, I would like to request a free quote for your services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-16 bg-[#FFFFFF]">
      {/* Header */}
      <div className="text-center px-4 mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits</h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
          YouTube management offers long-term benefits by building authentic
          audience relationships, increasing visibility without ad costs, and
          improving channel ranking. Through consistent engagement and SEO, it
          ensures that your content remains relevant and accessible, growing
          your channel sustainably and effectively.
        </p>
      </div>

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
        {benefitsData.map((benefit) => (
          <div
            key={benefit.id}
            className={`relative h-[360px] w-full p-6 rounded-tr-3xl rounded-bl-3xl transition-transform transform cursor-pointer duration-300 shadow-md ${
              activeCard === benefit.id
                ? "bg-[#FFFFFF] border-2 border-[#4534B8] scale-105"
                : "bg-[#A2DFE1] border-2 border-transparent"
            }`}
            onMouseEnter={() => setActiveCard(benefit.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Top-left triangle with ID */}
            <div className="absolute top-0 left-0 w-20 h-20">
              <svg className="w-full h-full">
                <polygon points="0,0 80,0 0,80" fill="#4A9BD3" />
                <text
                  x="10"
                  y="30"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                  className="pointer-events-none"
                >
                  {benefit.id}
                </text>
              </svg>
            </div>

            {/* Bottom-right triangle with Icon */}
            <div className="absolute bottom-0 right-0 w-20 h-20">
              <svg className="w-full h-full">
                <polygon points="80,80 0,80 80,0" fill="#4A9BD3" />
              </svg>
              <div className="absolute bottom-3 right-3 text-white text-2xl">
                {React.cloneElement(benefit.icon)}
              </div>
            </div>

            {/* Centered Title & Description */}
            <div className="flex flex-col justify-center items-center h-full text-center px-2">
              <h3 className="text-base md:text-xl font-bold mb-4 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-gray-700">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* WhatsApp Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => {
            handleWhatsAppClick();
            if (typeof gtag === "function") {
              gtag("event", "request_free_audit_click", {
                event_category: "button",
                event_label: "Request a Free Audit Button",
                value: 1,
              });
            }
          }}
          className="bg-[#FFFFFF] border-[#4A9BD3] border-2 text-[#000000] px-6 py-2 md:px-8 md:py-3 hover:bg-[#4A9BD3] hover:text-white transition-colors duration-300 rounded-md font-semibold"
        >
          Request a Free Audit
        </button>
      </div>
    </section>
  );
};

export default Benefits;
