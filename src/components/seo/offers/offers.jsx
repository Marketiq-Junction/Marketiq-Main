import React from "react";

const Offers = () => {
  const services = [
    {
      title: "Link Building",
      description:
        "We provide a comprehensive approach to improve your site's authority and visibility. We secure high-quality backlinks from reputable websites relevant to your industry, enhancing your domain authority and boosting search engine rankings.",
      icon: "🔗", // Replace with an actual icon if needed
    },
    {
      title: "Content Optimization",
      description:
        "We optimize content to resonate with search engines and audiences alike. By structuring your website's content effectively and including high-performing keywords, we ensure that it's relevant, engaging, and optimized for higher rankings.",
      icon: "📊", // Replace with an actual icon if needed
    },
    {
      title: "On-Page SEO",
      description:
        "Our team optimizes each element of your website, from meta tags to headers, images, and internal linking, ensuring it's fully aligned with search engine guidelines for maximum relevance and reach.",
      icon: "🛠️", // Replace with an actual icon if needed
    },
    {
      title: "Keyword Research",
      description:
        "By identifying high-value keywords that resonate with your target audience, we help your content rank effectively and drive more relevant traffic to your site.",
      icon: "🔍", // Replace with an actual icon if needed
    },
    {
      title: "Technical SEO",
      description:
        "Our technical SEO services include improving your website's speed, mobile-friendliness, and indexing, making it easy for search engines to crawl and users to navigate. This results in a seamless experience and boosts your overall ranking potential.",
      icon: "⚙️", // Replace with an actual icon if needed
    },
    {
      title: "Off-Page SEO",
      description:
        "We strengthen your website's authority through strategic link-building, content marketing, and collaboration, enhancing its credibility and visibility in search engine results.",
      icon: "📜", // Replace with an actual icon if needed
    },
  ];

  return (
    <section className="bg-blue-400 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-lg uppercase font-semibold mb-4">
          What We’re Offering
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          We are specialized in the following services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:bg-blue-500 hover:text-white"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <p className="text-sm mb-4">{service.description}</p>
              <h4 className="text-lg font-semibold">{service.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
