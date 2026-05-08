"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './ServiceCard.module.css';

export type CardVariant =
  | 'large-vertical'
  | 'small-vertical'
  | 'medium-horizontal'
  | 'small-horizontal'
  | 'large-horizontal'
  | 'events-horizontal';

interface ServiceCardProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  hoverImage?: string;
  variant: CardVariant;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  image,
  hoverImage,
  variant,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = () => {
    cardRef.current?.classList.add(styles['touch-active']);
  };

  const handleTouchEnd = () => {
    // Small delay so the visual feedback is visible
    setTimeout(() => {
      cardRef.current?.classList.remove(styles['touch-active']);
    }, 300);
  };

  const resolvedHoverImage =
    hoverImage || image.replace(/(\.[^.]+)$/, '-hover$1');

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${styles[variant]} ${id ? styles[id] : ''}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.imageWrapper}>
        {/* Default Image */}
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />

        {/* Hover Image - Must be after default image in DOM */}
        <Image
          src={resolvedHoverImage}
          alt={`${title} hover`}
          fill
          className={styles.hoverImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      </div>
    </div>
  );
};

export default ServiceCard;