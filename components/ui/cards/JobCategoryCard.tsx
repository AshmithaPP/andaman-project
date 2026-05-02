import React from 'react';
import styles from './JobCategoryCard.module.css';
import Image from 'next/image';

interface JobCategoryCardProps {
  title: string;
  description: string;
  variant?: 'primary' | 'default';
  icon?: React.ReactNode;
  iconSrc?: string;
  onClick?: () => void;
}

const JobCategoryCard: React.FC<JobCategoryCardProps> = ({
  title,
  description,
  icon,
  iconSrc,
  variant = 'default',
  onClick,
}) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`} onClick={onClick}>
      <div className={styles.iconWrapper}>
        {iconSrc ? (
          <Image src={iconSrc} alt={title} fill style={{ objectFit: 'contain' }} />
        ) : (
          icon
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default JobCategoryCard;
