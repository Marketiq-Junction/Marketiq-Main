// components/ServiceSection.js
import React from "react";
import { FaArrowRight } from "react-icons/fa";
  // List of services to display
  const services = [
    "Search engine optimization",
    "Social Media Management",
    "Website Management",
    "Google My Business",
    "YouTube Marketing",
    "Analytics & Reporting",
  ];

  // Content for each service
  const serviceContent = [
    "Driving a better way of doing marketing through SEO involves enhancing your brand's online visibility to attract organic traffic. We optimize your website to ensure it ranks high in search results, targeting relevant keywords that connect with your audience. By focusing on user experience, we create seamless navigation and fast-loading pages that keep visitors engaged. Our data-driven strategies continuously adapt to search trends, providing sustainable growth without ongoing ad costs. Ultimately, our approach builds long-term authority and trust for your brand in the digital landscape.",
    "Driving a better way of doing marketing through Social Media Management focuses on engaging your audience and enhancing brand visibility. We craft tailored content that resonates with your target demographic, ensuring consistent interaction across platforms like Instagram, Facebook, and LinkedIn. By analyzing performance metrics, we adapt strategies to maximize engagement and reach. Our proactive community management fosters trust and loyalty among your followers. Ultimately, we turn your social media presence into a powerful tool for brand growth.",
    "Driving a better way of doing marketing through Website Management ensures your site is user-friendly and optimized for performance. We prioritize regular updates and maintenance to keep your site secure and relevant. Our focus on SEO optimization boosts your site's visibility in search engine results. With comprehensive analytics, we analyze user behavior to enhance engagement and conversions. Ultimately, effective website management transforms your site into a key asset for driving business growth.",
    "Driving a better way of doing marketing through Google My Business enhances your local visibility and helps attract more customers. By creating and optimizing your Google My Business profile, you ensure accurate and up-to-date information about your business is available to potential clients. This tool allows you to engage with customers directly through reviews and Q&A, building trust and credibility. Additionally, you can post updates, offers, and events, keeping your audience informed and engaged. Overall, a well-managed Google My Business listing is crucial for driving foot traffic and improving your local SEO strategy.",
    "Driving a better way of doing marketing through YouTube Marketing allows businesses to reach a vast audience with engaging video content. By creating and optimizing a dedicated YouTube channel, you can showcase your products or services while building brand awareness. Consistently posting high-quality videos enhances your visibility in search results and encourages audience interaction through likes, comments, and shares. Additionally, leveraging SEO strategies within your videos helps attract targeted viewers interested in your niche. Ultimately, effective YouTube marketing transforms your brand into a relatable and influential presence in the digital landscape.",
    "Analytics and reporting are essential for understanding the performance of your digital marketing strategies. By tracking key metrics, you gain insights into user behavior and engagement across various platforms. These insights allow you to identify what works and what needs improvement, facilitating data-driven decision-making. Regularly analyzing reports helps in fine-tuning campaigns and optimizing resource allocation for better results. Ultimately, effective analytics ensure that your marketing efforts align with your business goals, leading to sustained growth and success.",
  ];
const ServiceSection = ({ services, serviceContent, activeIndex, setActiveIndex }) => {
  return (
    <div className="w-full h-[80%] px-24 md:flex hidden items-center">
      <div className="w-full h-[80%] bg-[#50C3C6] rounded-3xl flex overflow-hidden">
        <div className="w-[25%] pt-5 h-full bg-[#50C3C6] gap-3 flex flex-col items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-[90%] h-[14%] rounded-full flex items-center justify-between px-10 cursor-pointer transition-all duration-500 ease-in-out group ${
                activeIndex === index
                  ? "bg-white text-black" // Active item styling
                  : "text-black hover:bg-white hover:text-black" // Hover styling for other items
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h1 className="text-[1.2vw] leading-none font-semibold">
                {service}
              </h1>
              {/* Show the right arrow icon only for the active item or on hover */}
              {activeIndex === index || (
                <div className="hidden group-hover:flex w-10 h-8 bg-[#50C3C6] rounded-full items-center justify-center">
                  <FaArrowRight />
                </div>
              )}
              {activeIndex === index && (
                <div className="w-12 h-8 bg-[#50C3C6] rounded-full flex items-center justify-center">
                  <FaArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right content area that changes based on active service */}
        <div className="w-[75%] h-full flex items-center justify-center px-10 bg-[#4A9BD3] rounded-l-3xl">
          <span className="text-[1.5vw] text-white">
            {serviceContent[activeIndex]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
