"use client"
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Footer from "@/components/Footer/Footer";
import Hero from  '@/components/Youtube/hero1/hero';
import Why from '@/components/Youtube/why/why';
import Benefits from '@/components/Youtube/Benefits/Benefits';
// import Services from '@/components/Youtube/Services1/Services';
import Ourprocess from '@/components/Youtube/Ourprocess/Ourprocess';
function page ()
{
    return (
        <>
        <Navbar />
        <Hero />
        <Why />
        <Benefits />
        {/* <Services /> */}
        <Ourprocess />
        <Footer />
        </>
    )
}
export default page;