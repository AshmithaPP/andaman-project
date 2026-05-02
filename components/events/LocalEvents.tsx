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

  const gridRef = useRef<HTMLDivElement>(null);

  const scrollGrid = (direction: 'left' | 'right') => {
    if (gridRef.current) {
      const scrollAmount = gridRef.current.clientWidth;
      gridRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header with Filter/Sort */}
        <div className={styles.header}>
          <FilterSortBar className={styles.filterBar} />
        </div>

        {/* Section Title */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Local Events</h2>
        </div>

        {/* Events Grid with Arrows */}
        <div className={styles.grid} ref={gridRef}>
          {events.map((event, index) => (
            <EventCard
              key={index}
              {...event}
              onPrev={() => scrollGrid('left')}
              onNext={() => scrollGrid('right')}
            />
          ))}
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
