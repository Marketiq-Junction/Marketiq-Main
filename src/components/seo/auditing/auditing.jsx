import React from "react";

const WebsiteAudit = () => {
  const auditItems = [
    {
      title: "META DESCRIPTIONS, ALT TEXT",
      description: [
        "Summarize webpage content for search engines.",
        "Use ALT text for accessibility and SEO.",
      ],
      icon: "📝",
    },
    {
      title: "URL STRUCTURE",
      description: [
        "Optimize URL for better SEO.",
        "Ensure concise and keyword-rich URLs.",
      ],
      icon: "🔗",
    },
    {
      title: "NAVIGATION STRUCTURE",
      description: [
        "Create user-friendly menus.",
        "Improve navigation for better usability.",
      ],
      icon: "🧭",
    },
    {
      title: "DUPLICATE COPY CHECK",
      description: [
        "Ensure content is unique.",
        "Avoid search engine penalties.",
      ],
      icon: "✅",
    },
    {
      title: "A/B AND MULTIVARIATE TESTING",
      description: [
        "Test content versions to optimize performance.",
        "Improve engagement and conversions.",
      ],
      icon: "📊",
    },
    {
      title: "BACKLINK REVIEW",
      description: [
        "Analyze backlink quality.",
        "Improve domain authority and SEO ranking.",
      ],
      icon: "🔍",
    },
  ];

  const handleWhatsAppClick = () => {
    const whatsappNumber = "9920892689"; // Replace with your WhatsApp number
    const message = "Hello, I would like to request a quote for a website audit.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white py-16 px-6 md:py-20 md:px-12 lg:px-20 lg:mb-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Auditing Your Website</h2>
          <p className="text-base md:text-lg mt-4 text-gray-600">
            A comprehensive assessment to optimize performance, design, and content for better user experience and SEO.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {auditItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#4A9BD3] text-white p-6 shadow-lg transform transition-transform duration-300 hover:-translate-y-2 "
            >
              {/* Icon */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#50C3C6] text-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-3xl">{item.icon}</div>
              </div>
              {/* Title and Description */}
              <h3 className="mt-14 text-lg font-bold text-center mb-4">{item.title}</h3>
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
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-black py-3 px-6 border-2 border-[#4A9BD3] shadow-lg hover:bg-[#50C3C6] transition duration-300"
          >
            Request A Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebsiteAudit;
