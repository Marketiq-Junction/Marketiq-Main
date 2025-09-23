// import React from "react";

// const Benefits = () => {
//   return (
//     <section className="py-12 bg-white lg:mb-28">
//       {/* Header Section */}
//       <div className="text-center mb-12 px-4">
//         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Benefits</h2>
//         <p className="text-base sm:text-lg lg:text-xl text-black mt-2">
//           Your Reputation, Your Strength: Build It Wisely!
//         </p>
//       </div>

//       {/* Benefit Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
//         {/* Card 1 */}
//         <div className="p-6 bg-[#4A9BD3] shadow-md rounded-md relative mt-8">
//           <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-2 border-black">
//             <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
//               <span className="text-black text-base sm:text-lg font-bold">01</span>
//             </div>
//           </div>
//           <h3 className="text-base sm:text-lg lg:text-xl text-white font-bold text-center mt-10 sm:mt-12">
//             Enhanced Brand Trust
//           </h3>
//           <p className="text-sm sm:text-base text-white text-center mt-4">
//             Actively managing your online reputation builds trust with potential
//             customers. When your brand has a positive presence online, customers
//             feel more confident in choosing your services or products.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="p-6 bg-[#A2DFE1] shadow-md rounded-md relative mt-8">
//           <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-2 border-black">
//             <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
//               <span className="text-black text-base sm:text-lg font-bold">02</span>
//             </div>
//           </div>
//           <h3 className="text-base sm:text-lg lg:text-xl text-black font-bold text-center mt-10 sm:mt-12">
//             Improved Customer Relationships
//           </h3>
//           <p className="text-sm sm:text-base text-black text-center mt-4">
//             By responding to reviews and feedback, you foster better
//             relationships with your customers. Engaging with your audience shows
//             that you value their opinions and are committed to their satisfaction.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="p-6 bg-[#4A9BD3] shadow-md rounded-md relative mt-8">
//           <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-2 border-black">
//             <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
//               <span className="text-black text-base sm:text-lg font-bold">03</span>
//             </div>
//           </div>
//           <h3 className="text-base sm:text-lg lg:text-xl text-white font-bold text-center mt-10 sm:mt-12">
//             Informed Decision-Making
//           </h3>
//           <p className="text-sm sm:text-base text-white text-center mt-4">
//             A strong online reputation provides valuable insights into customer
//             preferences and perceptions. Businesses can identify areas for
//             improvement and adjust their strategies accordingly.
//           </p>
//         </div>

//         {/* Card 4 */}
//         <div className="p-6 bg-[#A2DFE1] shadow-md rounded-md relative mt-8">
//           <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-2 border-black">
//             <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
//               <span className="text-black text-base sm:text-lg font-bold">04</span>
//             </div>
//           </div>
//           <h3 className="text-base sm:text-lg lg:text-xl text-black font-bold text-center mt-10 sm:mt-12">
//             Increased Visibility
//           </h3>
//           <p className="text-sm sm:text-base text-black text-center mt-4">
//             A well-managed online reputation enhances your search engine
//             rankings, making your business more visible to potential customers.
//             This can lead to increased traffic and higher conversion rates.
//           </p>
//         </div>

//         {/* Card 5 */}
//         <div className="p-6 bg-[#4A9BD3] shadow-md rounded-md relative mt-8">
//           <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-2 border-black">
//             <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
//               <span className="text-black text-base sm:text-lg font-bold">05</span>
//             </div>
//           </div>
//           <h3 className="text-base sm:text-lg lg:text-xl text-white font-bold text-center mt-10 sm:mt-12">
//             Competitive Advantage
//           </h3>
//           <p className="text-sm sm:text-base text-white text-center mt-4">
//             Companies that actively manage their online reputation can
//             differentiate themselves from competitors. A positive online image
//             can be a deciding factor for customers when choosing similar services
//             or products.
//           </p>
//         </div>

//         {/* Card 6 */}
//         <div className="p-6 bg-[#A2DFE1] shadow-md rounded-md relative mt-8">
//           <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-2 border-black">
//             <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
//               <span className="text-black text-base sm:text-lg font-bold">06</span>
//             </div>
//           </div>
//           <h3 className="text-base sm:text-lg lg:text-xl text-black font-bold text-center mt-10 sm:mt-12">
//             Long-Term Success
//           </h3>
//           <p className="text-sm sm:text-base text-black text-center mt-4">
//             Maintaining a positive online reputation contributes to long-term
//             business success. Consistent reputation management helps build brand
//             loyalty, leading to repeat customers and sustained growth.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Benefits;


import React from "react";

const benefitsData = [
  {
    title: "Enhanced Brand Trust",
    description:
      "Actively managing your online reputation builds trust with potential customers. When your brand has a positive presence online, customers feel more confident in choosing your services or products.",
  },
  {
    title: "Improved Customer Relationships",
    description:
      "By responding to reviews and feedback, you foster better relationships with your customers. Engaging with your audience shows that you value their opinions and are committed to their satisfaction.",
  },
  {
    title: "Informed Decision-Making",
    description:
      "A strong online reputation provides valuable insights into customer preferences and perceptions. Businesses can identify areas for improvement and adjust their strategies accordingly.",
  },
  {
    title: "Increased Visibility",
    description:
      "A well-managed online reputation enhances your search engine rankings, making your business more visible to potential customers. This can lead to increased traffic and higher conversion rates.",
  },
  {
    title: "Competitive Advantage",
    description:
      "Companies that actively manage their online reputation can differentiate themselves from competitors. A positive online image can be a deciding factor for customers when choosing similar services or products.",
  },
  {
    title: "Long-Term Success",
    description:
      "Maintaining a positive online reputation contributes to long-term business success. Consistent reputation management helps build brand loyalty, leading to repeat customers and sustained growth.",
  },
];

const Benefits = () => {
  return (
    <section className="py-12 bg-white lg:mb-28">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Benefits</h2>
        <p className="text-base sm:text-lg lg:text-xl text-black mt-2">
          Your Reputation, Your Strength: Build It Wisely!
        </p>
      </div>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {benefitsData.map((benefit, index) => {
          const isBlue = index % 2 === 0; // alternate colors
          return (
            <div
              key={index}
              className={`p-6 shadow-md rounded-xl relative mt-8 transition-transform duration-300 hover:scale-105 ${
                isBlue ? "bg-[#4A9BD3] text-white" : "bg-[#A2DFE1] text-black"
              }`}
            >
              {/* Number Badge */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border-2 border-black rounded-full">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16">
                  <span className="text-black text-base sm:text-lg font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-center mt-10 sm:mt-12">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-center mt-4">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
