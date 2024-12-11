'use client';
import Footer from "@/components/Footer/Footer";
import FreeConsultationSection from "@/components/Home/Consultation/FreeConsultationSection";
import Hero from "@/components/Home/Hero/Hero";
import ServiceSection from "@/components/Home/Service/ServiceSection";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUs";
import Navbar from "@/components/Navbar/Navbar";
import WhyUs from "@/components/webdesign/whyus/whyus";
import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden  ">
      <Navbar/>
      <Hero/>
      <ServiceSection/>
      <WhyUs/>
      <WhyChooseUs/>
      <FreeConsultationSection/>
      <Footer/>
    </div>
  );
};

export default page;
