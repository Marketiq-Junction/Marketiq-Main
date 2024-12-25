import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

const Ayansir = () => {
  return (
    <div className="relative bg-[#3F85B5] h-[20vh] flex items-center justify-center">
      {/* Main Content */}
      <div className="relative -top-28 w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] bg-[#50C3C6] text-white py-12 px-4 md:px-16 rounded-xl shadow-lg mt-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section: Contact Info */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden">
              <Image
                src="/people/1.jpg" // Replace with the actual image URL
                alt="Person"
                width={80}
                height={80}
                className="object-cover h-28"
              />
            </div>
            <div>
              <p className=" md:text-mb">
                Talk to a Growth Expert
              </p>
              <p className="text-sm md:text-sm mt-2">
                +91 9920892689
              </p>
            </div>
          </div>

          {/* Center Section: Address Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-8 h-8 md:w-12 md:h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="100%"
                  height="100%"
                  className="text-blue-500"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.2 0 6.1 1.1 8.4 3.2l6.3-6.3C34.2 3.1 29.3 1 24 1 14.5 1 6.4 6.9 3.2 15.3l7.4 5.7C12.6 14.7 17.8 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M47.9 24.5c0-1.4-.1-2.9-.4-4.3H24v8.1h13.6c-.6 3.3-2.7 6.1-5.7 7.8l7.4 5.7c4.4-4.1 7-10.1 7-16.7z"
                  />
                  <path
                    fill="#FBBC04"
                    d="M10.6 29.3C9.8 26.6 9.8 23.4 10.6 20.7L3.2 15C.7 20.2.7 26.8 3.2 32l7.4-5.7z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 47c5.3 0 10.2-1.8 14.1-4.9l-7.4-5.7c-2 1.4-4.5 2.2-7.2 2.2-6.2 0-11.5-4.3-13.4-10.1l-7.4 5.7C6.4 41.1 14.5 47 24 47z"
                  />
                </svg>
              </div>

              <span className="font-semibold text-sm md:text-base lg:text-lg">
                Verified on Google
              </span>
            </div>
            <p className="text-xs md:text-sm lg:text-base leading-relaxed mb-2">
              Office No. 1A & 2, Lower Ground Floor, New White House, Building
              No. 3, Buddha Colony, Kurla West, Mumbai, Maharashtra 400070,
              Mumbai, India, 400070
            </p>
            <p className="text-xs md:text-sm lg:text-base">
              marketiqjunction@gmail.com
            </p>
          </div>

          {/* Right Section: Reviews */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className=" text-sm md:text-mb lg:text-mb">
              REVIEWED ON -
            </p>
            <p className="mt-2 text-xs md:text-sm lg:text-base">
              Google My Business
            </p>
            <p className="text-base md:text-lg lg:text-xl font-bold mt-2">
              4.9 Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ayansir;
