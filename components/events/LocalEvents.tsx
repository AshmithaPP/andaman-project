'use client';

import React, { useRef } from 'react';
import styles from './LocalEvents.module.css';
import EventCard from '@/components/events/EventCard';
import FilterSortBar from '@/components/ui/inputs/FilterSortBar';

const LocalEvents: React.FC = () => {
  // Mock data for 12 events
  const events = Array(12).fill({
    image: '/images/Events/events1.jpg', 
    title: 'The Blue Lagoon',
    location: 'Port Blair',
    host: 'Anish',
    rating: 4.4,
  });

  const [activeIndex, setActiveIndex] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

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

  React.useEffect(() => {
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
    }, 4000); // Slower interval for better engagement

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <FilterSortBar className={styles.filterBar} />
        </div>
        
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Local Events</h2>
        </div>
        
        <div className={styles.carouselContainer}>
          <div 
            className={styles.grid} 
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {events.map((event, index) => (
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

        {/* Pagination */}
        <div className={styles.pagination}>
          <span className={`${styles.page} ${styles.active}`}>1</span>
          <span className={styles.page}>2</span>
          <span className={styles.page}>3</span>
          <span className={styles.page}>4</span>
          <span className={styles.ellipsis}>......</span>
          <span className={styles.page}>10</span>
        </div>
      </div>
    </section>
  );
};

export default LocalEvents;
