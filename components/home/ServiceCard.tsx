'use client';

import React from 'react';
import Link from 'next/link';
import styles from './ServiceCard.module.css';

export type CardVariant =
  | 'large-vertical'
  | 'small-vertical'
  | 'medium-horizontal'
  | 'small-horizontal'
  | 'large-horizontal'
  | 'events-horizontal';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  hoverImage?: string;
  variant: CardVariant;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  image,
  hoverImage,
  variant,
  href,
}) => {
  const resolvedHoverImage =
    hoverImage ?? image.replace(/(\.[^.]+)$/, '-hover$1');

  return (
    <Link
      href={href}
      className={`${styles.card} ${styles[variant]}`}
      data-card-id={id}
      aria-label={title}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.imageWrapper}>
        {/* LAYER 1 — Hover blob: z-index 1, opacity 0 → 1 on card hover */}
        <img
          src={resolvedHoverImage}
          alt=""
          aria-hidden="true"
          className={`${styles.img} ${styles.imgBlob}`}
          draggable={false}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        {/* LAYER 2 — Default illustration: z-index 2, always visible */}
        <img
          src={image}
          alt={title}
          className={`${styles.img} ${styles.imgDefault}`}
          draggable={false}
        />
      </div>
    </Link>
  );
};

export default ServiceCard;