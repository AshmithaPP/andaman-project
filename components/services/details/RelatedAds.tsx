'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './RelatedAds.module.css';

const RELATED_ADS = [
  { id: 1, image: '/images/services/adservice1.png', text: 'Lorem Ipsum is a dummy text used in the 1800’s' },
  { id: 2, image: '/images/services/adservice2.png', text: 'Lorem Ipsum is a dummy text used in the 1800’s' },
  { id: 3, image: '/images/services/adservice3.png', text: 'Lorem Ipsum is a dummy text used in the 1800’s' },
  { id: 4, image: '/images/services/adservice4.png', text: 'Lorem Ipsum is a dummy text used in the 1800’s' },
  { id: 5, image: '/images/services/adservice1.png', text: 'Lorem Ipsum is a dummy text used in the 1800’s' },
  { id: 6, image: '/images/services/adservice2.png', text: 'Lorem Ipsum is a dummy text used in the 1800’s' },
];

const RelatedAds: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Related Ads</h2>
        
        <div className={styles.carouselWrapper}>
          <div className={styles.grid} ref={scrollRef}>
            {RELATED_ADS.map((ad, index) => (
              <div key={`${ad.id}-${index}`} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={ad.image} 
                    alt={`Related Ad ${ad.id}`} 
                    fill 
                    className={styles.image}
                    sizes="(max-width: 1400px) 25vw, 322px"
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.text}>{ad.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedAds;
