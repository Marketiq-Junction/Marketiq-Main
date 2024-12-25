import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa";
import Ayansir from "@/components/Footer/ayansir"; // Import the Ayansir component

const Footer = () => {
  return (
    <div>
      {/* Ayansir Component (Hidden on Mobile View) */}
      <div className="hidden md:block">
        <Ayansir />
      </div>

      {/* WhatsApp and Call Sticky Icons */}
    {/* WhatsApp Icon (Right Side) */}
<div className="fixed bottom-4 right-4 z-50 flex items-center justify-center mb-8 mr-4">
  <Link href="https://wa.me/+919920892689" target="_blank">
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform">
      <FaWhatsapp className="text-3xl sm:text-4xl text-white" />
    </div>
  </Link>
</div>

{/* Call Icon (Left Side) */}
<div className="fixed bottom-4 left-4 z-50 flex items-center justify-center mb-8 ml-4">
  <Link href="tel:+919920892689">
    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform">
      <FaPhone className="text-3xl sm:text-4xl text-white transform rotate-90" />
    </div>
  </Link>
</div>


      {/* Main Footer Section */}
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
              We provide smart and affordable digital marketing solutions
              tailored to your business needs. Whether you're looking to improve
              your website, enhance your social media presence, or optimize for
              search engines, we've got you covered.
            </span>
          </div>
        </div>

        {/* Our Services */}
        <div className="w-full md:w-1/4 h-auto flex flex-col p-5">
          <h1 className="text-xl font-bold">Our Services</h1>
          <div className="flex flex-col gap-2 mt-3">
            {[
              { name: "Website Management", link: "/webdesign" },
              { name: "Google My Business", link: "/GoogleMyBusiness" },
              { name: "SEO", link: "/seo" },
              { name: "Social Media Marketing", link: "/marketingsolution" },
              { name: "YouTube Marketing", link: "/youtube" },
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                <IoIosArrowForward />
                <Link href={service.link}>
                  <span className="text-sm md:text-base hover:underline cursor-pointer">
                    {service.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Section (Updated) */}
        <div className="w-full md:w-1/4 h-auto flex flex-col p-5">
          <h1 className="text-xl font-bold">Policies</h1>
          <div className="flex flex-col gap-2 mt-3">
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
              <div key={index} className="flex items-center gap-2">
                <IoIosArrowForward />
                <Link href={item.link}>
                  <span className="text-sm md:text-base hover:underline cursor-pointer">
                    {item.name}
                  </span>
                </Link>
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
                <Link
                  href="https://www.google.com/maps/place/Marketiq+Junction/@19.0726454,72.8804105,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c960b1a3a749:0x251e6f85db11281a!8m2!3d19.0726454!4d72.8804105!16s%2Fg%2F11wms5bvtj?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <span className="text-blue-200">
                    Off BKC Mumbai, India, 400070
                  </span>
                </Link>
              </p>
            </div>
            <div>
              <h1 className="text-sm md:text-base font-bold">EMAIL:</h1>
              <p className="text-sm md:text-base">
                <Link href="mailto:marketiqjunction@gmail.com">
                  <span className="text-blue-200">
                    marketiqjunction@gmail.com
                  </span>
                </Link>
              </p>
            </div>
            <div>
              <h1 className="text-sm md:text-base font-bold">PHONE:</h1>
              <p className="text-sm md:text-base">
                <Link href="tel:+919920892689">
                  <span className="text-blue-200">+91 99208 92689</span>
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="w-full md:w-1/4 h-auto flex flex-col p-5">
          <div className="w-full">
            <h1 className="text-sm md:text-base font-bold">Let's Socialize</h1>
            <div className="flex items-center gap-5 mt-2">
              {/* Instagram Link */}
              <Link
                href="https://www.instagram.com/marketiq_junction/"
                target="_blank"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white flex items-center justify-center rounded-full">
                  <FaInstagram className="text-lg sm:text-xl text-black" />
                </div>
              </Link>
              {/* Facebook Link */}
              <Link
                href="https://www.facebook.com/people/Marketiq-Junction/61567512213882/"
                target="_blank"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white flex items-center justify-center rounded-full">
                  <FaFacebook className="text-lg sm:text-xl text-black" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
