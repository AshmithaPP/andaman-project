import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './SpecialEvents.module.css';

interface SpecialEventCardProps {
  image: string;
  title: string;
  location: string;
  entry: string;
  date: string;
  time: string;
  isHighlighted?: boolean;
}

const SpecialEventCard: React.FC<SpecialEventCardProps> = ({
  image,
  title,
  location,
  entry,
  date,
  time,
  isHighlighted = false,
}) => {
  return (
    <Link href="/events/sunburn-andaman-live" className={styles.cardLink}>
      <div className={`${styles.card} ${isHighlighted ? styles.highlighted : ''}`}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={title} width={449} height={209} className={styles.eventImage} />
          <div className={styles.overlay}></div>
          
          {/* Location Tag */}
          <div className={styles.locationTag}>
            <Image
              src="/icons/events/location.png"
              alt="Location"
              width={9}
              height={12}
              className={styles.tagIcon}
            />
            <span className={styles.tagText}>{location}</span>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.detailsRow}>
              <div className={styles.detailItem}>
                <Image
                  src="/icons/events/gift.png"
                  alt="Entry"
                  width={13}
                  height={10}
                  className={styles.detailIcon}
                />
                <span>{entry}</span>
              </div>
              <div className={styles.detailItem}>
                <Image
                  src="/icons/events/date.png"
                  alt="Date"
                  width={13}
                  height={13}
                  className={styles.detailIcon}
                />
                <span>{date}</span>
              </div>
              <div className={styles.detailItem}>
                <Image
                  src="/icons/events/time.png"
                  alt="Time"
                  width={13}
                  height={13}
                  className={styles.detailIcon}
                />
                <span>{time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const SpecialEvents: React.FC = () => {
  const specialEvents = [
    {
      image: '/images/events/events1.jpg',
      title: 'Sunburn Dj Event',
      location: 'Port Blair',
      entry: 'Entry - Free',
      date: '16/03/2026',
      time: '09:00 PM',
      isHighlighted: true,
    },
    {
      image: '/images/events/specialevent2.jpg',
      title: 'Beach Party',
      location: 'Havelock Island',
      entry: 'Entry - Free',
      date: '17/03/2026',
      time: '08:00 PM',
    },
    {
      image: '/images/events/specialevent3.jpg',
      title: 'Night Music Festival',
      location: 'Port Blair',
      entry: 'Entry - Paid',
      date: '18/03/2026',
      time: '07:00 PM',
    },
    {
      image: '/images/events/specialevent4.jpg',
      title: 'Cultural Dance Night',
      location: 'Neil Island',
      entry: 'Entry - Free',
      date: '19/03/2026',
      time: '06:00 PM',
    },
    {
      image: '/images/events/specialevent5.jpg',
      title: 'Food & Wine Fest',
      location: 'Port Blair',
      entry: 'Entry - Free',
      date: '20/03/2026',
      time: '05:00 PM',
    },
    {
      image: '/images/events/specialevent6.jpg',
      title: 'Live Band Performance',
      location: 'Havelock Island',
      entry: 'Entry - Paid',
      date: '21/03/2026',
      time: '09:30 PM',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Special Events</h2>
        <div className={styles.grid}>
          {specialEvents.map((event, index) => (
            <SpecialEventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialEvents;
