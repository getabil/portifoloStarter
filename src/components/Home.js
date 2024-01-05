// src/components/HomePage.js
import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        background: 'linear-gradient(to right, #141e30, #243b55)',
        color: '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to My Portfolio</h1>
      <p style={{ fontSize: '1.5rem' }}>Hi, I'm Getabil Mengistu, a passionate developer.</p>
      {/* Add more content or links as needed */}
    </motion.div>
  );
};

export default HomePage;
