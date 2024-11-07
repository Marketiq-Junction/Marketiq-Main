
'use client';
import React, { useState, useEffect } from 'react';

function ValuesCulture() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1); // Fading effect on load
  }, []);

  return (
    <div
      style={{ opacity, transition: 'opacity 1s ease-in-out' }}
      className="bg-gray-50 flex flex-col items-center py-10"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Values and Culture</h1>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Our values define the way we work and interact, both with our clients and within our team.
          They are the foundation of our company culture, guiding us toward delivering exceptional
          results and fostering strong, collaborative relationships.
        </p>
      </div>

      {/* Main Container */}
      <div className="relative flex flex-col items-center">
        {/* Values List */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 max-w-4xl">
          {[
            { title: 'Gratitude', description: 'We lead with an attitude of thankfulness and humility...' },
            { title: 'Respect', description: 'We operate with positive assumptions and give the benefit...' },
            { title: 'Ownership', description: 'We take personal responsibility for our actions and commit...' },
            { title: 'Work Ethic', description: 'We give our best effort and have high-performance...' },
            { title: 'Think Bigger', description: 'We strive for continuous improvement and believe that...' },
            { title: 'Honesty', description: 'We seek to build trust and mutual respect by acting...' },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-lg p-6 flex items-center space-x-4 shadow-md"
            >
              <div className="w-16 h-16 border-4 border-blue-500 rounded-full"></div>
              <div>
                <h3 className="text-lg font-bold">{value.title}</h3>
                <p className="text-sm text-gray-700">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-6 mt-12">
        <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">
          Request A Quote
        </button>
        <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">
          Get In Touch
        </button>
      </div>
    </div>
  );
}

export default ValuesCulture;
