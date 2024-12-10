import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import hero from  '@/components/Youtube/hero1/hero'
import why from '@/components/Youtube/why/why';
function page ()
{
    return (
        <>
        <Navbar />
        <hero />
        <why />
        </>
    )
}
export default page;