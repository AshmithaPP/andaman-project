import React from 'react';
import Image from 'next/image';
import styles from './EventsAd.module.css';

const EventsAd: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.adWrapper}>
          <Image
            src="/images/Events/eventad1.png"
            alt="Event Advertisement"
            fill
            className={styles.adImage}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default EventsAd;
