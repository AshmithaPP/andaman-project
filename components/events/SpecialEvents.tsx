'use client';

import React from 'react';
import styles from './SpecialEvents.module.css'; // Reusing styles if they are identical, or I'll copy them to SpecialEvents.module.css
import EventCard from '@/components/events/EventCard';

const SpecialEvents: React.FC = () => {
  const specialEvents = [
    {
      image: '/images/Events/events1.jpg',
      title: 'Sunburn Dj Event',
      location: 'Port Blair',
      host: 'Anish',
      rating: 4.8,
    },
    {
      image: '/images/Events/specialevent2.jpg',
      title: 'Beach Party',
      location: 'Havelock Island',
      host: 'Priya',
      rating: 4.6,
    },
    {
      image: '/images/Events/specialevent3.jpg',
      title: 'Night Music Festival',
      location: 'Port Blair',
      host: 'Rahul',
      rating: 4.5,
    },
    {
      image: '/images/Events/specialevent4.jpg',
      title: 'Cultural Dance Night',
      location: 'Neil Island',
      host: 'Sita',
      rating: 4.7,
    },
    {
      image: '/images/Events/specialevent5.jpg',
      title: 'Food & Wine Fest',
      location: 'Port Blair',
      host: 'Vikram',
      rating: 4.4,
    },
    {
      image: '/images/Events/specialevent6.jpg',
      title: 'Live Band Performance',
      location: 'Havelock Island',
      host: 'Karan',
      rating: 4.9,
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (offsetWidth * 0.92));
    if (index !== activeIndex) setActiveIndex(index);
  };

  const scrollGrid = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.92;
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
        scrollContainer.scrollBy({ left: offsetWidth * 0.92, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Special Events</h2>
        </div>
        
        <div className={styles.carouselContainer}>
          <div 
            className={styles.grid} 
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {specialEvents.map((event, index) => (
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

export default SpecialEvents;
