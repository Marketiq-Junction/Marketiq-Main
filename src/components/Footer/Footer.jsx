// import Image from "next/image";
// import Link from "next/link";
// import { IoIosArrowForward } from "react-icons/io";
// import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa";
// import Ayansir from "@/components/Footer/ayansir"; // Import the Ayansir component

// const Footer = () => {
//   return (
//     <div>
//       {/* Ayansir Component (Hidden on Mobile View) */}
//       <div className="hidden md:block">
//         <Ayansir />
//       </div>

//       {/* WhatsApp and Call Sticky Icons */}
//     {/* WhatsApp Icon (Right Side) */}
//     <div className="fixed bottom-4 right-4 z-50 flex items-center justify-center mb-8 mr-4">
//   <Link
//     href="https://wa.me/+919920892689"
//     target="_blank"
//     onClick={() => {
//       // Send event to GA4 when the WhatsApp link is clicked
//       gtag('event', 'whatsapp_click', {
//         event_category: 'social',
//         event_label: 'WhatsApp Link',
//         value: 1,
//       });
//     }}
//   >
//     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform">
//       <FaWhatsapp className="text-3xl sm:text-4xl text-white" />
//     </div>
//   </Link>
// </div>


// {/* Call Icon (Left Side) */}
// <div className="fixed bottom-4 left-4 z-50 flex items-center justify-center mb-8 ml-4">
//   <Link
//     href="tel:+919920892689"
//     onClick={() => {
//       // Send event to GA4 when the phone number link is clicked
//       gtag('event', 'phone_click', {
//         event_category: 'contact',
//         event_label: 'Phone Link',
//         value: 1,
//       });
//     }}
//   >
//     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform">
//       <FaPhone className="text-3xl sm:text-4xl text-white transform rotate-90" />
//     </div>
//   </Link>
// </div>



//       {/* Main Footer Section */}
//       <section className="w-full h-auto bg-[#3F85B5] text-white relative flex flex-col md:flex-row">
//         {/* Logo and Description */}
//         <div className="w-full md:w-1/4 h-auto flex flex-col p-5">
//           <div className="w-full h-1/3 flex items-center justify-center bg-white">
//             <Image
//               src="/images/navbar/logonav.webp"
//               alt="Logo"
//               width={150}
//               height={75}
//             />
//           </div>
//           <div className="w-full h-2/3 flex items-center px-2">
//             <span className="text-sm md:text-base">
//               We provide smart and affordable digital marketing solutions
//               tailored to your business needs. Whether you're looking to improve
//               your website, enhance your social media presence, or optimize for
//               search engines, we've got you covered.
//             </span>
//           </div>
//         </div>

//         {/* Our Services */}
//         <div className="w-full md:w-1/4 h-auto flex flex-col p-5">
//           <h1 className="text-xl font-bold">Our Services</h1>
//           <div className="flex flex-col gap-2 mt-3">
//             {[
//               { name: "Website Management", link: "/webdesign" },
//               { name: "Google My Business", link: "/GoogleMyBusiness" },
//               { name: "SEO", link: "/seo" },
//               { name: "Social Media Marketing", link: "/marketingsolution" },
//               { name: "YouTube Marketing", link: "/youtube" },
//             ].map((service, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <IoIosArrowForward />
//                 <Link href={service.link}>
//                   <span className="text-sm md:text-base hover:underline cursor-pointer">
//                     {service.name}
//                   </span>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Explore Section (Updated) */}
//         <div className="w-full md:w-1/4 h-auto flex flex-col p-5">
//           <h1 className="text-xl font-bold">Policies</h1>
//           <div className="flex flex-col gap-2 mt-3">
//             {[
//               { name: "About Us", link: "/Knowmore/OurStory" },
//               {
//                 name: "Terms and Conditions",
//                 link: "/Knowmore/TermsAndConditions",
//               },
//               { name: "Contact Us", link: "/Knowmore/Contact" },
//               { name: "Privacy Policy", link: "/Knowmore/PrivacyPolicy" },
//               { name: "Product Pricing", link: "/Knowmore/ProductPricing" },
//               { name: "Refund Policy", link: "/Knowmore/RefundPolicy" },
//               {
//                 name: "Cancellation Policy",
//                 link: "/Knowmore/CancellationPolicy",
//               },
//               {
//                 name: "Shipping and Delivery Policy",
//                 link: "/Knowmore/ShippingAndDelivery",
//               },
//             ].map((item, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 <IoIosArrowForward />
//                 <Link href={item.link}>
//                   <span className="text-sm md:text-base hover:underline cursor-pointer">
//                     {item.name}
//                   </span>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Official Info */}
//         <div className="w-full md:w-1/4 h-auto flex flex-col p-5">
//           <h1 className="text-xl font-bold">Official Info</h1>
//           <div className="flex flex-col mt-3">
//             <div>
//               <h1 className="text-sm md:text-base font-bold">ADDRESS:</h1>
//               <p className="text-sm md:text-base">
//                 <Link
//                   href="https://www.google.com/maps/place/Marketiq+Junction/@19.0726454,72.8804105,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c960b1a3a749:0x251e6f85db11281a!8m2!3d19.0726454!4d72.8804105!16s%2Fg%2F11wms5bvtj?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
//                   target="_blank"
//                 >
//                   <span className="text-blue-200">
//                     Off BKC Mumbai, India, 400070
//                   </span>
//                 </Link>
//               </p>
//             </div>
//             <div>
//               <h1 className="text-sm md:text-base font-bold">EMAIL:</h1>
//               <p className="text-sm md:text-base">
//               <Link
//   href="mailto:marketiqjunction@gmail.com"
//   onClick={() => {
//     // Send event to GA4 when the email link is clicked
//     gtag('event', 'email_click', {
//       event_category: 'contact',
//       event_label: 'Email Link',
//       value: 1,
//     });
//   }}
// >
//   <span className="text-blue-200">
//     marketiqjunction@gmail.com
//   </span>
// </Link>

//               </p>
//             </div>
//             <div>
//               <h1 className="text-sm md:text-base font-bold">PHONE:</h1>
//               <p className="text-sm md:text-base">
//                 <Link href="tel:+919920892689">
//                   <span className="text-blue-200">+91 99208 92689</span>
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Get In Touch */}
//         <div className="w-full md:w-1/4 h-auto flex flex-col p-5">
//           <div className="w-full">
//             <h1 className="text-sm md:text-base font-bold">Let's Socialize</h1>
//             <div className="flex items-center gap-5 mt-2">
//               {/* Instagram Link */}
//               <Link
//   href="https://www.instagram.com/marketiq_junction/"
//   target="_blank"
// >
//   <div
//     className="w-8 h-8 sm:w-10 sm:h-10 bg-white flex items-center justify-center rounded-full"
//     onClick={() => {
//       // Send event to GA4 when the link is clicked
//       gtag('event', 'instagram_click', {
//         event_category: 'social',
//         event_label: 'Instagram Link',
//         value: 1,
//       });
//     }}
//   >
//     <FaInstagram className="text-lg sm:text-xl text-black" />
//   </div>
// </Link>

//               {/* Facebook Link */}
//               <Link
//   href="https://www.facebook.com/people/Marketiq-Junction/61567512213882/"
//   target="_blank"
// >
//   <div
//     className="w-8 h-8 sm:w-10 sm:h-10 bg-white flex items-center justify-center rounded-full"
//     onClick={() => {
//       // Send event to GA4 when the Facebook link is clicked
//       gtag('event', 'facebook_click', {
//         event_category: 'social',
//         event_label: 'Facebook Link',
//         value: 1,
//       });
//     }}
//   >
//     <FaFacebook className="text-lg sm:text-xl text-black" />
//   </div>
// </Link>

//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Footer;

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa";
import Ayansir from "@/components/Footer/ayansir";

const Footer = () => {
  return (
    <div className="relative">
      {/* Ayansir Component (Hidden on Mobile View) */}
      <div className="hidden md:block">
        <Ayansir />
      </div>

      {/* WhatsApp Sticky Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          href="https://wa.me/+919920892689"
          target="_blank"
          onClick={() => {
            gtag("event", "whatsapp_click", {
              event_category: "social",
              event_label: "WhatsApp Link",
              value: 1,
            });
          }}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500 flex items-center justify-center rounded-full shadow-lg hover:scale-110 hover:shadow-green-400/50 transition-transform">
            <FaWhatsapp className="text-2xl sm:text-3xl text-white" />
          </div>
        </Link>
      </div>

      {/* Call Sticky Icon */}
      <div className="fixed bottom-4 left-4 z-50">
        <Link
          href="tel:+919920892689"
          onClick={() => {
            gtag("event", "phone_click", {
              event_category: "contact",
              event_label: "Phone Link",
              value: 1,
            });
          }}
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 flex items-center justify-center rounded-full shadow-lg hover:scale-110 hover:shadow-blue-400/50 transition-transform">
            <FaPhone className="text-2xl sm:text-3xl text-white transform rotate-90" />
          </div>
        </Link>
      </div>

      {/* Main Footer */}
      <section className="w-full bg-gradient-to-r from-[#3F85B5] to-[#2C6A91] text-white pt-12 pb-6 px-5 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 border-b border-white/20 pb-10">
          {/* Logo + Description */}
          <div>
            <div className="flex justify-center md:justify-start bg-white p-2 rounded-lg shadow-md">
              <Image
                src="/images/navbar/logonav.webp"
                alt="Logo"
                width={150}
                height={75}
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed opacity-90">
              We provide smart and affordable digital marketing solutions
              tailored to your business needs. Whether you're looking to improve
              your website, enhance your social media presence, or optimize for
              search engines, we've got you covered.
            </p>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-lg font-semibold mb-4 relative inline-block">
              Our Services
              <span className="block w-12 h-0.5 bg-white mt-1"></span>
            </h2>
            <div className="flex flex-col gap-2">
              {[
                { name: "Website Management", link: "/webdesign" },
                { name: "Google My Business", link: "/GoogleMyBusiness" },
                { name: "SEO", link: "/seo" },
                { name: "Social Media Marketing", link: "/marketingsolution" },
                { name: "YouTube Marketing", link: "/youtube" },
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="flex items-center gap-2 hover:underline hover:text-blue-200 transition-colors"
                >
                  <IoIosArrowForward /> <span>{service.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div>
            <h2 className="text-lg font-semibold mb-4 relative inline-block">
              Policies
              <span className="block w-12 h-0.5 bg-white mt-1"></span>
            </h2>
            <div className="flex flex-col gap-2">
              {[
                { name: "About Us", link: "/Knowmore/OurStory" },
                {
                  name: "Terms and Conditions",
                  link: "/Knowmore/TermsAndConditions",
                },
                { name: "Contact Us", link: "/Knowmore/Contact" },
                { name: "Privacy Policy", link: "/Knowmore/PrivacyPolicy" },
                { name: "Product Pricing", link: "/Knowmore/ProductPricing" },
                { name: "Refund Policy", link: "/Knowmore/RefundPolicy" },
                {
                  name: "Cancellation Policy",
                  link: "/Knowmore/CancellationPolicy",
                },
                {
                  name: "Shipping and Delivery Policy",
                  link: "/Knowmore/ShippingAndDelivery",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="flex items-center gap-2 hover:underline hover:text-blue-200 transition-colors"
                >
                  <IoIosArrowForward /> <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Official Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4 relative inline-block">
              Official Info
              <span className="block w-12 h-0.5 bg-white mt-1"></span>
            </h2>
            <p className="text-sm opacity-90">
              <strong>ADDRESS:</strong> <br />
              <Link
                href="https://maps.app.goo.gl/urRvT3ZEqC2UgkoH9"
                target="_blank"
              >
                <span className="text-blue-200 hover:underline">
                  Off BKC Mumbai, India, 400070
                </span>
              </Link>
            </p>
            <p className="mt-3 text-sm opacity-90">
              <strong>EMAIL:</strong> <br />
              <Link
                href="mailto:marketiqjunction@gmail.com"
                className="text-blue-200 hover:underline"
              >
                marketiqjunction@gmail.com
              </Link>
            </p>
            <p className="mt-3 text-sm opacity-90">
              <strong>PHONE:</strong> <br />
              <Link
                href="tel:+919920892689"
                className="text-blue-200 hover:underline"
              >
                +91 99208 92689
              </Link>
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 relative inline-block">
              Let’s Socialize
              <span className="block w-12 h-0.5 bg-white mt-1"></span>
            </h2>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.instagram.com/marketiq_junction/"
                target="_blank"
                onClick={() => {
                  gtag("event", "instagram_click", {
                    event_category: "social",
                    event_label: "Instagram Link",
                    value: 1,
                  });
                }}
              >
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full hover:scale-110 hover:shadow-lg hover:shadow-pink-400/40 transition-transform">
                  <FaInstagram className="text-xl text-black" />
                </div>
              </Link>
              <Link
                href="https://www.facebook.com/people/Marketiq-Junction/61567512213882/"
                target="_blank"
                onClick={() => {
                  gtag("event", "facebook_click", {
                    event_category: "social",
                    event_label: "Facebook Link",
                    value: 1,
                  });
                }}
              >
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full hover:scale-110 hover:shadow-lg hover:shadow-blue-400/40 transition-transform">
                  <FaFacebook className="text-xl text-black" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto text-center text-sm text-white/80 mt-6">
          © {new Date().getFullYear()} Marketiq Junction. All Rights Reserved.
        </div>
      </section>
    </div>
  );
};

export default Footer;
