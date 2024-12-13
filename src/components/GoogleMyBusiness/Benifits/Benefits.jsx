import React from "react";

const Benefits = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Benefits</h2>
        <p className="text-xl text-black mt-2">
          Your Reputation, Your Strength: Build It Wisely!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="p-6 bg-white shadow-[4px_4px_6.19px_0px_#00000033] rounded-md relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center justify-center w-16 h-16 border-2 border-[#4694CA] rounded-md">
              <span className="text-[#4694CA] text-lg font-bold">01</span>
            </div>
          </div>
          <h3 className="text-xl text-[#2E8ACB] font-bold text-center mt-8">
            Enhanced Brand Trust
          </h3>
          <p className="text-black text-center mt-4">
            Actively managing your online reputation builds trust with potential
            customers. When your brand has a positive presence online, customers
            feel more confident in choosing your services or products.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-[#A2DFE1] shadow-[4px_4px_6.19px_0px_#00000033] rounded-md relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center justify-center w-16 h-16 border-2 border-[#4694CA] rounded-md">
              <span className="text-[#0093F8] text-lg font-bold">02</span>
            </div>
          </div>
          <h3 className="text-xl text-black font-bold text-center mt-8">
            Improved Customer Relationships
          </h3>
          <p className="text-[#0093F8] text-center mt-4">
            By responding to reviews and feedback, you foster better
            relationships with your customers. Engaging with your audience
            shows that you value their opinions and are committed to their
            satisfaction.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white shadow-[4px_4px_6.19px_0px_#00000033] rounded-md relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center justify-center w-16 h-16 border-2 border-[#4694CA] rounded-md">
              <span className="text-[#4694CA] text-lg font-bold">03</span>
            </div>
          </div>
          <h3 className="text-xl text-[#2E8ACB] font-bold text-center mt-8">
            Informed Decision-Making
          </h3>
          <p className="text-black text-center mt-4">
            A strong online reputation provides valuable insights into customer
            preferences and perceptions. Businesses can identify areas for
            improvement and adjust their strategies accordingly.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-6 bg-white shadow-[4px_4px_6.19px_0px_#00000033] rounded-md relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center justify-center w-16 h-16 border-2 border-[#4694CA] rounded-md">
              <span className="text-[#4694CA] text-lg font-bold">04</span>
            </div>
          </div>
          <h3 className="text-xl text-[#2E8ACB] font-bold text-center mt-8">
            Increased Visibility
          </h3>
          <p className="text-black text-center mt-4">
            A well-managed online reputation enhances your search engine
            rankings, making your business more visible to potential customers.
            This can lead to increased traffic and higher conversion rates.
          </p>
        </div>

        {/* Card 5 */}
        <div className="p-6 bg-[#A2DFE1] shadow-[4px_4px_6.19px_0px_#00000033] rounded-md relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center justify-center w-16 h-16 border-2 border-[#4694CA] rounded-md">
              <span className="text-[#0093F8] text-lg font-bold">05</span>
            </div>
          </div>
          <h3 className="text-xl text-black font-bold text-center mt-8">
            Competitive Advantage
          </h3>
          <p className="text-[#0093F8] text-center mt-4">
            Companies that actively manage their online reputation can
            differentiate themselves from competitors. A positive online image
            can be a deciding factor for customers when choosing similar
            services or products.
          </p>
        </div>

        {/* Card 6 */}
        <div className="p-6 bg-white shadow-[4px_4px_6.19px_0px_#00000033] rounded-md relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center justify-center w-16 h-16 border-2 border-[#4694CA] rounded-md">
              <span className="text-[#4694CA] text-lg font-bold">06</span>
            </div>
          </div>
          <h3 className="text-xl text-[#2E8ACB] font-bold text-center mt-8">
            Long-Term Success
          </h3>
          <p className="text-black text-center mt-4">
            Maintaining a positive online reputation contributes to long-term
            business success. Consistent reputation management helps build brand
            loyalty, leading to repeat customers and sustained growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;



// "use client";

// const Benefits = () => {
//   const benefits = [
//     {
//       id: "01",
//       title: "Enhanced Brand Trust",
//       points: [
//         "Builds trust with potential customers.",
//         "Increases confidence in choosing your services or products.",
//         "Establishes a positive online presence.",
//       ],
//     },
//     {
//       id: "02",
//       title: "Improved Customer Relationships",
//       points: [
//         "Respond to reviews and feedback to foster better relationships.",
//         "Engage with your audience to show you value their opinions.",
//         "Commit to customer satisfaction by addressing their concerns.",
//       ],
//     },
//     {
//       id: "03",
//       title: "Informed Decision-Making",
//       points: [
//         "Gain insights into customer preferences and perceptions.",
//         "Monitor feedback and reviews for improvement areas.",
//         "Adjust strategies to enhance service offerings.",
//       ],
//     },
//     {
//       id: "04",
//       title: "Increased Visibility",
//       points: [
//         "Enhance search engine rankings with a positive online reputation.",
//         "Attract more traffic to your website.",
//         "Increase conversion rates with improved visibility.",
//       ],
//     },
//     {
//       id: "05",
//       title: "Competitive Advantage",
//       points: [
//         "Differentiate your business from competitors.",
//         "Establish a positive online image.",
//         "Attract customers choosing between similar services.",
//       ],
//     },
//     {
//       id: "06",
//       title: "Long-Term Success",
//       points: [
//         "Build brand loyalty through consistent reputation management.",
//         "Encourage repeat customers for sustained growth.",
//         "Maintain a positive image for long-term business success.",
//       ],
//     },
//   ];

//   return (
//     <section className="py-12 bg-gray-50">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h2 className="text-4xl font-bold text-[#000000] mb-2">Benefits</h2>
//         <p className="text-lg text-[#000000]">
//           Your Reputation, Your Strength: Build It Wisely!
//         </p>
//       </div>

//       {/* Benefit Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {benefits.map((benefit, index) => (
//           <div
//             key={benefit.id}
//             className={`p-6 rounded-lg shadow-lg bg-[#A2DFE1] hover:bg-white transform transition-all duration-300 hover:-translate-y-4`}
//           >
//             {/* Header */}
//             <div className="flex items-center justify-start mb-4">
//               <div className="text-2xl font-bold text-blue-500">{benefit.id}</div>
//             </div>

//             {/* Title */}
//             <h3 className="text-xl font-bold text-gray-900 mb-2">
//               {benefit.title}
//             </h3>
//             {/* Points */}
//             <ul className="list-disc ml-6 text-gray-700 text-sm">
//               {benefit.points.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Benefits;
