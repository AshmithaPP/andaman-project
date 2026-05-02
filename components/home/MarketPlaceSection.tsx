"use client";

import React from 'react';
import Image from 'next/image';
import Button from '../ui/buttons/Button';
import ProductCard from '../ui/cards/ProductCard';
import styles from './MarketPlaceSection.module.css';

const MarketPlaceSection: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "Mackie Studio 8inch Monitors",
      location: "Port Blair",
      price: "$16,000",
      image: "/images/ad_headphones_modern_1777283971546.png" // Using existing image as placeholder
    },
    {
      id: 2,
      title: "Mackie Studio Monitors",
      location: "Port Blair",
      price: "$16,000",
      tag: "Newest",
      image: "/images/ad_watch_luxury_1777283958300.png"
    },
    {
      id: 3,
      title: "Mackie Studio Monitors",
      location: "Port Blair",
      price: "$16,000",
      tag: "Newest",
      image: "/images/ad_hiring_social_media_1777283990329.png"
    },
    {
      id: 4,
      title: "Mackie Studio Monitors",
      location: "Port Blair",
      price: "$16,000",
      tag: "Newest",
      image: "/images/ad_mega_discount_purple_1777284005591.png"
    },
    {
      id: 5,
      title: "Mackie Studio Monitors",
      location: "Port Blair",
      price: "$16,000",
      tag: "Newest",
      image: "/images/ad_cyber_monday_sale_1777284020030.png"
    },
    {
      id: 6,
      title: "Mackie Studio Monitors",
      location: "Port Blair",
      price: "$16,000",
      tag: "Newest",
      image: "/images/ad_hiring_business_dev_1777284034319.png"
    },
    {
      id: 7,
      title: "Mackie Studio Monitors",
      location: "Port Blair",
      price: "$16,000",
      tag: "Newest",
      image: "/images/ad_premium_cold_coffee_1777284050349.png"
    },
    {
      id: 8,
      title: "Mackie Studio Monitors",
      location: "Port Blair",
      price: "$16,000",
      tag: "Newest",
      image: "/images/ad_design_tools_mountain_app_1777284065109.png"
    }
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.mainLayout}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <div className={styles.contentBlock}>
              <h2 className={styles.heading}>Explore Andaman's Market Place</h2>
              <p className={styles.description}>
                Lorem Ipsum is a dummy text used in<br />
                the typesetting industry
              </p>
              <Button label="Explore More" className={styles.button} />
            </div>
            
            <div className={styles.postersRow}>
              <div className={styles.poster}>
                <Image 
                  src="/images/ad_cyber_monday_sale_1777284020030.png" 
                  alt="Poster 1" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.poster}>
                <Image 
                  src="/images/ad_mega_discount_purple_1777284005591.png" 
                  alt="Poster 2" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.productGrid}>
              {products.map((product) => (
                <ProductCard 
                  key={product.id}
                  title={product.title}
                  location={product.location}
                  price={product.price}
                  image={product.image}
                  tag={product.tag}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPlaceSection;
