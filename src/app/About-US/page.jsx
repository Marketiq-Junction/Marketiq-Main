import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import About from '@/components/AboutUS/About';
import Mission from '@/components/Mission/Mission';
import ValuesCulture from '@/components/ValuesCulture/ValuesCulture';
import Footer from '@/components/Footer/Footer';
import Ourap from '@/components/Ourap/Ourap';

function Page() {
  return (
    <>
      <Navbar />
      <About />
      <Mission />
      <ValuesCulture /> 
      <Ourap /> 
      <Footer />
    </>
  );
}

export default Page;
