// 'use client';
// import React from 'react';

// function Contact1() {
//   return (
//     <div>
//       {/* Contact Section */}
//       <div className="flex flex-col md:flex-row items-center bg-[#4A9BD3] py-8 px-4 md:px-8 lg:px-16 h-50 md:h-65 lg:h-80">

//         <div className="md:w-1/2 text-white">
//           <h2 className="text-3xl font-bold mb-4 font-syne">Contact Us</h2>
//           <p className="text-base">
//             We're here to help you elevate your business! Reach out to us today for personalized support and to learn more about our digital marketing solutions.
//           </p>
//         </div>
//         <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
//           <img
//             src="/images/Contactus/image1.png"
//             alt="Contact Us Illustration"
//             className="w-45 h-40 object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact1;


"use client";
import React from "react";

function Contact1() {
  return (
    <section className="bg-[#4A9BD3] py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Section: Text */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-syne">
            Contact Us
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            We're here to help you elevate your business! Reach out to us today
            for personalized support and to learn more about our digital
            marketing solutions.
          </p>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/Contactus/image1.png"
            alt="Contact Us Illustration"
            className="w-64 md:w-80 lg:w-96 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact1;
