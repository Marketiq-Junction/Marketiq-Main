"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import WhatWeDoSection from "../WhatWeDo/WhatWeDoSection";
import ServiceSection from "../WhatWeDo/Service/ServiceSection";
import Hero from "./Hero/Hero";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FreeConsultationSection from "../Consultation/FreeConsultationSection";
import Footer from "../Footer/Footer";
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <div className="w-full h-full  ">
      <Navbar />
      <Hero />
      <section className="w-full h-full ">
        <WhatWeDoSection />

        <ServiceSection
          services={services}
          serviceContent={serviceContent}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </section>
      <section className="w-full h-full bg-[#4A9BD3] py-8 md:py-16">
        <div className="w-full lg:mb-10 h-auto flex flex-col items-center justify-center px-4 md:px-0">
          <h1 className="text-[6vw] md:text-[2.5vw] font-bold text-center text-white">
            Our Services
          </h1>
          <p className="text-[4vw] md:text-[1.2vw] font-medium text-center text-white mt-4 md:mt-2">
            Our affordable services enable businesses of all sizes to access
            professional digital marketing without stretching their budgets.
          </p>
        </div>
        <div className="w-full h-[80%] hidden md:flex flex-col items-center justify-center gap-10">
          <div className="w-full h-1/2 flex flex-wrap items-center justify-center gap-[5em]">
            <div className="w-[20%] h-[90%] bg-white rounded-tl-[10%] rounded-br-[10%] border-[4px] border-black">
              <div className="w-full h-[40%] flex items-center justify-center ">
                <div className="w-[30%] h-[80%] rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/our services/vieod.png"
                    alt=""
                    className="w-[75%] h-[75%]"
                  />
                </div>
              </div>
              <div className="w-full h-[60%] flex items-center justify-center flex-col">
                <h6 className="text-[1.2vw] font-bold">Youtube Marketing</h6>
                <p className="text-[1vw] w-[80%] text-center">
                  Convert your visitor into a buyer
                </p>
              </div>
            </div>
            <div className="w-[20%] h-[90%] bg-white rounded-tl-[10%] rounded-br-[10%] border-[4px] border-black">
              <div className="w-full h-[40%] flex items-center justify-center ">
                <div className="w-[30%] h-[80%] rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/our services/vieod.png"
                    alt=""
                    className="w-[75%] h-[75%]"
                  />
                </div>
              </div>
              <div className="w-full h-[60%] flex items-center justify-center flex-col">
                <h6 className="text-[1.2vw] font-bold">
                  Social Media Management
                </h6>
                <p className="text-[1vw] w-[80%] text-center">
                  Improve the public <br /> perception of your brand
                </p>
              </div>
            </div>
            <div className="w-[20%] h-[90%] bg-white rounded-tl-[10%] rounded-br-[10%] border-[4px] border-black">
              <div className="w-full h-[40%] flex items-center justify-center ">
                <div className="w-[30%] h-[80%] rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/our services/vieod.png"
                    alt=""
                    className="w-[75%] h-[75%]"
                  />
                </div>
              </div>
              <div className="w-full h-[60%] flex items-center justify-center flex-col">
                <h6 className="text-[1.2vw] font-bold">Web Development</h6>
                <p className="text-[1vw] w-[80%] text-center">
                  Create and maintain Appealing <br /> Websites
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 flex flex-wrap items-center justify-center gap-[5em]">
            <div className="w-[20%] h-[90%] bg-white rounded-tl-[10%] rounded-br-[10%] border-[4px] border-black">
              <div className="w-full h-[40%] flex items-center justify-center ">
                <div className="w-[30%] h-[80%] rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/our services/vieod.png"
                    alt=""
                    className="w-[75%] h-[75%]"
                  />
                </div>
              </div>
              <div className="w-full h-[60%] flex items-center justify-center flex-col">
                <h6 className="text-[1.2vw] font-bold">Google My Business</h6>
                <p className="text-[1vw] w-[80%] text-center">
                  Generate SEO-Based Engaging Content
                </p>
              </div>
            </div>
            <div className="w-[20%] h-[90%] bg-white rounded-tl-[10%] rounded-br-[10%] border-[4px] border-black">
              <div className="w-full h-[40%] flex items-center justify-center ">
                <div className="w-[30%] h-[80%] rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/our services/vieod.png"
                    alt=""
                    className="w-[75%] h-[75%]"
                  />
                </div>
              </div>
              <div className="w-full h-[60%] flex items-center justify-center flex-col">
                <h6 className="text-[1.2vw] font-bold">
                  Search engine optimization
                </h6>
                <p className="text-[1vw] w-[80%] text-center">
                  Purchase Promising attractive graphics to promote brand
                </p>
              </div>
            </div>
            <div className="w-[20%] h-[90%] bg-white rounded-tl-[10%] rounded-br-[10%] border-[4px] border-black">
              <div className="w-full h-[40%] flex items-center justify-center ">
                <div className="w-[30%] h-[80%] rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/our services/vieod.png"
                    alt=""
                    className="w-[75%] h-[75%]"
                  />
                </div>
              </div>
              <div className="w-full h-[60%] flex items-center justify-center flex-col">
                <h6 className="text-[1.2vw] font-bold">
                  Analytics & Reporting
                </h6>
                <p className="text-[1vw] w-[80%] text-center">
                  Create and maintain Appealing Websites
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <FreeConsultationSection />

      <Footer />
    </div>
  );
};

export default Home;