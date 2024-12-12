import { FaRegUserCircle, FaRegEdit, FaRegEye } from "react-icons/fa";

const Process = () => {
  return (
    <section className="py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Process</h2>
        <p className="text-[#000000]">
        we recognize the importance of having a strong local presence, which is why our Google My Business (GMB) services are designed to <br /> help you maximize your visibility and connect with customers in your area. With a well-optimized GMB profile, you can attract more local <br /> clients and drive traffic to your business.
        </p>
      </div>

      {/* Process Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="p-6 bg-[#A2DFE1] rounded-lg shadow-lg hover:bg-white transition-colors duration-300">
          <div className="mb-4">
            <FaRegUserCircle className="w-12 h-12 mx-auto text-black" />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">
            Profile Creation and Optimization
          </h3>
          <p className="text-gray-700 text-sm text-center">
            The first step involves:
          </p>
          <ul className="text-gray-700 text-sm text-left list-disc ml-6 mt-2">
            <li>Creating or claiming your Google My Business profile.</li>
            <li>Adding your business name, address, phone number, and website URL.</li>
            <li>Selecting business categories and attributes to make your profile more appealing.</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-[#A2DFE1] rounded-lg shadow-lg hover:bg-white transition-colors duration-300">
          <div className="mb-4">
            <FaRegEdit className="w-12 h-12 mx-auto text-black" />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">
            Content Development and Regular Updates
          </h3>
          <p className="text-gray-700 text-sm text-center">
            We ensure your profile stays active by:
          </p>
          <ul className="text-gray-700 text-sm text-left list-disc ml-6 mt-2">
            <li>Creating posts for promotions, events, and updates.</li>
            <li>Sharing engaging content to attract your target audience.</li>
            <li>Maintaining regular updates to improve local search visibility.</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-[#A2DFE1] rounded-lg shadow-lg hover:bg-white transition-colors duration-300">
          <div className="mb-4">
            <FaRegEye className="w-12 h-12 mx-auto text-black" />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">
            Monitoring and Review Management
          </h3>
          <p className="text-gray-700 text-sm text-center">
            We continuously monitor customer interactions by:
          </p>
          <ul className="text-gray-700 text-sm text-left list-disc ml-6 mt-2">
            <li>Analyzing trends and customer feedback.</li>
            <li>Managing reviews to encourage positive interactions.</li>
            <li>Developing strategies to attract more clients.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;
