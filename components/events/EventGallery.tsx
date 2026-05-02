"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './EventGallery.module.css';

const EventGallery: React.FC = () => {
  const images = [
    '/images/Events/eventgallery1.png',
    '/images/Events/eventgallery2.png',
    '/images/Events/eventgallery3.png',
    '/images/Events/eventgallery4.png',
    '/images/Events/eventdetails1.png',
    '/images/Events/eventdetails2.png',
    '/images/Events/eventdetails3.png',
    '/images/Events/eventad1.png',
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.carouselWrapper}>
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={() => scroll('left')}
            aria-label="Previous images"
          >
            <FaChevronLeft />
          </button>

          <div className={styles.carousel} ref={scrollRef}>
            {images.map((src, index) => (
              <div key={index} className={styles.imageWrapper}>
                <Image 
                  src={src} 
                  alt={`Gallery Image ${index + 1}`} 
                  width={322} 
                  height={321} 
                  className={styles.image}
                  priority={index < 4}
                />
              </div>
            ))}
          </div>

          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={() => scroll('right')}
            aria-label="Next images"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
