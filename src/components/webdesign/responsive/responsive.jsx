import React from "react";

const Responsive = () => {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Responsive Web Design
          </h1>
          <h2 className="text-xl text-blue-500 mt-2">
            Engage Your Target Audience and Foster Trust
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            With over 50% of all web traffic coming from a mobile device,
            creating a mobile-friendly website is no longer an option—it’s a
            necessity. It all starts with responsive web design.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Responsive web design allows your website to adapt to and provide
            an optimal experience on any device it’s being viewed from. This
            means that your website will look great and function flawlessly for
            a user on a desktop computer, laptop, tablet, or smartphone.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Every website developed by Mainstreethost utilizes responsive web
            design, adapting perfectly to each device users are accessing it
            from.
          </p>
          <ul className="text-gray-600 mt-6 space-y-2">
            <li>• Mobile-friendly</li>
            <li>• Design for every device</li>
            <li>• Positive UX</li>
            <li>• Helps SEO</li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
              View Our Portfolio
            </button>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
              Request A Free Quote
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/responsive.png" // Replace with your actual image URL
            alt="Responsive Web Design"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Responsive;
