import React from "react";

const Hero = () => {
  return (
    <section className="herosection bg-[#4A9BD3] w-full h-auto flex flex-col lg:flex-row">
      {/* Left Section: Text and Form */}
      <div className="lg:w-[60%] w-full flex items-center justify-center flex-col p-5 lg:p-0">
        <div className="w-full px-5 lg:px-20 text-white text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="text-[8vw] lg:text-[4vw] font-semibold">
            Digital <br className="hidden lg:block" /> marketing that <br />{" "}
            drives revenue
          </h1>
        </div>
        <form className="w-full flex items-center justify-center lg:justify-start px-5 lg:px-20 mt-5 lg:mt-10">
          <div className="w-full lg:w-[60%] rounded-3xl bg-white shadow-lg p-4">
            <div className="w-full flex flex-col lg:flex-row items-center gap-5">
              <input
                type="text"
                placeholder="WhatsApp"
                className="w-full lg:w-[70%] text-[4vw] lg:text-[1.2vw] px-4 py-3 rounded-3xl border-2 border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
              />
              <input
                type="submit"
                value="Send"
                className="w-full lg:w-[30%] text-[4vw] lg:text-[1.2vw] py-3 rounded-xl bg-[#50C3C6] text-white cursor-pointer transition-all duration-300 hover:bg-[#4A9BD3]"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Right Section: Image */}
      <div className="lg:w-[40%] w-full flex items-center justify-center mt-16 lg:mt-0 mb-16">
        <div className="w-[95%] lg:w-[70%] h-[40vh] lg:h-[60vh]">
          <img
            src="/hero17.png"
            alt="Hero Image"
            className="w-full h-full object-cover rounded-lg mt-10 animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
