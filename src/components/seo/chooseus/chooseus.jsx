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
        • Boost website traffic with tailored engagement and visibility strategies.<br/>
        • Create a lasting online presence through quality content and targeted SEO.<br/>
        • Optimize keywords to connect your brand with active searchers.<br/>
        • Leverage powerful link-building to enhance online reach.<br/>
        • Transform your site into a hub for organic traffic and lead generation.<br/>
        • Experience steady visitor growth and convert traffic into meaningful business results.
        </p>
        <button className="bg-[#4534B8] text-white py-3 px-6 font-semibold hover:bg-purple-700 transition">
          Discover More
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
        <Image
          src="/chooseus.png" // Replace with your image path
          alt="Boost Website Traffic"
          width={400}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default ChooseUs;
