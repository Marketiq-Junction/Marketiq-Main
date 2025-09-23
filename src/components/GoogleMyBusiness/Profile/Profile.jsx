// "use client";

// import { motion } from "framer-motion";

// const Profile = () => {
//   const whatsappNumber = "9920892689"; // Replace with your WhatsApp number

//   const handleWhatsAppClick = () => {
//     const message = "Hello, I would like to know more about Profile Optimization.";
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <section className="bg-white py-12">
//       <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center gap-8 px-4 sm:px-6 lg:px-8">
//         {/* Left Side Image */}
//         <motion.div
//           className="flex-1 flex justify-center"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <img
//             src="/images/GoogleMyBusiness/two.png"
//             alt="Profile Optimization"
//             className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-md"
//           />
//         </motion.div>

//         {/* Right Side Content */}
//         <motion.div
//           className="flex-1"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6 text-center md:text-left">
//             Profile Optimization
//           </h2>
//           <motion.ul
//             className="space-y-2 sm:space-y-3 md:space-y-4 text-gray-600 text-sm sm:text-base md:text-lg"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <li className="flex items-start gap-2 sm:gap-3">
//               <span className="text-[#4A9BD3] font-extrabold text-lg">➤</span>
//               Create or optimize your Google My Business profile.
//             </li>
//             <li className="flex items-start gap-2 sm:gap-3">
//               <span className="text-[#4A9BD3] font-extrabold text-lg">➤</span>
//               Update essential information like name, address, and phone number.
//             </li>
//             <li className="flex items-start gap-2 sm:gap-3">
//               <span className="text-[#4A9BD3] font-extrabold text-lg">➤</span>
//               Ensure accurate business description and hours of operation.
//             </li>
//             <li className="flex items-start gap-2 sm:gap-3">
//               <span className="text-[#4A9BD3] font-extrabold text-lg">➤</span>
//               Select relevant categories and attributes to boost visibility.
//             </li>
//           </motion.ul>
//           <motion.div
//             className="mt-6 flex justify-center md:justify-start"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//           <motion.button
//   onClick={() => {
//     // Track GA4 event when button is clicked
//     if (typeof window !== "undefined" && typeof gtag === "function") {
//       gtag("event", "button_click", {
//         event_category: "User Interaction",
//         event_label: "Talk to Us Button Clicked",
//       });
//     }

//     // Call the original WhatsApp click handler
//     handleWhatsAppClick();
//   }}
//   className="px-4 sm:px-6 py-2 sm:py-3 bg-[#4A9BD3] text-white shadow hover:bg-[#3A82B2] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
// >
//   Talk to Us
// </motion.button>

//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Profile;


"use client";

import { motion } from "framer-motion";

const Profile = () => {
  const whatsappNumber = "9920892689"; // Replace with your WhatsApp number

  const handleWhatsAppClick = () => {
    const message =
      "Hello, I would like to know more about Profile Optimization.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white py-12">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center gap-10 px-4 sm:px-6 lg:px-8">
        {/* Left Side Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src="/images/GoogleMyBusiness/two.png"
            alt="Profile Optimization"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 text-center md:text-left">
            Profile Optimization
          </h2>

          <motion.ul
            className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              "Create or optimize your Google My Business profile.",
              "Update essential information like name, address, and phone number.",
              "Ensure accurate business description and hours of operation.",
              "Select relevant categories and attributes to boost visibility.",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 sm:gap-3">
                <span className="text-[#4A9BD3] font-extrabold text-lg">➤</span>
                {point}
              </li>
            ))}
          </motion.ul>

          {/* Button */}
          <motion.div
            className="mt-6 flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  typeof gtag === "function"
                ) {
                  gtag("event", "button_click", {
                    event_category: "User Interaction",
                    event_label: "Talk to Us Button Clicked",
                  });
                }
                handleWhatsAppClick();
              }}
              className="px-6 sm:px-8 py-3 sm:py-3 bg-[#4A9BD3] text-white rounded-lg font-medium shadow-md hover:bg-[#3A82B2] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
