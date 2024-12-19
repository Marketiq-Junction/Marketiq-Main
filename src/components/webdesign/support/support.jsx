import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Content Writing",
    description: [
      "Engage your audience with high-quality content.",
      "Enhance your website’s SEO with strategic keywords.",
      "Drive traffic and boost conversion rates.",
      "Ensure your brand stands out online.",
    ],
  },
  {
    title: "Video Production",
    description: [
      "Create engaging content that captures attention.",
      "Convey your brand message effectively.",
      "Leverage high-quality video editing and animations.",
      "Drive user engagement across platforms.",
    ],
  },
  {
    title: "Logo Design",
    description: [
      "Create unique and memorable logos.",
      "Blend creativity and strategy to resonate with your audience.",
      "Set the tone for your brand’s visual presence.",
      "Ensure your logo reflects your brand identity.",
    ],
  },
  {
    title: "Technical SEO",
    description: [
      "Optimize technical aspects for better performance.",
      "Improve site speed and mobile-friendliness.",
      "Enhance crawlability and proper URL structures.",
      "Achieve better search rankings and user experience.",
    ],
  },
];

const Support = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-[#E5F8FF] py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our other services that Support Your Website Marketing
          </h2>
          <p className="text-lg text-gray-600">
            Explore a range of professional services designed to enhance your
            website’s impact and reach.
          </p>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {service.title}
              </h3>
              <ul className="pl-6 space-y-3">
                {service.description.map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="text-gray-600 flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <span
                      className="text-blue-600 font-extrabold text-xl"
                    >
                      ➤
                    </span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
