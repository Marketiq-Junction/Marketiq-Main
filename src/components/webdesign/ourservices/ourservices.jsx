import React from "react";

const services = [
  {
    title: "Custom Web Design",
    description:
      "Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et socios est luctus ante ornare.",
    icon: "📐",
  },
  {
    title: "Responsive Web Development",
    description:
      "Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et socios est luctus ante ornare.",
    icon: "📱",
  },
  {
    title: "E-commerce Development",
    description:
      "Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et socios est luctus ante ornare.",
    icon: "🛒",
  },
  {
    title: "Content Management System",
    description:
      "Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et socios est luctus ante ornare.",
    icon: "📄",
  },
  {
    title: "SEO Optimization",
    description:
      "Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et socios est luctus ante ornare.",
    icon: "🔍",
  },
  {
    title: "Maintenance & Support",
    description:
      "Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et socios est luctus ante ornare.",
    icon: "🛠️",
  },
];

const OurServices = () => {
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
          {services.map((service, index) => (
            <div
              key={index}
              className="card group cursor-pointer border rounded-lg shadow-md p-6 w-[321px] h-auto mx-auto bg-white text-black hover:bg-gradient-to-b hover:from-[#4A9BD3] hover:to-[#50C3C6] hover:text-white transition duration-300"
            >
              {/* Icon */}
              <div className="icon text-5xl mb-6">{service.icon}</div>

              {/* Description */}
              <p className="text-base md:text-lg mb-4">{service.description}</p>

              {/* Divider */}
              <div className="border-t border-gray-300 my-4"></div>

              {/* Title */}
              <h2 className="font-semibold text-lg md:text-xl text-[#4A9BD3] group-hover:text-black">
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
