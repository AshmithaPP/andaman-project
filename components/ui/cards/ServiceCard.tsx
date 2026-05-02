import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ServiceCard.module.css';

export type CardVariant = 'large-vertical' | 'small-vertical' | 'medium-horizontal' | 'small-horizontal' | 'large-horizontal' | 'events-horizontal';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  variant: CardVariant;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image, variant, href }) => {
  return (
    <Link href={href} className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.imageWrapper}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        />
      </div>
    </Link>
  );
};

export default ServiceCard;
