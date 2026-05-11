'use client';

import React, { useState } from 'react';
import BackButton from '../buttons/BackButton';
import Button from '../buttons/Button';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import ServiceProviderRegistrationModal from './ServiceProviderRegistrationModal';
import styles from './PricingModal.module.css';

interface PricingModalProps {
  onClose: () => void;
  onBack?: () => void;
}

const PricingModal: React.FC<PricingModalProps> = ({ onClose, onBack }) => {
  const [view, setView] = useState<'pricing' | 'registration'>('pricing');
  const features = [
    { text: 'Access to All Features', available: true },
    { text: '1k lookups / per month', available: true },
    { text: 'No API Credits', available: false },
    { text: '10 Monitoring Quota', available: false },
    { text: '60 minutes Monitoring interval', available: false },
    { text: '20% discount on backorders', available: false },
  ];

  const professionalFeatures = [
    { text: 'Access to All Features', available: true },
    { text: '1k lookups / per month', available: true },
    { text: 'No API Credits', available: true },
    { text: '10 Monitoring Quota', available: true },
    { text: '60 minutes Monitoring interval', available: true },
    { text: '20% discount on backorders', available: true },
  ];

  if (view === 'registration') {
    return <ServiceProviderRegistrationModal onClose={onClose} onBack={() => setView('pricing')} />;
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <div className={styles.container}>
          <BackButton onClick={onBack || onClose} className={styles.backBtn} />
          
          <div className={styles.header}>
            <h1 className={styles.title}>Explore Pricing & Plans</h1>
            <p className={styles.description}>
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
            </p>
          </div>

          <div className={styles.cardsRow}>
            {/* Basic Card */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.badge}>BASIC</span>
                <p className={styles.cardDesc}>For all individuals and starters who want to start with domaining.</p>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.priceBlock}>
                <h2 className={styles.price}>Free</h2>
                <span className={styles.perPeriod}>Per member, per Month</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.featuresList}>
                {features.map((feature, i) => (
                  <div key={i} className={styles.featureItem}>
                    {feature.available ? (
                      <FaCheckCircle className={styles.checkIcon} />
                    ) : (
                      <FaTimesCircle className={styles.crossIcon} />
                    )}
                    <span className={styles.featureText}>{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className={styles.cardBottom}>
                <button className={styles.freePlanBtn} onClick={() => setView('registration')}>Continue with free plan</button>
                <div className={styles.extraTextPlaceholder}></div>
              </div>
            </div>

            {/* Professional Card */}
            <div className={`${styles.card} ${styles.professionalCard}`}>
              <div className={styles.cardHeader}>
                <span className={`${styles.badge} ${styles.proBadge}`}>Professional</span>
                <p className={styles.cardDesc}>For all individuals and starters who want to start with domaining.</p>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.priceBlock}>
                <h2 className={styles.price}>₹899/Annual</h2>
                <span className={styles.perPeriod}>per Month</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.featuresList}>
                {professionalFeatures.map((feature, i) => (
                  <div key={i} className={styles.featureItem}>
                    <FaCheckCircle className={styles.checkIcon} />
                    <span className={styles.featureText}>{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className={styles.cardBottom}>
                <button className={styles.proPlanBtn} onClick={() => setView('registration')}>Start free with 14 days free trial</button>
                <p className={styles.noCreditCard}>No credit card required</p>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <button className={styles.viewDetailedBtn}>View detailed pricing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
