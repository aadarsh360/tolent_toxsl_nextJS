import Link from 'next/link';
import React from 'react';

const PhoneLogo = () => {
  const phoneNumber = '1234567890'; // Replace with your phone number
  const telLink = `tel:${phoneNumber}`; // Tel link to dial directly

  return (
    <div>
      <Link
        // href={telLink}
        href="/pages/contact-us"

        style={{
          position: 'fixed',
          left: '0px', // Adjust for positioning
          top: '44%',
          transform: 'translateY(-50%)',
          zIndex: 9999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px', // Square size
          height: '40px',
          backgroundColor: '#008000', // Blue color for phone icon
          borderRadius: '10px', // Square border
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Phone_communication_icon.png?20200414205120"
          alt="Phone"
          className='text-white vibration-animation'
          style={{
            width: '40px',
            height: '40px',
          }}
        />
      </Link>
    </div>
  );
};

export default PhoneLogo;
