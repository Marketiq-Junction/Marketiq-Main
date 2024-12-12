"use client";

const Savetime = () => {
  return (
    <div className="bg-[#4A9BD3] text-white w-full  h-45">
      <div className="flex flex-col md:flex-row  justify-start w-full max-w-screen-xl">
        {/* Left Image Section */}
        <div className="flex justify-start md:justify-end w-full md:w-1/4 mb-6 md:mb-0">
          <img
            src="/images/socialmedia/three.png" // Replace with your image path
            alt="Illustration"
            className="w-1/2 md:w-2/3 object-contain" // Adjusted width for smaller image
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col items-center text-center md:w-3/4 justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Save Time & Effort With the Marketiq Junction
          </h1>
          <p className="text-base leading-relaxed mb-6">
            We understand the importance of maximizing your time and effort while navigating the complexities of digital marketing. Our team is
            dedicated to streamlining your marketing processes, allowing you to focus on what matters most—growing your business.<br />
            With our expertise in web design, social media management, and SEO, we implement effective strategies that drive results efficiently.<br />
            By leveraging our services, you can save valuable resources and ensure that your marketing efforts are optimized for success.
          </p>
          <p className="text-base leading-relaxed mb-8">
            Let us take care of the digital landscape while you concentrate on your core business activities. For more information on how we can help
            you, feel free to reach out!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-[#FFFFFF] border-[#4A9BD3] border-2 text-[#000000] px-8 py-3 rounded transition hover:bg-gray-100">
              Contact Us
            </button>
            <button className="bg-[#4A9BD3] border-[#FFFFFF] border-2 text-[#FFFFFF] px-8 py-3 rounded transition hover:bg-[#3a82b2]">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Savetime;
