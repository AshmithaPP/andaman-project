'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FeedbackForm.module.css';

const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState(3);
  const [comment, setComment] = useState('');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Leave your feedback</h2>
        
        <div className={styles.ratingSection}>
          <span className={styles.label}>Overall Ratings</span>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button 
                key={star} 
                className={styles.starBtn}
                onClick={() => setRating(star)}
                type="button"
              >
                <Image 
                  src={star <= rating ? "/images/services/star4serviceD.png" : "/images/services/unstar2serviceD.png"} 
                  alt="star" 
                  width={24} 
                  height={24} 
                />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.commentBox}>
          <textarea
            className={styles.textarea}
            placeholder="Leave your comments here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className={styles.submitWrapper}>
            <button className={styles.submitBtn}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
