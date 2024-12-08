"use client";

const Savetime = () => {
  return (
    <div className="bg-[#4A9BD3] text-white p-8 rounded-lg shadow-md mx-auto my-8 w-full">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Image Section */}
        <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
          <img
            src="/images/socialmedia/three.png" // Replace with your image path
            alt="Illustration"
            className="w-2/3 md:w-full rounded-md"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-2/3 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Save Time & Effort With the Marketiq Junction
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            We understand the importance of maximizing your time and effort while navigating the complexities of digital marketing. Our team is dedicated to streamlining your marketing processes, allowing you to focus on whatmatters most—growing your business. <b  />
            With our expertise in web design, social media management, and SEO, we implement effective strategies that drive results efficiently. By leveraging our services, you can save valuable resources and ensure that your marketing efforts are optimized for success.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-8">
            Let us take care of the digital landscape while you concentrate on your core business activities.<b /> For more information on how we can help you, feel free to reach out!
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-white text-blue-500 font-medium px-6 py-3 rounded-lg border border-white hover:bg-blue-400 hover:text-white transition duration-300">
              Contact Us
            </button>
            <button className="bg-yellow-500 text-white font-medium px-6 py-3 rounded-lg border border-yellow-500 hover:bg-yellow-600 transition duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savetime;
