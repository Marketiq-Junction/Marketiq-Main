// import React from "react";
// import { motion } from "framer-motion";

// const SaveTime = () => {
//   return (
//     <section className="bg-white text-black py-10">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
//         {/* Left Side - Image */}
//         <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
//           <img
//             src="/time.png"
//             alt="Save Time Illustration"
//             className="h-auto"
//           />
//         </div>

//         {/* Right Side - Content */}
//         <div className="md:w-1/2 text-left">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">
//             Save Time & Effort With
//           </h1>
//           <h1 className="text-3xl md:text-4xl font-bold mb-4">
//             <span className="text-[#4A9BD3]">Marketiq</span>{" "}
//             <span className="text-[#50C3C6]">Junction</span>
//           </h1>
//           <motion.ul
//             className="text-lg mb-6 leading-relaxed space-y-4 sm:pl-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ staggerChildren: 0.2, duration: 0.5 }}
//           >
//             <motion.li
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.4 }}
//             >
//               <span className="text-[#4A9BD3]">➤</span> Streamline your marketing to save time and boost results.
//             </motion.li>
//             <motion.li
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.4, delay: 0.2 }}
//             >
//               <span className="text-[#4A9BD3]">➤</span> Grow your business while we simplify digital marketing for you.
//             </motion.li>
//             <motion.li
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.4, delay: 0.4 }}
//             >
//               <span className="text-[#4A9BD3]">➤</span> Drive results with expert web design, social media management, and SEO.
//             </motion.li>
//             <motion.li
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.4, delay: 0.6 }}
//             >
//               <span className="text-[#4A9BD3]">➤</span> Save valuable resources while optimizing your marketing efforts for success.
//             </motion.li>
//             <motion.li
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.4, delay: 0.8 }}
//             >
//               <span className="text-[#4A9BD3]">➤</span> Let us handle the digital landscape, so you can concentrate on core business activities.
//             </motion.li>
//           </motion.ul>
//           <motion.div
//             className="flex flex-col sm:flex-row justify-start gap-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.2, duration: 0.5 }}
//           >
//            <motion.button
//   onClick={() => {
//     // GA4 custom event when the "Contact Us" button is clicked
//     if (typeof window !== "undefined" && typeof gtag === "function") {
//       gtag("event", "contact_us_button_click", {
//         event_category: "Button",
//         event_label: "Contact Us Button Clicked",
//       });
//     }

//     // Optionally, handle the original function here if you have one
//     // For example, you can navigate or open a modal here
//   }}
//   className="bg-[#4A9BD3] text-white font-semibold px-6 py-2 hover:bg-[#3a82b2] transition-transform duration-200"
//   whileHover={{ scale: 1.1 }}
//   whileTap={{ scale: 0.95 }}
// >
//   Contact Us
// </motion.button>

//             {/* <motion.button
//               className="border border-[#4A9BD3] text-[#4A9BD3] font-semibold px-6 py-2 rounded-md hover:bg-[#4A9BD3] hover:text-white transition duration-200"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Subscribe Now
//             </motion.button> */}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SaveTime;

import React from "react";
import { motion } from "framer-motion";

const SaveTime = () => {
  return (
    <section className="bg-white text-black py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/time.png"
            alt="Save Time Illustration"
            className="h-auto"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Save Time & Effort With
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#4A9BD3]">Marketiq</span>{" "}
            <span className="text-[#50C3C6]">Junction</span>
          </h1>

          {/* Animated Bullet Points */}
          <motion.ul
            className="text-lg mb-6 leading-relaxed space-y-4 sm:pl-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              "Streamline your marketing to save time and boost results.",
              "Grow your business while we simplify digital marketing for you.",
              "Drive results with expert web design, social media management, and SEO.",
              "Save valuable resources while optimizing your marketing efforts for success.",
              "Let us handle the digital landscape, so you can concentrate on core business activities.",
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-2"
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
                }}
              >
                <span className="text-[#4A9BD3] font-bold">➤</span>
                {point}
              </motion.li>
            ))}
          </motion.ul>

          {/* Call To Action */}
          <motion.div
            className="flex flex-col sm:flex-row justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.button
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  typeof gtag === "function"
                ) {
                  gtag("event", "contact_us_button_click", {
                    event_category: "Button",
                    event_label: "Contact Us Button Clicked",
                  });
                }
              }}
              className="bg-[#4A9BD3] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#3a82b2] transition-transform duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SaveTime;
