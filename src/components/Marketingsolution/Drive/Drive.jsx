// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const Drive = () => {
//   const bulletPoints = [
//     "Targeted campaigns across Instagram, Facebook, and LinkedIn.",
//     "Engaging content to enhance brand awareness.",
//     "Strategic advertising to convert followers into loyal customers.",
//     "Continuous analytics and optimization for measurable results.",
//     "Maximize return on investment with sustainable growth.",
//   ];

//   const pointVariants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: (index) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: index * 0.2, duration: 0.5 },
//     }),
//   };

//   const handleWhatsAppClick = () => {
//     const whatsappNumber = "9920892689"; // Replace with your WhatsApp number
//     const message =
//       "Hello, I would like to learn more about your social media marketing services.";
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <section id="social-media" className="bg-gray-50 p-12 h-auto shadow-lg">
//       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
//         {/* Left Content */}
//         <div className="flex-1">
//           <h1 className="text-4xl font-bold text-black mb-6 leading-tight text-center lg:text-left">
//             Drive More Revenue With <br /> Social Media Marketing Services
//           </h1>

//           {/* Bullet Points with Animation */}
//           <motion.ul
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="space-y-6 mb-8"
//           >
//             {bulletPoints.map((point, index) => (
//               <motion.li
//                 key={index}
//                 variants={pointVariants}
//                 custom={index}
//                 className="flex items-start gap-4"
//               >
//                 {/* Arrow Icon */}
//                 <div className="w-8 h-8 flex items-center justify-center">
//                   <span className="text-[#4A9BD3] font-extrabold text-lg">➤</span>
//                 </div>
//                 {/* Text */}
//                 <span className="text-lg text-gray-600 font-medium leading-7">
//                   {point}
//                 </span>
//               </motion.li>
//             ))}
//           </motion.ul>

//           {/* Button */}
//           <div className="flex justify-center lg:justify-start">
//           <button
//   onClick={() => {
//     // GA4 custom event tracking
//     if (typeof window !== "undefined" && typeof gtag === "function") {
//       gtag("event", "click", {
//         event_category: "Button",
//         event_label: "Speak With Us Button", // Custom label for tracking
//         value: 1, // You can set this to any number or logic you prefer
//       });
//     }

//     // Your existing handleWhatsAppClick logic
//     handleWhatsAppClick();
//   }}
//   className="bg-[#4A9BD3] border-[#50C3C6] border-2 text-white px-8 py-3 shadow-lg transition-all duration-300 hover:bg-[#50C3C6] hover:text-black hover:scale-105"
// >
//   Speak With Us
// </button>

//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1 flex justify-center lg:justify-end">
//           <motion.img
//             src="/images/socialmedia/two.png"
//             alt="Social Media Marketing Illustration"
//             className="w-[50%] h-auto"
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Drive;

"use client";

import React from "react";
import { motion } from "framer-motion";

const Drive = () => {
  const bulletPoints = [
    "Targeted campaigns across Instagram, Facebook, and LinkedIn.",
    "Engaging content to enhance brand awareness.",
    "Strategic advertising to convert followers into loyal customers.",
    "Continuous analytics and optimization for measurable results.",
    "Maximize return on investment with sustainable growth.",
  ];

  const pointVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = "9920892689";
    const message =
      "Hello, I would like to learn more about your social media marketing services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="social-media"
      className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24 shadow-lg"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-screen-xl mx-auto">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight text-center lg:text-left">
            Drive More Revenue With <br /> Social Media Marketing Services
          </h1>

          {/* Bullet Points */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 mb-8"
          >
            {bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                variants={pointVariants}
                custom={index}
                className="flex items-start gap-4"
              >
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#4A9BD3] font-extrabold text-lg">
                    ➤
                  </span>
                </div>
                <span className="text-lg text-gray-600 font-medium leading-7">
                  {point}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => {
                handleWhatsAppClick();
                if (
                  typeof window !== "undefined" &&
                  typeof gtag === "function"
                ) {
                  gtag("event", "click", {
                    event_category: "Button",
                    event_label: "Speak With Us Button",
                    value: 1,
                  });
                }
              }}
              className="bg-[#4A9BD3] border-2 border-[#50C3C6] text-white px-8 py-3 shadow-lg rounded-lg transition-all duration-300 hover:bg-[#50C3C6] hover:text-black hover:scale-105"
            >
              Speak With Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <motion.img
            src="/images/socialmedia/two.png"
            alt="Social Media Marketing Illustration"
            className="w-[50%] md:w-[60%] h-auto rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default Drive;
