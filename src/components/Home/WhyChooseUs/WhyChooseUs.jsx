// import React from "react";

// const WhyChooseUs = () => {
//   const whatsappNumber = "9920892689"; // Specified WhatsApp number
//   const predefinedMessage = "Hello, I would like to know more about your services.";

//   const handleWhatsAppClick = () => {
//     const encodedMessage = encodeURIComponent(predefinedMessage);
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <section className="w-full min-h-[70vh] flex flex-col lg:flex-row items-center lg:items-center">
//       {/* Left Section */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-6">
//         <div className="w-3/4 md:w-2/3 lg:w-1/2">
//           <img
//             src="/images/rb_2148901520.png"
//             className="w-full h-auto object-contain"
//             alt="Why Choose Us Image"
//           />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-6 lg:p-8">
//         {/* Heading */}
//         <div className="text-center lg:text-left">
//           <p className="text-4xl md:text-5xl lg:text-5xl text-[#4A9BD3] font-bold">
//             Why Choose Us
//           </p>
//           <h3 className="mt-4 text-2xl md:text-3xl lg:text-2xl leading-tight font-bold">
//             Increase your client for better position of Business
//           </h3>
//         </div>

//         {/* Bullet Points Section */}
//         <ul className="mt-4 space-y-3 text-lg md:text-xl lg:text-lg font-medium text-gray-700">
//           <li className="text-[#4A9BD3] font-semibold">
//             Customized, value-driven digital marketing solutions.
//           </li>
//           <li className="text-[#4A9BD3] font-semibold">
//             Affordable services for businesses of all sizes.
//           </li>
//           <li className="text-[#4A9BD3] font-semibold">
//             Comprehensive approach: web design, SEO, and social media.
//           </li>
//           <li className="text-[#4A9BD3] font-semibold">
//             Measurable results and improved online visibility.
//           </li>
//           <li className="text-[#4A9BD3] font-semibold">
//             Data-driven strategies with monthly performance reports.
//           </li>
//         </ul>

//         {/* Button */}
//         <button
//   onClick={() => {
//     // GA4 custom event when user clicks the button
//     if (typeof window !== "undefined" && typeof gtag === "function") {
//       gtag("event", "whatsapp_button_click", {
//         event_category: "CTA",
//         event_label: "Let's Chat - WhatsApp",
//       });
//     }

//     // Call the original function to handle WhatsApp click
//     handleWhatsAppClick();
//   }}
//   className="mt-6 px-6 py-3 bg-[#50C3C6] text-white text-lg font-semibold hover:bg-[#3aa1a4] transition"
// >
//   Let's Chat
// </button>

//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const WhyChooseUs = () => {
  const whatsappNumber = "9920892689";
  const predefinedMessage =
    "Hello, I would like to know more about your services.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(predefinedMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full min-h-[70vh] flex flex-col lg:flex-row items-center">
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 flex items-center justify-center p-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="/images/rb_2148901520.png"
          className="w-3/4 md:w-2/3 lg:w-1/2 h-auto object-contain"
          alt="Why Choose Us"
        />
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-6 lg:p-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="text-center lg:text-left">
          <p className="text-4xl md:text-5xl font-bold text-[#4A9BD3]">
            Why Choose Us
          </p>
          <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
            Increase your client for better position of Business
          </h3>
        </div>

        {/* Bullet Points */}
        <ul className="mt-6 space-y-4 text-lg md:text-xl text-gray-700">
          {[
            "Customized, value-driven digital marketing solutions.",
            "Affordable services for businesses of all sizes.",
            "Comprehensive approach: web design, SEO, and social media.",
            "Measurable results and improved online visibility.",
            "Data-driven strategies with monthly performance reports.",
          ].map((point, idx) => (
            <motion.li
              key={idx}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 * idx }}
              viewport={{ once: true }}
            >
              <FaCheckCircle className="text-[#4A9BD3] mt-1 flex-shrink-0" />
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.button
          onClick={() => {
            if (typeof window !== "undefined" && typeof gtag === "function") {
              gtag("event", "whatsapp_button_click", {
                event_category: "CTA",
                event_label: "Let's Chat - WhatsApp",
              });
            }
            handleWhatsAppClick();
          }}
          className="mt-8 px-6 py-3 bg-[#50C3C6] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#3aa1a4] hover:scale-105 transition-transform"
          whileTap={{ scale: 0.95 }}
        >
          Let’s Chat
        </motion.button>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
