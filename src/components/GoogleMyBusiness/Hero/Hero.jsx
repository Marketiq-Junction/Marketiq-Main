"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const whatsappNumber = "9920892689"; // Replace with your WhatsApp number

  const handleWhatsAppClick = () => {
    const message = "Hello, I would like to know more about Google My Business Management.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center py-8 sm:py-12 bg-[#4A9BD3]">
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-8 px-4 sm:px-8 lg:px-12">
        {/* Left Side Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center md:text-left"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Google My Business <br /> Management
          </motion.h1>

          <motion.ul
            className="text-white space-y-3 sm:space-y-4 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li className="flex items-start gap-3">
              <span className="text-teal-300 font-extrabold text-lg">➤</span>
              Maximize your visibility and connect with local customers.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-300 font-extrabold text-lg">➤</span>
              Optimize your GMB profile to attract more clients.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-300 font-extrabold text-lg">➤</span>
              Drive traffic to your business with strategic updates.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-300 font-extrabold text-lg">➤</span>
              Stay ahead of the competition with enhanced local presence.
            </li>
          </motion.ul>

          <motion.div
            className="relative w-full mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input
              type="text"
              placeholder="Enter Your Website"
              className="w-full py-3 px-4 sm:py-4 sm:px-5 pr-32 md:pr-36 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
            />
            <button
              onClick={handleWhatsAppClick}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-teal-500 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 text-sm sm:text-base"
            >
              Request A Audit
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/GoogleMyBusiness/first1.png"
            alt="Google My Business Illustration"
            className="max-w-full h-auto sm:max-w-md md:max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
