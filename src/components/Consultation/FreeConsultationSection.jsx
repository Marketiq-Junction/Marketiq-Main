import React from "react";
import { TiTick } from "react-icons/ti";

const FreeConsultationSection = () => {
  return (
    <section className="w-full h-full bg-[#4A9BD3] text-white flex flex-col lg:flex-row items-center justify-center mt-5 lg:mt-0">
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col items-center justify-center p-5 lg:p-0">
        <div className="w-full h-auto lg:h-[50%] flex flex-col gap-5 justify-end lg:gap-10 lg:px-24">
          <h1 className="text-[8vw] md:text-[5vw] lg:text-[3vw] font-bold leading-tight lg:leading-none">
            Get your free <br /> consultation to <br /> boost your business
          </h1>
          <p className="text-[3vw] md:text-[2vw] lg:text-[1.2vw] font-semibold">
            Unlock the next level of growth for your business—schedule <br className="hidden lg:block" />
            your free consultation today
          </p>
        </div>
        <div className="w-full h-auto lg:h-[50%] lg:px-24">
          {[
            "Tailored Digital Solutions: We'll analyze your business needs and create a custom strategy just for you.",
            "Expert Guidance: Gain insights from experienced digital marketing professionals.",
            "Proven Results: Our strategies focus on driving growth and achieving measurable success.",
            "Expert Guidance: Gain insights from experienced digital marketing professionals.",
          ].map((text, index) => (
            <div key={index} className="flex w-full h-auto lg:h-[15%] mt-3 lg:mt-5">
              <div className="w-[15%] lg:w-[10%] flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full">
                  <TiTick className="text-[3vw] md:text-[2vw] lg:text-[1.5vw] text-black" />
                </div>
              </div>
              <div className="w-[85%] lg:w-[90%] flex items-center">
                <span className="text-[3vw] md:text-[2vw] lg:text-[1vw] leading-tight md:leading-none font-medium">
                  {text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center p-5 lg:p-0">
        <div
          className="w-full md:w-[70%] lg:w-[60%] h-auto md:h-[50%] lg:h-[50%] bg-white rounded-3xl p-5 md:p-10"
          style={{ boxShadow: "10px 10px 0px rgba(0, 0, 0, 1)" }}
        >
          <div className="w-full h-auto flex flex-col justify-center gap-3 md:gap-5">
            <h1 className="text-[5vw] md:text-[3vw] lg:text-[1.5vw] font-bold text-black">
              Get your free audit
            </h1>
            <div className="w-full h-[4px] md:h-[6px] rounded-lg bg-[#000]">
              <div className="w-1/2 h-full bg-[#50C3C6]"></div>
            </div>
          </div>
          <div className="w-full h-auto mt-5 md:mt-5">
            <form
              action=""
              className="w-full h-auto flex flex-col gap-5 text-black"
            >
              <input
                type="text"
                placeholder="Company Name"
                className="px-5 md:px-10 text-[4vw] md:text-[2vw] lg:text-[1.3vw] outline-none w-full h-12 md:h-14 lg:h-12 rounded-2xl border-2 border-black"
              />
              <input
                type="text"
                placeholder="WhatsApp"
                className="px-5 md:px-10 text-[4vw] md:text-[2vw] lg:text-[1.3vw] outline-none w-full h-12 md:h-14 lg:h-12 rounded-2xl border-2 border-black"
              />
              <input
                type="submit"
                value="Send"
                className="w-full h-12 md:h-14 lg:h-12 rounded-2xl bg-black text-white text-[4vw] md:text-[2vw] lg:text-[1.3vw]"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultationSection;
