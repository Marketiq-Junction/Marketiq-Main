import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Socialmedia() {
  return (
    <>
    <section id="home" className="bg-[#4A9BD3] p-12 h-auto text-left">
  {/* Hero Content */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
    {/* Left Content */}
    <div className="flex-1">
      <h2 className="text-5xl font-bold text-white font-syne mb-4 leading-tight">
        Social Media Marketing
      </h2>
      <p className="text-lg mb-8 text-white font-poppins font-normal leading-8">
        Ensuring the best return on investment for your bespoke SEO <br /> Campaign requirement.
      </p>
      {/* Quote Request Form */}
      <div className="flex flex-col gap-4 max-w-lg">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Select Platform"
            className="p-3 w-full"
          />
          <input
            type="text"
            placeholder="Enter URL"
            className="p-3 w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 w-full"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="p-3 w-full"
          />
        </div>
        <div className="text-center">
          <button className="bg-[#4A9BD3] border-[#BDB4FF] border-2 text-white px-8 py-3   transition">
            Request A Free Quote
          </button>
        </div>
      </div>
    </div>

    <div className="lg:w-[40%] w-full h-full flex items-center justify-center mt-10 lg:mt-0">
        <div className="  w-[90%] lg:w-[70%] h-[30vh] lg:h-[60%] ">
          <img
            src="/images/socialmedia/one.png"
            alt="Hero Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
  </div>
</section>

<section>
  <div className="flex justify-center gap-6 bg-cyan-200 py-4">
    {/* Instagram */}
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-lg"
    >
      <i className="fab fa-instagram text-white text-3xl"></i>
    </a>

    {/* WhatsApp */}
    <a
      href="https://www.whatsapp.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-lg"
    >
      <i className="fab fa-whatsapp text-white text-3xl"></i>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-lg"
    >
      <i className="fab fa-facebook-f text-white text-3xl"></i>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-16 h-16 bg-blue-700 rounded-lg"
    >
      <i className="fab fa-linkedin-in text-white text-3xl"></i>
    </a>
  </div>
</section>

    </>
    
  );
}

export default Socialmedia;
