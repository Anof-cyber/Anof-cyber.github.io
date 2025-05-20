import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'outline' | 'accent';
  size?: 'small' | 'medium' | 'large';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'medium',
  href
}) => {

  const buttonClass = `custom-button ${variant === 'outline' ? 'outline' : ''} ${variant === 'accent' ? 'accent' : ''} ${size === 'large' ? 'large' : ''} ${size === 'small' ? 'small' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {label}
      </a>
    );
  }

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;