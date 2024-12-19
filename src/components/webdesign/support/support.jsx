import React from "react";

const services = [
  {
    title: "Content Writing",
    description:
      "Content writing is essential for engaging your audience and enhancing your website’s SEO.",
  },
  {
    title: "Video Production",
    description:
      "Video production is essential for creating engaging content that captures audience attention and conveys your brand message effectively.",
  },
  {
    title: "Logo Design",
    description:
      "Our logo design service focuses on creating unique and memorable logos that encapsulate your brand’s identity.",
  },
  {
    title: "Technical SEO",
    description:
      "Technical SEO focuses on optimizing the technical aspects of a website to maximize its visibility and performance in search engines.",
  },
];

const Support = () => {
  return (
    <section className="bg-[#A2DFE1] py-16 mb-8">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our other services that Support Your Website Marketing
          </h2>
          <p className="text-lg text-gray-600">
            Accumsan. Magna varius. Bibendum. Morbi nisi sit, hac vestibulum
            euismod habitasse nibh. Vivamus nullam hymenaeos. Semper et sociis
            est luctus ante ornare. Leo.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/117.png" // Replace with your actual image path
              alt="Supporting Services"
              className="w-[70%] h-auto"
            />
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-1/2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 border-2 border-blue-500 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
