// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowRight } from "react-icons/fa";

// const ServiceSection = () => {
//   const services = [
//     {
//       title: "Search Engine Optimization",
//       description: [
//         "Enhance your brand's online visibility.",
//         "Target relevant keywords to connect with your audience.",
//         "Focus on user experience with seamless navigation.",
//         "Ensure fast-loading pages for better engagement.",
//       ],
//     },
//     {
//       title: "Social Media Management",
//       description: [
//         "Craft tailored content for your audience.",
//         "Ensure consistent interaction on all platforms.",
//         "Maximize engagement and reach using insights.",
//         "Foster trust and loyalty through community management.",
//       ],
//     },
//     {
//       title: "Website Management",
//       description: [
//         "Optimize website for performance and security.",
//         "Perform regular updates and maintenance.",
//         "Analyze user behavior to improve engagement.",
//         "Boost site visibility with SEO optimization.",
//       ],
//     },
//     {
//       title: "Google My Business",
//       description: [
//         "Enhance local visibility for attracting customers.",
//         "Create and optimize a detailed business profile.",
//         "Engage with customers via reviews and Q&A.",
//         "Promote updates, offers, and events effectively.",
//       ],
//     },
//     {
//       title: "YouTube Marketing",
//       description: [
//         "Reach a vast audience with engaging videos.",
//         "Optimize content for visibility and interaction.",
//         "Showcase your brand with high-quality videos.",
//         "Leverage SEO to attract targeted viewers.",
//       ],
//     },
//     {
//       title: "Analytics & Reporting",
//       description: [
//         "Track key metrics for performance insights.",
//         "Identify successes and areas for improvement.",
//         "Make data-driven marketing decisions.",
//         "Optimize campaigns for better resource allocation.",
//       ],
//     },
//   ];

//   const [activeService, setActiveService] = useState(services[0]);

//   return (
//     <div className="w-full p-8 bg-white flex flex-col items-center">
//       {/* Header Section */}
//       <div className="w-full flex flex-col md:flex-row justify-between mb-8">
//         <motion.div
//           className="md:w-1/2"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl font-bold text-gray-500 mb-2">WHAT WE DO</h2>
//           <h3 className="text-4xl font-bold">
//             Driving a better way of doing marketing
//           </h3>
//         </motion.div>

//         {/* Bullet Points Section */}
//         {/* <motion.div
//           className="md:w-1/2 mt-4 md:mt-0 flex justify-end"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <ul className="list-disc pr-6 text-gray-600 space-y-2 text-right">
//             <li className="leading-relaxed pl-0">Improve your website performance</li>
//             <li className="leading-relaxed pl-0">Enhance social media presence</li>
//             <li className="leading-relaxed pl-0">Optimize for search engines</li>
//             <li className="leading-relaxed pl-0">Tailored and affordable strategies</li>
//             <li className="leading-relaxed pl-0">Drive sustainable growth</li>
//           </ul>
//         </motion.div> */}
//       </div>

//       {/* Main Content Section */}
//       <div className="w-full max-w-6xl bg-[#3F85B5] rounded-[40px] shadow-xl overflow-hidden">
//         <div className="flex flex-col md:flex-row">
//           {/* Left Menu */}
//           <div className="bg-[#50C3C6] p-6 md:w-1/3 flex flex-col space-y-4">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 onClick={() => setActiveService(service)}
//                 className={`cursor-pointer py-3 px-4 rounded-full flex items-center justify-between ${
//                   activeService.title === service.title
//                     ? "bg-white text-black"
//                     : "text-white"
//                 }`}
//                 initial={{ x: -50, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <span>{service.title}</span>
//                 {activeService.title === service.title && (
//                   <span className="bg-[#50C3C6] p-2 rounded-full">
//                     <FaArrowRight className="text-white" />
//                   </span>
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           {/* Right Content */}
//           <div className="p-8 md:w-2/3 text-white">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeService.title}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -50 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h4 className="text-2xl font-bold mb-4">
//                   {activeService.title}
//                 </h4>
//                 <ul className="list-disc list-inside space-y-2 text-white text-lg">
//                   {activeService.description.map((point, idx) => (
//                     <li key={idx} className="leading-relaxed pl-0">
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceSection;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaSearch,
  FaFacebookF,
  FaGlobe,
  FaGoogle,
  FaYoutube,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    title: "Search Engine Optimization",
    icon: <FaSearch />,
    description: [
      "Enhance your brand's online visibility.",
      "Target relevant keywords to connect with your audience.",
      "Focus on user experience with seamless navigation.",
      "Ensure fast-loading pages for better engagement.",
    ],
  },
  {
    title: "Social Media Management",
    icon: <FaFacebookF />,
    description: [
      "Craft tailored content for your audience.",
      "Ensure consistent interaction on all platforms.",
      "Maximize engagement and reach using insights.",
      "Foster trust and loyalty through community management.",
    ],
  },
  {
    title: "Website Management",
    icon: <FaGlobe />,
    description: [
      "Optimize website for performance and security.",
      "Perform regular updates and maintenance.",
      "Analyze user behavior to improve engagement.",
      "Boost site visibility with SEO optimization.",
    ],
  },
  {
    title: "Google My Business",
    icon: <FaGoogle />,
    description: [
      "Enhance local visibility for attracting customers.",
      "Create and optimize a detailed business profile.",
      "Engage with customers via reviews and Q&A.",
      "Promote updates, offers, and events effectively.",
    ],
  },
  {
    title: "YouTube Marketing",
    icon: <FaYoutube />,
    description: [
      "Reach a vast audience with engaging videos.",
      "Optimize content for visibility and interaction.",
      "Showcase your brand with high-quality videos.",
      "Leverage SEO to attract targeted viewers.",
    ],
  },
  {
    title: "Analytics & Reporting",
    icon: <FaChartLine />,
    description: [
      "Track key metrics for performance insights.",
      "Identify successes and areas for improvement.",
      "Make data-driven marketing decisions.",
      "Optimize campaigns for better resource allocation.",
    ],
  },
];

// Reusable card for each service option
const ServiceCard = ({ service, active, onClick }) => (
  <motion.div
    role="button"
    tabIndex={0}
    aria-selected={active}
    onClick={onClick}
    onKeyDown={(e) => e.key === "Enter" && onClick()}
    className={`cursor-pointer py-3 px-4 rounded-full flex items-center justify-between transition-all ${
      active ? "bg-white text-black shadow-md" : "text-white hover:bg-white/20"
    }`}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center gap-2">
      <span className="text-lg">{service.icon}</span>
      <span>{service.title}</span>
    </div>
    {active && (
      <span className="bg-[#50C3C6] p-2 rounded-full">
        <FaArrowRight className="text-white" />
      </span>
    )}
  </motion.div>
);

const ServiceSection = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="w-full p-8 bg-white flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row justify-between mb-8">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-500 mb-2">WHAT WE DO</h2>
          <h3 className="text-4xl font-bold">
            Driving a better way of doing marketing
          </h3>
        </motion.div>
      </div>

      {/* Main Section */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-[#3F85B5] to-[#50C3C6] rounded-[40px] shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Menu */}
          <div className="bg-[#50C3C6] p-6 md:w-1/3 flex flex-col space-y-4 overflow-x-auto md:overflow-visible">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                active={activeService.title === service.title}
                onClick={() => setActiveService(service)}
              />
            ))}
          </div>

          {/* Right Content */}
          <div className="p-8 md:w-2/3 text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  {activeService.icon} {activeService.title}
                </h4>
                <motion.ul
                  className="list-disc list-inside space-y-2 text-lg"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.2 },
                    },
                  }}
                >
                  {activeService.description.map((point, idx) => (
                    <motion.li
                      key={idx}
                      className="leading-relaxed"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
