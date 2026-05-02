'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className = '' }) => {
  const router = useRouter();

  return (
    <button 
      className={`${styles.backButton} ${className}`} 
      onClick={() => router.back()}
      aria-label="Go back"
    >
      <svg 
        width="7.13" 
        height="12.97" 
        viewBox="0 0 8 13" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
      >
        <path 
          d="M7 1L1 6.5L7 12" 
          stroke="black" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.text}>Back</span>
    </button>
  );
};

export default BackButton;
