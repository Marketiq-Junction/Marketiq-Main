"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl p-10 md:p-16 shadow-2xl mb-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-white text-xl opacity-90">
              Welcome to <span className="font-bold">MarketIQ Junction</span>
            </p>
          </div>

          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border-l-4 border-teal-400">
            <p className="text-gray-700 text-lg leading-relaxed">
              By accessing or using our website (www.marketiqjunction.com), you
              agree to abide by the following terms and conditions. Please read
              them carefully before using our services.
            </p>
          </div>

          {/* Terms Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Eligibility
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    You must be at least 18 years old or have parental/guardian
                    consent to use our services.
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
                    Accuracy of Information
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    All users must provide accurate and up-to-date personal and
                    payment information.
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
                    Intellectual Property
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    All content, materials, and courses available on this
                    website are the property of MarketIQ Junction and are
                    protected by copyright laws. Unauthorized sharing or
                    duplication is strictly prohibited.
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
                    Service Modifications
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    MarketIQ Junction reserves the right to modify or
                    discontinue any service without prior notice.
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
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We are not liable for any indirect, incidental, or
                    consequential damages arising from the use of our services.
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
                    Dispute Resolution
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    All disputes shall be subject to Mumbai jurisdiction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Updates Section */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl shadow-lg p-8 mt-6">
            <div className="flex items-start">
              <div className="bg-white text-teal-500 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                7
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Updates to the Terms
                </h2>
                <p className="text-white text-lg leading-relaxed opacity-95">
                  MarketIQ Junction reserves the right to update these terms.
                  Changes will be communicated through the website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
