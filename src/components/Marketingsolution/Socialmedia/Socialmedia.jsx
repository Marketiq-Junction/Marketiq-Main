"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Socialmedia = () => {
  const [website, setWebsite] = useState("");
  const whatsappNumber = "9920892689";

  const handleWhatsAppClick = () => {
    if (!website) {
      alert("Please enter your website URL.");
      return;
    }

    const message = `Hello, I would like to request a quote for social media marketing services for my website: ${website}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const bullets = [
    "Create engaging campaigns that increase brand awareness.",
    "Optimize social media channels for maximum reach and engagement.",
    "Develop content strategies tailored to your audience.",
    "Track metrics and performance to measure ROI effectively.",
    "Drive results using data-driven marketing strategies.",
  ];

  return (
    <section className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-teal-500 to-cyan-600 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-10 items-center">
        {/* Left Side Content */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Social Media Marketing
          </h1>

          <motion.ul
            className="space-y-4 text-white text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
          >
            {bullets.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-white font-extrabold text-lg">➤</span>
                {point}
              </li>
            ))}
          </motion.ul>

 
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/socialmedia/one.png"
            alt="Social Media Marketing Illustration"
            className="w-[90%] sm:w-[75%] md:w-[60%] lg:w-[80%] h-auto"
          />
        </motion.div>
      </div>

      {/* Social Media Icons Section */}
      <section className="bg-cyan-100 py-6 w-full mt-10">
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            {
              name: "instagram",
              color: "from-pink-500 via-red-500 to-yellow-500",
              url: "https://www.instagram.com/marketiq_junction/",
            },
            {
              name: "whatsapp",
              color: "bg-green-500",
              url: "https://wa.me/+919920892689",
            },
            {
              name: "facebook",
              color: "bg-blue-500",
              url: "https://www.facebook.com/people/Marketiq-Junction/61567512213882/",
            },
            {
              name: "linkedin",
              color: "bg-blue-700",
              url: "https://www.linkedin.com",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }} // ✅ Only pop-up effect
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex items-center justify-center w-16 h-16 ${
                social.color.includes("from")
                  ? `bg-gradient-to-br ${social.color}`
                  : social.color
              } rounded-lg shadow-lg hover:shadow-cyan-400/40`}
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  typeof gtag === "function"
                ) {
                  gtag("event", "social_click", {
                    event_category: "Social Media",
                    event_label: `${social.name} Click`,
                    value: 1,
                  });
                }
              }}
            >
              <i className={`fab fa-${social.name} text-white text-3xl`}></i>
            </motion.a>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Socialmedia;
