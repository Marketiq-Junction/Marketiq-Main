import React from "react";
import Image from "next/image";

const Ayansir = () => {
  return (
    <div className="relative flex items-center justify-center py-12">
      {/* Main Content */}
      <div className="w-[98%] md:w-[95%] lg:w-[92%] xl:w-[88%] bg-white text-gray-800 py-10 px-6 md:px-10 lg:px-16 rounded-xl shadow-lg border-t-4 border-teal-400">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 text-center lg:text-left">
          
          {/* Left Section: Contact Info */}
          <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 w-full lg:w-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-teal-400">
              <Image
                src="/ayanraje.jpg"
                alt="Person"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
                Talk to a Growth Expert
              </p>
              <p className="text-sm md:text-base lg:text-lg mt-1 font-medium text-teal-500">
                +91 9920892689
              </p>
            </div>
          </div>

          {/* Center Section: Address Info */}
          <div className="flex flex-col items-center lg:items-start w-full lg:flex-1 lg:max-w-xl">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="100%"
                  height="100%"
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
              <span className="font-semibold text-sm md:text-base lg:text-lg text-gray-800">
                Verified on Google
              </span>
            </div>
            <p className="text-xs md:text-sm lg:text-base leading-relaxed mb-3 text-center lg:text-left text-gray-600">
              Office No. 1A & 2, Lower Ground Floor, New White House, Building
              No. 3, Buddha Colony, Kurla West, Mumbai, Maharashtra 400070,
              India
            </p>
            <p className="text-xs md:text-sm lg:text-base font-medium text-center lg:text-left text-teal-500">
              marketiqjunction@gmail.com
            </p>
          </div>

          {/* Right Section: Reviews */}
          <div className="flex flex-col items-center lg:items-end w-full lg:w-auto text-center lg:text-right">
            <p className="text-xs md:text-sm lg:text-base font-semibold tracking-wide text-gray-600">
              REVIEWED ON
            </p>
            <p className="text-sm md:text-base lg:text-lg font-medium text-gray-800">
              Google My Business
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold mt-1 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
              ⭐ 4.9
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ayansir;
