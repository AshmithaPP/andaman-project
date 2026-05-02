'use client';

import React, { useRef } from 'react';
import styles from './SportsEvents.module.css';
import EventCard from './EventCard';

const SportsEvents: React.FC = () => {
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

  const sportsEvents = [
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
        <div className={styles.grid} ref={gridRef}>
          {sportsEvents.map((event, index) => (
            <EventCard 
              key={index} 
              {...event} 
              onPrev={() => scrollGrid('left')}
              onNext={() => scrollGrid('right')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsEvents;
