"use client";

const Services = () => {
  const cards = [
    {
      id: 1,
      icon: "📄",
      title: "Content Creation",
      description: [
        "Craft engaging and shareable posts.",
        "Develop tailored content strategies.",
        "Optimize for platform-specific trends.",
      ],
    },
    {
      id: 2,
      icon: "💬",
      title: "Community Engagement",
      description: [
        "Respond to audience queries promptly.",
        "Foster meaningful conversations.",
        "Encourage user-generated content.",
      ],
    },
    {
      id: 3,
      icon: "📊",
      title: "Analytics and Reporting",
      description: [
        "Track campaign performance metrics.",
        "Identify audience behavior trends.",
        "Generate actionable insights for growth.",
      ],
    },
    {
      id: 4,
      icon: "📈",
      title: "Strategy Development",
      description: [
        "Define measurable goals and objectives.",
        "Conduct competitor and market analysis.",
        "Create detailed roadmaps for success.",
      ],
    },
    {
      id: 5,
      icon: "🛡️",
      title: "Reputation Management",
      description: [
        "Monitor online brand mentions.",
        "Handle negative feedback professionally.",
        "Promote positive brand image and trust.",
      ],
    },
    {
      id: 6,
      icon: "⚠️",
      title: "Crisis Management",
      description: [
        "Develop preemptive crisis plans.",
        "Respond swiftly to reputation threats.",
        "Ensure consistent communication during crises.",
      ],
    },
  ];

  return (
    <section className="services bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <h3 className="text-blue-500 font-semibold text-base md:text-lg uppercase mb-4 text-center">
          Why Choose Us
        </h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-10 text-center">
          We are specialized in the <br /> following services
        </h1>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card group cursor-pointer border rounded-lg shadow-md p-6 w-[321px] h-auto mx-auto bg-white text-black hover:bg-gradient-to-b hover:from-[#4A9BD3] hover:to-[#50C3C6] hover:text-white transition duration-300"
            >
              {/* Icon */}
              <div className="icon text-5xl mb-6">{card.icon}</div>

              {/* Description */}
              <ul className="text-base md:text-lg mb-4 space-y-2 list-disc pl-5">
                {card.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border-t border-gray-300 my-4"></div>

              {/* Title */}
              <h2 className="font-semibold text-lg md:text-xl text-[#4A9BD3] group-hover:text-black">
                {card.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
