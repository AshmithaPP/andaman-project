'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../ui/buttons/Button';
import CompactSearchBar from '../../ui/search/CompactSearchBar';
import styles from './ServiceDetailHero.module.css';

const ServiceDetailHero: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      {/* Floating Search Bar */}
      <div className={styles.searchWrapper}>
        <CompactSearchBar />
      </div>

      <div className={styles.mainContainer}>
        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/" className={styles.homeLink}>Home</Link>
          <span className={styles.breadcrumbDivider}></span>
          <span className={styles.currentLink}>Car Services</span>
        </nav>

        {/* Content Row */}
        <div className={styles.contentRow}>
          {/* Left Info Card */}
          <div className={styles.infoCard}>
            <h1 className={styles.serviceTitle}>
              AUTOTECH AUTOMATIC CAR WASH & CAR CARE SERVICES
            </h1>
            <p className={styles.address}>
              Solar Plant Road, Opposite Lababdar Restaurant, Garacharma, Sri Vijaya Puram, 744105
            </p>
            
            <div className={styles.providerInfo}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Service Provider</span>
                <span className={styles.value}>Abhishek Sharma</span>
              </div>
            </div>

            <div className={styles.actionSection}>
              <Button 
                label="Contact Seller" 
                variant="primary" 
                className={styles.contactBtn}
              />
            </div>
          </div>

          {/* Right Image Card */}
          <div className={styles.imageCard}>
            <Image 
              src="/images/services/serviceDetailshero.png" 
              alt="Car Service Mechanic" 
              fill
              className={styles.heroImg}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailHero;
