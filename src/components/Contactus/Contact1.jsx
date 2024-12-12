'use client';
import React from 'react';

function Contact1() {
  return (
    <div>
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center bg-[#4A9BD3] py-8 px-4 md:px-8 lg:px-16 h-50 md:h-65 lg:h-80">

        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl font-bold mb-4 font-syne">Contact Us</h2>
          <p className="text-base">
            We're here to help you elevate your business! Reach out to us today for personalized support and to learn more about our digital marketing solutions.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="/images/Contactus/image1.png"
            alt="Contact Us Illustration"
            className="w-45 h-40 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact1;
