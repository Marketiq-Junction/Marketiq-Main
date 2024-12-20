import { FaRegUserCircle, FaRegEdit, FaRegEye } from "react-icons/fa";

const Process = () => {
  return (
    <section className="py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Our Process</h2>
        <p className="text-[#000000] text-sm sm:text-base leading-relaxed">
          We recognize the importance of having a strong local presence, which
          is why our Google My Business (GMB) services are designed to help you
          maximize your visibility and connect with customers in your area. With
          a well-optimized GMB profile, you can attract more local clients and
          drive traffic to your business.
        </p>
      </div>

      {/* Process Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Card 1 */}
        <div className="p-6 bg-[#A2DFE1] rounded-tl-3xl rounded-br-3xl shadow-lg border border-transparent hover:bg-white hover:border-[#4A9BD3] transition-all duration-300 group">
          <div className="mb-4 flex justify-center">
            <FaRegUserCircle className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
          </div>
          <h3 className="text-[#3863F5] text-center text-lg sm:text-xl mb-2 group-hover:text-black">
            Profile Creation and Optimization
          </h3>
          <p className="text-gray-700 text-sm sm:text-base text-center">
            The first step involves:
          </p>
          <ul className="text-gray-700 text-sm sm:text-base text-left list-none pl-6 mt-2">
            <li className="relative before:content-['➔'] before:absolute before:-left-6 before:text-[#3863F5]">
              Creating or claiming your Google My Business profile.
            </li>
            <li className="relative before:content-['➔'] before:absolute before:-left-6 before:text-[#3863F5]">
              Adding your business name, address, phone number, and website URL.
            </li>
            <li className="relative before:content-['➔'] before:absolute before:-left-6 before:text-[#3863F5]">
              Selecting business categories and attributes to make your profile
              more appealing.
            </li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-[#A2DFE1] rounded-tl-3xl rounded-br-3xl shadow-lg border border-transparent hover:bg-white hover:border-[#4A9BD3] transition-all duration-300 group">
          <div className="mb-4 flex justify-center">
            <FaRegEdit className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
          </div>
          <h3 className="text-[#3863F5] text-center text-lg sm:text-xl mb-2 group-hover:text-black">
            Content Development and Regular Updates
          </h3>
          <p className="text-gray-700 text-sm sm:text-base text-center">
            We ensure your profile stays active by:
          </p>
          <ul className="text-gray-700 text-sm sm:text-base text-left list-none pl-6 mt-2">
            <li className="relative before:content-['➔'] before:absolute before:-left-6 before:text-[#3863F5]">
              Creating posts for promotions, events, and updates.
            </li>
            <li className="relative before:content-['➔'] before:absolute before:-left-6 before:text-[#3863F5]">
              Sharing engaging content to attract your target audience.
            </li>
            <li className="relative before:content-['➔'] before:absolute before:-left-6 before:text-[#3863F5]">
              Maintaining regular updates to improve local search visibility.
            </li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-[#A2DFE1] rounded-tl-3xl rounded-br-3xl shadow-lg border border-transparent hover:bg-white hover:border-[#4A9BD3] transition-all duration-300 group">
          <div className="mb-4 flex justify-center">
            <FaRegEye className="w-10 h-10 sm:w-12 sm:h-12 text-black" />
          </div>
          <h3 className="text-[#3863F5] text-center text-lg sm:text-xl mb-2 group-hover:text-black">
            Monitoring and Review Management
          </h3>
          <p className="text-gray-700 text-sm sm:text-base text-center">
            We continuously monitor customer interactions by:
          </p>
          <ul className="text-gray-700 text-sm sm:text-base text-left list-none pl-6 mt-2">
            <li className="relative before:content-['➔'] before:absolute before:-left-6 before:text-[#3863F5]">
              Analyzing trends and customer feedback.
            </li>
            <li className="relative before:content-['➔'] before:absolute before:-left-6 before:text-[#3863F5]">
              Managing reviews to encourage positive interactions.
            </li>
            <li className="relative before:content-['➔'] before:absolute before:-left-6 before:text-[#3863F5]">
              Developing strategies to attract more clients.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;
