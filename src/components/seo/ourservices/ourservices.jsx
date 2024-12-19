import React from "react";

const OurServices = () => {
  return (
    <section className="bg-[#4A9BD3] py-12 px-8 md:py-16 md:px-20 lg:mb-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Reasons for Choosing */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Reason For Choosing Our Service
          </h2>
          <p className="text-base md:text-lg mb-8 text-white leading-relaxed">
            Our team of seasoned professionals brings years of industry
            experience, ensuring your brand receives innovative strategies
            backed by a proven track record of successful campaigns.
          </p>
          <div className="space-y-8">
            {/* Reason 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-white text-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Expertise and Experience
                </h3>
                <p className="text-base text-white">
                  Our team consists of seasoned professionals with years of
                  experience in digital marketing.
                </p>
              </div>
            </div>
            {/* Reason 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-white text-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Tailored Solutions
                </h3>
                <p className="text-base text-white">
                  We understand that every business is unique, which is why we
                  offer customized strategies to meet your specific needs.
                </p>
              </div>
            </div>
            {/* Reason 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-white text-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Affordable Pricing
                </h3>
                <p className="text-base text-white">
                  We believe that high-quality digital marketing should be
                  accessible to all businesses, regardless of size.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Free SEO Analysis Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-blue-500">
            Want A Free SEO Analysis?
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="website" className="sr-only">
                Website
              </label>
              <input
                type="text"
                id="website"
                placeholder="Website"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Check Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
