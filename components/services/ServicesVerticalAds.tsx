'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LikeDislike from '../ui/interactions/LikeDislike';
import styles from './ServicesVerticalAds.module.css';

const ServicesVerticalAds: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const ads = [
    { id: 1, image: '/images/services/adservice1.png' },
    { id: 2, image: '/images/services/adservice2.png' },
    { id: 3, image: '/images/services/adservice3.png' },
    { id: 4, image: '/images/services/adservice4.png' },
  ];

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
        <div className={styles.carouselWrapper}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={() => scroll('left')}>
            <FaChevronLeft />
          </button>

          <div className={styles.carousel} ref={scrollRef}>
            {ads.map((ad) => (
              <div key={ad.id} className={styles.adCard}>
                <Image 
                  src={ad.image} 
                  alt={`Service Ad ${ad.id}`} 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 1800px) 25vw, 322px"
                />
                <div className={styles.likeDislikeContainer}>
                  <LikeDislike likes={10 + ad.id} dislikes={ad.id} />
                </div>
              </div>
            ))}
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={() => scroll('right')}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesVerticalAds;
