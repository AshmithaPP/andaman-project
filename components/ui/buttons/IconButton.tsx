import React from 'react';
import styles from './IconButton.module.css';

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, className = '', ariaLabel }) => {
  return (
    <button 
      className={`${styles.iconButton} ${className}`} 
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default IconButton;
