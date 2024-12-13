import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-[#4A9BD3] text-white py-20 text-center px-4">
      {/* Title */}
      <h2 className="text-6xl md:text-5xl font-bold">
        Save Time & Effort With the Digital Inside
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-4xl md:text-2xl text-gray-100">
        Streamline your business operations with smart digital marketing
        solutions.<br/> Let us handle the complexity of online growth while you
        focus on what <br/> matters most—running your business efficiently!
      </p>

      {/* Button */}
      <div className="mt-8">
        <button className="bg-white text-blue-400 font-semibold px-8 py-3 shadow-md hover:bg-gray-200 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
