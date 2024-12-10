import React from "react";

const services = [
  {
    title: "Content Writing",
    description:
      "Content writing is essential for engaging your audience and enhancing your website’s SEO. Our expert writers create high-quality, relevant content that informs and captivates visitors, driving traffic and boosting conversion rates. By incorporating strategic keywords and clear messaging, we ensure your brand stands out online.",
  },
  {
    title: "Video Production",
    description:
      "Video production is essential for creating engaging content that captures audience attention and conveys your brand message effectively. Our services include high-quality video editing, animations, and optimization, ensuring your videos enhance your online presence and drive user engagement across platforms.",
  },
  {
    title: "Logo Design",
    description:
      "Our logo design service focuses on creating unique and memorable logos that encapsulate your brand’s identity. We blend creativity and strategy to ensure your logo not only looks appealing but also resonates with your target audience, setting the tone for your brand’s visual presence.",
  },
  {
    title: "Technical SEO",
    description:
      "Technical SEO focuses on optimizing the technical aspects of a website to maximize its visibility and performance in search engines. This includes improving site speed, ensuring mobile-friendliness, implementing proper URL structures, and enhancing crawlability, all of which contribute to better search rankings and user experience.",
  },
];

const Support = () => {
  return (
    <section className="bg-[#E5F8FF] py-16">
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

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
