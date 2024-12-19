import React from "react";

const Advantages = () => {
  const advantages = [
    {
      title: "Enhanced User Experience",
      description:
        "Responsive web design adapts to any screen size, making navigation easy and enjoyable for users across devices, reducing bounce rates, and increasing engagement.",
    },
    {
      title: "SEO Benefits",
      description:
        "Search engines prioritize responsive websites, which improves search rankings and makes the site more discoverable, helping attract a larger, more targeted audience.",
    },
    {
      title: "Cost Efficiency",
      description:
        "A single responsive site means there's no need to create separate versions for desktop and mobile, reducing development and maintenance costs over time.",
    },
    {
      title: "Future-Proofing",
      description:
        "As new devices with various screen sizes enter the market, responsive design ensures that your site remains accessible and functional, offering a consistent experience to all users.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-cyan-200 to-blue-200 py-16">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Advantages of Responsive Web Design
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 text-center transform hover:scale-105 transition-transform border-b-4 border-[#4EB8CA]"
            >
              <div className="mb-4">
                <div className="bg-cyan-100 rounded-full p-4 w-16 h-16 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-500 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m2 4H7m12 0a2 2 0 01-2 2H7a2 2 0 01-2-2m12 0a2 2 0 00-2-2H7a2 2 0 00-2 2m12-10a2 2 0 01-2 2H7a2 2 0 01-2-2m12 0a2 2 0 00-2-2H7a2 2 0 00-2 2"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 mb-4">{advantage.description}</p>
              <button className="text-blue-600 font-semibold border border-blue-600 px-4 py-2 hover:bg-blue-50">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
