// import React from "react";

// const CustomDesigns = () => {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="container mx-auto px-6 lg:px-16 text-center">
//         {/* Heading Section */}
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">
//           Our Custom Designs
//         </h1>
//         <p className="text-lg text-gray-600 mb-10">
//           Our custom designs are crafted to reflect your brand’s unique
//           identity and resonate with your target audience. We focus on creating
//           visually stunning, user-friendly interfaces that enhance engagement
//           and drive results.
//         </p>

//         {/* Images Section */}
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//           {/* Left Image */}
//           <div className="flex-shrink-0 w-full lg:w-1/2 text-left">
//             <img
//               src="/gio.png"
//               alt="Custom Design Left"
//               className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
//             />
//           </div>

//           {/* Right Image */}
//           <div className="flex-shrink-0 w-full lg:w-1/2 text-right">
//             <img
//               src="/code4bharat.png"
//               alt="Custom Design Right"
//               className="rounded-lg shadow-lg mx-auto max-w-full h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomDesigns;

import React from "react";

const CustomDesigns = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Heading Section */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
          Our Custom Designs
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-10">
          Our custom designs are crafted to reflect your brand’s unique identity
          and resonate with your target audience. We focus on creating visually
          stunning, user-friendly interfaces that enhance engagement and drive
          results.
        </p>

        {/* Images Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src="/gio.png"
              alt="Custom Design Left"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="/code4bharat.png"
              alt="Custom Design Right"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDesigns;
 