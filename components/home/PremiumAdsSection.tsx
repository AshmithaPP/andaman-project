"use client";

import React from 'react';
import PremiumAdCard from '../ui/cards/PremiumAdCard';
import styles from './PremiumAdsSection.module.css';

const PremiumAdsSection: React.FC = () => {
  const row1Cards = [
    { id: 1, image: "/images/ad_watch_luxury_1777283958300.png" },
    { id: 2, image: "/images/premiumAds/premiumads1.png" },
    { id: 3, image: "/images/premiumAds/premiumads2.png" },
    { id: 11, image: "/images/premiumAds/premiumads3.png" },
    { id: 10, image: "/images/premiumAds/premiumads4.png" },
  ];

  const row2Cards = [
    { id: 4, image: "/images/premiumAds/premiumads5.png" },
    { id: 5, image: "/images/premiumAds/premiumads6.png" },
    { id: 6, image: "/images/ad_design_tools_mountain_app_1777284065109.png" },
    { id: 13, image: "/images/ad_pizza_deal_limited_time_1777284081712.png" },
    { id: 12, image: "/images/ad_hiring_business_dev_1777284034319.png" },
  ];

  // Double the cards for infinite scroll effect
  const extendedRow1 = [...row1Cards, ...row1Cards];
  const extendedRow2 = [...row2Cards, ...row2Cards];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Premium Ads Section</h2>
        
        <div className={styles.gridContainer}>
          {/* Gradient Overlays */}
          <div className={styles.overlayLeft} />
          <div className={styles.overlayRight} />

          {/* Row 1 */}
          <div className={styles.rowWrapper}>
            <div className={`${styles.row} ${styles.row1}`}>
              {extendedRow1.map((card, index) => (
                <div key={`${card.id}-${index}`} className={styles.cardWrapper}>
                  <PremiumAdCard 
                    image={card.image} 
                    onClick={() => console.log(`Clicked card ${card.id}`)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className={styles.rowWrapper}>
            <div className={`${styles.row} ${styles.row2}`}>
              {extendedRow2.map((card, index) => (
                <div key={`${card.id}-${index}`} className={styles.cardWrapper}>
                  <PremiumAdCard 
                    image={card.image} 
                    onClick={() => console.log(`Clicked card ${card.id}`)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumAdsSection;
