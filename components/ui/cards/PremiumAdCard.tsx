"use client";

import React from 'react';
import Image from 'next/image';
import styles from './PremiumAdCard.module.css';

interface PremiumAdCardProps {
  title?: string;
  image?: string;
  onClick?: () => void;
}

const PremiumAdCard: React.FC<PremiumAdCardProps> = ({ title, image, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        {image ? (
          <Image 
            src={image} 
            alt={title || "Premium Ad"} 
            fill 
            sizes="322px"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className={styles.placeholder}>
            {title || "Premium Ad Placeholder"}
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumAdCard;
