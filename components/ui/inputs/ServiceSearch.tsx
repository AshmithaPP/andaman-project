import React from 'react';
import Image from 'next/image';
import styles from './ServiceSearch.module.css';

interface ServiceSearchProps {
  onLocationChange?: (value: string) => void;
  onServiceChange?: (value: string) => void;
  locationPlaceholder?: string;
  servicePlaceholder?: string;
}

const ServiceSearch: React.FC<ServiceSearchProps> = ({
  onLocationChange,
  onServiceChange,
  locationPlaceholder = "Enter Location",
  servicePlaceholder = "Search Service",
}) => {
  return (
    <div className={styles.searchContainer}>
      {/* Location Input */}
      <div className={styles.inputWrapper}>
        <div className={styles.icon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22C14 18 20 15.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 15.4183 10 18 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <input 
          type="text" 
          placeholder={locationPlaceholder} 
          className={styles.input}
          onChange={(e) => onLocationChange?.(e.target.value)}
        />
      </div>

      {/* Service Search Input */}
      <div className={styles.inputWrapper + ' ' + styles.serviceWrapper}>
        <div className={styles.icon}>
          <Image 
            src="/images/services/searchservice.png" 
            alt="Search" 
            width={16} 
            height={16} 
          />
        </div>
        <input 
          type="text" 
          placeholder={servicePlaceholder} 
          className={styles.input}
          onChange={(e) => onServiceChange?.(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ServiceSearch;
