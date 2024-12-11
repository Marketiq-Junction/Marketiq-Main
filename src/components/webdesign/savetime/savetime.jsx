import React from "react";

const SaveTime = () => {
  return (
    <section className="bg-blue-500 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/time.png"
            alt="Save Time Illustration"
            className=" h-auto"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 text-center md:text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center ">
            Save Time & Effort With the Marketiq Junction
          </h1>
          <p className="text-lg mb-6 leading-relaxed justify-center">
            We understand the importance of maximizing your time and effort
            while navigating the complexities of digital marketing. Our team is
            dedicated to streamlining your marketing processes, allowing you to
            focus on what matters most—growing your business.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            With our expertise in web design, social media management, and SEO,
            we implement effective strategies that drive results efficiently.
            By leveraging our services, you can save valuable resources and
            ensure that your marketing efforts are optimized for success.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Let us take care of the digital landscape while you concentrate on
            your core business activities. For more information on how we can
            help you, feel free to reach out!
          </p>
          <div className="flex justify-center md:justify-center gap-4">
            <button className="bg-white text-blue-500 font-semibold px-6 py-2 rounded-md shadow-md hover:bg-black transition-transform duration-200">
              Contact Us
            </button>
            <button className="border border-white text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveTime;
