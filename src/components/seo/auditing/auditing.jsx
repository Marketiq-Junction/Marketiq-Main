import React from "react";
import {
  FaFileAlt,
  FaLink,
  FaCompass,
  FaCheckCircle,
  FaChartBar,
  FaSearch,
} from "react-icons/fa";

const WebsiteAudit = () => {
  const auditItems = [
    {
      title: "META DESCRIPTIONS, ALT TEXT",
      description: [
        "Summarize webpage content for search engines.",
        "Use ALT text for accessibility and SEO.",
      ],
      icon: <FaFileAlt className="text-4xl text-white" />,
    },
    {
      title: "URL STRUCTURE",
      description: [
        "Optimize URL for better SEO.",
        "Ensure concise and keyword-rich URLs.",
      ],
      icon: <FaLink className="text-4xl text-white" />,
    },
    {
      title: "NAVIGATION STRUCTURE",
      description: [
        "Create user-friendly menus.",
        "Improve navigation for better usability.",
      ],
      icon: <FaCompass className="text-4xl text-white" />,
    },
    {
      title: "DUPLICATE COPY CHECK",
      description: [
        "Ensure content is unique.",
        "Avoid search engine penalties.",
      ],
      icon: <FaCheckCircle className="text-4xl text-white" />,
    },
    {
      title: "A/B AND MULTIVARIATE TESTING",
      description: [
        "Test content versions to optimize performance.",
        "Improve engagement and conversions.",
      ],
      icon: <FaChartBar className="text-4xl text-white" />,
    },
    {
      title: "BACKLINK REVIEW",
      description: [
        "Analyze backlink quality.",
        "Improve domain authority and SEO ranking.",
      ],
      icon: <FaSearch className="text-4xl text-white" />,
    },
  ];

  const handleWhatsAppClick = () => {
    const whatsappNumber = "9920892689"; // Replace with your WhatsApp number
    const message =
      "Hello, I would like to request a quote for a website audit.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white py-16 px-6 md:py-20 md:px-12 lg:px-20 lg:mb-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Auditing Your Website
          </h2>
          <p className="text-base md:text-lg mt-4 text-gray-600">
            A comprehensive assessment to optimize performance, design, and
            content for better user experience and SEO.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {auditItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-6 shadow-lg rounded-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                {item.icon}
              </div>

              {/* Title and Description */}
              <h3 className="mt-14 text-lg font-bold text-center mb-4">
                {item.title}
              </h3>
              <ul className="text-sm text-center leading-relaxed space-y-2">
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
        
        </div>
      </div>
    </section>
  );
};

export default WebsiteAudit;
