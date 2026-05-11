'use client';

import React, { useState, useRef } from 'react';
import ServiceCategoryCard from '../ui/cards/ServiceCategoryCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './ServicesLookingFor.module.css';

const ServicesLookingFor: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(0); // Default first one selected
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    { id: 0, title: 'Electrician', image: '/images/services/servicead1.jpg' },
    { id: 1, title: 'Mechanic', image: '/images/services/servicead2.jpg' },
    { id: 2, title: 'Plumber', image: '/images/services/servicead3.jpg' },
    { id: 3, title: 'Barber', image: '/images/services/servicead4.jpg' },
    { id: 4, title: 'Car detailer', image: '/images/services/servicead5.jpg' },
    { id: 5, title: 'Maid', image: '/images/services/servicead6.jpg' },
    { id: 6, title: 'Cook', image: '/images/services/servicead7.jpg' },
    { id: 7, title: 'Lawn mower', image: '/images/services/servicead8.jpg' },
    { id: 8, title: 'Construction', image: '/images/services/servicead9.jpg' },
    { id: 9, title: 'Pet grooming', image: '/images/services/servicead10.jpg' },
    { id: 10, title: 'Carpenter', image: '/images/services/servicead11.jpg' },
    { id: 11, title: 'Ac Service', image: '/images/services/servicead12.jpg' },
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
        <h2 className={styles.heading}>What are you looking for?</h2>
        <div className={styles.carouselWrapper}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={() => scroll('left')}>
            <FaChevronLeft />
          </button>

          <div className={styles.grid} ref={scrollRef}>
            {services.map((service) => (
              <div key={service.id} className={styles.cardItem}>
                <ServiceCategoryCard
                  title={service.title}
                  image={service.image}
                  isSelected={selectedId === service.id}
                  onClick={() => setSelectedId(service.id)}
                />
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

export default ServicesLookingFor;
