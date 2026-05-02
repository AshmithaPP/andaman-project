import React from 'react';
import GalleryGrid from '../ui/gallery/GalleryGrid';
import Button from '../ui/buttons/Button';
import styles from './ResortCard.module.css';

interface ResortCardProps {
  title: string;
  description: string;
  images: string[];
}

const ResortCard: React.FC<ResortCardProps> = ({ title, description, images }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.gallerySection}>
        <GalleryGrid images={images} />
      </div>
      <div className={styles.detailsSection}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
        <div className={styles.ctaWrapper}>
          <Button label="Explore More" variant="secondary" className={styles.ctaButton} />
        </div>
      </div>
    </div>
  );
};

export default ResortCard;
