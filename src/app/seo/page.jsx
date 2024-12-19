'use client';
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import HeroSection from '@/components/seo/hero/hero';
import ChooseUs from '@/components/seo/chooseus/chooseus';
import Visibility from '@/components/seo/visibility/visibility';
import SEOMarketing from '@/components/seo/seomarketing/seomarketing';
import Offers from '@/components/seo/offers/offers';
import Testimonial from '@/components/seo/testimonial/testimonal';
import SEOProcess from '@/components/seo/seoprocess/seoprocess';
import WebsiteAudit from '@/components/seo/auditing/auditing';
import OurServices from '@/components/seo/ourservices/ourservices';
// import Results from '@/components/seo/results/results';
function page() {
    return (
      <>
        <Navbar />
        <HeroSection/>
        <ChooseUs/>
        <Visibility/>
        <SEOMarketing/>
        <Offers/>
        <Testimonial/>
        <SEOProcess/>
        <WebsiteAudit/>
        <OurServices/>
        {/* <Results/> */}
        <Footer />
      </>
    );
  }
  
  export default page;
  