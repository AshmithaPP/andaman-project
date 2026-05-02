import React from 'react';
import SearchBox from '@/components/ui/inputs/SearchBox';
import styles from './EventsHero.module.css';

const EventsHero: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Left Text Block */}
        <div className={styles.leftBlock}>
          <div className={styles.textGroup}>
            <p className={styles.exploreText}>Explore &amp; Enjoy</p>
            <div className={styles.titleRow}>
              <span className={styles.eventsText}>Events</span>
              <span className={styles.acrossText}>across Andaman</span>
            </div>
          </div>
        </div>

        {/* Search Box Wrapper */}
        <div className={styles.searchBoxWrapper}>
          <SearchBox
            label="Location Details"
            placeholder="Enter Location Details to Enjoy"
          />
        </div>

        {/* Right Carousel Placeholder */}
        <div className={styles.carouselBlock}>
          <span className={styles.carouselLabel}>Carousel Space</span>
        </div>

      </div>
    </section>
  );
};

export default EventsHero;
