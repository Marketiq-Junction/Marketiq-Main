import React from "react";
import { motion } from "framer-motion";
import { FaRegUserCircle, FaRegEdit, FaRegEye } from "react-icons/fa";

const Process = () => {
  const processes = [
    {
      icon: <FaRegUserCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: "Profile Creation and Optimization",
      desc: "The first step involves:",
      points: [
        "Creating or claiming your Google My Business profile.",
        "Adding your business name, address, phone number, and website URL.",
        "Selecting categories and attributes to make your profile more appealing.",
      ],
    },
    {
      icon: <FaRegEdit className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      title: "Content Development and Updates",
      desc: "We ensure your profile stays active by:",
      points: [
        "Creating posts for promotions, events, and updates.",
        "Sharing engaging content to attract your target audience.",
        "Maintaining regular updates to improve search visibility.",
      ],
    },
    {
      icon: <FaRegEye className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
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
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our Process
        </h2>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          We understand the value of a strong local presence. That's why our
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
            className="p-6 bg-white rounded-2xl shadow-md border-2 border-cyan-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-center text-teal-600 mb-2 group-hover:text-teal-700">
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
                  className="relative before:content-['➤'] before:absolute before:-left-6 before:text-teal-500"
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
