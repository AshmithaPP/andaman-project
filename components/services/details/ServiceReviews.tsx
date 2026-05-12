'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './ServiceReviews.module.css';

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const REVIEWS: Review[] = [
  { id: '1', name: 'Tim Cook', avatar: '/images/services/userprofile.jpg', rating: 5, text: 'Nestled in green lawns and is great equipped with technology' },
  { id: '2', name: 'Evan', avatar: '/images/services/userprofile.jpg', rating: 5, text: 'Nestled in green lawns and is great equipped with technology and great view' },
  { id: '3', name: 'Harry', avatar: '/images/services/userprofile.jpg', rating: 5, text: 'Nestled in green lawns and is great equipped with technology' },
  { id: '4', name: 'Mathew', avatar: '/images/services/userprofile.jpg', rating: 5, text: 'Nestled in green lawns and is great equipped with technology' },
  { id: '5', name: 'Arun S', avatar: '/images/services/userprofile.jpg', rating: 4, text: 'Nestled in green lawns and is great equipped with technology' },
  { id: '6', name: 'Harris', avatar: '/images/services/userprofile.jpg', rating: 5, text: 'Nestled in green lawns and is great equipped with technology' },
  { id: '7', name: 'Tim Cook', avatar: '/images/services/userprofile.jpg', rating: 5, text: 'Nestled in green lawns and is great equipped with technology' },
  { id: '8', name: 'Evan', avatar: '/images/services/userprofile.jpg', rating: 5, text: 'Nestled in green lawns and is great equipped with technology and great view' },
  { id: '9', name: 'Harry', avatar: '/images/services/userprofile.jpg', rating: 5, text: 'Nestled in green lawns and is great equipped with technology' },
  { id: '10', name: 'Mathew', avatar: '/images/services/userprofile.jpg', rating: 5, text: 'Nestled in green lawns and is great equipped with technology' },
];

const ServiceReviews: React.FC = () => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  // Auto-scroll logic or just horizontal scroll
  useEffect(() => {
    // If you want auto-scroll like a premium carousel
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className={styles.starsRow}>
        {[...Array(5)].map((_, i) => (
          <Image 
            key={i}
            src={i < rating ? "/images/services/star4serviceD.png" : "/images/services/unstar2serviceD.png"}
            alt="star"
            width={11}
            height={11}
            className={styles.smallStar}
          />
        ))}
      </div>
    );
  };

  const renderReviewCard = (review: Review) => (
    <div key={review.id} className={styles.reviewCard}>
      <div className={styles.cardHeader}>
        <div className={styles.userInfo}>
          <div className={styles.avatarWrapper}>
            <Image src={review.avatar} alt={review.name} width={31} height={31} className={styles.avatarImg} />
          </div>
          <span className={styles.userName}>{review.name}</span>
        </div>
        {renderStars(review.rating)}
      </div>
      <p className={styles.reviewText}>{review.text}</p>
    </div>
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <Image src="/images/services/star2serviceD.png" alt="Overall Rating" width={28} height={28} />
            <h2 className={styles.title}>4.6 <span className={styles.titleMuted}>Ratings overall</span></h2>
          </div>
          <div className={styles.dividerLine}></div>
        </div>

        {/* Carousel Area */}
        <div className={styles.carouselWrapper}>
          <div className={styles.shadowLeft}></div>
          <div className={styles.shadowRight}></div>
          
          <div className={styles.carouselTrack}>
            <div className={styles.reviewsRow}>
              {[...REVIEWS, ...REVIEWS].map((review, index) => (
                <div key={`${review.id}-row1-${index}`} className={styles.reviewCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.userInfo}>
                      <div className={styles.avatarWrapper}>
                        <Image src={review.avatar} alt={review.name} width={31} height={31} className={styles.avatarImg} />
                      </div>
                      <span className={styles.userName}>{review.name}</span>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <p className={styles.reviewText}>{review.text}</p>
                </div>
              ))}
            </div>
            
            <div className={styles.reviewsRow}>
              {[...REVIEWS, ...REVIEWS].map((review, index) => (
                <div key={`${review.id}-row2-${index}`} className={styles.reviewCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.userInfo}>
                      <div className={styles.avatarWrapper}>
                        <Image src={review.avatar} alt={review.name} width={31} height={31} className={styles.avatarImg} />
                      </div>
                      <span className={styles.userName}>{review.name}</span>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <p className={styles.reviewText}>{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceReviews;
