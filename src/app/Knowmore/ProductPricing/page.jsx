"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Link from "next/link";

const ProductPricing = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl p-10 md:p-16 shadow-2xl mb-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Product Pricing
            </h1>
            <p className="text-white text-xl opacity-90">
              Transparent pricing, exceptional value
            </p>
          </div>

          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border-l-4 border-teal-400">
            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong className="text-teal-500">MarketIQ Junction</strong>,
              we aim to provide exceptional value through our curated
              educational programs. We believe in transparent pricing with no
              hidden fees, ensuring you get the best return on your investment.
            </p>
          </div>

          {/* Pricing Policy Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Clear Pricing
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    The prices for all our courses are clearly listed on our
                    website. We believe in transparency, so there are no hidden
                    charges.
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
                    Inclusive of Taxes
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    All course prices are inclusive of applicable taxes, unless
                    otherwise specified during the checkout process.
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
                    Discounts & Promotions
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Any discounts or promotional offers, if available, will be
                    reflected during the checkout process. Be sure to check for
                    any special offers!
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
                    Price Changes
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    While we strive to keep our prices competitive, we reserve
                    the right to change our pricing at our discretion. However,
                    confirmed bookings will not be affected by any price
                    changes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Course-Specific Pricing CTA */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl shadow-lg p-8 md:p-10 mb-8">
            <div className="flex items-start">
              <div className="bg-white text-teal-500 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Course-Specific Pricing
                </h2>
                <p className="text-white text-lg leading-relaxed opacity-95 mb-4">
                  For more details regarding specific course pricing, please
                  visit the respective course pages on our website. Each course
                  is designed to provide maximum value and practical knowledge.
                </p>

                <Link href="/Contact">
                  <button className="bg-white text-teal-500 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-md">
                    View All Courses
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Best Value
              </h3>
              <p className="text-gray-600">
                Competitive pricing with exceptional quality education
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-400">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                No Hidden Fees
              </h3>
              <p className="text-gray-600">
                What you see is what you pay - complete transparency
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Quality Assured
              </h3>
              <p className="text-gray-600">
                Premium content and support at every price point
              </p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mt-8 border-l-4 border-cyan-400">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Payment Options
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="text-teal-500 text-2xl mr-3">✓</span>
                <p className="text-gray-700">Credit & Debit Cards</p>
              </div>
              <div className="flex items-center">
                <span className="text-cyan-500 text-2xl mr-3">✓</span>
                <p className="text-gray-700">Net Banking</p>
              </div>
              <div className="flex items-center">
                <span className="text-teal-500 text-2xl mr-3">✓</span>
                <p className="text-gray-700">UPI Payments</p>
              </div>
              <div className="flex items-center">
                <span className="text-cyan-500 text-2xl mr-3">✓</span>
                <p className="text-gray-700">Digital Wallets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPricing;
