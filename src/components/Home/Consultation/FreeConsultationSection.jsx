// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { TiTick } from "react-icons/ti";

// const FreeConsultationSection = () => {
//   const [companyName, setCompanyName] = useState("");
//   const predefinedWhatsappNumber = "9920892689"; // Your WhatsApp number

//   const points = [
//     "Tailored Digital Solutions: We'll analyze your business needs and create a custom strategy just for you.",
//     "Expert Guidance: Gain insights from experienced digital marketing professionals.",
//     "Proven Results: Our strategies focus on driving growth and achieving measurable success.",
//     "Comprehensive Support: Continuous assistance to achieve your goals.",
//   ];

//   const pointVariants = {
//     hidden: { opacity: 0, x: -50 },
//     visible: (index) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: index * 0.2, duration: 0.6 },
//     }),
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault(); // Prevent form submission
//     if (companyName) {
//       const message = `Hello, I am ${companyName}. I would like to get a free audit for my business.`;
//       const encodedMessage = encodeURIComponent(message);
//       const whatsappURL = `https://wa.me/${predefinedWhatsappNumber}?text=${encodedMessage}`;
//       window.open(whatsappURL, "_blank");
//     } else {
//       alert("Please fill in the company name.");
//     }
//   };

//   return (
//     <section className="w-full h-auto bg-[#4A9BD3] text-white flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-0 lg:mb-28 md:mb-20">
//       {/* Left Section */}
//       <div className="w-full lg:w-1/2 h-auto flex flex-col items-center justify-center p-5 lg:p-0 mb-8">
//         <div className="w-full h-auto flex flex-col gap-5 justify-end lg:gap-10 lg:px-24">
//           <h1 className="text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] font-bold leading-tight lg:leading-none text-center mt-8">
//             Get your free <br /> consultation to <br /> boost your business
//           </h1>
//           <p className="text-[4vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-center">
//             Unlock the next level of growth for your business—schedule <br className="hidden lg:block" />
//             your free consultation today
//           </p>
//         </div>
//         <div className="w-full h-auto lg:h-[50%] lg:px-24">
//           {points.map((text, index) => (
//             <motion.div
//               key={index}
//               className="flex w-full h-auto mt-3 lg:mt-5"
//               variants={pointVariants}
//               initial="hidden"
//               whileInView="visible"
//               custom={index}
//               viewport={{ once: true }}
//             >
//               {/* Icon */}
//               <div className="w-[15%] lg:w-[10%] flex items-center">
//                 <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full">
//                   <TiTick className="text-[3vw] md:text-[2vw] lg:text-[1.5vw] text-black" />
//                 </div>
//               </div>
//               {/* Text */}
//               <div className="w-[85%] lg:w-[90%] flex items-center">
//                 <span className="text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1vw] leading-tight md:leading-none font-medium">
//                   {text}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full lg:w-1/2 h-auto flex items-center justify-center p-5 lg:p-0">
//         <div
//           className="w-full md:w-[70%] lg:w-[60%] h-auto md:h-[50%] lg:h-[50%] bg-white rounded-3xl p-5 md:p-10"
//           style={{ boxShadow: "10px 10px 0px rgba(0, 0, 0, 1)" }}
//         >
//           <div className="w-full h-auto flex flex-col justify-center gap-3 md:gap-5">
//             <h1 className="text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.5vw] font-bold text-black text-center">
//               Get your free audit
//             </h1>
//             <div className="w-full h-[4px] md:h-[6px] rounded-lg bg-[#000]">
//               <div className="w-1/2 h-full bg-[#50C3C6]"></div>
//             </div>
//           </div>
//           <div className="w-full h-auto mt-5 md:mt-5">
//             <form
//               onSubmit={handleFormSubmit}
//               className="w-full h-auto flex flex-col gap-5 text-black"
//             >
//               <input
//                 type="text"
//                 placeholder="Company Name"
//                 value={companyName}
//                 onChange={(e) => setCompanyName(e.target.value)}
//                 className="px-5 md:px-10 text-[4vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.3vw] outline-none w-full h-12 md:h-14 lg:h-12 rounded-2xl border-2 border-black"
//               />
//              <input
//   type="submit"
//   value="Send"
//   className="w-full h-12 md:h-14 lg:h-12 rounded-2xl bg-black text-white text-[4vw] sm:text-[3.5vw] md:text-[2vw] lg:text-[1.3vw]
//     transition-all duration-300 ease-in-out
//     hover:bg-[#50C3C6] hover:text-black hover:scale-105 cursor-pointer"
//   onClick={() => {
//     // GA4 custom event when user clicks the "Send" button
//     if (typeof window !== "undefined" && typeof gtag === "function") {
//       gtag("event", "send_button_click", {
//         event_category: "Form",
//         event_label: "Send Button Clicked",
//       });
//     }
//   }}
// />

//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FreeConsultationSection;


"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";

const FreeConsultationSection = () => {
  const [companyName, setCompanyName] = useState("");
  const whatsappNumber = "9920892689"; // Your WhatsApp number

  const points = [
    "Tailored Digital Solutions: We'll analyze your business needs and create a custom strategy just for you.",
    "Expert Guidance: Gain insights from experienced digital marketing professionals.",
    "Proven Results: Our strategies focus on driving growth and achieving measurable success.",
    "Comprehensive Support: Continuous assistance to achieve your goals.",
  ];

  const pointVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.2, duration: 0.6 },
    }),
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!companyName) {
      alert("Please fill in the company name.");
      return;
    }
    const message = `Hello, I am ${companyName}. I would like to get a free audit for my business.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full bg-gradient-to-br from-teal-500 to-cyan-600 text-white flex flex-col lg:flex-row items-center justify-center py-10 lg:py-20 gap-8">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-6 lg:px-24">
        <motion.h1
          className="text-[6vw] sm:text-[5vw] md:text-[4vw] lg:text-[3vw] font-bold leading-tight text-center lg:text-left mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get your free <br /> consultation to <br /> boost your business
        </motion.h1>
        <motion.p
          className="text-[4vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[1.2vw] font-semibold text-center lg:text-left mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Unlock the next level of growth for your business—schedule{" "}
          <br className="hidden lg:block" />
          your free consultation today
        </motion.p>

        {/* Points */}
        <div className="w-full">
          {points.map((text, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 mb-4"
              variants={pointVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full flex-shrink-0">
                <TiTick className="text-teal-600 text-2xl md:text-3xl lg:text-xl" />
              </div>
              <p className="text-[3.5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1rem] leading-snug">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-0">
        <div className="w-full md:w-3/4 lg:w-2/3 bg-white text-black rounded-3xl p-6 md:p-10 shadow-lg">
          <h2 className="text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.5rem] font-bold text-center mb-4">
            Get your free audit
          </h2>
          <div className="w-full h-[4px] md:h-[6px] rounded-lg bg-black mb-6">
            <div className="w-1/2 h-full bg-gradient-to-r from-teal-400 to-cyan-500"></div>
          </div>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="px-5 md:px-10 h-12 md:h-14 lg:h-12 rounded-2xl border-2 border-black text-black outline-none text-[1rem] sm:text-[1.1rem] focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
            />
            <input
              type="submit"
              value="Send"
              className="h-12 md:h-14 lg:h-12 rounded-2xl bg-black text-white text-[1rem] sm:text-[1.1rem] font-semibold hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:text-black hover:scale-105 transition-all cursor-pointer shadow-lg hover:shadow-cyan-400/40"
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  typeof gtag === "function"
                ) {
                  gtag("event", "send_button_click", {
                    event_category: "Form",
                    event_label: "Send Button Clicked",
                  });
                }
              }}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultationSection;