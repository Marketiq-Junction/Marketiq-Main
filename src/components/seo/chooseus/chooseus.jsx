import Image from "next/image";

const ChooseUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white text-black p-12 max-w-8xl mx-auto my-12">
      {/* Text Content */}
      <div className="lg:w-1/2">
        <h3 className="text-sm uppercase font-semibold text-purple-600 mb-2">
          Why Choose Us
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Boosts Your Website Traffic!
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Boost your website traffic with tailored strategies that drive
          engagement and visibility. At Marketiq Junction, we focus on creating
          a lasting online presence through high-quality content, targeted SEO
          techniques, and powerful link-building. By analyzing and optimizing
          keywords relevant to your audience, we help connect your brand with
          users actively searching for your products and services.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-6">
          Our goal is to make your site a hub of activity, capturing both
          organic traffic and potential leads that convert. With Marketiq
          Junction, experience a steady increase in visitors and transform that
          traffic into meaningful results for your business.
        </p>
        <button className="bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition">
          Discover More
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <Image
          src="/chooseus.png" // Replace with your image path
          alt="Boost Website Traffic"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default ChooseUs;
