// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const Testimonial = () => {
//   const testimonials = [
//     {
//       id: 1,
//       text: "This company has been fantastic! Their efficient and effective approach helped boost my website's traffic in record time.",
//       name: "Muskan Shaikh",
//       time: "2 months ago",
//       rating: "★★★★★",
//       image: "/people/2.jpg",
//     },
//     {
//       id: 2,
//       text: "The team did a great job improving our SEO rankings. Their expertise and transparency were much appreciated!",
//       name: "Shams Ali",
//       time: "4 months ago",
//       rating: "★★★★★",
//       image: "/people/1.jpg",
//     },
//     {
//       id: 3,
//       text: "I’m impressed with their quick and accurate solutions. They helped us establish a strong online presence.",
//       name: "Juned Khan",
//       time: "5 months ago",
//       rating: "★★★★★",
//       image: "/people/3.jpg",
//     },
//     {
//       id: 4,
//       text: "Professional and dedicated team! Their strategies helped us grow traffic and engage with new audiences.",
//       name: "Sanad",
//       time: "1 month ago",
//       rating: "★★★★★",
//       image: "/people/2.jpg",
//     },
//     {
//       id: 5,
//       text: "An exceptional team! They improved our website’s loading speed and rankings beyond expectations.",
//       name: "Harsh Kohli",
//       time: "3 weeks ago",
//       rating: "★★★★★",
//       image: "/people/4.jpg",
//     },
//     {
//       id: 6,
//       text: "The collaboration with this team has been great. Their ideas are innovative, and results are consistent!",
//       name: "Danish",
//       time: "6 months ago",
//       rating: "★★★★★",
//       image: "/people/1.jpg",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically change the currentIndex every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 3
//       );
//     }, 2000); // Change every 5 seconds
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   // Get the current set of three testimonials to display
//   const visibleTestimonials = testimonials.slice(
//     currentIndex,
//     currentIndex + 3
//   );

//   return (
//     <section className="bg-[#50C3C6] text-white py-16 px-8 md:py-20 md:px-20 mt-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Title Section */}
//         <div className="text-center mb-12">
//           <h3 className="text-xl uppercase font-semibold tracking-wider text-black">
//             Testimonials
//           </h3>
//           <h2 className="text-4xl font-extrabold mb-4">What Our Clients Say</h2>
//           <p className="text-base md:text-lg text-gray-100">
//             Hear from our satisfied clients who have experienced exceptional
//             results through our digital marketing strategies.
//           </p>
//         </div>

//         {/* Testimonial Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {visibleTestimonials.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="bg-white text-black p-6 rounded-tl-3xl rounded-br-3xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
//             >
//               <div className="flex items-center space-x-4 mb-4">
//                 <div className="w-12 h-12 rounded-full overflow-hidden">
//                   <Image
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     width={48}
//                     height={48}
//                     className="object-cover"
//                   />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-lg">{testimonial.name}</h4>
//                   <p className="text-sm text-gray-500">{testimonial.time}</p>
//                 </div>
//               </div>
//               <p className="text-base text-gray-700 mb-4">{testimonial.text}</p>
//               <p className="text-yellow-500 font-bold">{testimonial.rating}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      text: "This company has been fantastic! Their efficient and effective approach helped boost my website's traffic in record time.",
      name: "Muskan Shaikh",
      time: "2 months ago",
      rating: "★★★★★",
      image: "/people/2.jpg",
    },
    {
      id: 2,
      text: "The team did a great job improving our SEO rankings. Their expertise and transparency were much appreciated!",
      name: "Shams Ali",
      time: "4 months ago",
      rating: "★★★★★",
      image: "/people/1.jpg",
    },
    {
      id: 3,
      text: "I’m impressed with their quick and accurate solutions. They helped us establish a strong online presence.",
      name: "Juned Khan",
      time: "5 months ago",
      rating: "★★★★★",
      image: "/people/3.jpg",
    },
    {
      id: 4,
      text: "Professional and dedicated team! Their strategies helped us grow traffic and engage with new audiences.",
      name: "Sanad",
      time: "1 month ago",
      rating: "★★★★★",
      image: "/people/2.jpg",
    },
    {
      id: 5,
      text: "An exceptional team! They improved our website’s loading speed and rankings beyond expectations.",
      name: "Harsh Kohli",
      time: "3 weeks ago",
      rating: "★★★★★",
      image: "/people/4.jpg",
    },
    {
      id: 6,
      text: "The collaboration with this team has been great. Their ideas are innovative, and results are consistent!",
      name: "Danish",
      time: "6 months ago",
      rating: "★★★★★",
      image: "/people/1.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerSlide = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + testimonialsPerSlide) % testimonials.length
      );
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get visible testimonials (handle wrap-around)
  const visibleTestimonials = Array.from(
    { length: testimonialsPerSlide },
    (_, i) => testimonials[(currentIndex + i) % testimonials.length]
  );

  return (
    <section className="bg-[#50C3C6] text-white py-16 px-8 md:py-20 md:px-20 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-xl uppercase font-semibold tracking-wider text-black">
            Testimonials
          </h3>
          <h2 className="text-4xl font-extrabold mb-4">What Our Clients Say</h2>
          <p className="text-base md:text-lg text-gray-100">
            Hear from our satisfied clients who have experienced exceptional
            results through our digital marketing strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white text-black p-6 rounded-tl-3xl rounded-br-3xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.time}</p>
                  </div>
                </div>
                <p className="text-base text-gray-700 mb-4">
                  {testimonial.text}
                </p>
                <p className="text-yellow-500 font-bold">
                  {testimonial.rating}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
