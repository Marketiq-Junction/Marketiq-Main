import React from "react";
import { FaGlobe, FaChartLine, FaArrowsAlt, FaPencilAlt, FaComments, FaChartPie } from "react-icons/fa";

const Why = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
      <p className="text-[#000000] mb-12">
      Facilisis. Consequat. Litora. Pede eleifend lacus. Massa risus turpis ultrices Urna vulputate non non nisl amet commodo. Sollicitudin. Leo mi curabitur <br />euismod orci. Ridiculus sem. Torquent. Ornare euismod, per nullam, ligula morbi natoque nibh faucibus vitae sapien. 

      </p>
      <div className="flex flex-wrap justify-between items-center gap-6">
        {/* Left Content */}
        <div className="flex-1 min-w-[300px]">
          <h3 className="text-xl font-semibold mb-4 text-[#000000]">Organic YouTube SEO Optimization</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-4 text-blue-500">
                <FaGlobe />
              </span>
              We enhance your content’s visibility using targeted keywords, effective video descriptions, and relevant tags.
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-green-500">
                <FaChartLine />
              </span>
              Our SEO strategy improves channel rankings, making your content easier for audiences to find.
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-purple-500">
                <FaArrowsAlt />
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
                <FaPencilAlt />
              </span>
              We design organic methods to create content that resonates with your audience, based on trends.
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-green-500">
                <FaComments />
              </span>
              Through comment interaction, prompts, and end screens, we foster genuine viewer engagement.
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-purple-500">
                <FaChartPie />
              </span>
              We continuously monitor your channel's performance and optimize based on organic metrics.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Why;
