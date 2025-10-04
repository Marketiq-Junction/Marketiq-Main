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
    <section className="py-16 bg-gradient-to-br from-teal-500 to-cyan-600 lg:mb-28">
      {/* Header Section */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
          Benefits
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-white mt-3 opacity-90">
          Your Reputation, Your Strength: Build It Wisely!
        </p>
      </div>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {benefitsData.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-cyan-400"
          >
            {/* Number Badge */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-white font-bold text-xl mb-6 shadow-md">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Card Content */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              {benefit.title}
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
