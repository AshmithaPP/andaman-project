import React from 'react';
import Image from 'next/image';
import styles from './ServicesHorizontalAds.module.css';

const ServicesHorizontalAds: React.FC = () => {
  const ads = [
    { id: 1, image: '/images/services/servicead1.jpg' },
    { id: 2, image: '/images/services/servicead2.jpg' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {ads.map((ad) => (
            <div key={ad.id} className={styles.adCard}>
              <Image 
                src={ad.image} 
                alt={`Horizontal Ad ${ad.id}`} 
                fill 
                className={styles.image}
                sizes="(max-width: 1800px) 50vw, 668px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHorizontalAds;
