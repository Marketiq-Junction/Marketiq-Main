import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const MarketingSection = () => {
  const handleWhatsAppClick = (message) => {
    const whatsappNumber = "9920892689"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    // GA4 Event (if GA4 is loaded)
    if (typeof gtag === "function") {
      gtag("event", "talk_to_us_click", {
        event_category: "button",
        event_label: "Talk to Us Button",
        value: 1,
      });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-12 lg:py-20 bg-white">
      {/* Text Section */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-center lg:text-left">
          DRIVING A <span className="text-teal-600">BETTER WAY</span> OF <br />{" "}
          DOING MARKETING
        </h1>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 text-center lg:text-left leading-relaxed">
          <strong className="text-teal-600">Marketiq Junction</strong> is your
          trusted{" "}
          <span className="text-teal-500 font-semibold">digital marketing</span>{" "}
          partner. We specialize in creating{" "}
          <span className="text-teal-500 font-semibold">
            tailored solutions
          </span>{" "}
          that help brands grow in the fast-paced{" "}
          <span className="text-teal-500 font-semibold">digital world</span>.
          Our{" "}
          <span className="text-teal-500 font-semibold">
            affordable services
          </span>{" "}
          enable businesses of all sizes to access professional digital
          marketing without stretching their budgets.
        </p>

        <h2 className="mt-8 text-xl sm:text-2xl font-semibold text-teal-600 text-center lg:text-left">
          What Sets Us Apart?
        </h2>

        <ul className="mt-4 text-gray-700 text-base sm:text-lg list-disc list-inside text-center lg:text-left space-y-2">
          <li>
            <strong className="text-teal-500">Affordability:</strong> Quality
            services at a fraction of the cost.
          </li>
          <li>
            <strong className="text-teal-500">Customization:</strong> We create
            strategies tailored to each business's unique needs.
          </li>
          <li>
            <strong className="text-teal-500">Full-Spectrum Services:</strong>{" "}
            From web design to analytics, we offer comprehensive solutions to
            enhance your online presence.
          </li>
        </ul>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={() =>
              handleWhatsAppClick(
                "Hello, I would like to get in touch regarding your services."
              )
            }
            className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <FaWhatsapp className="text-white text-xl" />
            Talk to Us
          </button>
        </div>
      </motion.div>

      {/* Illustration Section */}
      <motion.div
        className="lg:w-1/2 mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/about1.png" // Replace with your image path
          alt="Marketing Illustration"
          className="w-full sm:w-[90%] lg:max-w-full mx-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default MarketingSection;
