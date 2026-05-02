import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  padding, 
  borderRadius,
  backgroundColor 
}) => {
  return (
    <div 
      className={`${styles.card} ${className}`}
      style={{ 
        padding, 
        borderRadius,
        backgroundColor 
      }}
    >
      {children}
    </div>
  );
};

export default Card;
