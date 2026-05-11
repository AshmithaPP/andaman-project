'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/buttons/Button';
import SignInModal from '../ui/modals/SignInModal';
import styles from './ServicesProvider.module.css';

const ServicesProvider: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h2 className={styles.title}>Are you a professional Service Provider?</h2>
            <p className={styles.description}>
              Lorem Ipsum is a dummy text used in the 1800’s in the typesetting industry and is the most used in the design industry
            </p>
            <Button 
              label="Register with us" 
              className={styles.registerBtn}
              variant="primary" 
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/services/serviceprovider.png" 
              alt="Service Provider" 
              width={459} 
              height={377}
              className={styles.providerImage}
            />
          </div>
        </div>
      </div>

      {isModalOpen && <SignInModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default ServicesProvider;
