'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsHouse, BsBriefcase, BsInfoCircle, BsTelephone } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const closeMobileMenu = (e) => {
      if (isMobileMenuOpen && !e.target.closest(".mobile-menu")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMobileMenu);

    return () => {
      document.removeEventListener("click", closeMobileMenu);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="w-full h-[10vh]">
      {/* Desktop Navbar */}
      <nav className="w-full h-full flex items-center justify-between px-4 md:px-20 relative">
        {/* Logo */}
        <div className="logo relative">
          <Image
            src="/images/navbar/logonav.webp"
            width={150}
            height={75}
            alt="Logo"
            className="w-[150px] h-[75px] md:w-[200px] md:h-[100px]"
          />
          <span className="absolute bottom-[16%] -right-[30%] text-gray-600 text-md font-bold hidden md:block">
            Since : 2011
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex navlinks items-center gap-[2em]">
          <Link href="/" passHref>
            <h5 className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3] cursor-pointer">
              Home
            </h5>
          </Link>
          <Link href="/marketingsolution" passHref>
            <h5 className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3] cursor-pointer">
              Marketing Solution
            </h5>
          </Link>
          <Link href="/aboutus" passHref>
            <h5 className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3] cursor-pointer">
              About Us
            </h5>
          </Link>
          <Link href="/Contactus" passHref>
            <h5 className="text-[1.1vw] font-syne-bold font-semibold hover:text-[#4A9BD3] cursor-pointer">
              Contact
            </h5>
          </Link>
        </div>

        {/* Let's Talk Button */}
        <div className="hidden md:flex">
          <Link href="/contact" passHref>
            <div className="flex items-center justify-center gap-3 cursor-pointer px-10 py-3 bg-black text-white rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#4A9BD3]">
              <span className="text-[1.2vw] font-syne-bold font-bold">Let's Talk</span>
              <BsArrowRight />
            </div>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden z-30">
          <button
            className="text-3xl text-gray-900 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu fixed top-0 left-0 w-full h-45 bg-gray-900 bg-opacity-90 text-white flex flex-col items-center justify-center z-20">
          <Link href="/" passHref>
            <h5
              className="text-2xl font-semibold mb-6 cursor-pointer hover:text-[#4A9BD3]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </h5>
          </Link>
          <Link href="/marketingsolution" passHref>
            <h5
              className="text-2xl font-semibold mb-6 cursor-pointer hover:text-[#4A9BD3]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marketing Solution
            </h5>
          </Link>
          <Link href="/aboutus" passHref>
            <h5
              className="text-2xl font-semibold mb-6 cursor-pointer hover:text-[#4A9BD3]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </h5>
          </Link>
          <Link href="/Contactus" passHref>
            <h5
              className="text-2xl font-semibold mb-6 cursor-pointer hover:text-[#4A9BD3]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </h5>
          </Link>
          <Link href="/contact" passHref>
            <button
              className="mt-6 px-6 py-3 bg-[#4A9BD3] text-white text-lg rounded-lg hover:bg-teal-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;