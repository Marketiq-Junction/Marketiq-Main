import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cards = [
    {
      title: "Digital Marketing Analysis",
      points: [
        "Evaluate key metrics and user behavior to identify areas for improvement.",
        "Optimize campaigns for better engagement and ROI.",
        "Use data-driven insights to refine strategies."
      ],
    },
    {
      title: "Conversion Rate Optimization",
      points: [
        "Increase the percentage of visitors taking desired actions.",
        "Analyze user behavior to enhance the user experience.",
        "Maximize ROI by refining conversion strategies."
      ],
    },
    {
      title: "Social Media Marketing",
      points: [
        "Build brand awareness and engage target audiences.",
        "Create compelling content and utilize targeted advertising.",
        "Drive traffic and foster customer loyalty."
      ],
    },
  ];

  return (
    <section ref={ref} className="bg-[#DFF4F4] py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading Section */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-bold text-gray-700 uppercase mb-4">
            Why Choose Us
          </h3>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Turn your site into a revenue driver with Digital Insides
          </h1>
          <ul className="text-gray-700 text-lg mb-6 space-y-3">
            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3 }}
            >
              <span className="text-blue-600 mr-2">&#10148;</span>
              Transform your website into a powerful revenue driver with tailored, data-driven strategies.
            </motion.li>
            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span className="text-blue-600 mr-2">&#10148;</span>
              Optimize for better visibility, engagement, and conversions.
            </motion.li>
            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <span className="text-blue-600 mr-2">&#10148;</span>
              Enhance user experience, improve SEO rankings, and maximize conversion rates.
            </motion.li>
          </ul>
          <motion.button
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                {card.title}
              </h3>
              <ul className="text-gray-700 space-y-2">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-2">&#10148;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
