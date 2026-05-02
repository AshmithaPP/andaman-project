import React from 'react';
import ResortCard from './ResortCard';
import Button from '../ui/buttons/Button';
import IconButton from '../ui/buttons/IconButton';
import styles from './ResortSection.module.css';

const ResortSection: React.FC = () => {
  // Placeholder images - using some generic hotel/resort ones if available or from the task
  const images = [
    '/images/resort/resort1.png', // Large
    '/images/resort/resort2.png',
    '/images/resort/resort3.png',
    '/images/resort/resort4.png',
    '/images/resort/resort5.png',
  ];

  const resortDescription = `
    Welcome to Trovero Suites<br/><br/>
    Nestled in the heart of Greater Noida, Near Expo Mart (8 km)<br/><br/>
    ✨ What You’ll Love:<br/>
    ✔ Private Balcony – Enjoy the Mesmerizing scenic view<br/>
    ✔ Prime Location – Close to top attractions, restaurants
  `;

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>Explore Resorts and Hotel Rooms at Andaman</h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.description}>Lorem Ipsum is a dummy text used in the typesetting industry</p>
            <Button label="Explore More"  className={styles.headerButton} />
          </div>
        </div>
        
        <div className={styles.carouselWrapper}>
          <IconButton 
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>} 
            ariaLabel="Previous" 
            className={styles.prevButton}
          />
          
          <ResortCard 
            title="Trovero Suites: The Royal Retreat"
            description={resortDescription}
            images={images}
          />
          
          <IconButton 
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>} 
            ariaLabel="Next" 
            className={styles.nextButton}
          />
        </div>
      </div>
    </section>
  );
};

export default ResortSection;
