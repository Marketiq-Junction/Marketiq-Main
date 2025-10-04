"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gradient-to-br from-teal-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl p-10 md:p-16 shadow-2xl mb-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white text-xl opacity-90">
              We'd love to hear from you!
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-teal-400 text-center">
              <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-4">
                📞
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Call Us</h2>
              <a
                href="tel:+919920892689"
                className="text-lg text-teal-500 hover:text-cyan-500 font-semibold transition-colors duration-300"
              >
                +91 99208 92689
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-400 text-center">
              <div className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-4">
                ✉️
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Email Us
              </h2>
              <a
                href="mailto:mmarketiqjunction@gmail.com"
                className="text-lg text-cyan-500 hover:text-teal-500 font-semibold transition-colors duration-300 break-all"
              >
                marketiqjunction@gmail.com
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-teal-400 text-center">
              <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl mx-auto mb-4">
                📍
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Visit Us
              </h2>
              <a
                href="https://maps.app.goo.gl/9c8Gij4NMeGtGJM86"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-teal-500 hover:text-cyan-500 font-semibold transition-colors duration-300"
              >
                Off BKC, Mumbai, India 400070
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl shadow-lg p-8 md:p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white text-lg opacity-95 mb-6">
              Whether you have a question about our services, need support, or
              want to discuss a collaboration, we're here to help you succeed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+919920892689"
                className="bg-white text-teal-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-md"
              >
                Call Now
              </a>
              <a
                href="mailto:marketiqjunction@gmail.com"
                className="bg-white text-cyan-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-md"
              >
                Send Email
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-xl shadow-md p-6 border-b-4 border-teal-400">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Business Hours
              </h3>
              <p className="text-gray-600">
                Monday - Saturday: 8:00 AM - 8:00 PM
              </p>

              <p className="text-gray-600">Sunday: Closed</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border-b-4 border-cyan-400">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Quick Response
              </h3>
              <p className="text-gray-600">✓ Email replies within 24 hours</p>
              <p className="text-gray-600">✓ Phone support available</p>
              <p className="text-gray-600">✓ Dedicated customer service</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
