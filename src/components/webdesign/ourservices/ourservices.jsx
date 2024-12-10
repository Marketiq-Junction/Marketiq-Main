import React from "react";

const services = [
  {
    title: "Custom Web Design",
    description:
      "Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et socios est luctus ante ornare.",
    icon: "📐", // Replace with an appropriate icon/image
  },
  {
    title: "Responsive Web Development",
    description:
      "Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et socios est luctus ante ornare.",
    icon: "📱", // Replace with an appropriate icon/image
  },
  {
    title: "E-commerce Development",
    description:
      "Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et socios est luctus ante ornare.",
    icon: "🛒", // Replace with an appropriate icon/image
  },
  {
    title: "Content Management System",
    description:
      "Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et socios est luctus ante ornare.",
    icon: "📄", // Replace with an appropriate icon/image
  },
  {
    title: "SEO Optimization",
    description:
      "Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et socios est luctus ante ornare.",
    icon: "🔍", // Replace with an appropriate icon/image
  },
  {
    title: "Maintenance & Support",
    description:
      "Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et socios est luctus ante ornare.",
    icon: "🛠️", // Replace with an appropriate icon/image
  },
];

const OurServices = () => {
  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Discover what services we provide special for you!
        </p>
        <p className="text-gray-600 mt-2 max-w-3xl mx-auto">
          These are some of the most popular types of online content we can help you with:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-200 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:bg-blue-700 hover:text-white"
            >
              <div className="text-blue-500 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-black hover:text-white">
                {service.title}
              </h3>
              <p className="text-black mt-2 hover:text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
