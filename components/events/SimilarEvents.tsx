'use client';

import React, { useRef } from 'react';
import styles from './SimilarEvents.module.css';
import EventCard from './EventCard';

const SimilarEvents: React.FC = () => {
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

  const similarEvents = [
    // ... same data
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
      <h2 className={styles.title}>Similar events to Explore</h2>
      <div className={styles.grid} ref={gridRef}>
        {similarEvents.map((event, index) => (
          <EventCard 
            key={index} 
            {...event} 
            onPrev={() => scrollGrid('left')}
            onNext={() => scrollGrid('right')}
          />
        ))}
      </div>
    </section>
  );
};

export default SimilarEvents;
