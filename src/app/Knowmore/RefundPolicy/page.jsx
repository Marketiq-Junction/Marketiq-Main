"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const RefundPolicy = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl p-10 md:p-16 shadow-2xl mb-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Refund Policy
            </h1>
            <p className="text-white text-xl opacity-90">
              Your satisfaction is our commitment
            </p>
          </div>

          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border-l-4 border-teal-400">
            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong className="text-teal-500">MarketIQ Junction</strong>,
              we strive to ensure your satisfaction. However, we understand that
              circumstances may change, which is why we have a clear refund
              policy to accommodate your needs and provide you with peace of
              mind.
            </p>
          </div>

          {/* Refund Policy Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Refund Request
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Refund requests must be made within 7 days of enrollment to
                    be eligible for consideration.
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
                    Eligibility for Refund
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Refunds are only applicable if less than 25% of the course
                    has been accessed by the enrolled student.
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
                    Processing Fees
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Processing fees, if any, will be deducted from the refunded
                    amount as per standard payment gateway charges.
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
                    Refund Timeline
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Refunds will be processed within 10 business days after
                    approval to your original payment method.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Request Refund */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl shadow-lg p-8 md:p-10 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              How to Request a Refund
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">📧</div>
                <p className="text-white font-semibold text-lg mb-2">Step 1</p>
                <p className="text-white opacity-90">
                  Email us at marketiqsolutions@gmail.com
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">📋</div>
                <p className="text-white font-semibold text-lg mb-2">Step 2</p>
                <p className="text-white opacity-90">
                  Provide your enrollment details and reason
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-white font-semibold text-lg mb-2">Step 3</p>
                <p className="text-white opacity-90">
                  Wait for approval and processing
                </p>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-400 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Important Notes
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-500 text-xl mr-3 mt-1">•</span>
                <p className="text-gray-700 text-lg">
                  Non-refundable courses will be clearly marked at the time of
                  purchase
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 text-xl mr-3 mt-1">•</span>
                <p className="text-gray-700 text-lg">
                  Promotional or discounted courses may have different refund
                  terms
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 text-xl mr-3 mt-1">•</span>
                <p className="text-gray-700 text-lg">
                  Partial refunds are not available - refunds are processed in
                  full or not at all
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 text-xl mr-3 mt-1">•</span>
                <p className="text-gray-700 text-lg">
                  All refund requests are subject to review and approval by our
                  team
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Need Help?
              </h3>
              <p className="text-gray-600 mb-4">
                Contact our support team for assistance with your refund request
              </p>
              <a
                href="mailto:marketiqsolutions@gmail.com"
                className="inline-block bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Contact Support
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-400">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team for immediate assistance
              </p>
              <a
                href="tel:+919920892689"
                className="inline-block bg-gradient-to-r from-cyan-400 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                +91 99208 92689
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
