"use client";

import React from 'react';
import Image from 'next/image';
import LikeDislike from '../interactions/LikeDislike';
import styles from './PremiumAdCard.module.css';

interface PremiumAdCardProps {
  title?: string;
  image?: string;
  likes?: number;
  dislikes?: number;
  onLike?: (e: React.MouseEvent) => void;
  onDislike?: (e: React.MouseEvent) => void;
  onClick?: () => void;
}

const PremiumAdCard: React.FC<PremiumAdCardProps> = ({ 
  title, 
  image, 
  likes = 0, 
  dislikes = 0, 
  onLike, 
  onDislike, 
  onClick 
}) => {
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

      <LikeDislike 
        likes={likes} 
        dislikes={dislikes} 
        onLike={onLike} 
        onDislike={onDislike}
        className={styles.interactionOverlay}
      />
    </div>
  );
};

export default PremiumAdCard;
