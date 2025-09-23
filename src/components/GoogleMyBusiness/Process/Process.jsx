// import { FaRegUserCircle, FaRegEdit, FaRegEye } from "react-icons/fa";

// const Process = () => {
//   return (
//     <section className="py-12 bg-white">
//       {/* Header Section */}
//       <div className="text-center mb-8 px-4">
//         <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Process</h2>
//         <p className="text-[#000000] text-lg sm:text-base leading-relaxed">
//         We understand the value of a strong local presence. That’s why our Google My Business (GMB) services are tailored to boost your visibility and connect you with local customers.<br/> An optimized GMB profile helps attract more clients and drive traffic to your business.
//         </p>
//       </div>

//       {/* Process Cards Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
//         {/* Card 1 */}
//         <div className="p-6 bg-[#A2DFE1] rounded-tl-3xl rounded-br-3xl shadow-lg border-2 border-blue-500 hover:bg-white hover:border-[#4A9BD3] transition-all duration-300 group">
//           <div className="mb-4 flex justify-center">
//             <FaRegUserCircle className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
//           </div>
//           <h3 className="text-blue-600 text-center text-lg sm:text-xl mb-2 group-hover:text-black">
//             Profile Creation and Optimization
//           </h3>
//           <p className="text-gray-700 text-sm sm:text-base text-center">
//             The first step involves:
//           </p>
//           <ul className="text-gray-700 text-sm sm:text-base text-left list-none pl-6 mt-2">
//             <li className="relative before:content-['➤'] before:absolute before:-left-6 before:text-[#3863F5]">
//               Creating or claiming your Google My Business profile.
//             </li>
//             <li className="relative before:content-['➤'] before:absolute before:-left-6 before:text-[#3863F5]">
//               Adding your business name, address, phone number, and website URL.
//             </li>
//             <li className="relative before:content-['➤'] before:absolute before:-left-6 before:text-[#3863F5]">
//               Selecting business categories and attributes to make your profile
//               more appealing.
//             </li>
//           </ul>
//         </div>

//         {/* Card 2 */}
//         <div className="p-6 bg-[#A2DFE1] rounded-tl-3xl rounded-br-3xl shadow-lg border-2 border-blue-500 hover:bg-white hover:border-[#4A9BD3] transition-all duration-300 group">
//           <div className="mb-4 flex justify-center">
//             <FaRegEdit className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
//           </div>
//           <h3 className="text-blue-600 text-center text-lg sm:text-xl mb-2 group-hover:text-black">
//             Content Development and Regular Updates
//           </h3>
//           <p className="text-gray-700 text-sm sm:text-base text-center">
//             We ensure your profile stays active by:
//           </p>
//           <ul className="text-gray-700 text-sm sm:text-base text-left list-none pl-6 mt-2">
//             <li className="relative before:content-['➤'] before:absolute before:-left-6 before:text-[#3863F5]">
//               Creating posts for promotions, events, and updates.
//             </li>
//             <li className="relative before:content-['➤'] before:absolute before:-left-6 before:text-[#3863F5]">
//               Sharing engaging content to attract your target audience.
//             </li>
//             <li className="relative before:content-['➤'] before:absolute before:-left-6 before:text-[#3863F5]">
//               Maintaining regular updates to improve local search visibility.
//             </li>
//           </ul>
//         </div>

//         {/* Card 3 */}
//         <div className="p-6 bg-[#A2DFE1] rounded-tl-3xl rounded-br-3xl shadow-lg border-2 border-blue-500 hover:bg-white hover:border-[#4A9BD3] transition-all duration-300 group">
//           <div className="mb-4 flex justify-center">
//             <FaRegEye className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
//           </div>
//           <h3 className="text-blue-600 text-center text-lg sm:text-xl mb-2 group-hover:text-black">
//             Monitoring and Review Management
//           </h3>
//           <p className="text-gray-700 text-sm sm:text-base text-center">
//             We continuously monitor customer interactions by:
//           </p>
//           <ul className="text-gray-700 text-sm sm:text-base text-left list-none pl-6 mt-2">
//             <li className="relative before:content-['➤'] before:absolute before:-left-6 before:text-[#3863F5]">
//               Analyzing trends and customer feedback.
//             </li>
//             <li className="relative before:content-['➤'] before:absolute before:-left-6 before:text-[#3863F5]">
//               Managing reviews to encourage positive interactions.
//             </li>
//             <li className="relative before:content-['➤'] before:absolute before:-left-6 before:text-[#3863F5]">
//               Developing strategies to attract more clients.
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;


"use client";

import { motion } from "framer-motion";
import { FaRegUserCircle, FaRegEdit, FaRegEye } from "react-icons/fa";

const Process = () => {
  const processes = [
    {
      icon: (
        <FaRegUserCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#4A9BD3]" />
      ),
      title: "Profile Creation and Optimization",
      desc: "The first step involves:",
      points: [
        "Creating or claiming your Google My Business profile.",
        "Adding your business name, address, phone number, and website URL.",
        "Selecting categories and attributes to make your profile more appealing.",
      ],
    },
    {
      icon: <FaRegEdit className="w-8 h-8 sm:w-10 sm:h-10 text-[#4A9BD3]" />,
      title: "Content Development and Updates",
      desc: "We ensure your profile stays active by:",
      points: [
        "Creating posts for promotions, events, and updates.",
        "Sharing engaging content to attract your target audience.",
        "Maintaining regular updates to improve search visibility.",
      ],
    },
    {
      icon: <FaRegEye className="w-8 h-8 sm:w-10 sm:h-10 text-[#4A9BD3]" />,
      title: "Monitoring and Review Management",
      desc: "We continuously monitor customer interactions by:",
      points: [
        "Analyzing trends and customer feedback.",
        "Managing reviews to encourage positive interactions.",
        "Developing strategies to attract more clients.",
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
          Our Process
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          We understand the value of a strong local presence. That’s why our
          Google My Business (GMB) services are tailored to boost your
          visibility and connect you with local customers. An optimized GMB
          profile helps attract more clients and drive traffic to your business.
        </p>
      </div>

      {/* Process Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {processes.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="p-6 bg-[#EAF7FB] rounded-2xl shadow-md border-2 border-transparent hover:border-[#4A9BD3] hover:bg-white transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-[#D1EBF7] rounded-full group-hover:bg-[#4A9BD3] transition">
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-center text-[#1E40AF] mb-2 group-hover:text-[#0F172A]">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base text-center mb-3">
              {item.desc}
            </p>

            {/* Points */}
            <ul className="text-gray-700 text-sm sm:text-base text-left space-y-2 pl-6">
              {item.points.map((point, idx) => (
                <li
                  key={idx}
                  className="relative before:content-['➤'] before:absolute before:-left-6 before:text-[#4A9BD3]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
