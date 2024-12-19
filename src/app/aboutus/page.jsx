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
        {/* <section className="w-full h-screen bg-red-300">
        <h1 className="text-[3.5vw] text-center font-bold">
          Values and Culture
        </h1>
        <p className="text-[1.2vw] text-center px-20">
          our values define the way we work and interact, both with our clients
          and within our team. <br /> They are the foundation of our company
          culture, guiding us toward delivering exceptional results and
          fostering <br /> strong, collaborative relationships.
        </p>
        <div className="w-full h-[80%] bg-red-600 flex relative">
          <div className="w-[20vw] h-[20vw] rounded-full bg-[#4A9BD3] overflow-hidden  absolute left-[40%] top-[20%] flex items-center justify-center">
            <div className="w-[90%] h-[90%] rounded-full flex items-center justify-center bg-white shadow-lg">
              <img src="/bg-rmv.png" alt="" className="w-[50%]" />
            </div>
          </div>
          <div className="w-1/2 h-full bg-green-300 flex flex-col gap-5 items-center justify-center">
            <div className="w-[80%] h-[28%]  overflow-hidden flex bg-blue-300 rounded-tl-2xl rounded-bl-2xl rounded-tr-[40%] ">
              <div className="w-[70%] h-full bg-green-800"></div>
              <div className="w-[30%] h-full bg-blue-500 p-1 flex items-center justify-center ">
                <div className="w-[80%] h-[88%] rounded-full bg-red-400"></div>
              </div>
            </div>
            <div className="w-[70%] h-[28%] bg-blue-300 rounded-2xl"></div>
            <div className="w-[80%] h-[28%] bg-blue-300 rounded-2xl"></div>
          </div>
          <div className="w-1/2 h-full bg-yellow-50 flex flex-col gap-5 items-center justify-center">
            <div className="w-[80%] h-[28%] bg-blue-300 rounded-2xl"></div>
            <div className="w-[70%] h-[28%] bg-blue-300 rounded-2xl"></div>
            <div className="w-[80%] h-[28%] bg-blue-300 rounded-2xl"></div>
          </div>
        </div>
      </section> */}
        <ValuesAndCulture/>
        <Approach/>
        <Footer />
      </>
    );
  }
  
  export default page;
  