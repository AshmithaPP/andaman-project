'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  images: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  images, 
  autoSlide = true, 
  autoSlideInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, nextSlide]);

  if (!images || images.length === 0) return null;

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.carousel}>
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            >
              <Image
                src={image}
                alt={`Andaman Hero Slide ${index + 1}`}
                fill
                priority={index === 0}
                className={styles.image}
                sizes="(max-width: 1440px) 100vw, 1360px"
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
