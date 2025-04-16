import React from "react";

const Offers = () => {
  const services = [
    {
      title: "Link Building",
      description: [
        " Improve site's authority and visibility.",
        " Secure high-quality backlinks.",
        " Boost search engine rankings."
      ],
      icon: "🔗",
    },
    {
      title: "Content Optimization",
      description: [
        " Optimize content for search engines and users.",
        " Use high-performing keywords.",
        " Ensure relevance and engagement."
      ],
      icon: "📊",
    },
    {
      title: "On-Page SEO",
      description: [
        " Optimize meta tags, headers, and images.",
        " Align content with search engine guidelines.",
        " Enhance website relevance and reach."
      ],
      icon: "🛠️",
    },
    {
      title: "Keyword Research",
      description: [
        " Identify high-value keywords.",
        " Drive relevant traffic to your site.",
        " Improve content rankings."
      ],
      icon: "🔍",
    },
    {
      title: "Technical SEO",
      description: [
        " Improve website speed and mobile-friendliness.",
        " Ensure easy indexing by search engines.",
        " Enhance overall user experience."
      ],
      icon: "⚙️",
    },
    {
      title: "Off-Page SEO",
      description: [
        " Build website authority with quality backlinks.",
        " Leverage content marketing and collaborations.",
        " Improve credibility and search rankings."
      ],
      icon: "📜",
    },
  ];

  return (
    <section className="bg-[#4A9BD3] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-left">
        <h3 className="text-xl uppercase text-black font-semibold mb-4 text-center">
          What We’re Offering
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          We are specialized in the<br />following services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((service, index) => (
    <div
      key={index}
      className="bg-white text-black p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:bg-gradient-to-r hover:from-[#4A9BD3] hover:to-[#50C3C6] hover:text-white"
      onMouseEnter={() => {
        // Track GA4 event when service item is hovered over
        if (typeof window !== "undefined" && typeof gtag === "function") {
          gtag("event", "hover", {
            event_category: "Service Interaction",
            event_label: `Service Hovered: ${service.title}`,
          });
        }
      }}
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <ul className="text-sm mb-6 list-disc list-inside">
        {service.description.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
      <hr className="border-t border-gray-300 mb-4" />
      <h4 className="text-lg font-semibold">{service.title}</h4>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Offers;
