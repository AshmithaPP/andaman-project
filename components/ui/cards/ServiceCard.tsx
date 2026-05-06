import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ServiceCard.module.css';

export type CardVariant = 'large-vertical' | 'small-vertical' | 'medium-horizontal' | 'small-horizontal' | 'large-horizontal' | 'events-horizontal';

interface ServiceCardProps {
  id?: string;
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
  return (
    <Link
      href={href}
      className={`${styles.card} ${styles[variant]} ${id ? styles[id] : ''}`}
      prefetch={false}
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
    src={hoverImage || image}
    alt={`${title} hover`}
    fill
    className={styles.hoverImage}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
  />
</div>
    </Link>
  );
};

export default ServiceCard;