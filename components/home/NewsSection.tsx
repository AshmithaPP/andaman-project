// components/home/NewsSection.tsx
import React from 'react';
import styles from './NewsSection.module.css';
import NewsCard from '../ui/cards/NewsCard';
import Button from '../ui/buttons/Button';
import Image from 'next/image';

const NewsSection: React.FC = () => {
  return (
    <section className={styles.newsSection}>
      <div className={styles.container}>

        {/* ── Left Content ── */}
        <div className={styles.leftContent}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Take a look<br />at the News Feed
            </h2>
            <p className={styles.description}>
              Lorem Ipsum is a dummy text used in the typesetting industry
            </p>
          </div>

          <Button
            label="Explore More"
            variant="primary"
            className={styles.exploreButton}
          />
        </div>

        {/* ── Right Content: 3 cards ── */}
        <div className={styles.rightContent}>

          {/* Card 1: image-top */}
          <NewsCard
            image="/images/news/newsfeed1.jpg"
            title="Surfing Package"
            description="Lorem Ipsum is a dummy text used in the typesetting industry"
            variant="image-top"
          />

          {/* Card 2: image-bottom */}
          <NewsCard
            image="/images/news/newsfeed2.jpg"
            title="Scuba Diving"
            description="Lorem Ipsum is a dummy text used in the typesetting industry"
            variant="image-bottom"
          />

          {/* Card 3: full image ad */}
          <div className={styles.adCard}>
            <Image
              src="/images/news/newsfeed3.png"
              alt="Water Sports Promotion"
              fill
              priority
              className={styles.adImage}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;