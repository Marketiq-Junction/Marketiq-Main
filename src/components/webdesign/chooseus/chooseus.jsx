import React from "react";

const ChooseUs = () => {
  return (
    <section className="bg-[#DFF4F4] py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading Section */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-gray-700 uppercase mb-4">
            Why Choose Us
          </h3>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Turn your site into a revenue driver with Digital Insides
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Transform your website into a powerful revenue driver with Digital
            Insides! Through tailored, data-driven strategies, we optimize your
            site for better visibility, engagement, and conversions, creating a
            seamless path from visitor to loyal customer.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Whether it’s enhancing user experience, improving SEO rankings, or
            maximizing conversion rates, we design and implement every element
            with one goal in mind: turning your site into a high-performing
            asset that grows your bottom line.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Let Digital Insides give your website the boost it needs to become
            a key player in your business success.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
            Contact Us
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Digital Marketing Analysis
            </h3>
            <p className="text-gray-700">
              Digital marketing analysis is essential for understanding the
              effectiveness of your online strategies. By evaluating key
              metrics and user behavior, businesses can identify areas for
              improvement, optimize campaigns, and drive better results.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Conversion Rate Optimization
            </h3>
            <p className="text-gray-700">
              Conversion Rate Optimization (CRO) focuses on increasing the
              percentage of website visitors who take desired actions, such as
              making a purchase or signing up for a newsletter. By analyzing
              user behavior and refining the user experience, businesses can
              enhance their conversion rates and maximize ROI from their
              marketing efforts.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Social Media Marketing
            </h3>
            <p className="text-gray-700">
              Social Media Marketing is essential for building brand awareness
              and engaging with your target audience across various platforms.
              By creating compelling content and utilizing targeted advertising,
              businesses can foster meaningful connections and drive traffic to
              their websites, ultimately boosting sales and customer loyalty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
