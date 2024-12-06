import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import About from '@/components/AboutUS/AboutUS';
import Mission from '@/components/Mission/Mission';
import ValuesCulture from '@/components/ValuesCulture/ValuesCulture';
import Footer from '@/components/Footer/Footer';

import Approachsection from '@/components/Approachsection/Approachsection';

import CardSection from '@/components/Approachsection/CardSection';

function Page() {
  return (
    <>
      <Navbar />
      <About />
      <Mission />
      <ValuesCulture /> 
      <Approachsection/>
      <CardSection/>
      <Footer />
    </>
  );
}

export default Page;
