"use client";
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/GoogleMyBusiness/Hero/Hero';
import Profile from '@/components/GoogleMyBusiness/Profile/Profile';
import Databaner from '@/components/GoogleMyBusiness/Databaner/Databaner';
import Process from '@/components/GoogleMyBusiness/Process/Process';
import Reputation from '@/components/GoogleMyBusiness/Help/Reputation';
import Benefits from '@/components/GoogleMyBusiness/Benifits/Benefits';
import Footer from '@/components/Footer/Footer';
// import GMBAuditWebsite from '@/components/GoogleMyBusiness/seogmd/seoauditgooglemybusiness';
function page ()
{
    return (
        <>
        <Navbar />
        <Hero />
        {/* <GMBAuditWebsite /> */}
        <Profile />
        <Databaner />
        <Process />
        <Reputation />
        <Benefits />
        <Footer />
        </>
    )
}
export default page;