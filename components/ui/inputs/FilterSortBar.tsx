import React from 'react';
import Image from 'next/image';
import styles from './FilterSortBar.module.css';

interface FilterSortBarProps {
  onFilterClick?: () => void;
  onSortClick?: () => void;
  className?: string;
}

const FilterSortBar: React.FC<FilterSortBarProps> = ({
  onFilterClick,
  onSortClick,
  className,
}) => {
  return (
    <div className={`${styles.bar} ${className ?? ''}`}>
      {/* Filter Section */}
      <button className={styles.item} onClick={onFilterClick} aria-label="Filter">
        <div className={styles.iconWrapper}>
          <Image
            src="/icons/filter.png"
            alt="Filter"
            width={15}
            height={14}
            className={styles.icon}
          />
        </div>
        <span className={styles.text}>Filter</span>
      </button>

      {/* Vertical Partition */}
      <div className={styles.partition}></div>

      {/* Sort Section */}
      <button className={styles.item} onClick={onSortClick} aria-label="Sort By">
        <div className={styles.iconWrapper}>
          <Image
            src="/icons/sort.png"
            alt="Sort By"
            width={14}
            height={16}
            className={styles.icon}
          />
        </div>
        <span className={styles.text}>Sort By</span>
      </button>
    </div>
  );
};

export default FilterSortBar;
