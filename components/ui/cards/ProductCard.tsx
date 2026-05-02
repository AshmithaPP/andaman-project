"use client";

import React from 'react';
import Image from 'next/image';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  image?: string;
  title: string;
  location: string;
  price: string;
  tag?: string;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  title, 
  location, 
  price, 
  tag, 
  onClick 
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        {image ? (
          <Image 
            src={image} 
            alt={title} 
            fill 
            sizes="207px"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', backgroundColor: '#f5f5f5' }} />
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.topRow}>
          <span className={styles.location}>{location}</span>
          {tag && <span className={styles.tag}>{tag}</span>}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.price}>{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
