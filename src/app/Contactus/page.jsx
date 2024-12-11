'use client';
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Contact1 from '@/components/Contactus/Contact1';
import Databaner from '@/components/Contactus/Databaner/Databaner';
import Contactform from '@/components/Contactus/Contactform';
import Footer from '@/components/Footer/Footer';
function page() {
    return (
      <>
        <Navbar />
        <Contact1/>
        <Databaner />
        <Contactform/>
        <Footer />
      </>
    );
  }
  
  export default page;
  