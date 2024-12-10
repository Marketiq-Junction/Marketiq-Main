import React from "react";

const why = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
      <p className="text-center text-gray-600 mb-12">
        Facilisis. Consequat. Litora. Pede eleifend lacus. Massa risus turpis ultricies. 
        Urna vulputate non non nisl amet commodo.
      </p>
      <div className="flex flex-wrap justify-between items-center gap-6">
        {/* Left Content */}
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-xl font-semibold mb-4">Organic YouTube SEO Optimization</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-4 text-blue-500">
                <i className="fas fa-globe"></i>
              </span>
              We enhance your content’s visibility using targeted keywords, effective video descriptions, and relevant tags.
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-green-500">
                <i className="fas fa-chart-line"></i>
              </span>
              Our SEO strategy improves channel rankings, making your content easier for audiences to find.
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-purple-500">
                <i className="fas fa-arrows-alt"></i>
              </span>
              Organic SEO ensures consistent reach and audience engagement without reliance on paid ads.
            </li>
          </ul>
        </div>

        {/* Center Image */}
        <div className="flex-1 min-w-[200px] flex justify-center">
          <img
            src="/images/youtube/s2.png"
            alt="SEO Optimization Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-xl font-semibold mb-4">Content Strategy and Audience Engagement</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-4 text-blue-500">
                <i className="fas fa-pencil-alt"></i>
              </span>
              We design organic methods to create content that resonates with your audience, based on trends.
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-green-500">
                <i className="fas fa-comments"></i>
              </span>
              Through comment interaction, prompts, and end screens, we foster genuine viewer engagement.
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-purple-500">
                <i className="fas fa-chart-pie"></i>
              </span>
              We continuously monitor your channel's performance and optimize based on organic metrics.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default why;
