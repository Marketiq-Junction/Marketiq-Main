"use client"
import React, { usestate } from "react";
const Engage =()=>{
    return(
        <section className="bg-white p-12">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Content (Image) */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/socialmedia/two1.png"
              alt="Engage and Inspire"
              className="max-w-full h-auto"
            />
          </div>
      
          {/* Right Content (Text and Buttons) */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-black leading-snug mb-6">
              Let’s Engage and Inspire <br /> Together
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-8">
              "Let’s Engage and Inspire Together" is a powerful call to action that
              emphasizes collaboration and creativity. In a world driven by digital
              interactions, it encourages individuals and brands to connect
              authentically. By fostering meaningful engagement, we can share ideas,
              motivate one another, and drive innovation.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-8">
              This collaborative spirit not only inspires action but also cultivates
              a supportive community that thrives on shared knowledge and creativity.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-8">
              Together, let’s create experiences that resonate, inspire change, and
              empower each other to reach new heights.
            </p>
            <div className="flex gap-4">
            <button className="bg-[#4A9BD3] border-[#BDB4FF] border-2 text-white px-8 py-3   transition">
            View Pricing
          </button>
          <button className="bg-[#4A9BD3] border-[#BDB4FF] border-2 text-white px-8 py-3   transition">
            Get In Touch
          </button>
            </div>
          </div>
        </div>
      </section>
      

    );

};
export default Engage;