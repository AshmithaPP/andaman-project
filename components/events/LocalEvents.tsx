'use client';

import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './LocalEvents.module.css';
import EventCard from '@/components/events/EventCard';

const LocalEvents: React.FC = () => {
  // Mock data for 12 events
  const events = Array(12).fill(null).map((_, i) => ({
    image: '/images/Events/events1.jpg', 
    title: 'The Blue Lagoon',
    location: 'Port Blair',
    host: 'Anish',
    rating: 4.4,
    likes: 120 + i * 5,
    dislikes: 10 + i,
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
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
    }, 4000); // Slower interval for better engagement

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
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

        {/* Modern Pagination UI */}
        <div className={styles.paginationWrapper}>
          <button 
            className={styles.pageArrow} 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            aria-label="Previous page"
          >
            <FaChevronLeft size={10} />
          </button>
          
          <div className={styles.pages}>
            {[1, 2, 3, 4].map(num => (
              <button 
                key={num}
                className={`${styles.pageNumber} ${currentPage === num ? styles.activePage : ''}`}
                onClick={() => setCurrentPage(num)}
              >
                {num}
              </button>
            ))}
            <span className={styles.dots}>......</span>
            <button 
              className={`${styles.pageNumber} ${currentPage === 10 ? styles.activePage : ''}`}
              onClick={() => setCurrentPage(10)}
            >
              10
            </button>
          </div>

          <button 
            className={styles.pageArrow} 
            disabled={currentPage === 10}
            onClick={() => setCurrentPage(p => Math.min(10, p + 1))}
            aria-label="Next page"
          >
            <FaChevronRight size={10} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LocalEvents;
