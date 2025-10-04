"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const ShippingAndDelivery = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl p-10 md:p-16 shadow-2xl mb-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Shipping & Delivery
            </h1>
            <p className="text-white text-xl opacity-90">
              Timely delivery, every time
            </p>
          </div>

          {/* Introduction Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border-l-4 border-teal-400">
            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong className="text-teal-500">MarketIQ Junction</strong>,
              we are committed to ensuring timely delivery of any physical
              materials or certificates associated with our services. Below is
              our comprehensive shipping and delivery policy.
            </p>
          </div>

          {/* Shipping Policy Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="flex items-start mb-4">
                <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Shipping Time
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Materials will be shipped within 7-10 business days after
                    order confirmation and processing.
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
                    Shipping Costs
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Shipping costs, if applicable, will be clearly displayed at
                    checkout before you complete your purchase.
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
                    Delivery Timelines
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Delivery timelines depend on your location and the courier
                    services used. Please note that delays may occur due to
                    factors beyond our control.
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
                    Tracking Details
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Once your item is shipped, tracking details will be shared
                    with you to monitor the progress of the delivery in
                    real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Process */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl shadow-lg p-8 md:p-10 mb-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Delivery Process
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">📦</div>
                <p className="text-white font-semibold text-lg mb-2">Step 1</p>
                <p className="text-white opacity-90">Order Processing</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🚚</div>
                <p className="text-white font-semibold text-lg mb-2">Step 2</p>
                <p className="text-white opacity-90">Dispatch & Shipping</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">📍</div>
                <p className="text-white font-semibold text-lg mb-2">Step 3</p>
                <p className="text-white opacity-90">Track Your Package</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">✅</div>
                <p className="text-white font-semibold text-lg mb-2">Step 4</p>
                <p className="text-white opacity-90">Receive & Confirm</p>
              </div>
            </div>
          </div>

          {/* Delivery Zones */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="text-5xl mb-4">🏙️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Metro Cities
              </h3>
              <p className="text-gray-600 mb-2">3-5 business days</p>
              <p className="text-teal-500 font-semibold">Fast Delivery</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-400">
              <div className="text-5xl mb-4">🏘️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tier 2 Cities
              </h3>
              <p className="text-gray-600 mb-2">5-7 business days</p>
              <p className="text-cyan-500 font-semibold">Standard Delivery</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="text-5xl mb-4">🏞️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Rural Areas
              </h3>
              <p className="text-gray-600 mb-2">7-14 business days</p>
              <p className="text-teal-500 font-semibold">Extended Delivery</p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-cyan-400 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-3xl mr-3">📋</span>
              Important Notes
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal-500 text-xl mr-3 mt-1">•</span>
                <p className="text-gray-700 text-lg">
                  Please ensure your shipping address is accurate and complete
                  to avoid delivery delays
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 text-xl mr-3 mt-1">•</span>
                <p className="text-gray-700 text-lg">
                  Delivery timelines may vary during peak seasons or due to
                  unforeseen circumstances
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 text-xl mr-3 mt-1">•</span>
                <p className="text-gray-700 text-lg">
                  We use trusted courier partners to ensure safe and secure
                  delivery of your materials
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 text-xl mr-3 mt-1">•</span>
                <p className="text-gray-700 text-lg">
                  Digital certificates and course materials are delivered
                  instantly via email
                </p>
              </li>
            </ul>
          </div>

          {/* Issues with Shipping */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl shadow-lg p-8 md:p-10 mb-8">
            <div className="flex items-start">
              <div className="bg-white text-teal-500 rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">
                  Issues with Shipping
                </h2>
                <p className="text-white text-lg leading-relaxed opacity-95 mb-4">
                  If you experience any issues with shipping or delivery, please
                  contact us at{" "}
                  <a
                    href="mailto:marketiqjunction@gmail.com"
                    className="font-bold underline hover:text-gray-100 transition-colors"
                  >
                    marketiqjunction@gmail.com
                  </a>
                  , and we will assist you in resolving the matter promptly.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Email Support
              </h3>
              <p className="text-gray-600 mb-4">
                Get help with shipping queries and tracking
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
              <h3 className="text-xl font-bold text-gray-800 mb-3">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak with our support team directly
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

export default ShippingAndDelivery;
