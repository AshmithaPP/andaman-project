"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import FilterSortBar from '../ui/inputs/FilterSortBar';
import styles from './EventsHero.module.css';

const EventsHero: React.FC = () => {
  const images = [
    "/images/Events/eventgallery1.png",
    "/images/Events/eventgallery2.png",
    "/images/Events/eventgallery3.png",
    "/images/Events/eventgallery4.png",
    "/images/Events/eventad1.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoSlide = true;
  const autoSlideInterval = 5000;

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 700);
  }, [images.length, isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(interval);
  }, [autoSlide, autoSlideInterval, nextSlide]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.carousel}>
          {/* Sliding strip: all images in a single horizontal row */}
          <div
            className={styles.strip}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <div key={index} className={styles.slide}>
                <Image
                  src={image}
                  alt={`Events Hero Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  className={styles.image}
                  sizes="(max-width: 1440px) 100vw, 1880px"
                />
              </div>
            ))}
          </div>
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

      <div className={styles.filterWrapper}>
        <FilterSortBar />
      </div>
    </section>
  );
};

export default EventsHero;
