'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LikeDislike from '../ui/interactions/LikeDislike';
import styles from './ServicesMostBooked.module.css';

const ServicesMostBooked: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const bookedServices = [
    { id: 1, image: '/images/services/bookedS1.png', variant: 'standard' },
    { id: 2, image: '/images/services/bookedS2.png', variant: 'standard' },
    { id: 3, image: '/images/services/bookedS3.png', variant: 'standard' },
    { id: 4, image: '/images/services/bookedS4.png', variant: 'overlay' },
    { id: 5, image: '/images/services/bookedS5.png', variant: 'standard' },
    { id: 6, image: '/images/services/bookedS6.png', variant: 'standard' },
    { id: 7, image: '/images/services/bookedS7.png', variant: 'standard' },
    { id: 8, image: '/images/services/bookedS8.png', variant: 'overlay' },
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
        <h2 className={styles.heading}>Most Booked Services</h2>
        
        <div className={styles.carouselWrapper}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={() => scroll('left')}>
            <FaChevronLeft />
          </button>

          <div className={styles.grid} ref={scrollRef}>
            {bookedServices.map((service) => (
              <div key={service.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={service.image} 
                    alt={`Service ${service.id}`} 
                    fill 
                    className={styles.image}
                    sizes="(max-width: 1800px) 25vw, 322px"
                  />
                  <div className={styles.likeDislikeContainer}>
                    <LikeDislike likes={20 + service.id} dislikes={service.id} />
                  </div>
                  {service.variant === 'overlay' && (
                    <div className={styles.overlayContent}>
                      <p className={styles.overlayText}>Lorem Ipsum is a dummy text used in the 1800’s</p>
                    </div>
                  )}
                </div>
                {service.variant === 'standard' && (
                  <div className={styles.content}>
                    <p className={styles.text}>Lorem Ipsum is a dummy text used in the 1800’s</p>
                  </div>
                )}
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

export default ServicesMostBooked;
