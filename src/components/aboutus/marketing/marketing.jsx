import React from 'react';

const MarketingSection = () => {
  const handleWhatsAppClick = (message) => {
    const whatsappNumber = "9920892689"; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-10 lg:py-16 bg-white">
      {/* Text Section */}
      <div className="lg:w-1/2">
        <h1 className="text-3xl lg:text-5xl font-bold leading-snug text-center lg:text-left">
          DRIVING A BETTER WAY OF <br /> DOING MARKETING
        </h1>
        <p className="mt-4 text-lg text-gray-700 text-left">
          <strong>Marketiq Junction</strong> is your trusted digital marketing partner. We specialize in creating tailored solutions that help brands grow in the fast-paced digital world. Our affordable services enable businesses of all sizes to access professional digital marketing without stretching their budgets.
        </p>
        <h2 className="mt-6 text-xl font-semibold text-left">What Sets Us Apart?</h2>
        <ul className="mt-4 text-gray-700 text-lg list-disc list-inside text-left">
          <li>
            <strong>Affordability:</strong> Quality services at a fraction of the cost.
          </li>
          <li>
            <strong>Customization:</strong> We understand every business is unique, and we create strategies to match your specific needs.
          </li>
          <li>
            <strong>Full-Spectrum Services:</strong> From web design to analytics, we offer comprehensive solutions to enhance your online presence.
          </li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            onClick={() => handleWhatsAppClick("Hello, I would like to get in touch regarding your services.")}
            className="bg-black text-white px-6 py-3 text-lg shadow hover:bg-gray-800 transition"
          >
            Talk to Us
          </button>
        </div>
      </div>

      {/* Illustration Section */}
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <img
          src="/about1.png" // Replace with your image path
          alt="Marketing Illustration"
          className="w-[70%] lg:max-w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default MarketingSection;
