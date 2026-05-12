'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ServiceDetailInfo.module.css';

const ServiceDetailInfo: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* About Section */}
          <div className={styles.aboutCol}>
            <h2 className={styles.sectionTitle}>About the Service</h2>
            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>
                Welcome to Cása — Your Stylish Retreat in the Heart of HSR Layout, Sector 6!
              </p>
              <p className={styles.description}>
                Discover a seamless blend of modern elegance and home-like comfort at Cása, 
                a refined 2-bedroom apartment designed for both short and long stays. 
                Enjoy high-speed Wi-Fi, a private balcony, daily cleaning, a gourmet kitchen, 
                and easy access to Koramangala, BTM, and more. Your perfect Bangalore stay awaits!
              </p>
            </div>
            <button className={styles.readMoreBtn}>
              Read more
            </button>
          </div>

          {/* Provider Section */}
          <div className={styles.providerCol}>
            <h2 className={styles.sectionTitle}>Service Provider Details</h2>
            <div className={styles.profileBox}>
              <div className={styles.profileInfo}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Name :</span>
                  <span className={styles.infoValue}>Abishek Sharma</span>
                </div>
                
                <div className={styles.infoRowGroup}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Age :</span>
                    <span className={styles.infoValue}>27</span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Gender :</span>
                    <span className={styles.infoValue}>Male</span>
                  </div>
                </div>

                <div className={styles.infoRowGroup}>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Overall Ratings :</span>
                    <span className={styles.infoValue}>
                      4.5 <Image src="/images/services/star1-serviceD.png" alt="star" width={14} height={14} className={styles.starIcon} />
                    </span>
                  </div>
                  <div className={styles.infoRow}>
                    <span className={styles.infoLabel}>Location :</span>
                    <span className={styles.infoValue}>Port Blair</span>
                  </div>
                </div>
              </div>
              
              <div className={styles.profileAvatar}>
                <Image 
                  src="/images/services/userprofile.jpg" 
                  alt="Provider Profile" 
                  width={91} 
                  height={91}
                  className={styles.avatarImg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailInfo;
