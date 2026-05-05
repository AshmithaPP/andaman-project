"use client";

import React from 'react';
import Image from 'next/image';
import styles from './AdModal.module.css';

interface AdModalProps {
  isOpen: boolean;
  onClose: () => void;
  image?: string;
  title?: string;
}

const AdModal: React.FC<AdModalProps> = ({ isOpen, onClose, image, title }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image 
              src={image || "/images/Events/eventad1.png"} 
              alt={title || "Advertisement"} 
              fill
              className={styles.adImage}
            />
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>{title || "Special Premium Offer"}</h2>
            <p className={styles.text}>Exclusive deal for this event! Book now and get 20% off on your next adventure with Andaman Explore.</p>
            <button className={styles.actionBtn}>Claim Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdModal;
