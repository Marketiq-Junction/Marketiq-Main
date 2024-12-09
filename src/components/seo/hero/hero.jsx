import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-blue-400 text-white p-24 max-w-8xl mx-auto">
      {/* Visuals Section (Left Image) */}
      <div className="absolute left-8 top-1/4 hidden lg:block">
        <Image
          src="/seohero22.png"
          alt="Character"
          width={200}
          height={200}
        />
      </div>

      {/* Text Content */}
      <div className="text-center max-w-2xl z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          SEO Marketing & Agency.
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Ensuring the best return on investment for your bespoke SEO campaign
          requirement.
        </p>
      </div>

      {/* Visuals Section (Right Image) */}
      <div className="absolute right-8 top-1/4 hidden lg:block">
        <Image
          src="/seohero11.png"
          alt="Megaphone"
          width={150}
          height={150}
        />
      </div>
    </section>
  );
};

export default HeroSection;
