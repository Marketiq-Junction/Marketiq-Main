'use client';
import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-blue-400 py-16 px-8 md:px-16 lg:px-32">
      <div className="md:w-1/2 text-white">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg font-family: Montserrat Alternates h-30px;">
          We're here to help you elevate your business! Reach out to us today for personalized support and to learn more about our digital marketing solutions.
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src="your-image-path.jpg" alt="Contact Us Illustration" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Contact;
