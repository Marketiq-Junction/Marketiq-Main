"use client";

import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const services = [
  {
    id: "facebook",
    title: "Facebook Management Services",
    description:
      "Our Facebook Management services enhance your brand’s presence on Facebook through optimized content creation and performance analytics. We help create engaging posts that resonate with your audience and track performance metrics to achieve better engagement and growth.",
    icon: <FaFacebook />,
  },
  {
    id: "instagram",
    title: "Instagram Management Services",
    description:
      "Our Instagram Management services focus on crafting visually appealing and engaging content to grow your brand’s presence. With strategic hashtag usage, story highlights, and consistent posting, we help your brand connect with a wider audience.",
    icon: <FaInstagram />,
  },
  {
    id: "linkedin",
    title: "LinkedIn Management Services",
    description:
      "Our LinkedIn Management services enhance your brand’s professional presence on the platform. We optimize your profile to showcase your expertise, share insightful content to establish thought leadership, and expand your network through strategic connections with industry peers. Our engagement strategies encourage meaningful interactions, while regular performance analytics track growth and effectiveness. By utilizing our services, you can strengthen your professional reputation and unlock new business opportunities.",
    icon: <FaLinkedin />,
  },
  {
    id: "youtube",
    title: "YouTube Management Services",
    description:
      "Our YouTube Management services enhance your brand's presence through optimized video content creation and channel management. We oversee everything from branding to content scheduling, ensuring your videos resonate with your audience. Our analytics provide valuable insights into engagement, helping you refine your strategy for maximum reach and impact.",
    icon: <FaYoutube />,
  },
];

const Advertising = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">
          What do our Social Media Advertising <br /> services include?
        </h2>
        <p className="text-lg text-gray-600">
          Our Social Media Management services encompass a holistic approach to
          enhancing <br /> your brand's online presence and engagement. Here’s what we
          include:
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3 overflow-x-auto">
          <div className="flex lg:flex-col gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                className={`flex items-center gap-4 text-left p-4 border-l-4 ${
                  activeService === service.id
                    ? "border-[#A2DFE1] bg-[#4A9BD3] text-black"
                    : "border-gray-200 bg-[#4A9BD3] text-black"
                } hover:bg-[#A2DFE1] hover:text-black transition duration-150`}
                onClick={() => setActiveService(service.id)}
              >
                <span className="text-sm">{service.icon}</span>
                <span className="text-base">{service.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-1 bg-white p-8 shadow-md rounded overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-[#4A9BD3] scrollbar-track-[#A2DFE1]">
          {services
            .filter((service) => service.id === activeService)
            .map((service) => (
              <div key={service.id}>
                <h3 className="text-2xl font-bold text-[#4A9BD3] mb-4 flex items-center gap-2">
                  <span className="text-3xl">{service.icon}</span>
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600">{service.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Advertising;
