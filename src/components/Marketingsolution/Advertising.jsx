"use client";

import React, { useState } from "react";
  const services = [
    {
      id: "facebook",
      title: "Facebook Management Services",
      description:
        "Our Facebook Management services enhance your brand’s presence on Facebook through optimized content creation and performance analytics. We help create engaging posts that resonate with your audience and track performance metrics to achieve better engagement and growth.",
    },
    {
      id: "instagram",
      title: "Instagram Management Services",
      description:
        "Our Instagram Management services focus on crafting visually appealing and engaging content to grow your brand’s presence. With strategic hashtag usage, story highlights, and consistent posting, we help your brand connect with a wider audience.",
    },
    {
      id: "linkedin",
      title: "LinkedIn Management Services",
      description:
        "Our LinkedIn Management services enhance your brand’s professional presence on the platform. We optimize your profile to showcase your expertise, share insightful content to establish thought leadership, and expand your network through strategic connections with industry peers. Our engagement strategies encourage meaningful interactions, while regular performance analytics track growth and effectiveness. By utilizing our services, you can strengthen your professional reputation and unlock new business opportunities.",
    },
    {
      id: "youtube",
      title: "YouTube Management Services",
      description:
        "Our YouTube Management services enhance your brand's presence through optimized video content creation and channel management. We oversee everything from branding to content scheduling, ensuring your videos resonate with your audience. Our analytics provide valuable insights into engagement, helping you refine your strategy for maximum reach and impact.",
    },
  ];
  

const Advertising = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section className="bg-gray-50 p-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">
          What do our Social Media Advertising services include?
        </h2>
        <p className="text-lg text-gray-600">
          Our Social Media Management services encompass a holistic approach to
          enhancing <br />your brand's online presence and engagement. Here’s what we
          include:
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
  {/* Sidebar */}
  <div className="flex flex-col gap-4 w-full lg:w-1/3">
    {services.map((service) => (
      <button
        key={service.id}
        className={`text-left p-4 border-l-4 ${
          activeService === service.id
            ? "border-[3px] border-[#A2DFE1] bg-[#A2DFE1] text-black"
            : "border-gray-200 bg-[#A2DFE1] text-black"
        } hover:bg-[#4A9BD3] hover:text-black transition`}
        onClick={() => setActiveService(service.id)}
      >
        {service.title}
      </button>
    ))}
  </div>
  {/* Details Section */}
  <div className="flex-1 bg-white p-8 shadow-md rounded">
          {services
            .filter((service) => service.id === activeService)
            .map((service) => (
              <div key={service.id}>
                <h3 className="text-2xl font-bold text-blue-500 mb-4">
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
