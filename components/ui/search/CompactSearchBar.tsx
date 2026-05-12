'use client';

import React from 'react';
import Image from 'next/image';
import styles from './CompactSearchBar.module.css';

const CompactSearchBar: React.FC = () => {
  return (
    <div className={styles.searchBox}>
      <div className={styles.section}>
        <Image src="/images/services/locationdetails.png" alt="Location" width={16} height={16} className={styles.locationIcon} />
        <span className={styles.text}>Port Blair</span>
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.section}>
        <Image src="/images/services/calender.png" alt="Calendar" width={20} height={20} className={styles.icon} />
        <span className={styles.text}>16-18 Apr</span>
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.section}>
        <Image src="/images/services/adults.png" alt="Adults" width={14} height={19} className={styles.icon} />
        <span className={styles.text}>2 Adults</span>
      </div>
      
      <button className={styles.searchButton} aria-label="Search">
        <Image src="/images/services/search.png" alt="Search" width={10} height={10} className={styles.searchIcon} />
      </button>
    </div>
  );
};

export default CompactSearchBar;
