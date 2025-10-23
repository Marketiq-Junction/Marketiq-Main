"use client";
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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileDropdown = () =>
    setIsMobileDropdownOpen(!isMobileDropdownOpen);

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
    return () => document.removeEventListener("click", closeMenus);
  }, [isMobileMenuOpen, isDropdownOpen, isMobileDropdownOpen]);

  const isActive = (path) => pathname === path;

  return (
    <div className="w-full h-[10vh] z-50 sticky top-0 bg-white shadow-md">
      {/* Desktop Navbar */}
      <nav className="w-full h-full flex items-center justify-between px-4 sm:px-6 lg:px-8 ">
        {/* Logo - left aligned */}
        <div className="flex-shrink-0 relative w-[200px] h-[60px] sm:w-[280px] sm:h-[80px] md:w-[550px] md:h-[160px] lg:w-[650px] lg:h-[180px] xl:w-[700px] xl:h-[200px]">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>

        {/* Desktop Links - right side */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
          <div className="flex navlinks items-center gap-6 lg:gap-8 xl:gap-10">
            <Link
              href="/"
              className={`group text-[1.1vw] font-syne-bold font-semibold cursor-pointer transition-all duration-300 ${
                isActive("/") ? "text-teal-500 underline" : ""
              }`}
            >
              <span className="group-hover:text-teal-500 group-hover:underline group-hover:animate-bounce">
                Explore
              </span>
            </Link>

            {/* Dropdown */}
            <div className="relative dropdown group">
              <button
                className={`text-[1.1vw] font-syne-bold font-semibold cursor-pointer flex items-center gap-2 transition-all duration-300 ${
                  [
                    "/webdesign",
                    "/GoogleMyBusiness",
                    "/seo",
                    "/marketingsolution",
                    "/youtube",
                    "/videoediting"
                  ].some((path) => isActive(path))
                    ? "text-teal-500 underline"
                    : ""
                }`}
                onClick={toggleDropdown}
              >
                <span className="group-hover:text-teal-500 group-hover:underline">
                  Marketing Solution
                </span>
                {isDropdownOpen ? (
                  <FiChevronUp className="text-lg" />
                ) : (
                  <FiChevronDown className="text-lg" />
                )}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg w-56 lg:w-64 z-50">
                  {[
                    { name: "Website Management", link: "/webdesign" },
                    { name: "Google My Business", link: "/GoogleMyBusiness" },
                    { name: "SEO", link: "/seo" },
                    {
                      name: "Social Media Marketing",
                      link: "/marketingsolution",
                    },
                    { name: "YouTube Marketing", link: "/youtube" },
                    {name:"Video Editing" , link :"/videoediting"}
                  ].map((item, index) => (
                    <Link
                      href={item.link}
                      key={index}
                      className={`block px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:text-white text-sm transition-all duration-300 ${
                        isActive(item.link) ? "text-teal-500 font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* <Link
              href="/aboutus"
              className={`group text-[1.1vw] font-syne-bold font-semibold cursor-pointer transition-all duration-300 ${
                isActive("/aboutus") ? "text-teal-500 underline" : ""
              }`}
            >
              <span className="group-hover:text-teal-500 group-hover:underline group-hover:animate-bounce">
                Behind the Brand
              </span>
            </Link> */}
          </div>

          {/* Let's Talk Button (Desktop) */}

          <Link
            href="/contactus"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 cursor-pointer px-6 py-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
          >
            <span className="text-base font-bold font-syne-bold">
              Let's Talk
            </span>
            <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
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
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-4/5 sm:w-2/3 bg-white text-black z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl text-black focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <HiX />
        </button>

        {/* Links */}
        <div className="mt-20 flex flex-col space-y-6 px-8">
          <Link
            href="/"
            className={`group text-xl font-semibold cursor-pointer transition-all duration-300 ${
              isActive("/") ? "text-teal-500 underline" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Dropdown */}
          <div className="mobile-dropdown">
            <button
              className={`group text-xl font-semibold cursor-pointer flex items-center justify-between w-full transition-all duration-300 ${
                [
                  "/webdesign",
                  "/GoogleMyBusiness",
                  "/seo",
                  "/marketingsolution",
                  "/youtube",
                  "/videoediting"
                ].some((path) => isActive(path))
                  ? "text-teal-500 underline"
                  : ""
              }`}
              onClick={toggleMobileDropdown}
            >
              <span>Marketing Solution</span>
              {isMobileDropdownOpen ? (
                <FiChevronUp className="text-lg" />
              ) : (
                <FiChevronDown className="text-lg" />
              )}
            </button>

            {isMobileDropdownOpen && (
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg px-4 py-3 space-y-2 mt-2">
                {[
                  { name: "Website Management", link: "/webdesign" },
                  { name: "Google My Business", link: "/GoogleMyBusiness" },
                  { name: "SEO", link: "/seo" },
                  {
                    name: "Social Media Marketing",
                    link: "/marketingsolution",
                  },
                  { name: "YouTube Marketing", link: "/youtube" },
                  {name:"Video Editing" , link :"/videoediting"}
                ].map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className={`block text-base font-medium cursor-pointer hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:text-white px-4 py-2 rounded-md transition-all duration-300 ${
                      isActive(item.link) ? "text-teal-500 font-semibold" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* <Link
            href="/aboutus"
            className={`group text-xl font-semibold cursor-pointer transition-all duration-300 ${
              isActive("/aboutus") ? "text-teal-500 underline" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link> */}

          {/* Let's Talk Button (Mobile) */}
          <Link
            href="/contactus"
            className={`group text-xl font-semibold cursor-pointer transition-all duration-300 ${
              isActive("/aboutus") ? "text-teal-500 underline" : ""
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
