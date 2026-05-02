'use client';

import React, { useRef, useState, useEffect } from 'react';
import styles from './SimilarEvents.module.css';
import EventCard from '@/components/events/EventCard';

const SimilarEvents: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (offsetWidth * 0.85));
    if (index !== activeIndex) setActiveIndex(index);
  };

  const scrollGrid = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.85;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || typeof window === 'undefined' || window.innerWidth > 650) return;

    const interval = setInterval(() => {
      const { scrollLeft, offsetWidth, scrollWidth } = scrollContainer;
      const maxScroll = scrollWidth - offsetWidth;
      
      if (scrollLeft >= maxScroll - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({ left: offsetWidth * 0.85, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const similarEvents = [
    {
      image: '/images/Events/events1.jpg',
      title: 'The Blue Lagoon',
      location: 'Port Blair',
      host: 'Anish',
      rating: 4.4
    },
    {
      image: '/images/Events/events1.jpg',
      title: 'The Blue Lagoon',
      location: 'Port Blair',
      host: 'Anish',
      rating: 4.4
    },
    {
      image: '/images/Events/events1.jpg',
      title: 'The Blue Lagoon',
      location: 'Port Blair',
      host: 'Anish',
      rating: 4.4
    },
    {
      image: '/images/Events/events1.jpg',
      title: 'The Blue Lagoon',
      location: 'Port Blair',
      host: 'Anish',
      rating: 4.4
    },
    {
      image: '/images/Events/events1.jpg',
      title: 'The Blue Lagoon',
      location: 'Port Blair',
      host: 'Anish',
      rating: 4.4
    },
    {
      image: '/images/Events/events1.jpg',
      title: 'The Blue Lagoon',
      location: 'Port Blair',
      host: 'Anish',
      rating: 4.4
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Similar events to Explore</h2>
        </div>
        
        <div className={styles.carouselContainer}>
          <div 
            className={styles.grid} 
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {similarEvents.map((event, index) => (
              <div 
                key={index} 
                className={`${styles.cardWrapper} ${activeIndex === index ? styles.activeCard : ''}`}
              >
                <EventCard 
                  {...event} 
                  onPrev={() => scrollGrid('left')}
                  onNext={() => scrollGrid('right')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarEvents;

