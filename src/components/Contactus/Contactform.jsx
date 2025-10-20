"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "-50px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("कृपया नाम, ईमेल और संदेश भरें! (Please fill Name, Email, and Message!)");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", website: "", message: "" });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const handleWhatsApp = () => {
    if (!formData.name || !formData.message) {
      alert("कृपया कम से कम नाम और संदेश भरें! (Please fill at least Name and Message!)");
      return;
    }

    const whatsappNumber = "919920892689"; // Replace with your WhatsApp number
    const message = `🔔 *New Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email || "Not provided"}
📱 *Phone:* ${formData.phone || "Not provided"}
🌐 *Website:* ${formData.website || "Not provided"}

💬 *Message:*
${formData.message}

---
Sent from Marketiqjunction Website`;

    const encoded = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    
    const newWindow = window.open(whatsappURL, "_blank");
    
    if (newWindow) {
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", website: "", message: "" });
        alert("WhatsApp में भेजा गया! (Sent to WhatsApp!)");
      }, 1000);
    } else {
      alert("Please allow pop-ups for this site to send WhatsApp messages.");
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      content: "Office No, White House, Lower Ground Floor, Building No. 3, New, 1A & 2, Buddha Colony, Kurla West, Mumbai, Maharashtra 400070",
      subContent: "Mumbai, Maharashtra 400070",
      color: "from-teal-500 to-cyan-500",
      href: "https://share.google/l9NEBHpE6c1hZnZ9w",
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      content: "+91 9920892689",
      subContent: "Mon-Sat 08:00 AM - 08:00 PM",
      color: "from-cyan-500 to-teal-600",
      href: "tel:+919920892689",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      content: "marketiqjunction@gmail.com",
      subContent: "We'll respond within 24 hours",
      color: "from-teal-600 to-cyan-600",
      href: "mailto:marketiqjunction@gmail.com",
    },
  ];

  return (
    <div 
      ref={sectionRef}
      className="relative flex flex-col md:flex-row items-start bg-gradient-to-br from-gray-50 via-white to-teal-50 py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-32 gap-8 md:gap-12 lg:gap-16 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div 
        className={`md:w-1/2 text-gray-800 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Contact Information
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
            We'd love to hear from you! Whether you have questions about our
            services or want to discuss your digital marketing needs, feel free to
            reach out.
          </p>
        </div>

        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-teal-100/50">
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${info.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                ></div>
                <div className="relative flex items-start gap-4">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className="text-xl md:text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                      {info.title}
                    </h3>
                    <p className="text-gray-700 font-medium text-sm md:text-base hover:text-cyan-600 transition-colors">
                      {info.content}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">
                      {info.subContent}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white">
              <FaClock />
            </div>
            <h4 className="font-semibold text-gray-800">Business Hours</h4>
          </div>
          <p className="text-gray-600 text-sm">
            Monday - Saturday: 8:00 AM - 8:00 PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>

      <div 
        className={`md:w-1/2 relative z-10 w-full transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 lg:p-10 shadow-2xl rounded-3xl border border-teal-100/50">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              Drop Us A Line
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-pulse">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <p className="text-green-700 font-medium">
                Message sent successfully! We'll contact you soon.
              </p>
            </div>
          )}

          <div className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-800 placeholder:text-gray-500 p-3 md:p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-teal-50/50 transition-all duration-300 hover:bg-teal-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-800 placeholder:text-gray-500 p-3 md:p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-teal-50/50 transition-all duration-300 hover:bg-teal-50"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-800 placeholder:text-gray-500 p-3 md:p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-teal-50/50 transition-all duration-300 hover:bg-teal-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="text"
                  name="website"
                  placeholder="www.yourwebsite.com"
                  value={formData.website}
                  onChange={handleChange}
                  className="border border-gray-300 text-gray-800 placeholder:text-gray-500 p-3 md:p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-teal-50/50 transition-all duration-300 hover:bg-teal-50"
                />
              </div>
            </div>
            
           
            

              <button
                onClick={handleWhatsApp}
                disabled={isSubmitting || submitted}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-xl w-full hover:shadow-lg hover:shadow-green-400/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Send via WhatsApp</span>
                </div>
              </button>
            

            <p className="text-xs text-gray-500 text-center mt-3">
              Form भरने के बाद WhatsApp automatically खुल जाएगा
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;