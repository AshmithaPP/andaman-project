import React from 'react';
import Image from 'next/image';
import styles from './ServiceCategoryCard.module.css';

interface ServiceCategoryCardProps {
  title: string;
  image: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  title,
  image,
  isSelected = false,
  onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={styles.image}
          sizes="207px"
        />
        <div className={styles.overlay} />
      </div>
      <div className={`${styles.titleWrapper} ${isSelected ? styles.selected : ''}`}>
        <span className={styles.title}>{title}</span>
      </div>
    </div>
  );
};

export default ServiceCategoryCard;
