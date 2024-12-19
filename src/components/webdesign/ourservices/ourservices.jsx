import React from "react";

const services = [
  {
    title: "Custom Web Design",
    description: [
      "Tailored website designs to reflect your unique brand identity.",
      "Innovative layouts to captivate and engage your audience.",
      "Seamless navigation for a superior user experience.",
    ],
    icon: "🎨",
  },
  {
    title: "Responsive Web Development",
    description: [
      "Mobile-first design approach for optimal performance.",
      "Cross-platform compatibility to reach a wider audience.",
      "Fast loading speeds for a seamless browsing experience.",
    ],
    icon: "📱",
  },
  {
    title: "E-commerce Development",
    description: [
      "Custom e-commerce solutions for seamless online shopping.",
      "Secure payment gateways to protect customer transactions.",
      "Advanced features to boost sales and conversions.",
    ],
    icon: "🛒",
  },
  {
    title: "Content Management System",
    description: [
      "User-friendly CMS platforms for effortless management.",
      "Scalable solutions to accommodate business growth.",
      "Custom integrations tailored to your specific needs.",
    ],
    icon: "📄",
  },
  {
    title: "SEO Optimization",
    description: [
      "In-depth keyword research to enhance visibility.",
      "On-page and off-page optimization for better rankings.",
      "Analytics-driven strategies to maximize ROI.",
    ],
    icon: "🔍",
  },
  {
    title: "Maintenance & Support",
    description: [
      "24/7 technical support for uninterrupted operations.",
      "Regular updates to ensure security and performance.",
      "Proactive monitoring to prevent potential issues.",
    ],
    icon: "🛠️",
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#A2DFE1] to-[#4A9BD3] py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-black">Our Services</h2>
        <p className="text-gray-900 mt-4 max-w-3xl mx-auto mb-4">
          Discover the specialized services crafted to meet your digital needs!
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-[#4A9BD3] text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#4A9BD3]">{service.title}</h3>
              <ul className="text-gray-600 mt-2 space-y-2 text-left">
                {service.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#4A9BD3] mr-2">➤</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
