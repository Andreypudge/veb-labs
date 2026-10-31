import React, { useState, useEffect } from 'react';

function Footer() {
  const [systemInfo, setSystemInfo] = useState('');

  useEffect(() => {
    const browserData = `Платформа: ${navigator.platform} | Браузер: ${navigator.userAgent}`;

    localStorage.setItem('clientSystemInfo', browserData);

    const savedData = localStorage.getItem('clientSystemInfo');

    setSystemInfo(savedData);
  }, []);

  return (
    <footer style={{ padding: '20px', borderTop: '1px solid #ccc', marginTop: '40px' }}>
      <p>&copy; 2026 Андрій</p>
      {}
      <p style={{ fontSize: '0.8rem', color: '#777' }}>
        <strong>Системна інформація:</strong> {systemInfo}
      </p>
    </footer>
  );
}

export default Footer;