import React from "react";

const Hero = () => {
  return (
    <section className="herosection bg-[#4A9BD3] w-full h-full flex flex-col lg:flex-row">
      {/* Left Section: Text and Form */}
      <div className="lg:w-[60%] w-full h-full flex items-center justify-center flex-col   p-5 lg:p-0">
        <div className="w-full px-5 lg:px-20 leading-none text-white text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="text-[8vw] lg:text-[5vw] font-semibold">
            Digital <br className="hidden lg:block" /> marketing that <br />{" "}
            drives revenue
          </h1>
        </div>
        <form className="w-full flex items-center justify-center lg:justify-start px-5 lg:px-20 mt-5 lg:mt-10 h-auto">
          <div
            className="w-full lg:w-[60%] h-auto rounded-3xl bg-white shadow-lg shadow-gray-700 p-4"
            style={{ boxShadow: "10px 10px 0px rgba(0, 0, 0, 1)" }}
          >
            <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-5">
              <input
                type="text"
                placeholder="WhatsApp"
                className="w-full lg:w-[70%] text-[4vw] lg:text-[1.5vw] outline-none px-4 py-3 rounded-3xl border-2 border-[#455A64]"
              />
              <input
                type="submit"
                value="Send"
                className="w-full lg:w-[30%] text-[4vw] lg:text-[1.5vw] outline-none  py-3 rounded-xl border-2 border-[#455A64] bg-[#50C3C6] text-white cursor-pointer transition-all duration-500 ease-in-out hover:bg-[#4A9BD3] hover:text-white"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Right Section: Image */}
      <div className="lg:w-[40%] w-full h-full flex items-center justify-center mt-10 lg:mt-0">
        <div className="  w-[90%] lg:w-[70%] h-[30vh] lg:h-[60%] ">
          <img
            src="/images/hero/1.jpg"
            alt="Hero Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
