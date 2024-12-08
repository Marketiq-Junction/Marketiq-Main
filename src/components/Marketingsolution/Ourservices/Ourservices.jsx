import React from "react";
const ServiceCard = ({ title, description, image }) => (
  <div className="w-[20%] h-[90%] bg-white rounded-tl-[10%] rounded-br-[10%] border-[4px] border-black">
    <div className="w-full h-[40%] flex items-center justify-center">
      <div className="w-[30%] h-[80%] rounded-full overflow-hidden flex items-center justify-center">
        <img src={image} alt={`${title} icon`} className="w-[75%] h-[75%]" />
      </div>
    </div>
    <div className="w-full h-[60%] flex items-center justify-center flex-col">
      <h6 className="text-[1.2vw] font-bold">{title}</h6>
      <p className="text-[1vw] w-[80%] text-center">{description}</p>
    </div>
  </div>
);

const Ourservices = () => {
  const services = [
    {
      title: "Youtube Marketing",
      description: "Convert your visitor into a buyer",
      image: "/images/our services/vieod.png",
    },
    {
      title: "Social Media Management",
      description: "Improve the public perception of your brand",
      image: "/images/our services/vieod.png",
    },
    {
      title: "Web Development",
      description: "Create and maintain Appealing Websites",
      image: "/images/our services/vieod.png",
    },
    {
      title: "Google My Business",
      description: "Generate SEO-Based Engaging Content",
      image: "/images/our services/vieod.png",
    },
    {
      title: "Search Engine Optimization",
      description: "Purchase Promising attractive graphics to promote brand",
      image: "/images/our services/vieod.png",
    },
    {
      title: "Analytics & Reporting",
      description: "Create and maintain Appealing Websites",
      image: "/images/our services/vieod.png",
    },
  ];

  return (
    <section className="w-full h-full bg-[#4A9BD3] py-8 md:py-16">
      <div className="w-full lg:mb-10 h-auto flex flex-col items-center justify-center px-4 md:px-0">
        <h1 className="text-[6vw] md:text-[2.5vw] font-bold text-center text-white">
          Our Services
        </h1>
        <p className="text-[4vw] md:text-[1.2vw] font-medium text-center text-white mt-4 md:mt-2">
          Our affordable services enable businesses of all sizes to access
          professional digital marketing without stretching their budgets.
        </p>
      </div>
      <div className="w-full h-auto hidden md:flex flex-wrap items-center justify-center gap-[5em]">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Ourservices;
