// import React from "react";

// const Results = () => {
//   return (
//     <section className="bg-white py-16 px-8 md:py-20 md:px-20">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Header */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Recent Results</h2>
//         <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
//           We take pride in our recent achievements, showcasing significant
//           growth for our clients. Our strategies have led to an average increase
//           of 40% in website traffic and a remarkable boost in social media
//           engagement. These results demonstrate our commitment to delivering
//           effective digital marketing solutions tailored to your business needs.
//         </p>

//         {/* Results Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Placeholder Box 1 */}
//           <div className="bg-gray-300 h-64 rounded-lg shadow-md"></div>
//           {/* Placeholder Box 2 */}
//           <div className="bg-gray-300 h-64 rounded-lg shadow-md"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Results;

"use client";

import React from "react";

const Results = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-20 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Our Recent Results
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-12">
          We take pride in our recent achievements, showcasing significant
          growth for our clients. Our strategies have led to an average increase
          of 40% in website traffic and a remarkable boost in social media
          engagement. These results demonstrate our commitment to delivering
          effective digital marketing solutions tailored to your business needs.
        </p>

        {/* Results Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Example Result Boxes */}
          <div className="bg-[#50C3C6] text-white h-64 rounded-lg shadow-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">+40%</h3>
            <p className="text-base text-center">Increase in Website Traffic</p>
          </div>

          <div className="bg-[#4A9BD3] text-white h-64 rounded-lg shadow-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">+55%</h3>
            <p className="text-base text-center">
              Boost in Social Media Engagement
            </p>
          </div>

          <div className="bg-[#50C3C6] text-white h-64 rounded-lg shadow-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">+30%</h3>
            <p className="text-base text-center">Improved SEO Rankings</p>
          </div>

          <div className="bg-[#4A9BD3] text-white h-64 rounded-lg shadow-lg flex flex-col justify-center items-center p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2">+25%</h3>
            <p className="text-base text-center">Increased Conversion Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
