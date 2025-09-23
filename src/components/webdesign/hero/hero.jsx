// import React, { useState } from "react";

// const HeroSection = () => {
//   const [website, setWebsite] = useState("");
//   const whatsappNumber = "9920892689"; // Replace with your WhatsApp number

//   const handleWhatsAppClick = () => {
//     if (!website) {
//       alert("Please enter your website URL.");
//       return;
//     }

//     const message = `Hello, I would like to request a quote for my website: ${website}`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <section className="bg-[#4A9BD3] w-full h-[80vh] flex items-center py-12">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
//         {/* Left Content */}
//         <div className="text-center lg:text-left lg:w-1/2">
//           <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight">
//             Professional <span className="text-purple-900">Web Design</span>{" "}
//             <br /> Company
//           </h1>
//           <p className="text-white mt-6 text-lg">
//             Ensuring the best return on investment for your bespoke SEO Campaign
//             requirement.
//           </p>

//           {/* Input Section */}
//           <div className="relative w-full md:w-[500px] mt-8">
//             <input
//               type="text"
//               placeholder="Enter Your Website"
//               value={website}
//               onChange={(e) => setWebsite(e.target.value)}
//               className="w-full py-4 px-5 pr-36 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
//             />
//             <button
//               onClick={() => {
//                 if (
//                   typeof window !== "undefined" &&
//                   typeof gtag === "function"
//                 ) {
//                   gtag("event", "audit_request_click", {
//                     event_category: "Button",
//                     event_label: "Request a Audit Button Clicked",
//                   });
//                 }
//                 handleWhatsAppClick();
//               }}
//               className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 shadow-lg"
//             >
//               Request a Audit
//             </button>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
//           <img
//             src="/webdesign1.png" // Replace with your actual image URL
//             alt="Web Design Illustration"
//             className="max-w-full h-auto rounded-lg shadow-xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

"use client";
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
    <section className="bg-[#4A9BD3] w-full min-h-[80vh] flex items-center py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 gap-8">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Professional <span className="text-purple-900">Web Design</span>{" "}
            <br />
            Company
          </h1>
          <p className="text-white mt-6 text-lg sm:text-xl max-w-md">
            Ensuring the best return on investment for your bespoke SEO campaign
            requirements.
          </p>

          {/* Input Section */}
          <div className="relative w-full md:w-[500px] mt-8">
            <input
              type="text"
              placeholder="Enter Your Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full py-4 px-5 pr-36 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
            />
            <button
              onClick={() => {
                if (
                  typeof window !== "undefined" &&
                  typeof gtag === "function"
                ) {
                  gtag("event", "audit_request_click", {
                    event_category: "Button",
                    event_label: "Request a Audit Button Clicked",
                  });
                }
                handleWhatsAppClick();
              }}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 shadow-lg transition"
            >
              Request a Audit
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/webdesign1.png" // Replace with your actual image URL
            alt="Web Design Illustration"
            className="max-w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
