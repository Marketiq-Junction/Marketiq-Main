"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  const PhoneIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );

  const MapIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );

  const GlobeIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
      />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
        clipRule="evenodd"
      />
    </svg>
  );

  const CheckIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "-100px",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("कृपया सभी आवश्यक फील्ड भरें (Please fill all required fields)");
      return;
    }

    setIsSubmitting(true);

    try {
      const whatsappNumber = "919594430295";

      const message = `🔔 *New Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || "Not provided"}
📝 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

---
Sent from Nexcore Alliance Website`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      if (typeof window !== "undefined") {
        const newWindow = window.open(whatsappURL, "_blank");
        if (newWindow) {
          setTimeout(() => {
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
            alert("Message sent successfully! WhatsApp should open now.");
          }, 1000);
        } else {
          alert("Please allow pop-ups for this site to send WhatsApp messages.");
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert(
        "कुछ गलत हो गया। कृपया फिर से कोशिश करें। (Something went wrong. Please try again.)"
      );
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Phone",
      content: "+91 95944 30295",
      subContent: "Mon-Sat 08:00 AM - 08:00 PM",
      color: "from-teal-500 to-cyan-500",
      href: "tel:+919594430295",
    },
    {
      icon: EmailIcon,
      title: "Email",
      content: "Nexcorealliance@gmail.com",
      subContent: "We'll respond within 24 hours",
      color: "from-cyan-500 to-teal-600",
      href: "mailto:Nexcorealliance@gmail.com",
    },
    {
      icon: MapIcon,
      title: "Office",
      content: "Mumbai, Maharashtra",
      subContent: "India - 400070",
      color: "from-teal-600 to-emerald-500",
      href: "https://maps.app.goo.gl/VBg1XznP8dy9dzGd6",
    },
    {
      icon: GlobeIcon,
      title: "Website",
      content: "www.nexcorealliance.com",
      subContent: "Visit our main website",
      color: "from-cyan-600 to-teal-500",
      href: "https://www.nexcorealliance.com",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/105730702/admin/dashboard",
      color: "hover:text-cyan-600",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/profile.php?id=61570113656994",
      color: "hover:text-teal-500",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/Nexcorealliancellp/",
      color: "hover:text-cyan-500",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCYqpIltw48XxkMRLC-HCgag",
      color: "hover:text-teal-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50 select-none">
      <section ref={sectionRef} className="relative py-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute opacity-20 ${
                i % 3 === 0
                  ? "w-2 h-2 bg-teal-500 rounded-full"
                  : i % 3 === 1
                  ? "w-3 h-0.5 bg-cyan-500"
                  : "w-1 h-1 bg-emerald-500 rounded-full"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 6}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 mt-10">
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ userSelect: "none" }}
            >
              <span className="inline-block text-teal-600 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-4 bg-white/60 backdrop-blur-sm rounded-full border border-teal-200/30">
                Get In Touch
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                Talk to us 
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Ready to transform your vision into reality? Let's discuss how
                our innovative solutions can drive your success forward.
              </p>
            </div>

            {/* Decorative Line */}
            <div className="flex justify-center items-center mb-16">
              <div
                className={`w-16 h-0.5 bg-gradient-to-r from-transparent to-teal-600 transition-all duration-1000 ${
                  isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
              <div
                className={`w-4 h-4 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full mx-4 transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 scale-100 rotate-180"
                    : "opacity-0 scale-0"
                }`}
              />
              <div
                className={`w-16 h-0.5 bg-gradient-to-l from-transparent to-cyan-600 transition-all duration-1000 ${
                  isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div
                className={`transition-all duration-1000 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-8"
                }`}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We're here to help you succeed. Reach out to us through any of
                  the channels below, and our team will get back to you
                  promptly.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20"
                    >
                      <div
                        className={`absolute -inset-0.5 bg-gradient-to-r ${info.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                      ></div>
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-start space-x-4 group"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <info.icon />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-gray-800 font-medium hover:text-cyan-600 transition-colors">
                            {info.content}
                          </p>
                          <p className="text-sm text-gray-500">
                            {info.subContent}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="font-semibold text-gray-800 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map(({ icon: Icon, href, color }, index) => (
                      <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-2xl text-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40 rounded-full p-2 ${color}`}
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div
                className={`transition-all duration-1000 delay-600 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Send us a Message
                  </h2>

                  <div className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    {/* Phone and Subject Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="partnership">Partnership</option>
                          <option value="careers">Careers</option>
                          <option value="support">Technical Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={
                          isSubmitting ||
                          !formData.name ||
                          !formData.email ||
                          !formData.subject ||
                          !formData.message
                        }
                        className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-cyan-400/40 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending to WhatsApp...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center space-x-2">
                            <span>📱 Send via WhatsApp</span>
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              ></path>
                            </svg>
                          </div>
                        )}
                      </button>

                      {/* Help text */}
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        Form भरने के बाद WhatsApp automatically खुल जाएगा
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Section */}
          <div
            className={`mt-16 transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <ClockIcon />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Quick Response
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We respond to all inquiries within 24 hours
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <PhoneIcon />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Free consultation with our technical experts
                  </p>
                </div>
                <div>
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <CheckIcon />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Global Reach
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Serving clients worldwide with local expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(180deg);
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default ContactPage;