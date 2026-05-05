"use client";

import React from 'react';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';
import styles from './LikeDislike.module.css';

interface LikeDislikeProps {
  likes?: number;
  dislikes?: number;
  onLike?: (e: React.MouseEvent) => void;
  onDislike?: (e: React.MouseEvent) => void;
  className?: string;
}

const LikeDislike: React.FC<LikeDislikeProps> = ({ 
  likes = 0, 
  dislikes = 0, 
  onLike, 
  onDislike,
  className = ""
}) => {
  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault(); // Prevent Link navigation if inside a Link
    onLike?.(e);
  };

  const handleDislike = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault(); // Prevent Link navigation if inside a Link
    onDislike?.(e);
  };

  return (
    <div className={`${styles.interactionOverlay} ${className}`}>
      <button className={`${styles.interactionBtn} ${styles.likeBtn}`} onClick={handleLike}>
        <FaRegThumbsUp className={styles.icon} />
        <span className={styles.count}>{likes}</span>
      </button>
      <button className={`${styles.interactionBtn} ${styles.dislikeBtn}`} onClick={handleDislike}>
        <FaRegThumbsDown className={styles.icon} />
        <span className={styles.count}>{dislikes}</span>
      </button>
    </div>
  );
};

export default LikeDislike;
