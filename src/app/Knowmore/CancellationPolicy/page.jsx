"use client";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gradient-to-br from-teal-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl p-10 md:p-16 shadow-2xl mb-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Cancellation Policy
            </h1>
            <p className="text-white text-xl opacity-90">
              Flexible and transparent cancellation terms
            </p>
          </div>

          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border-l-4 border-teal-400">
            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong className="text-teal-500">MarketIQ Solutions</strong>,
              we understand that plans may change, and we strive to make the
              cancellation process as smooth as possible. Below is the policy
              that outlines the conditions under which you can cancel our
              services or subscriptions.
            </p>
          </div>

          {/* Cancellation Policy Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Cancellation Request
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Cancellation requests must be submitted in writing to{" "}
                    <a
                      href="mailto:marketiqsolutions@gmail.com"
                      className="text-teal-500 hover:text-cyan-500 font-semibold underline transition-colors"
                    >
                      marketiqsolutions@gmail.com
                    </a>
                    .
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
                    Eligibility for Cancellation
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Service cancellations must be made before the initiation of
                    the agreed-upon scope of work or delivery milestones.
                    Cancellations after significant progress (e.g., over 25% of
                    the agreed deliverables) may not be eligible for a refund.
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
                    Cancellation Fees
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Any applicable cancellation fees or costs incurred will be
                    deducted before processing refunds.
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
                    Refund After Cancellation
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    If eligible for a refund, the cancellation request will be
                    processed as per our Refund Policy, and refunds will
                    typically be issued within 7–10 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Cancel */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl shadow-lg p-8 md:p-10 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              How to Cancel Your Service
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">📝</div>
                <p className="text-white font-semibold text-lg mb-2">Step 1</p>
                <p className="text-white opacity-90">
                  Send a written cancellation request via email
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🔍</div>
                <p className="text-white font-semibold text-lg mb-2">Step 2</p>
                <p className="text-white opacity-90">
                  Our team will review your request and eligibility
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">💼</div>
                <p className="text-white font-semibold text-lg mb-2">Step 3</p>
                <p className="text-white opacity-90">
                  Receive confirmation and refund if applicable
                </p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-400 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">💡</span>
              Important Information
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-500 text-xl mr-3 mt-1">•</span>
                <p className="text-gray-700 text-lg">
                  Cancellations made before work begins are eligible for full
                  refund (minus processing fees)
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 text-xl mr-3 mt-1">•</span>
                <p className="text-gray-700 text-lg">
                  Partial work completed will be billed proportionally before
                  refund processing
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 text-xl mr-3 mt-1">•</span>
                <p className="text-gray-700 text-lg">
                  Subscription services can be cancelled at any time but remain
                  active until the end of the billing cycle
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 text-xl mr-3 mt-1">•</span>
                <p className="text-gray-700 text-lg">
                  Custom projects with significant progress may have different
                  cancellation terms outlined in the contract
                </p>
              </li>
            </ul>
          </div>

          {/* Timeline Visual */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-b-4 border-teal-400">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2">
                0-25%
              </p>
              <p className="text-gray-600 font-semibold text-sm">Progress</p>
              <p className="text-teal-500 text-xs mt-2">Full Refund Eligible</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-b-4 border-cyan-400">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-2">
                25-50%
              </p>
              <p className="text-gray-600 font-semibold text-sm">Progress</p>
              <p className="text-cyan-500 text-xs mt-2">Partial Refund</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-b-4 border-teal-400">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2">
                50-75%
              </p>
              <p className="text-gray-600 font-semibold text-sm">Progress</p>
              <p className="text-teal-500 text-xs mt-2">Limited Refund</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-b-4 border-cyan-400">
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-2">
                75%+
              </p>
              <p className="text-gray-600 font-semibold text-sm">Progress</p>
              <p className="text-cyan-500 text-xs mt-2">No Refund</p>
            </div>
          </div>

          {/* Contact Support */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Email for Cancellation
              </h3>
              <p className="text-gray-600 mb-4">
                Send your cancellation request to our team
              </p>
              <a
                href="mailto:marketiqjunction@gmail.com"
                className="inline-block bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                marketiqjunction@gmail.com
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-400">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Call Us for Queries
              </h3>
              <p className="text-gray-600 mb-4">
                Speak with our team about cancellation policies
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

export default CancellationPolicy;
