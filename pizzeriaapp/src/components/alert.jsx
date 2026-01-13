import React from 'react';

const Alert = ({ item, text }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
      />
      <div>
        <div style={{ fontWeight: 'bold' }}>{text}</div>
        <div style={{ fontSize: '12px', opacity: 0.8 }}>{item.name}</div>
      </div>
    </div>
  );
};

export default Alert;
