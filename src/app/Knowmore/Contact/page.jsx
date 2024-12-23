import React from "react";
import Navbar from "@/components/Navbar/Navbar"; // Import the Navbar component
import Footer from "@/components/Footer/Footer"; // Import the Footer component

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center mb-24 mt-8">
        <div className="max-w-4xl bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-blue-500 mb-6">Contact Us</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            We’d love to hear from you! Reach out to us anytime for inquiries,
            support, or business collaborations.
          </p>
          <div className="mt-6">
            <p className="text-gray-700 text-lg mb-4">
              📞 <strong>Call:</strong>{" "}
              <a
                href="tel:+919920892689"
                className="text-blue-500 hover:underline"
              >
                +91 99208 92689
              </a>
            </p>
            <p className="text-gray-700 text-lg mb-4">
              ✉️ <strong>Email:</strong>{" "}
              <a
                href="mailto:marketiqsolutions@gmail.com"
                className="text-blue-500 hover:underline"
              >
                marketiqsolutions@gmail.com
              </a>
            </p>
            <p className="text-gray-700 text-lg">
              📍 <strong>Address:</strong>{" "}
              <a
                href="https://maps.app.goo.gl/9c8Gij4NMeGtGJM86"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Off BKC, Mumbai, India 400070
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Contact;
