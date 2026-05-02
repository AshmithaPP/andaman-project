// components/ui/cards/NewsCard.tsx
import React from 'react';
import Image from 'next/image';
import styles from './NewsCard.module.css';

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
  variant?: 'image-top' | 'image-bottom';
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
  variant = 'image-top',
}) => {
  return (
    <div className={styles.card}>

      {/* Image-top variant: image first, then text */}
      {variant === 'image-top' && (
        <>
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={title}
              fill
              className={styles.cardImage}
            />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        </>
      )}

      {/* Image-bottom variant: text first, then image */}
      {variant === 'image-bottom' && (
        <>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={title}
              fill
              className={styles.cardImage}
            />
          </div>
        </>
      )}

    </div>
  );
};

export default NewsCard;