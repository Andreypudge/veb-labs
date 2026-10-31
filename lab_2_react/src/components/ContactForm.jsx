import React, { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: '#fff',
        color: '#333',
        padding: '25px',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '400px',
        position: 'relative'
      }}>
        {}
        <button 
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '15px',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer'
          }}
        >
          &times;
        </button>

        <h3 style={{ marginTop: 0 }}>Зворотний зв'язок</h3>

        {}
        <form action="https://formspree.io/f/xqppyawo" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem' }}>Ім'я:</label>
            <input type="text" name="name" required style={{ width: '100%', padding: '6px' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem' }}>Email:</label>
            <input type="email" name="email" required style={{ width: '100%', padding: '6px' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem' }}>Номер телефону:</label>
            <input type="tel" name="phone" required style={{ width: '100%', padding: '6px' }} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.9rem' }}>Повідомлення:</label>
            <textarea name="message" rows="3" required style={{ width: '100%', padding: '6px' }}></textarea>
          </div>

          <button type="submit" style={{ padding: '8px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;