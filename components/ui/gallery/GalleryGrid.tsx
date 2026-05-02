import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './GalleryGrid.module.css';

interface GalleryGridProps {
  images: string[];
  galleryHref?: string;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, galleryHref = "/resort/gallery" }) => {
  // We expect at least 5 images for the full layout
  const largeImage = images[0];
  const smallImages = images.slice(1, 5);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.largeImageWrapper}>
        <Image 
          src={largeImage} 
          alt="Resort main view" 
          width={402} 
          height={428} 
          className={styles.largeImage}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.smallGrid}>
        {smallImages.map((src, index) => (
          <div key={index} className={styles.smallImageWrapper}>
            <Image 
              src={src} 
              alt={`Resort view ${index + 2}`} 
              width={195} 
              height={202} 
              className={styles.smallImage}
              style={{ objectFit: 'cover' }}
            />
            {index === 3 && (
              <Link href={galleryHref} className={styles.overlay}>
                <span className={styles.morePhotos}>+More Photos</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
