'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/buttons/Button';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Resorts', href: '/resorts' },
    { name: 'Events', href: '/events' },
    { name: 'Buy&Sell', href: '/buy-sell' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Services', href: '/services' },
    { name: 'Travel', href: '/travel' },
    { name: 'News', href: '/news' },
    { name: 'Ads', href: '/ads' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        {/* ✅ Logo Section */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/images/andamanlogo.png"  
              alt="Logo"
              width={86}
              height={54}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopSection}>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={styles.navLink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className={styles.contactBtn}>
            <Button label="Contact us" />
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavLinks}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={styles.navLink} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
          <li className={styles.mobileContactBtn}>
            <Button label="Contact us" onClick={() => setIsMenuOpen(false)} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;