
'use client';
import React, { useState, useEffect } from 'react';

function About() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <div>
      {/* About Us Section */}
      <section
        className="about-us-container"
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: opacity,
          background: '#4A9BD3',
          fontFamily: "'Montserrat Alternates', sans-serif",
          color: '#333333',
          transition: 'opacity 0.5s ease-in-out',
          padding: '20px',
        }}
      >
        <h1 style={{ fontSize: '6vw', margin: '10px 0', color: '#ffffff', textAlign: 'center' }}>
          About Us
        </h1>
        <p style={{
          textAlign: 'center',
          fontSize: '2.5vw',
          maxWidth: '90%',
          lineHeight: '1.5',
          color: '#ffffff',
        }}>
          We specialize in creating tailored solutions that help brands grow in the fast-paced digital world.
        </p>
      </section>

      {/* Detailed Information Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '1200px',
          width: '100%',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          marginTop: '40px',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          width: '100%',
          gap: '20px',
          flexWrap: 'wrap',  // Wraps content on smaller screens
        }}>
          {/* Text Content */}
          <div style={{
            width: '100%',
            maxWidth: '600px',  // Restrict width on larger screens
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '20px', // Add space below in mobile view
          }}>
            <div style={{ fontSize: '4.5vw', fontWeight: 'bold', color: '#333333', textAlign: 'center' }}>
              DRIVING A BETTER WAY OF DOING MARKETING
            </div>
            <div style={{
              fontSize: '2.5vw',
              fontWeight: '300',
              color: '#333333',
              lineHeight: '1.6',
              marginTop: '10px',
              textAlign: 'center',
            }}>
              <p>
                Marketiq Junction is your trusted digital marketing partner. We specialize in creating tailored solutions
                that help brands grow in the fast-paced digital world.
              </p>
              <p style={{ fontWeight: 'bold' }}>What Sets Us Apart?</p>
              <ul style={{ paddingLeft: '20px', textAlign: 'left' }}>
                <li><strong>Affordability:</strong> Quality services at a fraction of the cost.</li>
                <li><strong>Customization:</strong> Strategies tailored to meet your unique business needs.</li>
                <li><strong>Full-Spectrum Services:</strong> Comprehensive solutions to enhance your online presence.</li>
              </ul>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <button className="text-white font-bold w-40 p-2 m-2 bg-black">Learn more</button>
              <button className="text-white font-bold w-40 p-2 m-2 bg-black">Get in touch</button>
            </div>
          </div>
          {/* Image Section */}
          <div style={{
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <img src="/images/aboutus/main.png" alt="Marketiq Junction" style={{
              width: '100%',
              maxWidth: '500px',
              height: 'auto',
              borderRadius: '8px',
            }} />
          </div>
        </div>
      </section>

      {/* Save Time & Effort Section */}
      <section
        style={{
          width: '100%',
          textAlign: 'center',
          background: '#4A9BD3',
          color: '#333333',
          padding: '20px',
          fontFamily: "'Montserrat Alternates', sans-serif",
          color: '#ffffff',
        }}
      >
        <h1 style={{ fontSize: '6vw', margin: '10px 0' }}>
          Save Time & Effort With the Digital Inside
        </h1>
        <p style={{
          fontSize: '2.5vw',
          maxWidth: '90%',
          margin: '0 auto',
        }}>
          Streamline your business operations with smart digital marketing solutions.
        </p>
        <button className="text-black font-bold w-40 p-2 m-2 bg-white" style={{ marginTop: '20px' }}>Contact Us</button>
      </section>

      {/* Mission, Vision, and Goals Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '40px auto',
        textAlign: 'center',
      }}>
        <div style={{
          fontSize: '5vw',
          fontWeight: 'bold',
          color: '#333333',
          marginBottom: '20px',
        }}>
          Exclusive Digital Agency To Provide Solution
        </div>
        <p style={{
          fontSize: '2.5vw',
          maxWidth: '90%',
          margin: '0 auto',
          lineHeight: '1.5',
        }}>
          Our specialized team focuses on providing personalized strategies that align with your business goals.
        </p>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',  // Wraps boxes on smaller screens
          justifyContent: 'space-around',
          marginTop: '20px',
        }}>
          {/* Mission, Vision, and Goals Boxes */}
          {['Mission', 'Vision', 'Goals'].map((item, idx) => (
            <div key={idx} style={{
              background: '#50C3C687',
              padding: '20px',
              width: '300px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              margin: '10px 0',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '10px',
              }}>
                <img src={`/images/aboutus/icon${idx+1}.png`} alt={`${item} Icon`} style={{ width: '24px', height: '24px' }} />
              </div>
              <div style={{ textAlign: 'left', fontWeight: 'bold' }}>
                <p>{item} of Our</p>
                <p>Company</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;



     