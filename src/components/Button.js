import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '' }) => {
  return (
    <button
      type="button"
      className={`
        ${className}
        rounded
        text-white
        transition-colors
        duration-200
        transform
        bg-primary-300
        rounded-md
        hover:bg-primary-400
        focus:outline-none
        focus:bg-primary-400
        text-white
    `}
    >
      {children}
    </button>
  );
};

export default Button;
