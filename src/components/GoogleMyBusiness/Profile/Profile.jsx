"use client";

const Profile = () => {
  return (
    <section className="bg-white py-12">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center gap-8 px-6">
        {/* Left Side Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Profile Optimization
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We start by creating or optimizing your Google My Business profile
            to ensure it accurately represents your business. This includes
            updating essential information such as your business name, address,
            phone number, website link, hours of operation, and business
            description. We also focus on selecting the right categories and
            attributes to enhance your visibility in search results.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/GoogleMyBusiness/two1.png"
            alt="Profile Optimization"
            className="w-full max-w-md md:max-w-lg h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
