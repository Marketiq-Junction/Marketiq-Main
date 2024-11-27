'use client';
import React from 'react';

function Contact1() {
  return (
    <div>
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-center bg-blue-400 py-16 px-8 md:px-16 lg:px-32">
        <div className="md:w-1/2 text-white">
          <h2 className="text-4xl font-bold mb-4 font-syne">Contact Us</h2>
          <p className="text-lg">
            We're here to help you elevate your business! Reach out to us today for personalized support and to learn more about our digital marketing solutions.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/images/Contactus/image1.png" alt="Contact Us Illustration" className="w-50 h-auto" />
        </div>
      </div>

      {/* Spacer */}
      <div className="my-12"></div> 

      {/* Statistics Section */}
      <section className="flex justify-around items-center py-16 bg-teal-500 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold">2.7 M</h2>
          <p className="text-sm mt-2">Digital Marketing Hours</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">250+</h2>
          <p className="text-sm mt-2">Marketing Experts</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">1000+</h2>
          <p className="text-sm mt-2">4 Stars Up Reviews</p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold">600+</h2>
          <p className="text-sm mt-2">Case Studies</p>
        </div>
      </section>
    </div>
  );
}

export default Contact1;
