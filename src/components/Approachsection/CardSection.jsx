'use client';
import React from 'react';

function CardSection() {
  const cards = [
    {
      title: 'OPTIMIZE',
      imageSrc: '/images/icons/optimize-icon.png', 
      description: 'Maximize your online visibility with tailored strategies that enhance your website and content. Our optimization techniques ensure you reach the right audience, driving engagement and conversions effectively.'
    },
    {
      title: 'GENERATE',
      imageSrc: '/images/icons/generate-icon.png', 
      description: 'Drive targeted traffic to your business with our innovative lead generation strategies. We focus on creating compelling content and utilizing effective channels to attract and convert potential customers into loyal clients.'
    },
    {
      title: 'GROW',
      imageSrc: '/images/icons/grow-icon.png',
      description: 'Unlock new opportunities for expansion through our data-driven strategies and dedicated support. You’ll experience sustainable growth as we help you navigate the ever-evolving digital landscape.'
    }
  ];

  return (
    <div className="relative max-w-screen-lg mx-auto my-20">
      {/* First Card */}
      <div className="absolute top-0 left-1/2 transform -translate-x-[60%] translate-y-8 bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200 w-72">
        <img src={cards[0].imageSrc} alt={cards[0].title} className="w-12 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{cards[0].title}</h3>
        <p className="text-gray-600">{cards[0].description}</p>
      </div>

      {/* Second Card */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200 w-72">
        <img src={cards[1].imageSrc} alt={cards[1].title} className="w-12 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{cards[1].title}</h3>
        <p className="text-gray-600">{cards[1].description}</p>
      </div>

      {/* Third Card */}
      <div className="absolute top-1/3 left-1/2 transform translate-x-[30%] translate-y-16 bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200 w-72">
        <img src={cards[2].imageSrc} alt={cards[2].title} className="w-12 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{cards[2].title}</h3>
        <p className="text-gray-600">{cards[2].description}</p>
      </div>
    </div>
  );
}

export default CardSection;
