'use client';
import React, { useState, useEffect } from 'react';

function Mission() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1); 
  }, []);

  return (
    <div style={{ opacity }}>
      {/* Mission Section */}
      <section 
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '40px',
          backgroundColor: '#FFFFFF',
          border: '1px solid black',
          maxWidth: '1200px',
          margin: '40px auto',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '1px',
        }}
      >
        <div style={{
          flex: 1,
          paddingRight: '20px',
          textAlign: 'left',
        }}>
          <h2 style={{
            fontSize: '2.5vw',
            fontWeight: '700',
            color: '#222222',
            marginBottom: '16px',
          }}>
            Our mission at Marketiq Junction
          </h2>
          <p style={{
            fontSize: '1.1vw',
            lineHeight: '1.8',
            color: '#333333',
          }}>
            is to empower businesses of all sizes by providing 
            <span style={{ fontWeight: 'bold', color: '#3A3A3A' }}> affordable and effective digital marketing solutions.</span> 
            We strive to help our clients enhance their online presence, connect with their target audience, and achieve measurable growth through tailored strategies in SEO, web design, social media management, and more.
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
            src="/images/aboutus/presenation.png"  
            alt="Our Mission"
            style={{ 
              width: '100%',
              maxWidth: '450px',
              height: 'auto',
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Mission;
