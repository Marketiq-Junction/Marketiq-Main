// "use client";

// const Steps = () => {
//   return (
//     <div className="bg-white py-12 px-6 md:px-12 lg:px-24">
//       {/* Title Section */}
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
//           Steps to Build a Successful <br /> Marketing Product
//         </h1>
//         <p className="text-gray-600 text-base md:text-lg">
//           Follow these steps to create an impactful marketing strategy.
//         </p>
//         {/* Image Section */}
//         <div>
//           <img
//             src="/images/socialmedia/step.png"
//             alt="Steps to Marketing Product"
//             className="h-25" // Centers the image
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Steps;

"use client";

import Image from "next/image";

const Steps = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Steps to Build a Successful <br /> Marketing Product
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          Follow these steps to create an impactful marketing strategy.
        </p>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/socialmedia/step.png"
            alt="Steps to Marketing Product"
            width={600} // Adjust width as needed
            height={400} // Adjust height as needed
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
