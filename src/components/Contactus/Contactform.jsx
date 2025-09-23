// 'use client';
// import React from 'react';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// function ContactForm() {
//   return (
//     <div className="flex flex-col md:flex-row items-start bg-white py-16 px-8 md:px-16 lg:px-32 lg:mb-28">
//       {/* Left Section: Contact Information */}
//       <div className="md:w-1/2 text-black">
//         <h2 className="text-3xl font-bold mb-4 font-syne">Get in Touch</h2>
//         <p className="text-lg mb-6">
//           We’d love to hear from you! Whether you have questions about our services or want to discuss your digital marketing needs, feel free to reach out. You can contact us via email, phone, or by filling out the form below. Our team is ready to assist you on your journey to success!
//         </p>
//         <div className="space-y-4">
//           <p className="flex items-center">
//             <FaMapMarkerAlt className="text-teal-500 mr-2" />
//             Cluster_mumbai Suburban, 381 White House-2, SG Barve Marg, Netaji Nagar, Kurla West, Kurla, Mumbai, Maharashtra 400070, India
//           </p>
//           <p className="flex items-center">
//             <FaPhoneAlt className="text-teal-500 mr-2" />
//             Call us on: +91 808 254 40401
//           </p>
//           <p className="flex items-center">
//             <FaEnvelope className="text-teal-500 mr-2" />
//             Email us on: marketijunction@gmail.com
//           </p>
//         </div>
//       </div>

//       {/* Right Section: Contact Form */}
//       <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 bg-gray-100 p-8 shadow-lg rounded-lg">
//         <h3 className="text-2xl font-bold text-black mb-6 text-center">Drop Us A Line</h3>
//         <p className="text-gray-600 text-center mb-6">
//           We’re just a message away! Share your thoughts, questions, or feedback, and let us know how we can assist you in achieving your digital marketing goals.
//         </p>
//         <form className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input type="text" placeholder="Name" className="border text-black placeholder:text-black border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-teal-500 bg-[#A2DFE1]" />
//             <input type="email" placeholder="Email" className="border text-black placeholder:text-black border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-teal-500 bg-[#A2DFE1]" />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input type="text" placeholder="Phone" className="border text-black placeholder:text-black border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-teal-500 bg-[#A2DFE1]" />
//             <input type="text" placeholder="Website" className="border text-black placeholder:text-black border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-teal-500 bg-[#A2DFE1]" />
//           </div>
//           <textarea placeholder="Message" className="border text-black placeholder:text-black border-gray-300 p-3 rounded-md w-full h-32 focus:outline-none focus:border-teal-500 bg-[#A2DFE1]"></textarea>
//           <button className="bg-teal-500 text-white font-bold py-3 px-6 rounded-md w-full md:w-50 hover:bg-teal-600 transition duration-200">
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;



"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill Name, Email, and Message!");
      return;
    }

    // Example: Send form data to API or email service
    console.log("Form submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", website: "", message: "" });
  };

  const handleWhatsApp = () => {
    const whatsappNumber = "9920892689";
    const message = `Hello, I am ${formData.name || ""}. ${
      formData.message || ""
    }`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <div className="flex flex-col md:flex-row items-start bg-white py-16 px-8 md:px-16 lg:px-32 lg:mb-28 gap-8">
      {/* Left Section */}
      <div className="md:w-1/2 text-black">
        <h2 className="text-3xl font-bold mb-4 font-syne">Get in Touch</h2>
        <p className="text-lg mb-6">
          We’d love to hear from you! Whether you have questions about our
          services or want to discuss your digital marketing needs, feel free to
          reach out.
        </p>
        <div className="space-y-4">
          <p className="flex items-center">
            <FaMapMarkerAlt className="text-teal-500 mr-2" />
            Cluster_mumbai Suburban, 381 White House-2, SG Barve Marg, Netaji
            Nagar, Kurla West, Mumbai, Maharashtra 400070
          </p>
          <p className="flex items-center">
            <FaPhoneAlt className="text-teal-500 mr-2" /> +91 808 254 40401
          </p>
          <p className="flex items-center">
            <FaEnvelope className="text-teal-500 mr-2" />{" "}
            marketijunction@gmail.com
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 bg-gray-100 p-8 shadow-lg rounded-lg w-full">
        <h3 className="text-2xl font-bold text-black mb-6 text-center">
          Drop Us A Line
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border text-black placeholder:text-black border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-teal-500 bg-[#A2DFE1]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border text-black placeholder:text-black border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-teal-500 bg-[#A2DFE1]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="border text-black placeholder:text-black border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-teal-500 bg-[#A2DFE1]"
            />
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleChange}
              className="border text-black placeholder:text-black border-gray-300 p-3 rounded-md w-full focus:outline-none focus:border-teal-500 bg-[#A2DFE1]"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border text-black placeholder:text-black border-gray-300 p-3 rounded-md w-full h-32 focus:outline-none focus:border-teal-500 bg-[#A2DFE1]"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white font-bold py-3 px-6 rounded-md w-full md:w-50 hover:bg-teal-600 transition duration-200"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
          <button
            type="button"
            onClick={handleWhatsApp}
            className="bg-green-500 text-white font-bold py-3 px-6 rounded-md w-full md:w-50 hover:bg-green-600 transition duration-200 mt-2"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
