"use client";
import React, { useEffect, useRef, useState } from "react";

function Contact1() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative bg-gradient-to-r from-teal-500 to-cyan-600 py-16 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Shapes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-10 ${
              i % 2 === 0
                ? "w-4 h-4 bg-white rounded-full"
                : "w-6 h-6 border-2 border-white rounded-full"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatSlow ${8 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Section: Text */}
          <div 
            className={`md:w-1/2 text-white transition-all duration-1000 ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="inline-block mb-4 md:mb-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider border border-white/30">
                Let's Connect
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight font-syne">
              Contact Us
            </h2>
            
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-white/95 mb-6 md:mb-8">
              We're here to help you elevate your business! Reach out to us today
              for personalized support and to learn more about our digital
              marketing solutions.
            </p>

            {/* Quick Contact Info */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 text-white/90 group hover:text-white transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110 duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="font-medium text-sm md:text-base">+91 9920892689</span>
              </div>
              
              <div className="flex items-center gap-3 text-white/90 group hover:text-white transition-colors">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-all group-hover:scale-110 duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="font-medium text-sm md:text-base break-all">marketiqjunction@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right Section: Image/Illustration */}
          <div 
            className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-300 ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Decorative Circles */}
              <div className="absolute -inset-4 bg-white/10 backdrop-blur-sm rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
              <div className="absolute -inset-8 bg-white/5 backdrop-blur-sm rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
              
              {/* Main Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <img
                  src="/images/Contactus/image1.png"
                  alt="Contact Us Illustration"
                  className="w-full h-full object-contain p-6 md:p-8 transform hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating Icons */}
              <div 
                className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce" 
                style={{ animationDuration: '3s' }}
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>

              <div 
                className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce" 
                style={{ animationDuration: '3s', animationDelay: '1s' }}
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>

              {/* Additional Decorative Elements */}
              <div 
                className="absolute top-1/4 -right-8 md:-right-12 w-8 h-8 md:w-10 md:h-10 bg-white/30 backdrop-blur-sm rounded-lg rotate-12 animate-pulse"
                style={{ animationDuration: '2s' }}
              ></div>
              
              <div 
                className="absolute bottom-1/4 -left-8 md:-left-12 w-6 h-6 md:w-8 md:h-8 bg-white/30 backdrop-blur-sm rounded-full animate-pulse"
                style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }
      `}</style>
    </section>
  );
}

export default Contact1;