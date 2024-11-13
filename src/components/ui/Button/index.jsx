import React from 'react';

const Button = ({ variant = 'filled', children,className }) => {
  return (
    <button
      className={`px-4 py-3 text-xs uppercase font-semibold rounded ${
        variant === 'outline'
          ? 'border border-white text-white bg-transparent '
          : 'linear-gradient text-black '
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
