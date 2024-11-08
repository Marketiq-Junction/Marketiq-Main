

'use client';
import React, { useState, useEffect } from 'react';

function About() {
  const [opacity, setOpacity] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setOpacity(1);
  }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const sections = [
    { name: 'Mission', description: 'Mission Of Our Company' },
    { name: 'Vision', description: 'Vision Of Our Company' },
    { name: 'Goals', description: 'Goals of Marketiq Junction' },
  ];

  return (
    <div className="transition-opacity duration-500" style={{ opacity }}>
      {/* About Us Section */}
      <section className="w-full flex flex-col items-center justify-center bg-blue-500 text-white font-sans py-10">
        <h1 className="text-4xl md:text-6xl text-center mb-4 font-bold">
          About Us
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-4xl leading-relaxed">
          We specialize in creating tailored solutions that help brands grow in the fast-paced digital world.
        </p>
      </section>

      {/* Detailed Information Section */}
      <section className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto bg-white rounded-lg shadow-lg mt-10 p-8 gap-8">
        <div className="flex flex-col items-start max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
            What Sets Us Apart?
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg text-center md:text-left">
            <li><strong>Affordability:</strong> Quality services at a fraction of the cost.</li>
            <li><strong>Customization:</strong> We understand every business is unique, and we create strategies to match your specific needs.</li>
            <li><strong>Full-Spectrum Services:</strong> From web design to analytics, we offer comprehensive solutions to enhance your online presence.</li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg">Learn More</button>
            <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg">Get In Touch</button>
          </div>
        </div>
        <div className="w-full max-w-md flex justify-center mx-auto">
          <img src="/images/aboutus/main.png" alt="Marketiq Junction" className="w-full rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Save Time & Effort Section */}
      <section className="w-full text-center bg-blue-500 text-white py-10 font-sans">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Save Time & Effort With Digital Inside
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
          Streamline your business operations with smart digital marketing solutions.
        </p>
        <button className="mt-6 bg-white text-black font-bold py-2 px-6 rounded-lg">Contact Us</button>
      </section>

      {/* Mission, Vision, and Goals Section as Clickable Buttons */}
      <section className="max-w-7xl mx-auto text-center mt-10 p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Exclusive Digital Agency To Provide Solution
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Our specialized team focuses on providing personalized strategies that align with your business goals.
        </p>
        <div className="flex flex-col md:flex-row justify-around gap-6">
          {sections.map((section, idx) => (
            <button
              key={idx}
              onClick={() => handleButtonClick(section.name)}
              className={`flex items-center max-w-xs p-6 rounded-lg transition-all duration-300 transform ${
                activeButton === section.name 
                  ? 'bg-gradient-to-r from-blue-400 to-teal-400 text-white'
                  : 'bg-[#E0F7FA] text-black hover:scale-105'
              }`}
            >
              {/* Single Image Box */}
              <div className="border border-blue-500 bg-white w-12 h-12 flex items-center justify-center rounded-full mr-4">
                <img
                  src={
                    idx === 0 || idx === 2 // Use the same image for the first and third boxes
                      ? '/images/aboutus/shared-icon.png'
                      : `/images/aboutus/icon${idx + 1}.png`
                  }
                  alt={`${section.name} Icon`}
                  className="w-6 h-6"
                  onError={(e) => e.target.src = '/images/aboutus/default-icon.png'} // Fallback icon path
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg">{section.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
