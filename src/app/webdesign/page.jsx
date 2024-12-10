'use client';
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import HeroSection from '@/components/webdesign/hero/hero';
import Responsive from '@/components/webdesign/responsive/responsive';
import OurServices from '@/components/webdesign/ourservices/ourservices';
import SaveTime from '@/components/webdesign/savetime/savetime';
import CustomDesigns from '@/components/webdesign/coustomdesign/design';
import Advantages from '@/components/webdesign/advantagesofresponsive/advantages';
import Important from '@/components/webdesign/importanceofresponsive/important';
import ChooseUs from '@/components/webdesign/chooseus/chooseus';
import Databaner from '@/components/Marketingsolution/Databaner/Databaner';
import Development from '@/components/webdesign/webdevelopment/development';
import Support from '@/components/webdesign/support/support';
import WhyUs from '@/components/webdesign/whyus/whyus';
import GetInTouch from '@/components/webdesign/getintouch/getintouch';
function page() {
    return (
      < >
        <Navbar />
        <HeroSection/>
        <Responsive/>
        <OurServices/>
        <SaveTime/>
        <CustomDesigns/>
        <Advantages/>
        <Important/>
        <ChooseUs/>
        <Databaner/>
        <Development/>
        <Support/>
        <WhyUs/>
        <GetInTouch/>
        <Footer />
      </>
    );
  }
  
  export default page;
  