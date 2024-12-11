import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceSection = () => {
  // Data for services and their corresponding details
  const services = [
    {
      title: "Search Engine Optimization",
      description:
        "Driving a better way of doing marketing through SEO involves enhancing your brand's online visibility to attract organic traffic. We optimize your website to ensure it ranks high in search results, targeting relevant keywords that connect with your audience. By focusing on user experience, we create seamless navigation and fast-loading pages that keep visitors engaged. Our data-driven strategies continuously adapt to search trends, providing sustainable growth without ongoing ad costs. Ultimately, our approach builds long-term authority and trust for your brand in the digital landscape.",
    },
    {
      title: "Social Media Management",
      description:
        "Driving a better way of doing marketing through Social Media Management focuses on engaging your audience and enhancing brand visibility. We craft tailored content that resonates with your target demographic, ensuring consistent interaction across platforms like Instagram, Facebook, and LinkedIn. By analyzing performance metrics, we adapt strategies to maximize engagement and reach. Our proactive community management fosters trust and loyalty among your followers. Ultimately, we turn your social media presence into a powerful tool for brand growth.",
    },
    {
      title: "Website Management",
      description:
        "Driving a better way of doing marketing through Website Management ensures your site is user-friendly and optimized for performance. We prioritize regular updates and maintenance to keep your site secure and relevant. Our focus on SEO optimization boosts your site’s visibility in search engine results. With comprehensive analytics, we analyze user behavior to enhance engagement and conversions. Ultimately, effective website management transforms your site into a key asset for driving business growth.",
    },
    {
      title: "Google My Business",
      description:
        "Driving a better way of doing marketing through Google My Business enhances your local visibility and helps attract more customers. By creating and optimizing your Google My Business profile, you ensure accurate and up-to-date information about your business is available to potential clients. This tool allows you to engage with customers directly through reviews and Q&A, building trust and credibility. Additionally, you can post updates, offers, and events, keeping your audience informed and engaged. Overall, a well-managed Google My Business listing is crucial for driving foot traffic and improving your local SEO strategy.",
    },
    {
      title: "YouTube Marketing",
      description:
        "Driving a better way of doing marketing through YouTube Marketing allows businesses to reach a vast audience with engaging video content. By creating and optimizing a dedicated YouTube channel, you can showcase your products or services while building brand awareness. Consistently posting high-quality videos enhances your visibility in search results and encourages audience interaction through likes, comments, and shares. Additionally, leveraging SEO strategies within your videos helps attract targeted viewers interested in your niche. Ultimately, effective YouTube marketing transforms your brand into a relatable and influential presence in the digital landscape.",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Analytics and reporting are essential for understanding the performance of your digital marketing strategies. By tracking key metrics, you gain insights into user behavior and engagement across various platforms. These insights allow you to identify what works and what needs improvement, facilitating data-driven decision-making. Regularly analyzing reports helps in fine-tuning campaigns and optimizing resource allocation for better results. Ultimately, effective analytics ensure that your marketing efforts align with your business goals, leading to sustained growth and success.",
    },
  ];

  // State to manage the currently selected service
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <div className="w-full p-8 bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">WHAT WE DO</h2>
      <h3 className="text-4xl font-bold mb-6 text-center">Driving a better way of doing marketing</h3>
      <p className="text-xl mb-4 text-center">we provide smart and affordable digital marketing solutions 
      tailored to your business needs. Whether you're looking to improve your website, enhance your social media presence, or optimize for search engines, we’ve got you covered.</p>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section: Service List */}
        <div className="bg-[#50C3C6] rounded-l-xl p-4 w-full md:w-1/3">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveService(service)}
              className={`cursor-pointer py-3 px-4 mb-2 rounded-md flex items-center justify-between ${
                activeService.title === service.title
                  ? "bg-white text-black"
                  : "text-white"
              }`}
            >
              <span>{service.title}</span>
              {activeService.title === service.title && (
                <FaArrowRight className="text-[#50C3C6]" />
              )}
            </div>
          ))}
        </div>

        {/* Right Section: Service Details */}
        <div className="bg-[#3F85B5] rounded-r-xl p-6 text-white w-full md:w-2/3">
          <h4 className="text-2xl font-bold mb-4">{activeService.title}</h4>
          <p className="text-lg leading-relaxed">{activeService.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
