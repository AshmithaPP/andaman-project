import React from 'react';
import Image from 'next/image';
import styles from './PosterCard.module.css';

interface PosterCardProps {
  imageSrc?: string;
  alt: string;
  onClick?: () => void;
}

const PosterCard: React.FC<PosterCardProps> = ({ imageSrc, alt, onClick }) => {
  return (
    <div className={styles.poster} onClick={onClick}>
      {imageSrc ? (
        <Image 
          src={imageSrc} 
          alt={alt} 
          fill 
          className={styles.posterImage}
        />
      ) : (
        <div className={styles.placeholder}>
          {/* Default placeholder if no image is provided */}
        </div>
      )}
    </div>
  );
};

export default PosterCard;
