import React from 'react';

const Button = ({ label, onClick, type = 'default', disabled = false }) => {
  return (
    <button 
      className={`button ${type}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;