"use client";
import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Socialmedia() {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "9920892689"; // Replace with your WhatsApp number
    const message = "Hello, I would like to request a free quote for social media marketing.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="bg-[#4A9BD3] p-12 h-auto text-left">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl font-bold text-white font-syne mb-6">
              Social Media Marketing
            </h2>
            <p className="text-2xl mb-8 text-white font-poppins font-normal leading-8">
              Ensuring the best return on investment for your bespoke SEO <br />
              Campaign requirement.
            </p>
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
                className="w-[90%] h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section>
        <div className="flex justify-center gap-6 bg-cyan-200 py-6">
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
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`flex items-center justify-center w-16 h-16 ${
              social.color.includes("from") ? `bg-gradient-to-br ${social.color}` : social.color
            } rounded-lg shadow-lg`}
            onClick={() => {
              // GA4 custom event tracking
              if (typeof window !== "undefined" && typeof gtag === "function") {
                gtag("event", "social_click", {
                  event_category: "Social Media",
                  event_label: `${social.name} Click`, // dynamic label for the social media platform
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
    </>
  );
}

export default Socialmedia;
