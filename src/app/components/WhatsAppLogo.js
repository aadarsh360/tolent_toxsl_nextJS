import React from 'react';

const WhatsAppLogo = () => {
  const phoneNumber = '+919991896640'; // Your WhatsApp number
  const message = 'Hi there! I would like to learn more.'; // Pre-filled message

  return (
    <div>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          left: '0px', // Adjust as needed
          top: '50%',
          transform: 'translateY(-50%)',
          // zIndex: 9999,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px', // Square size
          height: '40px',
          backgroundColor: '#25D366', // WhatsApp green
          borderRadius: '10px', // Square border
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className='vibration-animation'
          style={{
            width: '30px',
            height: '30px',
          }}
        />
      </a>
    </div>
  );
};

export default WhatsAppLogo;
