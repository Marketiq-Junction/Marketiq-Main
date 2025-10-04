"use client";

import { useState } from "react";
import Image from "next/image";

const Visibility = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const points = [
    "Enhance transparency and accessibility for your brand in the digital world.",
    "Ensure meaningful audience engagement with your content.",
    "Use advanced SEO, data-driven insights, and tailored marketing strategies.",
    "Help your brand stand out on search engines and social platforms.",
    "Focus on measurable growth and user-centered design.",
    "Build a strong and sustainable online presence with Pure Visibility.",
    "Provide affordable, effective digital marketing solutions to enhance online presence.",
    "Drive measurable growth through tailored strategies like SEO, web design, and social media management.",
    "Craft digital solutions to build genuine connections and drive sustainable growth.",
    "Ensure accessibility, effectiveness, and transparency for clients across all industries.",
  ];

  return (
    <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white p-8 md:p-16 lg:p-20 max-w-8xl mx-auto my-12 rounded-xl shadow-2xl">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left Section */}
        <div className="lg:w-3/5 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Meet Pure Visibility
          </h2>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-cyan-200 font-extrabold text-xl mt-0.5 flex-shrink-0">
                  ➤
                </span>
                <p className="text-white/95">{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/5 flex justify-center relative group">
          <div className="rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 group-hover:scale-105 w-full max-w-lg">
            <Image
              src="/loggo.jpg"
              alt="Video Thumbnail"
              width={500}
              height={375}
              className="w-full h-auto"
            />
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={openModal}
            >
              <div className="bg-gradient-to-r from-teal-400 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-cyan-400/50 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-5.197-3.074a1 1 0 00-1.555.832v6.148a1 1 0 001.555.832l5.197-3.074a1 1 0 000-1.664z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 transition-all duration-300"
              onClick={closeModal}
              aria-label="Close Video Modal"
            >
              <span className="text-xl font-bold">✕</span>
            </button>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/uOIkmeYcnac"
                title="Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Visibility;
