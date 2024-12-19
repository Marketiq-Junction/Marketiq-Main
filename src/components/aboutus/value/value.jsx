// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import GroupIcon from "@mui/icons-material/Group";
// import WorkIcon from "@mui/icons-material/Work";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// const ValuesAndCulture = () => {
//   const values = [
//     {
//       title: "Gratitude",
//       description: "Thankfulness and humility drive us every day.",
//       icon: <FavoriteIcon className="text-blue-500 text-5xl" />,
//     },
//     {
//       title: "Respect",
//       description: "We see the best in ourselves and others.",
//       icon: <GroupIcon className="text-blue-500 text-5xl" />,
//     },
//     {
//       title: "Work Ethic",
//       description: "We work smart, stay balanced, and deliver results.",
//       icon: <WorkIcon className="text-blue-500 text-5xl" />,
//     },
//     {
//       title: "Ownership",
//       description: "We own our actions and make things right.",
//       icon: <PsychologyIcon className="text-blue-500 text-5xl" />,
//     },
//     {
//       title: "Think Bigger",
//       description: "We embrace change and strive for growth.",
//       icon: <AutoAwesomeIcon className="text-blue-500 text-5xl" />,
//     },
//     {
//       title: "Honesty",
//       description: "Integrity and trust guide our every move.",
//       icon: <CheckCircleIcon className="text-blue-500 text-5xl" />,
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white px-6 lg:px-16 py-12">
//       {/* Header Section */}
//       <motion.div
//         className="text-center mb-12"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">
//           Our Values & Culture
//         </h1>
//         <p className="text-lg lg:text-xl text-gray-600">
//           The heart of who we are and how we thrive together.
//         </p>
//       </motion.div>

//       {/* Content Section */}
//       <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
//         {/* Left Column */}
//         <div className="flex flex-col gap-6">
//           {values.slice(0, 3).map((value, index) => (
//             <motion.div
//               key={index}
//               className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
//               whileHover={{ scale: 1.1, rotate: 1 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: -50 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.2 }}
//             >
//               {value.icon}
//               <h2 className="text-2xl font-semibold mt-4 text-gray-800">
//                 {value.title}
//               </h2>
//               <p className="text-gray-600 mt-2">{value.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Center Logo */}
//         <motion.div
//           className="bg-white border-4 border-blue-200 rounded-full shadow-lg flex items-center justify-center w-60 h-60"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <img
//             src="/loggo.jpg"
//             alt="Logo"
//             className="w-40 h-40 object-cover"
//           />
//         </motion.div>

//         {/* Right Column */}
//         <div className="flex flex-col gap-6">
//           {values.slice(3, 6).map((value, index) => (
//             <motion.div
//               key={index}
//               className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
//               whileHover={{ scale: 1.1, rotate: 1 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               initial={{ opacity: 0, x: 50 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.2 }}
//             >
//               {value.icon}
//               <h2 className="text-2xl font-semibold mt-4 text-gray-800">
//                 {value.title}
//               </h2>
//               <p className="text-gray-600 mt-2">{value.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Buttons */}
//       <motion.div
//         className="mt-12 flex justify-center gap-6"
//         whileInView={{ opacity: 1 }}
//         initial={{ opacity: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <button className="bg-blue-600 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:bg-blue-700 transition">
//           Request A Quote
//         </button>
//         <button className="bg-gray-800 text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:bg-gray-900 transition">
//           Get In Touch
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default ValuesAndCulture;

import React from "react";

const ValuesAndCulture = () => {
  return (
    <section className="w-full bg-white py-16">
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800">Values and Culture</h1>
      <p className="text-lg text-gray-600 mt-4 px-8 lg:px-32">
        Our values define the way we work and interact, both with our clients and
        within our team. They are the foundation of our company culture, guiding us
        toward delivering exceptional results and fostering strong, collaborative
        relationships.
      </p>
    </div>
  
    <div className="relative flex justify-center items-center">
      {/* Central Circle */}
      <div className="w-[15vw] h-[15vw] rounded-full bg-[#4A9BD3] overflow-hidden absolute flex items-center justify-center">
        <div className="w-[85%] h-[85%] rounded-full flex items-center justify-center bg-white shadow-lg">
          <img src="/bg-rmv.png" alt="Logo" className="w-[40%]" />
        </div>
      </div>
  
      {/* Left Values */}
      <div className="w-1/2 flex flex-col gap-6 items-end pr-12">
        <div className="w-[80%] bg-[#E5F8FF] p-6 rounded-lg shadow-md flex items-center">
          <img src="/gratitude-icon.png" alt="Gratitude Icon" className="w-10 h-10 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-[#4A9BD3]">Gratitude</h3>
            <p className="text-gray-600 text-sm mt-2">
              We lead with an attitude of thankfulness and humility and find ways to
              express our gratitude to those around us every day. We embrace giving
              back, impacting the world for a greater good.
            </p>
          </div>
        </div>
        <div className="w-[70%] bg-[#E5F8FF] p-6 rounded-lg shadow-md flex items-center">
          <img src="/ownership-icon.png" alt="Ownership Icon" className="w-10 h-10 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-[#4A9BD3]">Ownership</h3>
            <p className="text-gray-600 text-sm mt-2">
              We take personal responsibility for our actions and commit to
              responsible stewardship over company and client resources. We
              apologize when we make mistakes and work to make things right. We can
              do hard things.
            </p>
          </div>
        </div>
        <div className="w-[80%] bg-[#E5F8FF] p-6 rounded-lg shadow-md flex items-center">
          <img src="/think-bigger-icon.png" alt="Think Bigger Icon" className="w-10 h-10 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-[#4A9BD3]">Think Bigger</h3>
            <p className="text-gray-600 text-sm mt-2">
              We strive for continuous improvement and believe that better never
              stops! We don’t take the easy way out. We embrace change, adapt, and
              overcome.
            </p>
          </div>
        </div>
      </div>
  
      {/* Right Values */}
      <div className="w-1/2 flex flex-col gap-6 items-start pl-12">
        <div className="w-[80%] bg-[#E5F8FF] p-6 rounded-lg shadow-md flex items-center">
          <img src="/respect-icon.png" alt="Respect Icon" className="w-10 h-10 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-[#4A9BD3]">Respect</h3>
            <p className="text-gray-600 text-sm mt-2">
              We operate with positive assumptions and give the benefit of the doubt,
              choosing to see the best in ourselves and others. We will respect
              others at all times and refrain from gossip or reacting with anger.
            </p>
          </div>
        </div>
        <div className="w-[70%] bg-[#E5F8FF] p-6 rounded-lg shadow-md flex items-center">
          <img src="/work-ethic-icon.png" alt="Work Ethic Icon" className="w-10 h-10 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-[#4A9BD3]">Work Ethic</h3>
            <p className="text-gray-600 text-sm mt-2">
              We give our best effort and have high-performance expectations. We are
              organized, proactive, and work with a sense of urgency. We emphasize a
              work-life balance where we work hard during business hours but
              prioritize our time off for our well-being.
            </p>
          </div>
        </div>
        <div className="w-[80%] bg-[#E5F8FF] p-6 rounded-lg shadow-md flex items-center">
          <img src="/honesty-icon.png" alt="Honesty Icon" className="w-10 h-10 mr-4" />
          <div>
            <h3 className="text-xl font-bold text-[#4A9BD3]">Honesty</h3>
            <p className="text-gray-600 text-sm mt-2">
              We seek to build trust and mutual respect by acting with integrity and
              doing the right thing no matter how difficult.
            </p>
          </div>
        </div>
      </div>
    </div>
  
    <div className="flex justify-center gap-6 mt-12">
      <button className="bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800">
        Request A Quote
      </button>
      <button className="bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800">
        Get In Touch
      </button>
    </div>
  </section>
  
  );
};

export default ValuesAndCulture;
