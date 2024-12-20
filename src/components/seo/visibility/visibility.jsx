import { useState } from "react";
import Image from "next/image";

const Visibility = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-[#50C3C6] text-white p-12 md:p-20 max-w-8xl mx-auto my-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0">
        {/* Left Section: Text Content */}
        <div className="lg:w-3/5 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Meet pure visibility</h2>
          <p className="text-base md:text-lg leading-relaxed">
            • Enhance transparency and accessibility for your brand in the digital world.<br />
            • Ensure meaningful audience engagement with your content.<br />
            • Use advanced SEO, data-driven insights, and tailored marketing strategies.<br />
            • Help your brand stand out on search engines and social platforms.<br />
            • Focus on measurable growth and user-centered design.<br />
            • Build a strong and sustainable online presence with Pure Visibility.<br />
            • Provide affordable, effective digital marketing solutions to enhance online presence.<br />
            • Drive measurable growth through tailored strategies like SEO, web design, and social media management.<br />
            • Craft digital solutions to build genuine connections and drive sustainable growth.<br />
            • Ensure accessibility, effectiveness, and transparency for clients across all industries.<br />
          </p>
        </div>

        {/* Right Section: Video Thumbnail */}
        <div className="lg:w-2/5 flex justify-center relative">
          <Image
            src="/loggo.jpg" // Replace with your actual image path
            alt="Video Thumbnail"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
          {/* Play Button */}
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={openModal}
          >
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition">
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

      {/* Modal for Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
            <div className="relative">
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
                onClick={closeModal}
              >
                ✕
              </button>
              <iframe
                src="https://www.youtube.com/embed/uOIkmeYcnac"
                title="Video"
                className="w-full h-64 md:h-96"
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
