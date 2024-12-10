"use client";

const Reputation = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-white to-blue-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            We Help You Control <br /> Your Online Reputation
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We help you take charge of your online reputation by actively
            managing your digital presence across various platforms. Our expert
            team monitors customer feedback, engages with your audience, and
            implements strategies to enhance your brand image, ensuring you
            maintain a positive online persona. Let us help you build trust and
            credibility in the digital landscape!
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/GoogleMyBusiness/Three.png"
            alt="Online Reputation Management"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Reputation;
