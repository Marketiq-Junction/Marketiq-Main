"use client";
import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Socialmedia() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="bg-[#4A9BD3] p-12 h-auto text-left">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white font-syne mb-6 leading-tight">
              Social Media Marketing
            </h2>
            <p className="text-lg mb-8 text-white font-poppins font-normal leading-8">
              Ensuring the best return on investment for your bespoke SEO <br />
              Campaign requirement.
            </p>
            {/* Quote Request Form */}
            <div className="flex flex-col gap-6 max-w-lg">
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <input
                  type="text"
                  placeholder="Select Platform"
                  className="p-3 w-full rounded-md shadow-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Enter URL"
                  className="p-3 w-full rounded-md shadow-md outline-none"
                />
              </motion.div>
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 w-full rounded-md shadow-md outline-none"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="p-3 w-full rounded-md shadow-md outline-none"
                />
              </motion.div>
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white text-[#4A9BD3] px-8 py-3 font-semibold rounded-md shadow-lg transition"
                >
                  Request A Free Quote
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-[40%] w-full h-full flex items-center justify-center mt-10 lg:mt-0"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-[90%] lg:w-[70%] h-[30vh] lg:h-[60%]">
              <img
                src="/images/socialmedia/one.png"
                alt="Hero Image"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section>
        <div className="flex justify-center gap-6 bg-cyan-200 py-6">
          {[
            { name: "instagram", color: "from-pink-500 via-red-500 to-yellow-500", url: "https://www.instagram.com" },
            { name: "whatsapp", color: "bg-green-500", url: "https://www.whatsapp.com" },
            { name: "facebook", color: "bg-blue-500", url: "https://www.facebook.com" },
            { name: "linkedin", color: "bg-blue-700", url: "https://www.linkedin.com" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex items-center justify-center w-16 h-16 ${
                social.color.includes("from") ? `bg-gradient-to-br ${social.color}` : social.color
              } rounded-lg shadow-lg`}
            >
              <i className={`fab fa-${social.name} text-white text-3xl`}></i>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Socialmedia;
