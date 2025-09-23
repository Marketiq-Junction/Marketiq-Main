// import { useState } from "react";
// import Image from "next/image";

// const Visibility = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <section className="bg-[#50C3C6] text-white p-12 md:p-20 max-w-8xl mx-auto my-12">
//       <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0">
//         {/* Left Section: Text Content */}
//         <div className="lg:w-3/5 space-y-6">
//           <h2 className="text-4xl text-black md:text-4xl font-bold ml-8">Meet pure visibility</h2>
//           <p className="text-base md:text-lg leading-relaxed">
//           <span className="text-black font-extrabold text-lg">➤ </span>
//              Enhance transparency and accessibility for your brand in the digital world.<br />
//              <span className="text-black font-extrabold text-lg">➤ </span>
//              Ensure meaningful audience engagement with your content.<br />
//              <span className="text-black font-extrabold text-lg">➤ </span>
//              Use advanced SEO, data-driven insights, and tailored marketing strategies.<br />
//              <span className="text-black font-extrabold text-lg">➤ </span>
//              Help your brand stand out on search engines and social platforms.<br />
//              <span className="text-black font-extrabold text-lg">➤ </span>
//              Focus on measurable growth and user-centered design.<br />
//              <span className="text-black font-extrabold text-lg">➤ </span>
//              Build a strong and sustainable online presence with Pure Visibility.<br />
//              <span className="text-black font-extrabold text-lg">➤ </span>
//              Provide affordable, effective digital marketing solutions to enhance online presence.<br />
//              <span className="text-black font-extrabold text-lg">➤ </span>
//              Drive measurable growth through tailored strategies like SEO, web design, and social media management.<br />
//              <span className="text-black font-extrabold text-lg">➤ </span>
//              Craft digital solutions to build genuine connections and drive sustainable growth.<br />
//              <span className="text-black font-extrabold text-lg">➤ </span>
//              Ensure accessibility, effectiveness, and transparency for clients across all industries.<br />
//           </p>
//         </div>

//         {/* Right Section: Video Thumbnail */}
//         <div className="lg:w-2/5 flex justify-center relative">
//           <Image
//             src="/loggo.jpg" // Replace with your actual image path
//             alt="Video Thumbnail"
//             width={400}
//             height={300}
//             className="rounded-lg shadow-lg"
//           />
//           {/* Play Button */}
//           <div
//             className="absolute inset-0 flex items-center justify-center cursor-pointer"
//             onClick={openModal}
//           >
//             <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-8 w-8 text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M14.752 11.168l-5.197-3.074a1 1 0 00-1.555.832v6.148a1 1 0 001.555.832l5.197-3.074a1 1 0 000-1.664z"
//                 />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Video */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
//             <div className="relative">
//               <button
//                 className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
//                 onClick={closeModal}
//               >
//                 ✕
//               </button>
//               <iframe
//                 src="https://www.youtube.com/embed/uOIkmeYcnac"
//                 title="Video"
//                 className="w-full h-full md:h-96"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Visibility;

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
    <section className="bg-[#50C3C6] text-white p-12 md:p-20 max-w-8xl mx-auto my-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0">
        {/* Left Section */}
        <div className="lg:w-3/5 space-y-6">
          <h2 className="text-4xl md:text-4xl font-bold text-black ml-8">
            Meet Pure Visibility
          </h2>
          <div className="text-base md:text-lg leading-relaxed">
            {points.map((point, idx) => (
              <p key={idx}>
                <span className="text-black font-extrabold text-lg">➤ </span>
                {point}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/5 flex justify-center relative">
          <Image
            src="/loggo.jpg"
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

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2 relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
          >
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
              onClick={closeModal}
              aria-label="Close Video Modal"
            >
              ✕
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
