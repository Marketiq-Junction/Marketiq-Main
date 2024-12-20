"use client";

import Socialmedia from "@/components/Marketingsolution/Socialmedia/Socialmedia";
import Drive from "@/components/Marketingsolution/Drive/Drive";
import Engage from "@/components/Marketingsolution/Engage/Engage";
import Advertising from "@/components/Marketingsolution/Advertising/Advertising";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Benefits from "@/components/Marketingsolution/Benefits/Benifits";
import Savetime from "@/components/Marketingsolution/Savetime/Savetime";
import Services from "@/components/Marketingsolution/Services/Services";
// import Steps from "@/components/Marketingsolution/Steps/Steps";
import Databaner from "@/components/Marketingsolution/Databaner/Databaner";
import Clienthero from "@/components/Marketingsolution/Clientstory/Clienthero";
import Request from "@/components/Marketingsolution/Request/Request";
// import Ourservices from "@/components/Marketingsolution/Ourservices/Ourservices";
// import WhyUs from "@/components/webdesign/whyus/whyus";

const Page = () => {
  return (
    <>
      <Navbar />
      <Socialmedia />
      <Drive />
      <Engage />
      <Advertising />
     <Benefits />
     {/* <Savetime /> */}
    <Services />
    {/* <Steps /> */}
    <Databaner />
    <Clienthero />
    <Request />
    {/* <Ourservices /> */}
    {/* <WhyUs /> */}
      <Footer />
    </>
  );
};

export default Page;
