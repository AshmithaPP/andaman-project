import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'blue';
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  className = '', 
  type = 'button',
  variant = 'primary'
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
