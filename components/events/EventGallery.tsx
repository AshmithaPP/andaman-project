import React from 'react';
import Image from 'next/image';
import styles from './EventGallery.module.css';

const EventGallery: React.FC = () => {
  const images = [
    '/images/placeholder-gallery-1.png',
    '/images/placeholder-gallery-2.png',
    '/images/placeholder-gallery-3.png',
    '/images/placeholder-gallery-4.png',
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {images.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image 
                src={src} 
                alt={`Gallery Image ${index + 1}`} 
                width={322} 
                height={321} 
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
