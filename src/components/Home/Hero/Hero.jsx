import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [whatsappMessage, setWhatsappMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (whatsappMessage.trim()) {
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappNumber = "9920892689"; // Replace with the desired WhatsApp number
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");
    } else {
      alert("Please enter a message.");
    }
  };

  return (
    <motion.section
      className="herosection bg-[#4A9BD3] w-full h-auto flex flex-col lg:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Section: Text and Form */}
      <motion.div
        className="lg:w-[60%] w-full flex items-center justify-center flex-col p-5 lg:p-0"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full px-5 lg:px-20 text-white text-center lg:text-left mt-10 lg:mt-0">
          <motion.h1
            className="text-[8vw] lg:text-[4vw] font-semibold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Digital <br className="hidden lg:block" /> marketing that <br /> drives revenue
          </motion.h1>
        </div>
        <motion.form
          className="w-full flex items-center justify-center lg:justify-start px-5 lg:px-20 mt-5 lg:mt-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          onSubmit={handleSendMessage}
        >
          <div className="w-full lg:w-[60%] rounded-3xl bg-white shadow-lg p-4">
            <div className="w-full flex flex-col lg:flex-row items-center gap-5">
              <motion.input
                type="text"
                placeholder="Enter your message"
                className="w-full lg:w-[70%] text-[4vw] lg:text-[1.2vw] px-4 py-3 rounded-3xl border-2 border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
                whileFocus={{ scale: 1.05 }}
                value={whatsappMessage}
                onChange={(e) => setWhatsappMessage(e.target.value)}
              />
              <motion.input
                type="submit"
                value="Send"
                className="w-full lg:w-[30%] text-[4vw] lg:text-[1.2vw] py-3 rounded-xl bg-[#50C3C6] text-white cursor-pointer transition-all duration-300 hover:bg-[#4A9BD3]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </div>
          </div>
        </motion.form>
      </motion.div>

      {/* Right Section: Image */}
      <motion.div
        className="lg:w-[40%] w-full flex items-center justify-center mt-16 lg:mt-0 mb-16"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[60vh] flex-shrink-0"
          // whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src="/hero17.png"
            alt="Hero Image"
            className="w-full h-full object-cover rounded-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
