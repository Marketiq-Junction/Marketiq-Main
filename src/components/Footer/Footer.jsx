import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-full h-auto bg-[#3F85B5] text-white relative flex flex-col md:flex-row">
      {/* Logo and Description */}
      <div className="w-full md:w-1/4 h-auto flex flex-col p-5">
        <div className="w-full h-1/3 flex items-center justify-center bg-white">
          <Image
            src="/images/navbar/logonav.webp"
            alt="Logo"
            width={150}
            height={75}
          />
        </div>
        <div className="w-full h-2/3 flex items-center px-2">
          <span className="text-sm md:text-base">
            We provide smart and affordable digital marketing solutions tailored
            to your business needs. Whether you're looking to improve your
            website, enhance your social media presence, or optimize for search
            engines, we've got you covered.
          </span>
        </div>
      </div>

      {/* Our Services */}
      <div className="w-full md:w-1/4 h-auto flex flex-col p-5">
        <h1 className="text-xl font-bold">Our Services</h1>
        <div className="flex flex-col gap-2 mt-3">
          {[
            "Website Management",
            "Analytics",
            "Google My Business",
            "SEO",
            "Social Media Marketing",
            "YouTube Marketing",
          ].map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <IoIosArrowForward />
              <h3 className="text-sm md:text-base">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Official Info */}
      <div className="w-full md:w-1/4 h-auto flex flex-col p-5">
        <h1 className="text-xl font-bold">Official Info</h1>
        <div className="flex flex-col mt-3">
          <div>
            <h1 className="text-sm md:text-base font-bold">ADDRESS:</h1>
            <p className="text-sm md:text-base">
              Off Bkc Mumbai, India, 400070
            </p>
          </div>
          <div>
            <h1 className="text-sm md:text-base font-bold">EMAIL:</h1>
            <p className="text-sm md:text-base">marketiqjunction@gmail.com</p>
          </div>
          <div>
            <h1 className="text-sm md:text-base font-bold">PHONE:</h1>
            <p className="text-sm md:text-base">+91 808 254 0401</p>
          </div>
        </div>
      </div>

      {/* Get In Touch */}
      <div className="w-full md:w-1/4 h-auto flex flex-col p-5">
        <h1 className="text-xl font-bold">Get In Touch</h1>
        <div className="flex flex-col gap-5 mt-3">
          <div className="flex items-center">
            <div className="w-full lg:h-10 h-10 flex bg-white rounded-lg">
              <input
                type="text"
                placeholder="Enter your email here"
                className="text-sm px-2 flex-grow rounded-l-lg outline-none"
              />
              <button className="bg-black rounded-r-lg text-[1vw] px-5">
                Submit
              </button>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-sm md:text-base font-bold">Let's Socialize</h1>
            <div className="flex items-center gap-5 mt-2">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full">
                <FaInstagram className="text-lg text-black" />
              </div>
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full">
                <FaFacebook className="text-lg text-black" />
              </div>
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full">
                <FaInstagram className="text-lg text-black" />
              </div>
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full">
                <FaLinkedin className="text-lg text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;


//MODIFY CODE

// import React from "react";
// import Image from "next/image";
// import { IoIosArrowForward } from "react-icons/io";
// import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <>
//       {/* Header Section Above Footer */}
//       <div className="w-full h-auto bg-[#50C3C6] text-white flex flex-col md:flex-row flex-wrap p-5 mx-20">
//         <div className="w-full md:w-1/4 flex flex-col">
//           <p className="font-bold text-lg">Talk to a Growth Expert</p>
//           <p>+91 808 254 0401</p>
//           <div className="flex flex-col gap-3 mt-3">
//             <div>
//               <p>
//                 Office No. 1A & 2, Lower Ground Floor, New White House,
//                 Building No. 3, Buddha Colony, Kurla West, Mumbai, Maharashtra
//                 400070, Mumbai, India, 400070
//               </p>
//               <p className="text-sm md:text-base">marketiqjunction@gmail.com</p>
//             </div>
//             <div>
//               <p className="font-bold">REVIEWED ON</p>
//               <p>Google My Business</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="w-full h-auto bg-[#3F85B5] text-white flex flex-col md:flex-row flex-wrap">

//         {/* Logo and Description */}
//         <div className="w-full md:w-1/4 p-5 flex flex-col">
//           <div className="w-full h-auto flex justify-center bg-white rounded-lg p-2">
//             <Image src="/images/navbar/logonav.webp" alt="Logo" width={150} height={75} />
//           </div>
//           <p className="mt-4 text-center md:text-left text-sm md:text-base">
//             We provide smart and affordable digital marketing solutions tailored
//             to your business needs. Whether you're looking to improve your
//             website, enhance your social media presence, or optimize for search
//             engines, we've got you covered.
//           </p>
//         </div>

//         {/* Our Services */}
//         <div className="w-full md:w-1/4 p-5 flex flex-col">
//           <h1 className="text-xl font-bold">Our Services</h1>
//           <ul className="flex flex-col gap-2 mt-3">
//             {[
//               "Website Management",
//               "Analytics",
//               "Google My Business",
//               "SEO",
//               "Social Media Marketing",
//               "YouTube Marketing",
//             ].map((service, index) => (
//               <li key={index} className="flex items-center gap-2">
//                 <IoIosArrowForward />
//                 <span className="text-sm md:text-base">{service}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Official Info */}
//         <div className="w-full md:w-1/4 p-5 flex flex-col">
//           <h1 className="text-xl font-bold">Official Info</h1>
//           <div className="flex flex-col gap-3 mt-3">
//             <div>
//               <h2 className="text-sm md:text-base font-bold">ADDRESS:</h2>
//               <p className="text-sm md:text-base">Off BKC Mumbai, India, 400070</p>
//             </div>
//             <div>
//               <h2 className="text-sm md:text-base font-bold">EMAIL:</h2>
//               <p className="text-sm md:text-base">marketiqjunction@gmail.com</p>
//             </div>
//             <div>
//               <h2 className="text-sm md:text-base font-bold">PHONE:</h2>
//               <p className="text-sm md:text-base">+91 808 254 0401</p>
//             </div>
//           </div>
//         </div>

//         {/* Get In Touch */}
//         <div className="w-full md:w-1/4 p-5 flex flex-col">
//           <h1 className="text-xl font-bold">Get In Touch</h1>
//           <div className="mt-3 flex flex-col gap-5">
//             <div className="flex">
//               <div className="flex w-full lg:h-10 h-10 bg-white rounded-lg overflow-hidden">
//                 <input
//                   type="text"
//                   placeholder="Enter your email here"
//                   className="text-sm px-2 flex-grow outline-none"
//                 />
//                 <button className="bg-black text-white px-4">Submit</button>
//               </div>
//             </div>
//             <div>
//               <h2 className="text-sm md:text-base font-bold">Let's Socialize</h2>
//               <div className="flex gap-3 mt-2">
//                 <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full">
//                   <FaInstagram className="text-lg text-black" />
//                 </div>
//                 <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full">
//                   <FaFacebook className="text-lg text-black" />
//                 </div>
//                 <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full">
//                   <FaLinkedin className="text-lg text-black" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// export default Footer;
