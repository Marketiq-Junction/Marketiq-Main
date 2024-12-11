"use client";

const Hero = () => {
  return (
    <section className="flex flex-row justify-center items-center py-12 bg-blue-400">
      <div className="flex flex-col md:flex-row max-w-6xl w-full gap-10">
        {/* Left Side Content */}
        <div className="flex-1 flex flex-col justify-center ml-6 px-6 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Google My Business Management
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
            We recognize the importance of having a strong local presence,
            which is why our Google My Business (GMB) services are designed to
            help you maximize your visibility and connect with customers in
            your area. With a well-optimized GMB profile, you can attract more
            local clients and drive traffic to your business.
          </p>
          <div className="relative w-full md:w-[500px]">
            <input
              type="text"
              placeholder="Enter Your Website"
              className="w-full py-4 px-5 pr-36 border border-gray-300 rounded-md text-gray-700"
            />
            <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
              Request A Quote
            </button>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-end items-center px-6 md:px-0">
          <img
            src="/images/GoogleMyBusiness/first1.png"
            alt="Google My Business Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
