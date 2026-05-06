import React from 'react';
import ServiceCard from '../ui/cards/ServiceCard';
import styles from './ExploreServices.module.css';

const ExploreServices: React.FC = () => {
  const services = [
    {
      id: 'services',
      title: 'Services',
      description: 'Lorem Ipsum is a dummy text used in the typesetting',
      image: '/images/home/service-illustration.png',
      hoverImage: '/images/home/service-hover.png',           // ← Change later
      variant: 'large-vertical' as const,
      href: '/services',
    },
    {
      id: 'hotels',
      title: 'Hotel Rooms',
      description: 'Lorem Ipsum is a dummy text used in typesetting',
      image: '/images/home/hotel-illustration.png',
      hoverImage: '/images/home/hotel-hover.png', // ← Change later
      variant: 'small-vertical' as const,
      href: '/resorts',
    },
    {
      id: 'jobs',
      title: 'Jobs',
      description: 'Lorem Ipsum is a dummy text used in typesetting',
      image: '/images/home/job-illustration.png',
      hoverImage: '/images/home/jobs-hoverimage.png',  // ← Change later
      variant: 'small-vertical' as const,
      href: '/jobs',
    },
    {
      id: 'buy-sell',
      title: 'Buy & Sell',
      description: 'Lorem Ipsum is a dummy text used in typesetting',
      image: '/images/home/buysell-illustration.png',
      hoverImage: '/images/home/buysell-hoverimage.png', // ← Change later
      variant: 'medium-horizontal' as const,
      href: '/buy-sell',
    },
    {
      id: 'news',
      title: 'News',
      description: 'Lorem Ipsum is a dummy text used in typesetting',
      image: '/images/home/news-illustration.png',
      hoverImage: '/images/home/news-hover.png',   // ← Change later
      variant: 'small-horizontal' as const,
      href: '/news',
    },
    {
      id: 'travel',
      title: 'Travel',
      description: 'Lorem Ipsum is a dummy text used in the typesetting',
      image: '/images/home/travel-illustration.png',
      hoverImage: '/images/home/travel-hover.png', // ← Change later
      variant: 'large-horizontal' as const,
      href: '/travel',
    },
    {
      id: 'events',
      title: 'Events',
      description: 'Lorem Ipsum is a dummy text used in typesetting and design',
      image: '/images/home/events-illustration.png',
      hoverImage: '/images/home/events-hover.png', // ← Change later
      variant: 'events-horizontal' as const,
      href: '/events',
    },
    {
      id: 'contact',
      title: 'Contact Info',
      description: 'Lorem Ipsum is a dummy text used in typesetting and design',
      image: '/images/home/contactinfo-illustration.png',
      hoverImage: '/images/home/contactinfo-hover.png', // ← Change later
      variant: 'small-vertical' as const,
      href: '/contact-us',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Explore Andaman Services</h2>
        
        <div className={styles.grid}>
          {/* Left Column - Services */}
          <div className={styles.svcCol}>
            <ServiceCard {...services[0]} />
          </div>

          {/* Main Grid Area */}
          <div className={styles.mainGrid}>
            <div className={styles.topRow}>
              <div className={styles.cardHotel}><ServiceCard {...services[1]} /></div>
              <div className={styles.cardJob}><ServiceCard {...services[2]} /></div>
              <div className={styles.cardBuySell}><ServiceCard {...services[3]} /></div>
              <div className={styles.cardNews}><ServiceCard {...services[4]} /></div>
            </div>
            <div className={styles.bottomRow}>
              <div className={styles.cardTravel}><ServiceCard {...services[5]} /></div>
              <div className={styles.cardEvents}><ServiceCard {...services[6]} /></div>
              <div className={styles.cardContact}><ServiceCard {...services[7]} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreServices;