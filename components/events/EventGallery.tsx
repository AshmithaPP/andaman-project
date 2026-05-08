"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './EventGallery.module.css';
import LikeDislike from '../ui/interactions/LikeDislike';
import AdModal from '../ui/modals/AdModal';

const EventGallery: React.FC = () => {
  const initialImages = [
    '/images/Events/eventgallery1.png',
    '/images/Events/eventgallery2.png',
    '/images/Events/eventgallery3.png',
    '/images/Events/eventgallery4.png',
    '/images/Events/eventdetails1.png',
    '/images/Events/eventdetails2.png',
    '/images/Events/eventdetails3.png',
    '/images/Events/eventad1.png',
  ];

  const [images, setImages] = useState(
    initialImages.map((src, index) => ({
      id: index,
      src,
      likes: 12 + index, // Deterministic values
      dislikes: 2 + (index % 3), // Deterministic values
    }))
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleLike = (id: number) => {
    setImages(prev => prev.map(img => 
      img.id === id ? { ...img, likes: img.likes + 1 } : img
    ));
  };

  const handleDislike = (id: number) => {
    setImages(prev => prev.map(img => 
      img.id === id ? { ...img, dislikes: img.dislikes + 1 } : img
    ));
  };

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.carouselWrapper}>
          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`} 
            onClick={() => scroll('left')}
            aria-label="Previous images"
          >
            <FaChevronLeft />
          </button>

          <div className={styles.carousel} ref={scrollRef}>
            {images.map((image, index) => (
              <div 
                key={image.id} 
                className={styles.imageWrapper}
                onClick={() => openModal(image.src)}
              >
                <Image 
                  src={image.src} 
                  alt={`Gallery Image ${index + 1}`} 
                  width={322} 
                  height={321} 
                  className={styles.image}
                  priority={index < 4}
                />
                
                <LikeDislike 
                  likes={image.likes}
                  dislikes={image.dislikes}
                  onLike={() => handleLike(image.id)}
                  onDislike={() => handleDislike(image.id)}
                  className={styles.likeDislikeContainer}
                />
              </div>
            ))}
          </div>

          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`} 
            onClick={() => scroll('right')}
            aria-label="Next images"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      
      <AdModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        image={selectedImage}
        title="Event Spotlight"
      />
    </section>
  );
};

export default EventGallery;
