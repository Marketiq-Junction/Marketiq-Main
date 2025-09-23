// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const bulletPoints = [
//   {
//     title: "Responsive Web Design",
//     points: [
//       "Ensure an optimal experience across all devices.",
//       "Reduce bounce rates with seamless navigation.",
//       "Adapt to every screen size, including desktop, tablet, and smartphone.",
//       "Enhance performance with faster loading times.",
//     ],
//   },
// ];

// const Responsive = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const whatsappNumber = "9920892689"; // Replace with your WhatsApp number

//   const handleWhatsAppClick = () => {
//     const message = `Hello, I would like to request a free quote for responsive web design.`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <section ref={ref} className="w-full bg-white py-12">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
//         {/* Left Content */}
//         <motion.div
//           className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
//           initial={{ opacity: 0, x: -50 }}
//           animate={inView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.5 }}
//         >
//           <motion.h1
//             className="text-3xl lg:text-4xl font-bold text-gray-800"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={inView ? { scale: 1, opacity: 1 } : {}}
//             transition={{ duration: 0.5 }}
//           >
//             Responsive Web Design
//           </motion.h1>
//           <motion.h2
//             className="text-xl text-[#4A9BD3] mt-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             Engage Your Target Audience and Foster Trust
//           </motion.h2>
//           <motion.ul
//             className="text-gray-600 mt-6 space-y-4 text-left lg:text-left"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             {bulletPoints[0].points.map((point, index) => (
//               <motion.li
//                 key={index}
//                 className="flex sm:items-start items-center gap-3"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={inView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <span className="text-[#4A9BD3] font-extrabold text-lg">➤</span>
//                 {point}
//               </motion.li>
//             ))}
//           </motion.ul>
//           <motion.div
//             className="mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : {}}
//             transition={{ delay: 0.8, duration: 0.5 }}
//           >
//             <motion.button
//   onClick={() => {
//     // GA4 custom event when the "Request a Free Audit" button is clicked
//     if (typeof window !== "undefined" && typeof gtag === "function") {
//       gtag("event", "audit_request_click", {
//         event_category: "Button",
//         event_label: "Request a Free Audit Button Clicked",
//       });
//     }

//     // Original function call (e.g., handleWhatsAppClick)
//     handleWhatsAppClick();
//   }}
//   className="bg-[#4A9BD3] text-white px-6 py-3 font-semibold hover:bg-[#50C3C6] transition-transform duration-300 relative overflow-hidden"
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
// >
//   Request a Free Audit
// </motion.button>

//           </motion.div>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           className="lg:w-1/2 flex justify-center"
//           initial={{ opacity: 0, x: 50 }}
//           animate={inView ? { opacity: 1, x: 0 } : {}}
//           transition={{ duration: 0.5 }}
//         >
//           <img
//             src="/responsive.png" // Replace with your actual image URL
//             alt="Responsive Web Design"
//             className="max-w-full h-auto rounded-lg shadow-lg"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Responsive;


import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bulletPoints = [
  {
    title: "Responsive Web Design",
    points: [
      "Ensure an optimal experience across all devices.",
      "Reduce bounce rates with seamless navigation.",
      "Adapt to every screen size, including desktop, tablet, and smartphone.",
      "Enhance performance with faster loading times.",
    ],
  },
];

const Responsive = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatsappNumber = "9920892689"; // Replace with your WhatsApp number

  const handleWhatsAppClick = () => {
    const message = `Hello, I would like to request a free quote for responsive web design.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      ref={ref}
      className="w-full py-16 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Optional decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#4A9BD3]/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#50C3C6]/20 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl lg:text-4xl font-bold text-gray-800"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Responsive <span className="text-[#4A9BD3]">Web Design</span>
          </motion.h1>
          <motion.h2
            className="text-xl text-gray-700 mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Engage Your{" "}
            <span className="text-[#4A9BD3] font-semibold">
              Target Audience
            </span>{" "}
            and Foster Trust
          </motion.h2>

          {/* Bullet Points */}
          <motion.ul
            className="text-gray-600 mt-6 space-y-4 text-left lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {bulletPoints[0].points.map((point, index) => (
              <motion.li
                key={index}
                className="flex sm:items-start items-center gap-3 hover:text-[#4A9BD3] transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.15 }}
              >
                <span className="text-[#4A9BD3] font-extrabold text-lg">➤</span>
                {point}
              </motion.li>
            ))}
          </motion.ul>

          {/* Button */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <motion.button
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  typeof gtag === "function"
                ) {
                  gtag("event", "audit_request_click", {
                    event_category: "Button",
                    event_label: "Request a Free Audit Button Clicked",
                  });
                }
                handleWhatsAppClick();
              }}
              className="bg-gradient-to-r from-[#4A9BD3] to-[#50C3C6] text-white px-6 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Free Audit
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <img
            src="/responsive.png" // Replace with your actual image URL
            alt="Responsive Web Design"
            className="max-w-full h-auto rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Responsive;
