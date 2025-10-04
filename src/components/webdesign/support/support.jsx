import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Content Writing",
    points: [
      "Engage your audience with compelling content.",
      "Enhance your website's SEO.",
      "Drive traffic and boost conversions.",
    ],
  },
  {
    title: "Video Production",
    points: [
      "Create engaging content that captures attention.",
      "Convey your brand message effectively.",
      "Optimize videos for online platforms.",
    ],
  },
  {
    title: "Logo Design",
    points: [
      "Design unique and memorable logos.",
      "Reflect your brand's identity and values.",
      "Resonate with your target audience.",
    ],
  },
  {
    title: "Technical SEO",
    points: [
      "Optimize technical aspects of your website.",
      "Improve site speed and mobile-friendliness.",
      "Enhance visibility and search rankings.",
    ],
  },
];

const Support = () => {
  return (
    <section className="bg-gradient-to-b from-teal-500 to-cyan-600 py-16 mb-8 ">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Our Other Services That Support Your Website Marketing
          </h2>
          <p className="text-xl text-white">
            Explore our wide range of services designed to strengthen your
            online presence and deliver impactful results.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/117.png"
              alt="Supporting Services"
              className="w-[70%] h-auto mx-auto md:mx-0"
            />
          </motion.div>

          {/* Right Service Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg p-6 border-2 border-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent mb-3">
                  {service.title}
                </h3>
                <ul className="text-gray-600 space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-500">&#9656;</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Support;
