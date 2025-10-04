"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl p-10 md:p-16 shadow-2xl mb-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white text-xl opacity-90">
              Your privacy is our priority
            </p>
          </div>

          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border-l-4 border-teal-400">
            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong className="text-teal-500">MarketIQ Junction</strong>,
              we are committed to protecting your privacy. Our privacy policy
              outlines how we collect, use, and safeguard your personal
              information with the highest standards of security and
              transparency.
            </p>
          </div>

          {/* Privacy Policy Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Data Collection
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We collect personal data like name, email, phone number, and
                    payment information for providing our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-400">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Data Usage
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Your data is used solely for processing your enrollment,
                    providing updates, and improving our offerings.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Data Security
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We implement industry-standard encryption to secure your
                    information and protect it from unauthorized access.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-400">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Third-Party Sharing
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We do not share your data with third parties, except as
                    required for payment processing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Cookies
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our website uses cookies to improve user experience and
                    analyze website traffic for better service delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-400">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  6
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Policy Updates
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    MarketIQ Junction reserves the right to update this privacy
                    policy. Changes will be communicated through the website.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights Section */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl shadow-lg p-8 md:p-10 mt-6">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Your Rights
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-white font-semibold text-lg">
                  ✓ Access Your Data
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-white font-semibold text-lg">
                  ✓ Request Deletion
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-white font-semibold text-lg">
                  ✓ Opt-Out Anytime
                </p>
              </div>
            </div>
            <p className="text-white text-center mt-6 opacity-95">
              For any privacy-related questions or concerns, please contact us
              at{" "}
              <a
                href="mailto:marketiqjunction@gmail.com"
                className="font-bold underline"
              >
                marketiqjunction@gmail.com
              </a>
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-b-4 border-teal-400">
              <p className="text-3xl mb-2">🔒</p>
              <p className="text-gray-800 font-bold">Secure Encryption</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-b-4 border-cyan-400">
              <p className="text-3xl mb-2">🛡️</p>
              <p className="text-gray-800 font-bold">Data Protection</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-b-4 border-teal-400">
              <p className="text-3xl mb-2">✅</p>
              <p className="text-gray-800 font-bold">GDPR Compliant</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
