"use client";

import React from 'react';
import Image from 'next/image';
import BackButton from '@/components/ui/buttons/BackButton';
import styles from './GalleryPage.module.css';

const ResortGalleryPage = () => {
  const images = [
    '/images/resort/resort1.png',
    '/images/resort/resort2.png',
    '/images/resort/resort3.png',
    '/images/resort/resort4.png',
    '/images/resort/resort5.png',
    '/images/resort/resort1.png', // Reusing for variety
    '/images/resort/resort2.png',
    '/images/resort/resort3.png',
    '/images/resort/resort4.png',
    '/images/resort/resort5.png',
    '/images/resort/resort1.png',
    '/images/resort/resort2.png',
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.backBtnWrapper}>
            <BackButton />
          </div>
          <h1 className={styles.title}>Trovero Suites Gallery</h1>
          <p className={styles.subtitle}>Explore the luxurious views and amenities of our royal retreat.</p>
        </header>

        <div className={styles.grid}>
          {images.map((src, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image 
                src={src} 
                alt={`Resort View ${index + 1}`} 
                fill 
                className={styles.image}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ResortGalleryPage;
