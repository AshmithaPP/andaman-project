import React from 'react';
import Image from 'next/image';
import styles from './ExoticEvents.module.css';
import Button from '@/components/ui/buttons/Button';

const ExoticEvents: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Explore exotic events</h2>
        
        <div className={styles.contentWrapper}>
          {/* Gallery Block */}
          <div className={styles.gallery}>
            {/* Big Image */}
            <div className={styles.bigImageWrapper}>
              <Image 
                src="/images/placeholder-exotic-main.png" 
                alt="Exotic Event Main" 
                width={322} 
                height={315} 
                className={styles.image}
              />
            </div>
            
            {/* Small Images Grid */}
            <div className={styles.smallImagesGrid}>
              <div className={styles.smallImageWrapper}>
                <Image src="/images/placeholder-exotic-1.png" alt="Exotic 1" width={207} height={145} className={styles.image} />
              </div>
              <div className={styles.smallImageWrapper}>
                <Image src="/images/placeholder-exotic-2.png" alt="Exotic 2" width={207} height={145} className={styles.image} />
              </div>
              <div className={styles.smallImageWrapper}>
                <Image src="/images/placeholder-exotic-3.png" alt="Exotic 3" width={207} height={145} className={styles.image} />
              </div>
              <div className={styles.smallImageWrapper}>
                <Image src="/images/placeholder-exotic-4.png" alt="Exotic 4" width={207} height={145} className={styles.image} />
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className={styles.textContent}>
            <h3 className={styles.eventTitle}>Group Surfing Event at Andaman Beach</h3>
            <p className={styles.description}>
              Welcome to Trovero Suites<br /><br />
              Nestled in the heart of Greater Noida, Near Expo Mart (8 km)<br /><br />
              What You’ll Love:<br />
              ✔ Private Balcony – Enjoy the Mesmerizing scenic view<br />
              ✔ Prime Location – Close to top attractions, restaurants
            </p>
            <Button label="Explore More" variant="primary" className={styles.button} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExoticEvents;
