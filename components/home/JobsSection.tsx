import React from 'react';
import Button from '../ui/buttons/Button';
import JobCategoryCard from '../ui/cards/JobCategoryCard';
import PosterCard from '../ui/cards/PosterCard';
import styles from './JobsSection.module.css';

const JobsSection: React.FC = () => {
  const categories = [
    {
      title: "Home Electricals",
      description: "Lorem Ipsum is a dummy",
      variant: "primary" as const,
      iconSrc: "/icons/job1.png",
    },
    {
      title: "Plumbing",
      description: "Lorem Ipsum is a dummy",
      variant: "default" as const,
      iconSrc: "/icons/job2.png",
    },
    {
      title: "Maid Services",
      description: "Lorem Ipsum is a dummy",
      variant: "default" as const,
      iconSrc: "/icons/job3.png",
    },
    {
      title: "Lawn Mowers",
      description: "Lorem Ipsum is a dummy",
      variant: "default" as const,
      iconSrc: "/icons/job4.png",
    },
    {
      title: "House deep Cleaning",
      description: "Lorem Ipsum is a dummy",
      variant: "default" as const,
      iconSrc: "/icons/job5.png",
    },
    {
      title: "Chefs",
      description: "Lorem Ipsum is a dummy",
      variant: "default" as const,
      iconSrc: "/icons/job6.png",
    },
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>Explore Job Opportunities in and around Andaman</h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.description}>Lorem Ipsum is a dummy text used in the typesetting industry</p>
            <Button label="Explore More" variant="primary" />
          </div>
        </div>

        <div className={styles.grid}>
          {categories.map((cat, index) => (
            <JobCategoryCard 
              key={index}
              title={cat.title}
              description={cat.description}
                iconSrc={cat.iconSrc}
              variant={cat.variant}
            />
          ))}
        </div>

        <div className={styles.postersRow}>
          <PosterCard 
            alt="Job Poster 1" 
            imageSrc="/images/ad_cyber_monday_sale_1777284020030.png" // Placeholder from previous turn
          />
          <PosterCard 
            alt="Job Poster 2" 
            imageSrc="/images/ad_hiring_business_dev_1777284034319.png" // Placeholder from previous turn
          />
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
