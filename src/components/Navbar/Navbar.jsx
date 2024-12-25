'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  useEffect(() => {
    const closeMenus = (e) => {
      if (!e.target.closest(".mobile-menu") && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      if (!e.target.closest(".dropdown") && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
      if (!e.target.closest(".mobile-dropdown") && isMobileDropdownOpen) {
        setIsMobileDropdownOpen(false);
      }
    };

    document.addEventListener("click", closeMenus);

    return () => {
      document.removeEventListener("click", closeMenus);
    };
  }, [isMobileMenuOpen, isDropdownOpen, isMobileDropdownOpen]);

  const isActive = (path) => pathname === path;

  return (
    <div className="w-full h-[10vh] z-50">
      {/* Desktop Navbar */}
      <nav className="w-full h-full flex items-center justify-between px-4 md:px-20 lg:px-28 xl:px-36 relative">
        {/* Logo */}
        <div className="logo relative">
          <Image
            src="/images/navbar/logonav.webp"
            width={150}
            height={75}
            alt="Logo"
            className="w-[150px] h-[75px] md:w-[200px] md:h-[100px]"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex navlinks items-center gap-8 lg:gap-12 xl:gap-16">
          <Link
            href="/"
            className={`group text-[1.1vw] font-syne-bold font-semibold cursor-pointer transition-all duration-300 ${
              isActive("/") ? "text-[#4A9BD3] underline" : ""
            }`}
          >
            <span className="group-hover:text-[#4A9BD3] group-hover:underline group-hover:animate-bounce">
              Home
            </span>
          </Link>
          <div className="relative dropdown group">
            <button
              className={`text-[1.1vw] font-syne-bold font-semibold cursor-pointer flex items-center gap-2 transition-all duration-300 ${
                ["/webdesign", "/GoogleMyBusiness", "/seo", "/marketingsolution", "/youtube"].some(
                  (path) => isActive(path)
                )
                  ? "text-[#4A9BD3] underline"
                  : ""
              }`}
              onClick={toggleDropdown}
            >
              <span className="group-hover:text-[#4A9BD3] group-hover:underline">
                Marketing Solution
              </span>
              {isDropdownOpen ? <FiChevronUp className="text-lg" /> : <FiChevronDown className="text-lg" />}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg w-56 lg:w-64 z-50">
                {[
                  { name: "Website Management", link: "/webdesign" },
                  { name: "Google My Business", link: "/GoogleMyBusiness" },
                  { name: "SEO", link: "/seo" },
                  { name: "Social Media Marketing", link: "/marketingsolution" },
                  { name: "YouTube Marketing", link: "/youtube" },
                ].map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className={`block px-4 py-2 text-gray-700 hover:bg-[#4A9BD3] hover:text-white text-sm ${
                      isActive(item.link) ? "text-[#4A9BD3]" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/aboutus"
            className={`group text-[1.1vw] font-syne-bold font-semibold cursor-pointer transition-all duration-300 ${
              isActive("/aboutus") ? "text-[#4A9BD3] underline" : ""
            }`}
          >
            <span className="group-hover:text-[#4A9BD3] group-hover:underline group-hover:animate-bounce">
              About Us
            </span>
          </Link>
          {/* Uncomment if needed
          <Link
            href="/Contactus"
            className={`group text-[1.1vw] font-syne-bold font-semibold cursor-pointer transition-all duration-300 ${
              isActive("/Contactus") ? "text-[#4A9BD3] underline" : ""
            }`}
          >
            <span className="group-hover:text-[#4A9BD3] group-hover:underline group-hover:animate-bounce">
              Contact
            </span>
          </Link>
          */}
        </div>

        {/* Let's Talk Button */}
        <div className="hidden md:flex">
          <Link
            href="https://wa.me/9920892689"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 cursor-pointer px-10 py-3 bg-black text-white rounded-2xl transition-all duration-500 ease-in-out hover:bg-[#4A9BD3]"
          >
            <span className="text-[1.2vw] font-syne-bold font-bold">Let's Talk</span>
            <BsArrowRight />
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
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
        <div className="mobile-menu fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 text-white flex flex-col items-center justify-center z-50 overflow-auto transition-transform duration-300">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-3xl text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <HiX />
          </button>
          <div className="mt-16 flex flex-col items-center space-y-6 px-6">
            <Link
              href="/"
              className={`group text-2xl font-semibold cursor-pointer transition-all duration-300 ${
                isActive("/") ? "text-[#4A9BD3] underline" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="group-hover:text-[#4A9BD3] group-hover:underline group-hover:animate-bounce">
                Home
              </span>
            </Link>
            <div className="mobile-dropdown">
              <button
                className={`group text-2xl font-semibold cursor-pointer flex items-center gap-2 transition-all duration-300 ${
                  ["/webdesign", "/GoogleMyBusiness", "/seo", "/marketingsolution", "/youtube"].some(
                    (path) => isActive(path)
                  )
                    ? "text-[#4A9BD3] underline"
                    : ""
                }`}
                onClick={toggleMobileDropdown}
              >
                <span className="group-hover:text-[#4A9BD3] group-hover:underline group-hover:animate-bounce">
                  Marketing Solution
                </span>
                {isMobileDropdownOpen ? <FiChevronUp className="text-lg" /> : <FiChevronDown className="text-lg" />}
              </button>
              {isMobileDropdownOpen && (
                <div className="bg-gray-800 rounded-lg px-4 py-3 space-y-2 mt-2 w-full">
                  {[
                    { name: "Website Management", link: "/webdesign" },
                    { name: "Google My Business", link: "/GoogleMyBusiness" },
                    { name: "SEO", link: "/seo" },
                    { name: "Social Media Marketing", link: "/marketingsolution" },
                    { name: "YouTube Marketing", link: "/youtube" },
                  ].map((item, index) => (
                    <Link
                      href={item.link}
                      key={index}
                      className={`group text-xl font-semibold cursor-pointer block hover:bg-[#4A9BD3] hover:text-white px-4 py-2 ${
                        isActive(item.link) ? "text-[#4A9BD3]" : ""
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/aboutus"
              className={`group text-2xl font-semibold cursor-pointer transition-all duration-300 ${
                isActive("/aboutus") ? "text-[#4A9BD3] underline" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="group-hover:text-[#4A9BD3] group-hover:underline group-hover:animate-bounce">
                About Us
              </span>
            </Link>
            {/* Uncomment if needed
            <Link
              href="/Contactus"
              className={`group text-2xl font-semibold cursor-pointer transition-all duration-300 ${
                isActive("/Contactus") ? "text-[#4A9BD3] underline" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="group-hover:text-[#4A9BD3] group-hover:underline">
                Contact
              </span>
            </Link>
            */}
            <Link
              href="https://wa.me/9920892689"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 bg-[#4A9BD3] text-white text-lg rounded-lg hover:bg-teal-600 flex items-center gap-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Talk <BsArrowRight />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
