import React from "react";

const WebsiteAudit = () => {
  const auditItems = [
    {
      title: "META DESCRIPTIONS, ALT TEXT",
      description:
        "Brief summary of a webpage's content, appearing in search engine results to entice users to click. ALT text describes images on a webpage, serving both accessibility and SEO purposes.",
    },
    {
      title: "URL STRUCTURE",
      description:
        "We optimize your website’s URL structure to enhance search engine visibility and user experience. Our approach ensures that URLs are concise, relevant, and keyword-rich, making it easier for both users and search engines to navigate your site effectively.",
    },
    {
      title: "NAVIGATION STRUCTURE",
      description:
        "We create a user-friendly navigation structure that enhances your website’s usability and encourages visitors to explore. Our optimized menus and clear pathways improve the overall experience, making it easier for users to find the information they need.",
    },
    {
      title: "DUPLICATE COPY CHECK",
      description:
        "We conduct a thorough duplicate copy check to ensure that your website content is original and unique. This process enhances your site’s SEO performance while preventing penalties from search engines for duplicate content.",
    },
    {
      title: "A/B AND MULTIVARIATE TESTING",
      description:
        "A/B and multivariate testing are essential tools for optimizing website content by comparing different versions of content or design elements. These tests provide valuable insights into user preferences, helping to enhance engagement and conversion rates.",
    },
    {
      title: "BACKLINK REVIEW",
      description:
        "We perform a comprehensive backlink review to analyze the quality and relevance of links pointing to your website. This helps improve your site’s authority and search engine ranking by ensuring a strong backlink profile.",
    },
  ];

  return (
    <section className="bg-white py-16 px-8 md:py-20 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Auditing Your Website</h2>
          <p className="text-base md:text-lg mt-4 text-gray-600">
            Website auditing is a comprehensive assessment that evaluates the
            performance, design, and content of your site. This process
            identifies areas for improvement, ensuring optimal user experience
            and SEO effectiveness.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auditItems.map((item, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:bg-blue-700"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-300 text-blue-700 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c.828 0 1.5-.672 1.5-1.5S12.828 5 12 5s-1.5.672-1.5 1.5S11.172 8 12 8zm0 2a2.5 2.5 0 00-2.5 2.5v2.735a3.502 3.502 0 011.975 3.13 3.502 3.502 0 011.975-3.13V12.5A2.5 2.5 0 0012 10zm0 0v12m0-6h-2m4 0h2"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-bold text-center mb-4">{item.title}</h3>
              <p className="text-sm text-center leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Request A Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebsiteAudit;
