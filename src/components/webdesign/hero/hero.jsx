import React, { useState } from "react";

const HeroSection = () => {
  const [website, setWebsite] = useState("");
  const whatsappNumber = "9920892689"; // Replace with your WhatsApp number

  const handleWhatsAppClick = () => {
    if (!website) {
      alert("Please enter your website URL.");
      return;
    }

    const message = `Hello, I would like to request a quote for my website: ${website}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-[#4A9BD3] w-full h-[90%] flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight">
            Professional Web Design <br /> Company
          </h1>
          <p className="text-white mt-4 text-lg">
            Ensuring the best return on investment for your bespoke SEO Campaign requirement.
          </p>
          {/* Input Section */}
          <div className="relative w-full md:w-[500px] mt-6">
            <input
              type="text"
              placeholder="Enter Your Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full py-4 px-5 pr-36 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
  onClick={() => {
    // GA4 custom event when the "Request a Audit" button is clicked
    if (typeof window !== "undefined" && typeof gtag === "function") {
      gtag("event", "audit_request_click", {
        event_category: "Button",
        event_label: "Request a Audit Button Clicked",
      });
    }

    // Original function call (e.g., handleWhatsAppClick)
    handleWhatsAppClick();
  }}
  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-teal-500 text-white px-4 py-2 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
>
  Request a Audit
</button>

          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 lg:mt-0">
          <img
            src="/webdesign1.png" // Replace with your actual image URL
            alt="Web Design Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
