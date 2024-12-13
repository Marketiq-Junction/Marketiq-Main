"use client";

import React, { useState } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";

const DigitalAgency = () => {
  const [activeCard, setActiveCard] = useState("mission");

  const content = {
    mission: {
      title: "Our mission at Marketiq Junction",
      description: `Our mission is to empower businesses of all sizes by providing affordable and effective digital marketing solutions.
      We strive to help our clients enhance their online presence, connect with their target audience, and achieve measurable growth through tailored strategies in SEO, web design, social media management, and more.
      We are committed to helping businesses adapt to the ever-evolving digital landscape by leveraging cutting-edge strategies that are results-focused, scalable, and customer-centric.`,
      image: "/about2.png", // Replace with your mission image
    },
    vision: {
      title: "Our Vision at Marketiq Junction",
      description: `Our vision is to lead the digital marketing landscape by offering innovative, effective, and sustainable solutions that empower businesses to thrive in a rapidly changing online environment.
      We aim to create a future where businesses of all sizes can succeed in the digital world through partnerships built on trust, collaboration, and shared success.`,
      image: "/about2.png", // Replace with your vision image
    },
    goals: {
      title: "Our Goals at Marketiq Junction",
      description: `Our goal is to consistently deliver high-quality digital marketing services that drive growth and maximize ROI for our clients.
      We are dedicated to understanding each business's unique challenges and crafting strategies that align with their goals to ensure long-term success in a competitive market.`,
      image: "/about2.png", // Replace with your goals image
    },
  };

  return (
    <div className="bg-white px-4 lg:px-16 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          Exclusive Digital Agency To <br /> Provide Solution
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-700">
          Our specialized team focuses on providing personalized strategies that
          align with your <br /> business goals, ensuring that your digital marketing
          efforts deliver the best outcomes.<br /> Partner with us for exclusive
          access to cutting-edge digital tools and expertise <br /> designed to solve
          your business challenges!
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
        <div
          className={`cursor-pointer flex items-center p-6 rounded-lg shadow-lg transition-transform transform ${
            activeCard === "mission"
              ? "scale-105 bg-gradient-to-r from-[#A2DFE1] to-[#4A9BD3] text-white"
              : "bg-[#A2DFE1] text-black hover:scale-105 hover:bg-gradient-to-r from-[#A2DFE1] to-[#4A9BD3] hover:text-white"
          }`}
          onClick={() => setActiveCard("mission")}
        >
          <div
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white mr-4"
          >
            <RocketLaunchIcon className="text-3xl text-[#4A9BD3]" />
          </div>
          <div className="text-lg md:text-2xl font-bold">
            Mission Of Our <br /> Company
          </div>
        </div>
        <div
          className={`cursor-pointer flex items-center p-6 rounded-lg shadow-lg transition-transform transform ${
            activeCard === "vision"
              ? "scale-105 bg-gradient-to-r from-[#A2DFE1] to-[#4A9BD3] text-white"
              : "bg-[#A2DFE1] text-black hover:scale-105 hover:bg-gradient-to-r from-[#A2DFE1] to-[#4A9BD3] hover:text-white"
          }`}
          onClick={() => setActiveCard("vision")}
        >
          <div
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white mr-4"
          >
            <VisibilityIcon className="text-3xl text-[#4A9BD3]" />
          </div>
          <div className="text-lg md:text-2xl font-bold">
            Vision Of Our <br /> Company
          </div>
        </div>
        <div
          className={`cursor-pointer flex items-center p-6 rounded-lg shadow-lg transition-transform transform ${
            activeCard === "goals"
              ? "scale-105 bg-gradient-to-r from-[#A2DFE1] to-[#4A9BD3] text-white"
              : "bg-[#A2DFE1] text-black hover:scale-105 hover:bg-gradient-to-r from-[#A2DFE1] to-[#4A9BD3] hover:text-white"
          }`}
          onClick={() => setActiveCard("goals")}
        >
          <div
            className="flex items-center justify-center w-16 h-16 rounded-full bg-white mr-4"
          >
            <CenterFocusStrongIcon className="text-3xl text-[#4A9BD3]" />
          </div>
          <div className="text-lg md:text-2xl font-bold">
            Goals of <br /> Marketiq Junction
          </div>
        </div>
      </div>

      {/* Active Content Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6 border-2 border-black">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            {content[activeCard].title}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            {content[activeCard].description}
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={content[activeCard].image}
            alt={activeCard}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalAgency;
