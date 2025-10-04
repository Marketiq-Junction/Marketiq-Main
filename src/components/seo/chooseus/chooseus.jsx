import React from "react";
import Image from "next/image";

const ChooseUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white text-black p-8 md:p-12 max-w-8xl mx-auto my-12">
      {/* Text Content */}
      <div className="lg:w-1/2 space-y-6">
        <h3 className="text-2xl uppercase font-semibold text-teal-600">
          Why Choose Us
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold">
          Boosts Your Website Traffic!
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          <span className="text-teal-500 font-extrabold text-lg">➤ </span>
          Boost website traffic with tailored engagement and visibility
          strategies.
          <br />
          <span className="text-teal-500 font-extrabold text-lg">➤ </span>
          Create a lasting online presence through quality content and targeted
          SEO.
          <br />
          <span className="text-teal-500 font-extrabold text-lg">➤ </span>
          Optimize keywords to connect your brand with active searchers.
          <br />
          <span className="text-teal-500 font-extrabold text-lg">➤ </span>
          Leverage powerful link-building to enhance online reach.
          <br />
          <span className="text-teal-500 font-extrabold text-lg">➤ </span>
          Transform your site into a hub for organic traffic and lead
          generation.
          <br />
          <span className="text-teal-500 font-extrabold text-lg">➤ </span>
          Experience steady visitor growth and convert traffic into meaningful
          business results.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <Image
          src="/chooseus.png" // Replace with your image path
          alt="Boost Website Traffic"
          width={400}
          height={500}
          className="rounded-lg shadow-lg object-contain"
        />
      </div>
    </section>
  );
};

export default ChooseUs;
