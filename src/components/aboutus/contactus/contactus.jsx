import React from 'react';

const ContactUs = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "9920892689"; // Replace with your WhatsApp number
    const message = "Hello, I would like to get in touch regarding your digital marketing solutions.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-[#4A9BD3] text-white py-20 px-4">
      {/* Title */}
      <h2 className="text-4xl sm:text-6xl md:text-5xl font-bold text-center">
        Save Time & Effort With the Digital Inside
      </h2>

      {/* Bullet Points */}
      <ul className="mt-6 text-lg sm:text-xl text-gray-100 space-y-4 text-left max-w-3xl mx-auto">
        <li className="flex items-start gap-2">
          <span className="text-white font-bold text-2xl">➤</span>
          Streamline your business operations with smart digital marketing solutions.
        </li>
        <li className="flex items-start gap-2">
          <span className="text-white font-bold text-2xl">➤</span>
          Let us handle the complexity of online growth while you focus on what matters most.
        </li>
        <li className="flex items-start gap-2">
          <span className="text-white font-bold text-2xl">➤</span>
          Drive efficiency and maximize results with expert strategies tailored for your business.
        </li>
        <li className="flex items-start gap-2">
          <span className="text-white font-bold text-2xl">➤</span>
          Achieve sustainable growth through data-driven decision-making.
        </li>
      </ul>

      {/* Button */}
      <div className="mt-8 flex justify-center">
      <button
  onClick={() => {
    handleWhatsAppClick(); // Your existing function

    // Send event to GA4
    gtag('event', 'contact_our_team_click', {
      event_category: 'button',
      event_label: 'Contact Our Team Button',
      value: 1,
    });
  }}
  className="bg-white text-[#4A9BD3] font-semibold px-8 py-3 shadow-md hover:bg-[#50C3C6] hover:text-black transition"
>
  Contact Our Team
</button>

      </div>
    </div>
  );
};

export default ContactUs;
