'use client'
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/aboutus/heroabout/hero';
import MarketingSection from '@/components/aboutus/marketing/marketing';
import ContactUs from '@/components/aboutus/contactus/contactus';
import DigitalAgency from '@/components/aboutus/digital/digital';
import ValuesAndCulture from '@/components/aboutus/value/value';
import Approach from '@/components/aboutus/approach/approach';


function page() {
    return (
      <>
        <Navbar />
        <Hero/>
        <MarketingSection/>
        <ContactUs/>
        <DigitalAgency/>
        <ValuesAndCulture/>
        <Approach/>
        <Footer />
      </>
    );
  }
  
  export default page;
  