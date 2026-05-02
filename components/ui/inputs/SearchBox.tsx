'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './SearchBox.module.css';

interface SearchBoxProps {
  label?: string;
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
}

const locations = [
  { id: 1, name: 'Port Blair', type: 'palm' },
  { id: 2, name: 'Andaman Bus deport', type: 'bus' },
  { id: 3, name: 'Andaman Harbor deck', type: 'ship' },
  { id: 4, name: 'Bharatpur Beach, Neil Island', type: 'beach' },
];

const LocationIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'palm':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFC83D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8c0 2.52 2 4.61 4.5 4.93V21c0 .55.45 1 1 1s1-.45 1-1v-8.07c2.5-.32 4.5-2.41 4.5-4.93z" />
          <path d="M22 8c0-2.76-2.46-5-5.5-5S11 5.24 11 8c0 2.52 2 4.61 4.5 4.93V21c0 .55.45 1 1 1s1-.45 1-1v-8.07c2.5-.32 4.5-2.41 4.5-4.93z" />
        </svg>
      );
    case 'bus':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFC83D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="12" rx="2" />
          <path d="M6 16v2" />
          <path d="M18 16v2" />
          <circle cx="7" cy="11" r="1" />
          <circle cx="17" cy="11" r="1" />
        </svg>
      );
    case 'ship':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFC83D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20" />
          <path d="M12 2v10" />
          <path d="M8 8l4-4 4 4" />
          <path d="M4 12c0 3 2 5 8 5s8-2 8-5" />
        </svg>
      );
    case 'beach':
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFC83D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="10" r="4" />
          <path d="M12 2v2" />
          <path d="M12 18v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M17.66 17.66l1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M4.93 19.07l1.41-1.41" />
          <path d="M17.66 6.34l1.41-1.41" />
        </svg>
      );
    default:
      return null;
  }
};

const SearchBox: React.FC<SearchBoxProps> = ({
  label = 'Location Details',
  placeholder = 'Enter Location Details to Enjoy',
  onSearch,
  className,
}) => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (onSearch) onSearch(value);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleItemClick = (name: string) => {
    setValue(name);
    setIsOpen(false);
    if (onSearch) onSearch(name);
  };

  const toggleOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.backdrop} onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }} />
      )}
      <div 
        className={`${styles.searchBox} ${className ?? ''}`} 
        onClick={toggleOpen}
        ref={containerRef}
      >
        <div className={styles.inputWrapper}>
          <span className={styles.label}>{label}</span>
          <input
            type="text"
            className={styles.input}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            id="search-location-input"
            aria-label={label}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <button
          className={styles.searchBtn}
          onClick={(e) => {
            e.stopPropagation();
            handleSearch();
          }}
          aria-label="Search"
          id="search-submit-btn"
        >
          <Image
            src="/icons/search.png"
            alt="Search"
            width={14}
            height={14}
            className={styles.searchIcon}
          />
        </button>

        {isOpen && (
          <div className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
            {locations.map((loc) => (
              <div 
                key={loc.id} 
                className={styles.dropdownItem}
                onClick={() => handleItemClick(loc.name)}
              >
                <div className={styles.iconBox}>
                  <LocationIcon type={loc.type} />
                </div>
                <span className={styles.itemText}>{loc.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBox;
