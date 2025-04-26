'use client';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';


const Card = () => {
  const [flipped, setFlipped] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          backgroundColor: darkMode ? '#374151' : '#e5e7eb',
          color: darkMode ? '#fff' : '#000',
          padding: '0.5rem 1rem',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s, color 0.3s',
        }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <div style={
      {
    perspective: '1000px',
    width: '20rem',
    height: '24rem',
    margin: '7rem auto',
    backgroundColor: darkMode ? '#111827' : '#ffffff', 
    color: darkMode ? '#ffffff' : '#000000',            
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.5)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'background-color 0.5s, color 0.5s',
  }}>
        <motion.div
           style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transformStyle: 'preserve-3d',
          }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Front */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src="/profile.jpeg"
              alt="Profile"
              style={{
                width: '6rem',
                height: '6rem',
                borderRadius: '50%',
                marginBottom: '1rem',
              }}
            />
            <h2 style={{ fontSize: '2.25rem', fontWeight: '600', fontFamily: 'sans' }}>Misbah Shakeel</h2>
            <p style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>Frontend Developer</p>
            <p style={{
              marginTop: '0.5rem',
              fontSize: '0.875rem',
              textAlign: 'center',
              padding: '0 1rem',
            }}>
              Creating interactive experiences.<br/>
              Passionate about web development and design.
            </p>
            <button
              onClick={() => setFlipped(true)}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '0.25rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Flip Card
            </button>
          </div>

          {/* Back */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: darkMode ? '#1f2937' : '#ffffff',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            color: darkMode ? '#ffffff' : '#000000',
          }}>
            <p style={{ textAlign: 'center', padding: '0 1rem' }}>
              Short bio or about me goes here.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem',
            }}>
              <a href="https://github.com/MisbahShakeel" target="_blank" rel="noopener noreferrer">
                <FaGithub style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
              </a>
              <a href="https://www.linkedin.com/in/misbah-shakeel-113ab7277/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
              </a>
              <a href="https://static-resume-zeta-ivory.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FaGlobe style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
              </a>
            </div>

            <button
              onClick={() => router.push('/contact')} // 🔥 Correct page link
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#10b981',
                color: 'white',
                borderRadius: '0.25rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Send Message
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Card;
