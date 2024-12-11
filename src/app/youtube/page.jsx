"use client"
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from  '@/components/Youtube/Hero1/Hero';
import Why from '@/components/Youtube/Why/Why';
import Benefits from '@/components/Youtube/Benefits/Benefits';
import Services from '@/components/Youtube/Services1/Services';
import Ourprocess from '@/components/Youtube/Ourprocess/Ourprocess';
function page ()
{
    return (
        <>
        <Navbar />
        <Hero />
        <Why />
        <Benefits />
        <Services />
        <Ourprocess />
        </>
    )
}
export default page;