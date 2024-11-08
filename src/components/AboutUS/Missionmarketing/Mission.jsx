'use client';
import React, { useState, useEffect } from 'react';

function Mission() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1); // Fading effect on load
  }, []);

  return (
    <div style={{ opacity }}>
      {/* Mission Section */}
      <section 
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: '#FFFFFF',
          border: '1px solid black',
          maxWidth: '1200px',
          margin: '20px auto',
        }}
      >
        <div style={{
          flex: 1,
          paddingRight: '20px',
          textAlign: 'left',
        }}>
          <h2 style={{
            fontSize: '3vw',
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: '10px',
          }}>
            Our mission at Marketiq Junction
          </h2>
          <p style={{
            fontSize: '1.2vw',
            lineHeight: '1.6',
            color: '#555555',
          }}>
            is to empower businesses of all sizes by providing affordable and effective digital marketing solutions. We strive to help our clients enhance their online presence, connect with their target audience, and achieve measurable growth through tailored strategies in SEO, web design, social media management, and more.
            <br/><br />
            We are committed to helping businesses adapt to the ever-evolving digital landscape by leveraging cutting-edge strategies that are results-focused, scalable, and customer-centric.
          </p>
        </div>

        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img 
            src="/images/aboutus/presentation.png"  
            alt="Our Mission"
            style={{ 
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Mission;
