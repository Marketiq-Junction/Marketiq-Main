"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const OurStory = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-3xl p-10 md:p-16 shadow-2xl mb-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Story
            </h1>
            <p className="text-white text-xl opacity-90">
              Building futures since 2011
            </p>
          </div>

          {/* Story Timeline */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                2011
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Our Beginning
              </h3>
              <p className="text-gray-600">
                MarketiqJunction was founded with a vision to transform
                education
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-cyan-400">
              <div className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                ∞
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600">
                Empowering students to reach their full potential
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border-t-4 border-teal-400">
              <div className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                ★
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Our Impact
              </h3>
              <p className="text-gray-600">
                Thousands of students guided towards success
              </p>
            </div>
          </div>

          {/* Main Content Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-teal-400">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl mr-4">
                  1
                </span>
                Welcome to MarketiqJunction
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our journey began in 2011 with a simple yet powerful vision: to
                deliver high-quality education and career guidance to students
                from diverse backgrounds. Over the years, we have remained
                committed to this mission, evolving and adapting to meet the
                changing needs of our students.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-l-4 border-cyan-400">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl mr-4">
                  2
                </span>
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At Marketiq Junction, we believe that education is not just
                about acquiring knowledge but about empowering individuals to
                reach their full potential. Our mission is to create
                opportunities for students by offering comprehensive learning
                programs, skill-building initiatives, and placement assistance
                that prepare them for real-world success.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                <span className="bg-white text-teal-500 rounded-full w-10 h-10 flex items-center justify-center text-xl mr-4">
                  3
                </span>
                Join Our Journey
              </h2>
              <p className="text-white text-lg leading-relaxed opacity-95">
                We invite you to be part of our story. Join us as we continue to
                inspire and nurture students on their path to success. Together,
                we can build a brighter future where every student has the
                opportunity to excel and achieve their dreams.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-b-4 border-teal-400">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2">
                13+
              </p>
              <p className="text-gray-600 font-semibold">Years of Excellence</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-b-4 border-cyan-400">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-2">
                1000+
              </p>
              <p className="text-gray-600 font-semibold">Students Guided</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-b-4 border-teal-400">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-2">
                100%
              </p>
              <p className="text-gray-600 font-semibold">Dedicated Support</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-b-4 border-cyan-400">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-2">
                ∞
              </p>
              <p className="text-gray-600 font-semibold">Possibilities</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurStory;
