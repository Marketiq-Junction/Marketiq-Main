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
      className="herosection w-full h-[80%] flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to Darken the Video */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Content Section */}
      <motion.div
        className="z-20 flex flex-col items-center text-center px-5 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-white font-semibold text-4xl lg:text-7xl mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
         <span className="text-[#4A9BD3]">Digital Marketing </span><br /> That Drives <br /><span className="text-[#50C3C6]">Revenue</span>
        </motion.h1>

        {/* Form */}
        {/* <motion.form
          className="w-full max-w-lg bg-white shadow-lg p-3 flex flex-col gap-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSendMessage}
        >
          <input
            type="text"
            placeholder="Enter your message"
            className="w-full text-lg px-4 py-3 border-2 border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
            value={whatsappMessage}
            onChange={(e) => setWhatsappMessage(e.target.value)}
          />
          <input
            type="submit"
            value="Send"
            className="w-32 py-2 lg:ml-40 text-lg bg-[#50C3C6] text-white cursor-pointer transition-all duration-300 hover:bg-[#4A9BD3]"
          />
        </motion.form> */}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
