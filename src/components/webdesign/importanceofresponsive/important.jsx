import React from "react";

const Important = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center">
        {/* Left Image */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <img
            src="/important.png"
            alt="Responsive Web Design Illustration"
            className="w-3/4"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Why responsive web design is important
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Responsive web design is essential for ensuring that a website
            performs optimally across various devices and screen sizes, from
            desktops to smartphones.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            It enhances user experience by providing easy navigation, faster
            loading times, and intuitive layouts, reducing the need for zooming
            or excessive scrolling. Additionally, responsive design is favored
            by search engines, improving SEO rankings and making the website
            more discoverable.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            As mobile usage continues to grow, a responsive website helps
            businesses reach a broader audience and stay competitive in an
            increasingly digital world.
          </p>
          <button className="mt-4 px-6 py-2 text-blue-600 font-semibold border border-blue-600 rounded-lg hover:bg-blue-100">
            Request A Proposal
          </button>
        </div>
      </div>
    </section>
  );
};

export default Important;
