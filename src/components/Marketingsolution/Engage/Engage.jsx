// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const Engage = () => {
//   const bulletPoints = [
//     "Collaboration and creativity to connect authentically.",
//     "Foster meaningful engagement to share ideas and drive innovation.",
//     "Cultivate a supportive community that thrives on shared knowledge.",
//     "Inspire action and motivate others through collaboration.",
//     "Create experiences that resonate, inspire change, and empower growth.",
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
//     const message = "Hello, I would like to get in touch to learn more about your services.";
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <section className="bg-white p-12">
//       <div className="flex flex-col lg:flex-row items-start gap-12">
//         {/* Left Content (Image) */}
//         <div className="flex-1 flex justify-center">
//           <motion.img
//             src="/images/socialmedia/two1.png"
//             alt="Engage and Inspire"
//             className="max-w-full h-auto "
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//           />
//         </div>

//         {/* Right Content (Text and Buttons) */}
//         <div className="flex-1">
//           <h2 className="text-4xl font-bold text-black leading-snug mb-6 text-center lg:text-left">
//             Let’s Engage and Inspire <br /> Together
//           </h2>

//           {/* Bullet Points with Animation */}
//           <motion.ul
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="space-y-4 mb-8"
//           >
//             {bulletPoints.map((point, index) => (
//               <motion.li
//                 key={index}
//                 variants={pointVariants}
//                 custom={index}
//                 className="flex items-start gap-3"
//               >
//                 {/* Bullet Icon */}
//                 <div className="w-6 h-6 flex items-center justify-center">
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
//     handleWhatsAppClick(); // Your existing function
//     // Send event to GA4
//     gtag('event', 'click', {
//       event_category: 'button',
//       event_label: 'Get in Contact Button',
//       value: 1,
//     });
//   }}
//   className="bg-[#4A9BD3] border-[#50C3C6] border-2 text-white px-8 py-3 shadow-md transition-all duration-300 hover:bg-[#50C3C6] hover:text-black hover:scale-105"
// >
//   Get in Contact
// </button>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Engage;



"use client";

import React from "react";
import { motion } from "framer-motion";

const Engage = () => {
  const bulletPoints = [
    "Collaboration and creativity to connect authentically.",
    "Foster meaningful engagement to share ideas and drive innovation.",
    "Cultivate a supportive community that thrives on shared knowledge.",
    "Inspire action and motivate others through collaboration.",
    "Create experiences that resonate, inspire change, and empower growth.",
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
      "Hello, I would like to get in touch to learn more about your services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Content (Image) */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="/images/socialmedia/two1.png"
            alt="Engage and Inspire"
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </motion.div>

        {/* Right Content (Text and Buttons) */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug mb-6 text-center lg:text-left">
            Let’s Engage and Inspire <br /> Together
          </h2>

          {/* Bullet Points with Animation */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 mb-8"
          >
            {bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                variants={pointVariants}
                custom={index}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
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

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => {
                handleWhatsAppClick();
                if (
                  typeof window !== "undefined" &&
                  typeof gtag === "function"
                ) {
                  gtag("event", "click", {
                    event_category: "button",
                    event_label: "Get in Contact Button",
                    value: 1,
                  });
                }
              }}
              className="bg-[#4A9BD3] border-2 border-[#50C3C6] text-white px-8 py-3 shadow-md rounded-lg transition-all duration-300 hover:bg-[#50C3C6] hover:text-black hover:scale-105"
            >
              Get in Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engage;
