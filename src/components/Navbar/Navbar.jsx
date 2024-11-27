"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsArrowRight, BsHouse, BsBriefcase, BsInfoCircle, BsTelephone, BsChevronDown } from "react-icons/bs";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const closeDropdowns = () => {
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      if (dropdownOpen || mobileDropdownOpen) {
        closeDropdowns();
      }
    };

    if (dropdownOpen || mobileDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen, mobileDropdownOpen]);

  return (
    <div className="w-full h-[10vh]">
      {/* Desktop Navbar */}
      <nav className="w-full h-full flex items-center justify-between px-4 md:px-20 relative">
        {/* Desktop Logo */}
        <div className="logo hidden md:block relative">
          <Image
            src="/images/navbar/logonav.webp"
            width={150}
            height={75}
            alt="Logo"
            className="w-[150px] h-[75px] md:w-[200px] md:h-[100px]"
          />
          <span className="absolute bottom-[16%] -right-[30%] text-gray-600 text-md font-bold">
           Since : 2011
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex navlinks items-center gap-[2em]">
          <Link href="/" passHref>
            <h5 className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3] cursor-pointer">
              Home
            </h5>
          </Link>
          <div className="relative flex items-center gap-1 cursor-pointer" onClick={(e) => e.stopPropagation()}>
            <h5 onClick={toggleDropdown} className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3]">
              Our Services
            </h5>
            <BsChevronDown className="text-[1.1vw] font-bold" />
            {dropdownOpen && (
              <div className="absolute top-[100%] left-[70%] border-2 border-black transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Service 1</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Service 2</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Service 3</li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/about" passHref>
            <h5 className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3] cursor-pointer">
              Who We Are
            </h5>
          </Link>
          <Link href="/about-us" passHref>
            <h5 className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3] cursor-pointer">
              About us
            </h5>
          </Link>
          <Link href="/contact" passHref>
            <h5 className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3] cursor-pointer">
              Contact
            </h5>
          </Link>
        </div>

        {/* Let's Talk button (only for desktop) */}
        <div className="contactus hidden md:flex">
          <Link href="/contact" passHref>
            <div className="flex items-center justify-center gap-3 cursor-pointer px-10 py-3 bg-black text-white rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#4A9BD3] hover:text-white">
              <span className="text-[1.2vw] font-syne-bold font-bold">Let's Talk</span>
              <BsArrowRight />
            </div>
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#E3F2FD] to-[#4A9BD3] shadow-lg rounded-t-xl">
        <div className="flex justify-around items-center py-3">
          <Link href="/" passHref>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-[#4A9BD3] to-[#1976D2] rounded-full flex items-center justify-center transition-transform transform hover:scale-110">
                <BsHouse className="text-2xl text-white" />
              </div>
              <span className="mt-2 text-sm text-gray-700 font-medium">Home</span>
            </div>
          </Link>
          <div className="flex flex-col items-center cursor-pointer relative" onClick={(e) => e.stopPropagation()}>
            <div
              className="w-10 h-10 bg-gradient-to-r from-[#4A9BD3] to-[#1976D2] rounded-full flex items-center justify-center transition-transform transform hover:scale-110"
              onClick={toggleMobileDropdown}
            >
              <BsBriefcase className="text-2xl text-white" />
            </div>
            <span className="mt-2 text-sm text-gray-700 font-medium">Our Services</span>
            {mobileDropdownOpen && (
              <div className="absolute top-[-220%] left-[60%] transform -translate-x-1/2 w-48 bg-white shadow-lg rounded-md z-20 border-2 border-black">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Service 1</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Service 2</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Service 3</li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/About" passHref>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-[#4A9BD3] to-[#1976D2] rounded-full flex items-center justify-center transition-transform transform hover:scale-110">
                <BsInfoCircle className="text-2xl text-white" />
              </div>
              <span className="mt-2 text-sm text-gray-700 font-medium">About</span>
            </div>
          </Link>
          <Link href="/Contact" passHref>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-[#4A9BD3] to-[#1976D2] rounded-full flex items-center justify-center transition-transform transform hover:scale-110">
                <BsTelephone className="text-2xl text-white" />
              </div>
              <span className="mt-2 text-sm text-gray-700 font-medium">Contact</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
