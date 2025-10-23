'use client';
import Approach from "@/components/aboutus/approach/approach";
import ContactUs from "@/components/aboutus/contactus/contactus";
import DigitalAgency from "@/components/aboutus/digital/digital";
import MarketingSection from "@/components/aboutus/marketing/marketing";
import ValuesAndCulture from "@/components/aboutus/value/value";
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
      <MarketingSection/>
      <ContactUs/>
      <DigitalAgency/>
      <ValuesAndCulture/>
      <Approach/>
      <Footer/>
    </div>
  );
};

export default page;
