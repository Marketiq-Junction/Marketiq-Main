import React from "react";

const WhyChooseUs = () => {
  const whatsappNumber = "9920892689"; // Specified WhatsApp number
  const predefinedMessage = "Hello, I would like to know more about your services.";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(predefinedMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full min-h-[70vh] flex flex-col lg:flex-row items-center lg:items-center">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-6">
        <div className="w-3/4 md:w-2/3 lg:w-1/2">
          <img
            src="/images/rb_2148901520.png"
            className="w-full h-auto object-contain"
            alt="Why Choose Us Image"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center p-6 lg:p-8">
        {/* Heading */}
        <div className="text-center lg:text-left">
          <p className="text-4xl md:text-5xl lg:text-5xl text-[#4A9BD3] font-bold">
            Why Choose Us
          </p>
          <h3 className="mt-4 text-2xl md:text-3xl lg:text-2xl leading-tight font-bold">
            Increase your client for better position of Business
          </h3>
        </div>

        {/* Bullet Points Section */}
        <ul className="mt-4 space-y-3 text-lg md:text-xl lg:text-lg font-medium text-gray-700">
          <li className="text-[#4A9BD3] font-semibold">
            Customized, value-driven digital marketing solutions.
          </li>
          <li className="text-[#4A9BD3] font-semibold">
            Affordable services for businesses of all sizes.
          </li>
          <li className="text-[#4A9BD3] font-semibold">
            Comprehensive approach: web design, SEO, and social media.
          </li>
          <li className="text-[#4A9BD3] font-semibold">
            Measurable results and improved online visibility.
          </li>
          <li className="text-[#4A9BD3] font-semibold">
            Data-driven strategies with monthly performance reports.
          </li>
        </ul>

        {/* Button */}
        <button
          onClick={handleWhatsAppClick}
          className="mt-6 px-6 py-3 bg-[#50C3C6] text-white text-lg font-semibold rounded-md hover:bg-[#3aa1a4] transition"
        >
          Let's Chat
        </button>
      </div>
    </section>
  );
};

export default WhyChooseUs;
