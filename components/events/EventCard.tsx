'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './EventCard.module.css';
import LikeDislike from '../ui/interactions/LikeDislike';

interface EventCardProps {
  image: string;
  title: string;
  location: string;
  host: string;
  rating: number;
  likes?: number;
  dislikes?: number;
  onLike?: (e: React.MouseEvent) => void;
  onDislike?: (e: React.MouseEvent) => void;
  onPrev?: (e: React.MouseEvent) => void;
  onNext?: (e: React.MouseEvent) => void;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  location,
  host,
  rating,
  likes = 0,
  dislikes = 0,
  onLike,
  onDislike,
  onPrev,
  onNext,
}) => {
  return (
    <Link href="/events/sunburn-andaman-live" className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={title} width={207} height={184} className={styles.eventImage} />
          
          {/* Rating Tag */}
          <div className={styles.ratingTag}>
            <Image src="/icons/Star 1.png" alt="Star" width={16} height={16} className={styles.starIcon} />
            <span className={styles.ratingText}>{rating.toFixed(1)}</span>
          </div>

          {/* Like/Dislike Component */}
          <LikeDislike 
            likes={likes} 
            dislikes={dislikes} 
            onLike={onLike} 
            onDislike={onDislike}
            className={styles.likeDislikeContainer}
          />

          {/* Carousel Arrows */}
          {onPrev && (
            <button 
              className={`${styles.navBtn} ${styles.prevBtn}`} 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onPrev(e);
              }}
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}

          {onNext && (
            <button 
              className={`${styles.navBtn} ${styles.nextBtn}`} 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onNext(e);
              }}
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>

        <div className={styles.info}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.details}>
            <span className={styles.location}>
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M5 0C2.24 0 0 2.24 0 5C0 8.75 5 12 5 12C5 12 10 8.75 10 5C10 2.24 7.76 0 5 0ZM5 6.75C4.03 6.75 3.25 5.97 3.25 5C3.25 4.03 4.03 3.25 5 3.25C5.97 3.25 6.75 4.03 6.75 5C6.75 5.97 5.97 6.75 5 6.75Z" fill="#C4A964"/>
              </svg>
              {location}
            </span>
            <span className={styles.host}>Hosted by {host}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
