import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`custom-button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
