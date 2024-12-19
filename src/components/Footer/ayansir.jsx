import React from "react";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";

const Ayansir = () => {
  return (
    <div className="relative bg-[#3F85B5] h-[20vh] flex items-center justify-center">
      {/* Blue Circle at Top */}
      {/* <div className="absolute top-0 left-0 w-24 h-24 bg-white rounded-full -translate-y-12 -translate-x-12"></div> */}

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
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg font-semibold">Talk to a Growth Expert</p>
              <p className="text-1xl font-bold mt-2">+91 808 254 0401</p>
            </div>
          </div>

          {/* Center Section: Address Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <FaGoogle className="text-3xl md:text-4xl text-blue-500" />
              <span className="font-semibold text-lg">Verified on Google</span>
            </div>
            <p className="text-sm md:text-base leading-relaxed mb-2">
              Office No. 1A & 2, Lower Ground Floor, New White House, Building No.
              3, Buddha Colony, Kurla West, Mumbai, Maharashtra 400070, Mumbai,
              India, 400070
            </p>
            <p className="text-sm md:text-base">marketiqjunction@gmail.com</p>
          </div>

          {/* Right Section: Reviews */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="font-semibold text-lg">REVIEWED ON</p>
            <p className="mt-2 text-sm md:text-base">Google My Business</p>
            <p className="text-lg md:text-xl font-bold mt-2">4.9 Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ayansir;
