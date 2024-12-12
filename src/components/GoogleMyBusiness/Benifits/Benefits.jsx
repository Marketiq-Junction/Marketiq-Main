"use client";

const Benefits = () => {
  const benefits = [
    {
      id: "01",
      title: "Enhanced Brand Trust",
      points: [
        "Builds trust with potential customers.",
        "Increases confidence in choosing your services or products.",
        "Establishes a positive online presence.",
      ],
    },
    {
      id: "02",
      title: "Improved Customer Relationships",
      points: [
        "Respond to reviews and feedback to foster better relationships.",
        "Engage with your audience to show you value their opinions.",
        "Commit to customer satisfaction by addressing their concerns.",
      ],
    },
    {
      id: "03",
      title: "Informed Decision-Making",
      points: [
        "Gain insights into customer preferences and perceptions.",
        "Monitor feedback and reviews for improvement areas.",
        "Adjust strategies to enhance service offerings.",
      ],
    },
    {
      id: "04",
      title: "Increased Visibility",
      points: [
        "Enhance search engine rankings with a positive online reputation.",
        "Attract more traffic to your website.",
        "Increase conversion rates with improved visibility.",
      ],
    },
    {
      id: "05",
      title: "Competitive Advantage",
      points: [
        "Differentiate your business from competitors.",
        "Establish a positive online image.",
        "Attract customers choosing between similar services.",
      ],
    },
    {
      id: "06",
      title: "Long-Term Success",
      points: [
        "Build brand loyalty through consistent reputation management.",
        "Encourage repeat customers for sustained growth.",
        "Maintain a positive image for long-term business success.",
      ],
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#000000] mb-2">Benefits</h2>
        <p className="text-lg text-[#000000]">
          Your Reputation, Your Strength: Build It Wisely!
        </p>
      </div>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.id}
            className={`p-6 rounded-lg shadow-lg bg-[#A2DFE1] hover:bg-white transform transition-all duration-300 hover:-translate-y-4`}
          >
            {/* Header */}
            <div className="flex items-center justify-start mb-4">
              <div className="text-2xl font-bold text-blue-500">{benefit.id}</div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {benefit.title}
            </h3>
            {/* Points */}
            <ul className="list-disc ml-6 text-gray-700 text-sm">
              {benefit.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
