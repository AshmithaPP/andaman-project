"use client";

import React from 'react';
import Image from 'next/image';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
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
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLike?.(e);
  };

  const handleDislike = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDislike?.(e);
  };

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

      <div className={styles.interactionOverlay}>
        <button className={`${styles.interactionBtn} ${styles.likeBtn}`} onClick={handleLike}>
          <FaRegThumbsUp className={styles.icon} />
          <span className={styles.count}>{likes}</span>
        </button>
        <button className={`${styles.interactionBtn} ${styles.dislikeBtn}`} onClick={handleDislike}>
          <FaRegThumbsDown className={styles.icon} />
          <span className={styles.count}>{dislikes}</span>
        </button>
      </div>
    </div>
  );
};

export default PremiumAdCard;
