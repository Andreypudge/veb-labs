import React, { useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const pageStyles = {
    minHeight: '100vh',
    backgroundColor: theme === 'light' ? '#f4f6f8' : '#121212',
    color: theme === 'light' ? '#212529' : '#e0e0e0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    transition: 'background-color 0.25s ease, color 0.25s ease',
    padding: '40px 20px',
    boxSizing: 'border-box'
  };

  const containerStyles = {
    maxWidth: '850px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            onClick={toggleTheme}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              borderRadius: '20px',
              border: theme === 'light' ? '1px solid #d0d7de' : '1px solid #444',
              backgroundColor: theme === 'light' ? '#ffffff' : '#222222',
              color: theme === 'light' ? '#333' : '#fff',
              fontSize: '0.9rem',
              fontWeight: 500,
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
          </button>
        </div>

        <Header />
        
        <main style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <Experience />
          <Education />
          <Reviews theme={theme} />
        </main>

        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;