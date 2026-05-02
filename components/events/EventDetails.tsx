'use client';

import React from 'react';
import Image from 'next/image';
import BackButton from '@/components/ui/buttons/BackButton';
import Button from '@/components/ui/buttons/Button';
import SimilarEvents from './SimilarEvents';
import styles from './EventDetails.module.css';

interface EventDetailsProps {
  id: string;
}

const EventDetails: React.FC<EventDetailsProps> = ({ id }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* Back Button */}
        <BackButton className={styles.backBtn} />

        {/* Main Content Area */}
        <div className={styles.mainGrid}>
          {/* Left: Image Gallery */}
          <div className={styles.gallery}>
            <div className={styles.largeImage}>
              <Image 
                src="/images/Events/eventdetails1.png" 
                alt="Event Image 1" 
                width={437} 
                height={428} 
                className={styles.img}
              />
            </div>
            <div className={styles.smallImages}>
              <div className={styles.smallImageItem}>
                <Image 
                  src="/images/Events/eventdetails2.png" 
                  alt="Event Image 2" 
                  width={438} 
                  height={202} 
                  className={styles.img}
                />
              </div>
              <div className={styles.smallImageItem}>
                <Image 
                  src="/images/Events/eventdetails3.png" 
                  alt="Event Image 3" 
                  width={438} 
                  height={202} 
                  className={styles.img}
                />
              </div>
            </div>
          </div>

          {/* Right: Info Box */}
          <div className={styles.infoBox}>
            <h1 className={styles.title}>Sunburn Andaman Live</h1>
            <p className={styles.description}>
              Get ready, Faridabad Sector, 79 Omaxe City! For the very first time, the sensational Jasmine Sandlas is set to take over the city with an electrifying live
            </p>
            <div className={styles.metaRow}>
              <span className={styles.dateTime}>Sat 23May, 9:00pm</span>
              <span className={styles.location}>Port Blair Stadium</span>
            </div>
            <div className={styles.priceRow}>
              <span className={styles.price}>₹100</span>
              <span className={styles.tax}>+ ₹100 taxes & fees</span>
            </div>
            <Button 
              label="Contact Organizer" 
              variant="primary" 
              className={styles.contactBtn}
            />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className={styles.bottomGrid}>
          {/* About Section */}
          <div className={styles.aboutSection}>
            <h2 className={styles.sectionTitle}>About this Event</h2>
            <p className={styles.aboutText}>
              Welcome to Cása — Your Stylish Retreat in the Heart of HSR Layout, Sector 6!<br /><br />
              Discover a seamless blend of modern elegance and home-like comfort at Cása, a refined 2-bedroom apartment designed for both short and long stays. Enjoy high-speed Wi-Fi, a private balcony, daily cleaning, a gourmet kitchen, and easy access to Koramangala, BTM, and more. Your perfect Bangalore stay awaits!
            </p>
            <button className={styles.readMoreBtn}>Read more</button>
          </div>

          {/* Things to Know Section */}
          <div className={styles.thingsToKnow}>
            <h2 className={styles.sectionTitle}>Things to know</h2>
            <div className={styles.amenitiesGrid}>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon}>🍳</span>
                <span className={styles.amenityLabel}>Kitchen</span>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon}>📶</span>
                <span className={styles.amenityLabel}>Wifi</span>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon}>💼</span>
                <span className={styles.amenityLabel}>Dedicated workspace</span>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon}>🐾</span>
                <span className={styles.amenityLabel}>Pets allowed</span>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon}>📺</span>
                <span className={styles.amenityLabel}>TV</span>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon}>🛗</span>
                <span className={styles.amenityLabel}>Lift</span>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon}>🧺</span>
                <span className={styles.amenityLabel}>Washing machine</span>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon}>❄️</span>
                <span className={styles.amenityLabel}>Air conditioning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Events Section */}
      </div>
      <SimilarEvents />
    </div>
  );
};

export default EventDetails;
