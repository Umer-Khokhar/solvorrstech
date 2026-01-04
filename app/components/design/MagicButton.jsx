import React from 'react';

const MagicButton = ({ 
  children = "Credits", 
  icon = null,
  onClick = () => {},
  className = "" 
}) => (
  <>
    
    <button
      type="button"
      className={`animated-button ${className}`}
      onClick={onClick}
    >
      <span className="fold"></span>
      <span className="inner">
        {children}
      </span>
    </button>
  </>
);

export default MagicButton