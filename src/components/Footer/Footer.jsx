"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaLinkedin,
  FaYoutube,
  FaHeart, // ✅ Added Heart icon
} from "react-icons/fa";
import Ayansir from "@/components/Footer/ayansir";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaInstagram className="text-pink-500 text-xl" />,
      link: "https://www.instagram.com/marketiq_junction/",
      label: "Instagram Link",
    },
    {
      icon: <FaFacebook className="text-blue-600 text-xl" />,
      link: "https://www.facebook.com/people/Marketiq-Junction/61567512213882/",
      label: "Facebook Link",
    },
    {
      icon: <FaLinkedin className="text-blue-700 text-xl" />,
      link: "https://www.linkedin.com/company/marketiq-junction/",
      label: "LinkedIn Link",
    },
    {
      icon: <FaYoutube className="text-red-600 text-xl" />,
      link: "https://www.youtube.com/@marketiqjunction",
      label: "YouTube Link",
    },
    {
      icon: <FaWhatsapp className="text-green-500 text-xl" />,
      link: "https://wa.me/+919920892689",
      label: "Whatsapp Link",
    },
  ];

  return (
    <div className="relative">
      {/* Ayansir Component */}
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
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-400 to-cyan-500 flex items-center justify-center rounded-full shadow-lg hover:scale-110 hover:shadow-teal-400/50 transition-transform">
            <FaPhone className="text-2xl sm:text-3xl text-white transform rotate-90" />
          </div>
        </Link>
      </div>

      {/* Main Footer */}
      <section className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white pt-12 pb-6 px-5 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 border-b border-white/20 pb-10">
          {/* Logo + Description */}
          <div>
            <div className="flex justify-center md:justify-start bg-white p-4 rounded-lg shadow-md ">
              <div className="relative w-[220px] h-[110px] md:w-[280px] md:h-[140px]">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed opacity-90">
              We provide smart and affordable digital marketing solutions
              tailored to your business needs.
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
                  className="flex items-center gap-2 hover:underline hover:text-cyan-200 transition-colors"
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
                // { name: "Product Pricing", link: "/Knowmore/ProductPricing" },
                { name: "Refund Policy", link: "/Knowmore/RefundPolicy" },
                {
                  name: "Cancellation Policy",
                  link: "/Knowmore/CancellationPolicy",
                },
                // {
                //   name: "Shipping and Delivery Policy",
                //   link: "/Knowmore/ShippingAndDelivery",
                // },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="flex items-center gap-2 hover:underline hover:text-cyan-200 transition-colors"
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
                href="https://maps.app.goo.gl/jK4i6v86vQxo6Dwa9"
                target="_blank"
                className="text-cyan-200 hover:underline"
              >
                Off BKC Mumbai, India, 400070
              </Link>
            </p>
            <p className="mt-3 text-sm opacity-90">
              <strong>EMAIL:</strong> <br />
              <Link
                href="mailto:marketiqjunction@gmail.com"
                className="text-cyan-200 hover:underline"
              >
                marketiqjunction@gmail.com
              </Link>
            </p>
            <p className="mt-3 text-sm opacity-90">
              <strong>PHONE:</strong> <br />
              <Link
                href="tel:+919920892689"
                className="text-cyan-200 hover:underline"
              >
                +91 99208 92689
              </Link>
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 relative inline-block">
              Let's Socialize
              <span className="block w-12 h-0.5 bg-white mt-1"></span>
            </h2>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  onClick={() =>
                    gtag(
                      "event",
                      `${social.label.toLowerCase().replace(" ", "_")}_click`,
                      {
                        event_category: "social",
                        event_label: social.label,
                        value: 1,
                      }
                    )
                  }
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/40 transition-transform bg-white">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="relative z-10 border-t border-slate-200/50 bg-white/60 backdrop-blur-sm select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 text-center">
              <p className="text-slate-600 text-sm flex items-center order-2 sm:order-1">
                Built with <FaHeart className="text-red-500 mx-1 h-4 w-4" /> and
                passion by{" "}
                <a
                  href="https://code4bharat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-blue-600 hover:text-blue-500 font-semibold transition-colors duration-200"
                >
                  Code4Bharat
                </a>
              </p>
              <div className="hidden sm:block w-px h-4 bg-slate-300/50 mx-6"></div>
              <p className="text-slate-600 text-sm order-1 sm:order-2 mt-1 sm:mt-0">
                &copy; 2011 – {new Date().getFullYear()} Marketiq Junction. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
