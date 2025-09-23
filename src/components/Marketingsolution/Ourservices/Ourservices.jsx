// import React from "react";

// const ServiceCard = ({ title, description, image }) => (
//   <div className="w-full md:w-[30%] lg:w-[28%] bg-white rounded-tl-[10%] rounded-br-[10%] border-[4px] border-black p-6 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow">
//     <div className="w-[30%] h-auto rounded-full overflow-hidden flex items-center justify-center mb-4">
//       <img src={image} alt={`${title} icon`} className="w-full h-full object-contain" />
//     </div>
//     <h6 className="text-lg md:text-xl font-bold text-center mb-2">{title}</h6>
//     <p className="text-sm md:text-base text-center">{description}</p>
//   </div>
// );

// const Ourservices = () => {
//   const services = [
//     {
//       title: "Youtube Marketing",
//       description: "Convert your visitor into a buyer",
//       image: "/images/our services/vieod.png",
//     },
//     {
//       title: "Social Media Management",
//       description: "Improve the public perception of your brand",
//       image: "/images/our services/vieod.png",
//     },
//     {
//       title: "Web Development",
//       description: "Create and maintain Appealing Websites",
//       image: "/images/our services/vieod.png",
//     },
//     {
//       title: "Google My Business",
//       description: "Generate SEO-Based Engaging Content",
//       image: "/images/our services/vieod.png",
//     },
//     {
//       title: "Search Engine Optimization",
//       description: "Purchase Promising attractive graphics to promote brand",
//       image: "/images/our services/vieod.png",
//     },
//     {
//       title: "Analytics & Reporting",
//       description: "Create and maintain Appealing Websites",
//       image: "/images/our services/vieod.png",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#f7f7f7] py-12">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Services</h1>
//         <p className="text-sm md:text-lg text-gray-600">
//           Our services are designed to amplify your brand's digital impact. From social media management to SEO, we
//           provide tailored solutions that drive results and growth.
//         </p>
//       </div>

//       {/* Services Grid */}
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-12">
//         {services.map((service, index) => (
//           <ServiceCard
//             key={index}
//             title={service.title}
//             description={service.description}
//             image={service.image}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Ourservices;

import React from "react";

const ServiceCard = ({ title, description, image }) => (
  <div className="w-full md:w-[30%] lg:w-[28%] bg-white rounded-tl-[10%] rounded-br-[10%] border-[4px] border-black p-6 flex flex-col items-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
    <div className="w-[30%] h-auto rounded-full overflow-hidden flex items-center justify-center mb-4">
      <img
        src={image}
        alt={`${title} icon`}
        className="w-full h-full object-contain"
      />
    </div>
    <h6 className="text-lg md:text-xl font-bold text-center mb-2">{title}</h6>
    <p className="text-sm md:text-base text-center text-gray-700">
      {description}
    </p>
  </div>
);

const Ourservices = () => {
  const services = [
    {
      title: "Youtube Marketing",
      description:
        "Convert your visitors into buyers with engaging video campaigns.",
      image: "/images/our services/vieod.png",
    },
    {
      title: "Social Media Management",
      description:
        "Improve the public perception of your brand across platforms.",
      image: "/images/our services/vieod.png",
    },
    {
      title: "Web Development",
      description: "Create and maintain appealing, responsive websites.",
      image: "/images/our services/vieod.png",
    },
    {
      title: "Google My Business",
      description: "Generate SEO-based engaging content for local visibility.",
      image: "/images/our services/vieod.png",
    },
    {
      title: "Search Engine Optimization",
      description: "Increase organic traffic with effective SEO strategies.",
      image: "/images/our services/vieod.png",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track and analyze performance to make data-driven decisions.",
      image: "/images/our services/vieod.png",
    },
  ];

  return (
    <section className="w-full bg-[#f7f7f7] py-16">
      {/* Header */}
      <div className="text-center mb-12 px-6 lg:px-24">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Our Services
        </h1>
        <p className="text-sm md:text-lg text-gray-600">
          Our services are designed to amplify your brand's digital impact. From
          social media management to SEO, we provide tailored solutions that
          drive results and growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-12">
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
