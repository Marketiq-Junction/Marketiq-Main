"use client";
import React, { useEffect, useRef, useState } from "react";

const ValuesAndCulture = () => {
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

  const values = [
    {
      title: "Gratitude",
      description: [
        "Lead with thankfulness and humility.",
        "Express gratitude daily.",
        "Give back to impact the world positively.",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
      color: "from-teal-400 to-cyan-500",
    },
    {
      title: "Respect",
      description: [
        "Operate with positive assumptions.",
        "See the best in others.",
        "Refrain from gossip and anger.",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      color: "from-cyan-400 to-teal-500",
    },
    {
      title: "Ownership",
      description: [
        "Take responsibility for actions.",
        "Steward resources responsibly.",
        "Work to make things right.",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "from-teal-400 to-cyan-500",
    },
    {
      title: "Work Ethic",
      description: [
        "Work smart and proactively.",
        "Maintain high-performance expectations.",
        "Balance work-life priorities.",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
      ),
      color: "from-cyan-400 to-teal-500",
    },
    {
      title: "Think Bigger",
      description: [
        "Strive for continuous improvement.",
        "Embrace change and overcome challenges.",
        "Never take the easy way out.",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0112.12 15.12z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "from-teal-400 to-cyan-500",
    },
    {
      title: "Honesty",
      description: [
        "Build trust through integrity.",
        "Act with honesty in all situations.",
        "Do the right thing even when difficult.",
      ],
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      color: "from-cyan-400 to-teal-500",
    },
  ];

  const handleWhatsAppClick = (message) => {
    const whatsappNumber = "9920892689";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 select-none">
      <section ref={sectionRef} className="relative py-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute opacity-30 ${
                i % 2 === 0
                  ? "w-2 h-2 bg-teal-400 rounded-full"
                  : "w-1.5 h-1.5 bg-cyan-400 rounded-full"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  6 + Math.random() * 4
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16 mt-10">
            <div
              className={`transition-all duration-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-block text-teal-600 text-sm font-semibold uppercase tracking-wider mb-6 px-6 py-3 bg-white/70 backdrop-blur-sm rounded-full border border-teal-200/50">
                Our Foundation
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Values and Culture
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our values define how we work and interact, fostering
                exceptional results.
              </p>
            </div>

            {/* Decorative Line */}
            <div className="flex justify-center items-center mb-16 mt-12">
              <div
                className={`w-16 h-0.5 bg-gradient-to-r from-transparent to-teal-500 transition-all duration-800 ${
                  isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
              <div
                className={`w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full mx-4 transition-all duration-800 delay-300 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`}
              />
              <div
                className={`w-16 h-0.5 bg-gradient-to-l from-transparent to-cyan-500 transition-all duration-800 ${
                  isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
            </div>
          </div>

          {/* Center Logo */}
          <div
            className={`flex justify-center mb-16 transition-all duration-800 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <div className="relative bg-white border-8 border-teal-400 shadow-2xl rounded-full w-44 sm:w-52 h-44 sm:h-52 flex items-center justify-center group hover:scale-105 transition-transform duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
              <img
                src="/lo.png"
                alt="Center Logo"
                className="relative w-24 sm:w-32 h-24 sm:h-32 object-contain"
              />
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/40 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${value.color} rounded-2xl blur opacity-0 group-hover:opacity-15 transition duration-300`}
                ></div>

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {value.title}
                  </h3>

                  {/* Description */}
                  <ul className="space-y-3">
                    {value.description.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-700 leading-relaxed"
                      >
                        <span className="text-teal-500 mr-2 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            className={`text-center transition-all duration-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl p-8 lg:p-12 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Experience a culture built on these values. Let's discuss how
                you can be part of our mission.
              </p>
              <button
                onClick={() => {
                  handleWhatsAppClick(
                    "Hello, I would like to get in touch regarding your services."
                  );
                }}
                className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Communicate with Us
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) translateX(0px);
              opacity: 0.3;
            }
            25% {
              transform: translateY(-10px) translateX(5px);
              opacity: 0.5;
            }
            50% {
              transform: translateY(-20px) translateX(-5px);
              opacity: 0.3;
            }
            75% {
              transform: translateY(-10px) translateX(5px);
              opacity: 0.4;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default ValuesAndCulture;
