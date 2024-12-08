"use client";

import React from "react";

const Request = () => {
  return (
    <section className="bg-gray-100 py-12 flex items-center justify-center">
      <div className="bg-[#4A9BD3] max-w-5xl w-full py-12 px-6 rounded-xl shadow-lg text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Want More Engagement? Get 3 Tips From an Expert!
        </h2>
        <p className="text-lg md:text-xl font-medium text-black mb-8">
          Want to boost engagement? Post high-value, audience-centered content,
          and be active in responding to your community—engagement thrives on
          interaction!
        </p>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <input
            type="text"
            placeholder="Select Platform"
            className="w-full py-3 px-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 px-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full py-3 px-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="url"
            placeholder="Website URL"
            className="w-full py-3 px-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        {/* Captcha Disclaimer */}
        <p className="text-sm text-black-200 mb-4">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-300"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>

        {/* Submit Button */}
        <button className="bg-[#50C3C6] text-black px-8 py-3 rounded-md font-semibold text-lg hover:bg-[#3BA9A9] transition">
          Request A Free Quote
        </button>
      </div>
    </section>
  );
};

export default Request;
