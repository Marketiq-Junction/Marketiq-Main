import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaChartLine,
  FaArrowsAlt,
  FaPencilAlt,
  FaComments,
  FaChartPie,
} from "react-icons/fa";

const Why = () => {
  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.3 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="max-w-8xl mx-auto p-8 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Why Choose Us
      </motion.h2>

      {/* <motion.p
        className="text-[#000000] mb-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Facilisis. Consequat. Litora. Pede eleifend lacus. Massa risus turpis ultrices Urna vulputate non non nisl amet commodo. Sollicitudin. Leo mi curabitur <br />
        euismod orci. Ridiculus sem. Torquent. Ornare euismod, per nullam, ligula morbi natoque nibh faucibus vitae sapien.
      </motion.p> */}

      <div className="flex flex-wrap justify-between items-center gap-6">
        {/* Left Content */}
        <motion.div
          className="flex-1 min-w-[300px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariants}
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#000000]">
            Organic YouTube SEO Optimization
          </h3>
          <ul className="space-y-4">
            <motion.li
              className="flex items-start text-xl"
              variants={listItemVariants}
            >
              <span className="mr-4 text-teal-500">
                <FaGlobe className="text-xl hover:scale-110 transition-transform mt-4" />
              </span>
              We enhance your content's visibility using targeted keywords,
              effective video descriptions, and relevant tags.
            </motion.li>
            <motion.li
              className="flex items-start text-xl"
              variants={listItemVariants}
            >
              <span className="mr-4 text-cyan-500">
                <FaChartLine className="text-xl hover:scale-110 transition-transform mt-4" />
              </span>
              Our SEO strategy improves channel rankings, making your content
              easier for audiences to find.
            </motion.li>
            <motion.li
              className="flex items-start text-xl"
              variants={listItemVariants}
            >
              <span className="mr-4 text-purple-500">
                <FaArrowsAlt className="text-xl hover:scale-110 transition-transform mt-4" />
              </span>
              Organic SEO ensures consistent reach and audience engagement
              without reliance on paid ads.
            </motion.li>
          </ul>
        </motion.div>

        {/* Center Image */}
        <motion.div
          className="flex-1 min-w-[200px] flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/youtube/s2.png"
            alt="SEO Optimization Illustration"
            className="max-w-full h-auto"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-1 min-w-[300px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={listVariants}
        >
          <h3 className="text-3xl font-semibold mb-4">
            Content Strategy and Audience Engagement
          </h3>
          <ul className="space-y-4">
            <motion.li
              className="flex items-start text-xl"
              variants={listItemVariants}
            >
              <span className="mr-4 text-teal-500">
                <FaPencilAlt className="text-xl hover:scale-110 transition-transform mt-4" />
              </span>
              We design organic methods to create content that resonates with
              your audience, based on trends.
            </motion.li>
            <motion.li
              className="flex items-start text-xl"
              variants={listItemVariants}
            >
              <span className="mr-4 text-cyan-500">
                <FaComments className="text-xl hover:scale-110 transition-transform mt-4" />
              </span>
              Through comment interaction, prompts, and end screens, we foster
              genuine viewer engagement.
            </motion.li>
            <motion.li
              className="flex items-start text-xl"
              variants={listItemVariants}
            >
              <span className="mr-4 text-purple-500">
                <FaChartPie className="text-xl hover:scale-110 transition-transform mt-4" />
              </span>
              We continuously monitor your channel's performance and optimize
              based on organic metrics.
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Why;
