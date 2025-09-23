// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import AutoGraphIcon from "@mui/icons-material/AutoGraph";

// const Approach = () => {
//   const cards = [
//     {
//       title: "OPTIMIZE",
//       description: "Maximize your online visibility with tailored strategies that enhance your website and content.",
//       icon: <RocketLaunchIcon className="text-blue-500 text-6xl" />
//     },
//     {
//       title: "GENERATE",
//       description: "Drive targeted traffic to your business with our innovative lead generation strategies.",
//       icon: <TrendingUpIcon className="text-blue-500 text-6xl" />,
//     },
//     {
//       title: "GROW",
//       description: "Unlock new opportunities for expansion through our data-driven strategies and dedicated support.",
//       icon: <AutoGraphIcon className="text-blue-500 text-6xl" />,
//     },
//   ];

//   const bulletPoints = [
//     "We combine strategic optimization and data-driven insights.",
//     "Our creativity enhances your digital presence.",
//     "Generate high-quality leads for consistent growth.",
//     "Provide personalized guidance to elevate your brand.",
//     "Ensure sustainable progress and measurable results.",
//     "Deliver solutions designed for long-term success."
//   ];

//   return (
//     <div className="bg-white px-6 lg:px-20 py-12 lg:mb-28">
//       <div className="flex flex-col lg:flex-row gap-12 items-center">
//         {/* Text Section */}
//         <div className="lg:w-1/2">
//           <p className="text-lg font-semibold text-gray-600">Our Approach</p>
//           <h1 className="text-3xl lg:text-5xl font-bold mb-4">
//             Boost Your Business With Decent Guidance and Passion
//           </h1>
//           <p className="text-xl text-blue-500 italic mb-4">
//             Optimize, Generate, and Grow Effortlessly
//           </p>
//           <ul className="list-inside space-y-4">
//             {bulletPoints.map((point, index) => (
//               <motion.li
//                 key={index}
//                 className="flex items-center gap-2 text-gray-700 text-lg lg:text-xl"
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.2 }}
//               >
//                 <span className="text-blue-500">&#8594;</span>
//                 {point}
//               </motion.li>
//             ))}
//           </ul>
//           <div className="flex gap-6 mt-8">
//             {/* <motion.button
//               className="bg-[#4A9BD3] text-white px-6 py-3 text-lg shadow hover:bg-white hover:text-black transition"
//               whileHover={{ scale: 1.05 }}
//             >
//               Explore Our Services
//             </motion.button>
//             <motion.button
//               className="bg-[#4A9BD3] text-white px-6 py-3 text-lg shadow hover:bg-white hover:text-black transition"
//               whileHover={{ scale: 1.05 }}
//             >
//               Get A Free Quote
//             </motion.button> */}
//           </div>
//         </div>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:w-1/2">
//           {cards.map((card, index) => (
//             <motion.div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow w-auto"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 {card.icon}
//                 <h2 className="text-2xl font-bold mt-4">{card.title}</h2>
//                 <p className="text-gray-700 mt-4">{card.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Approach;

"use client";

import React from "react";
import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const Approach = () => {
  const cards = [
    {
      title: "OPTIMIZE",
      description:
        "Maximize your online visibility with tailored strategies that enhance your website and content.",
      icon: <RocketLaunchIcon className="text-white text-4xl" />,
      bg: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      title: "GENERATE",
      description:
        "Drive targeted traffic to your business with our innovative lead generation strategies.",
      icon: <TrendingUpIcon className="text-white text-4xl" />,
      bg: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
    {
      title: "GROW",
      description:
        "Unlock new opportunities for expansion through our data-driven strategies and dedicated support.",
      icon: <AutoGraphIcon className="text-white text-4xl" />,
      bg: "bg-gradient-to-r from-green-400 to-green-600",
    },
  ];

  const bulletPoints = [
    "We combine strategic optimization and data-driven insights.",
    "Our creativity enhances your digital presence.",
    "Generate high-quality leads for consistent growth.",
    "Provide personalized guidance to elevate your brand.",
    "Ensure sustainable progress and measurable results.",
    "Deliver solutions designed for long-term success.",
  ];

  return (
    <div className="relative bg-gray-50 px-6 lg:px-20 py-10 lg:py-16 overflow-hidden mb-20 lg:mb-28">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-10 items-center relative z-10">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <motion.p
            className="text-lg font-semibold text-gray-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Approach
          </motion.p>
          <motion.h1
            className="text-3xl lg:text-4xl font-bold mb-3"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Boost Your Business With Decent Guidance and Passion
          </motion.h1>
          <motion.p
            className="text-lg lg:text-xl text-blue-500 italic mb-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Optimize, Generate, and Grow Effortlessly
          </motion.p>

          <ul className="space-y-3">
            {bulletPoints.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 text-gray-700 text-base lg:text-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
              >
                <span className="text-blue-500 text-xl">✔</span>
                {point}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 gap-4 lg:w-1/2">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center text-center p-6 rounded-2xl shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl ${card.bg}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 mb-3">
                {card.icon}
              </div>
              <h2 className="text-xl font-bold text-white mt-2">
                {card.title}
              </h2>
              <p className="text-white mt-2 text-sm">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Approach;
