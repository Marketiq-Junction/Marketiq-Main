import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-blue-400 text-white py-16 text-center px-4">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold">
        Save Time & Effort With the Digital Inside
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-lg md:text-xl text-gray-100">
        Streamline your business operations with smart digital marketing
        solutions. Let us handle the complexity of online growth while you
        focus on what matters most—running your business efficiently!
      </p>

      {/* Button */}
      <div className="mt-8">
        <button className="bg-white text-blue-400 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-200 transition animate-pulse">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
