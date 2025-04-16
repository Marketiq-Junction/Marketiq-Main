import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SocialMediaIcon from "@mui/icons-material/Public";
import WebIcon from "@mui/icons-material/Web";  
import BusinessIcon from "@mui/icons-material/BusinessCenter";
import SeoIcon from "@mui/icons-material/Search";
import AnalyticsIcon from "@mui/icons-material/Insights";

const services = [
  {
    title: "Youtube Marketing",
    description: "Convert your visitor into a buyer",
    icon: <YouTubeIcon fontSize="large" style={{ color: "#FF0000" }} />,
  },
  {
    title: "Social Media Management",
    description: "Improve the public perception of your brand",
    icon: <SocialMediaIcon fontSize="large" style={{ color: "#1DA1F2" }} />,
  },
  {
    title: "Web Development",
    description: "Create and maintain Appealing Websites",
    icon: <WebIcon fontSize="large" style={{ color: "#4CAF50" }} />,
  },
  {
    title: "Google My Business",
    description: "Generate SEO-Based Engaging Content",
    icon: <BusinessIcon fontSize="large" style={{ color: "#F4B400" }} />,
  },
  {
    title: "Search Engine Optimization",
    description: "Purchase Promising attractive graphics to promote brand",
    icon: <SeoIcon fontSize="large" style={{ color: "#0F9D58" }} />,
  },
  {
    title: "Analytics & Reporting",
    description: "Create and maintain Appealing Websites",
    icon: <AnalyticsIcon fontSize="large" style={{ color: "#673AB7" }} />,
  },
];

const WhyUs = () => {
  return (
    <section className="bg-[#4A9BD3] py-16 ">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Heading Section */}
        <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
        <p className="text-lg text-white mb-10">
          Our affordable services enable businesses of all sizes to access
          professional digital marketing without stretching their budgets .
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-br-3xl rounded-tl-3xl border-4 border-black shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
      onClick={() => {
        if (typeof window !== "undefined" && typeof gtag === "function") {
          gtag("event", "service_card_click", {
            event_category: "Engagement",
            event_label: `Service Clicked - ${service.title}`,
          });
        }
      }}
      onMouseEnter={() => {
        if (typeof window !== "undefined" && typeof gtag === "function") {
          gtag("event", "service_card_hover", {
            event_category: "Engagement",
            event_label: `Service Hovered - ${service.title}`,
          });
        }
      }}
    >
      <div className="flex justify-center mb-4">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default WhyUs;
