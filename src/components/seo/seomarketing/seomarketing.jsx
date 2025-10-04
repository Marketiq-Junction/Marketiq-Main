"use client";

import Image from "next/image";

const SEOMarketing = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-8 md:p-16 max-w-8xl mx-auto space-y-8 lg:space-y-0 lg:space-x-12 rounded-xl">
      {/* Left Section: Image */}
      <div className="lg:w-1/2 flex justify-center lg:justify-start">
        <Image
          src="/seomarketing.png" // Replace with your actual image path
          alt="SEO Marketing Illustration"
          width={500}
          height={400}
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          An SEO Marketing Company That Gets It
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          Let’s face it. You know what you need but you just don’t know how to
          get it. Our SEO specialists hear that over and over from clients who
          contact Thrive Internet Marketing Agency.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          You’re likely here because of one or more of the following reasons:
        </p>
        <ul className="pl-6 text-base md:text-lg leading-relaxed space-y-2 list-none">
          <li>
            <span className="font-extrabold text-white text-lg">➤ </span>
            Your website isn’t being found online.
          </li>
          <li>
            <span className="font-extrabold text-white text-lg">➤ </span>
            Your website traffic has diminished recently and you don’t know why.
          </li>
          <li>
            <span className="font-extrabold text-white text-lg">➤ </span>
            You’re starting a new website and want to ramp up new business
            quickly.
          </li>
        </ul>
        <p className="text-base md:text-lg leading-relaxed">
          If any of these pain points ring a bell, rest assured, you’ve come to
          the right SEO company. Thrive is currently serving hundreds of clients
          and providing optimization solutions to adapt to Google’s
          ever-changing algorithm.
        </p>
      </div>
    </section>
  );
};

export default SEOMarketing;
