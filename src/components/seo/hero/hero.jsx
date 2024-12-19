import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-blue-400 text-white flex flex-col items-center justify-center p-6 md:p-12 lg:p-24 max-w-8xl mx-auto">
      {/* Visuals Section (Left Image) */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <Image
          src="/seohero22.png"
          alt="Character"
          width={250}
          height={250}
          priority
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="text-center max-w-2xl z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
          SEO Marketing & Agency.
        </h1>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0">
          Ensuring the best return on investment for your bespoke SEO campaign
          requirement.
        </p>
      </div>

      {/* Visuals Section (Right Image) */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <Image
          src="/seohero11.png"
          alt="Megaphone"
          width={200}
          height={200}
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
