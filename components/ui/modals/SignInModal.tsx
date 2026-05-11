'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import BackButton from '../buttons/BackButton';
import InputField from '../inputs/InputField';
import Button from '../buttons/Button';
import LoginModal from './LoginModal';
import PricingModal from './PricingModal';
import styles from './SignInModal.module.css';

interface SignInModalProps {
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ onClose }) => {
  const [view, setView] = useState<'signin' | 'login' | 'pricing'>('signin');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setView('pricing');
  };

  if (view === 'login') {
    return <LoginModal onClose={onClose} onBack={() => setView('signin')} />;
  }

  if (view === 'pricing') {
    return <PricingModal onClose={onClose} onBack={() => setView('signin')} />;
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        
        {/* ── White Card (left) ── */}
        <div className={styles.formCard}>
          <div className={styles.formInner}>
            <BackButton onClick={onClose} className={styles.backBtn} />
            
            <div className={styles.header}>
              <h1 className={styles.title}>Sign In</h1>
              <p className={styles.description}>
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputsStack}>
                <InputField
                  id="name"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <InputField
                  id="phone"
                  name="phone"
                  placeholder="Phone number *"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button 
                label="Submit" 
                type="submit" 
                variant="primary" 
                className={styles.submitBtn} 
              />
            </form>

            <div className={styles.footer}>
              <div className={styles.divider}>
                <span className={styles.line}></span>
                <span className={styles.footerText}>
                  Already a user? <button type="button" className={styles.loginLink} onClick={() => setView('login')}>Login</button>
                </span>
                <span className={styles.line}></span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Yellow curve panel (right) ── */}
        <div className={styles.yellowCurve} aria-hidden="true">
          <Image
            src="/images/curve.png"
            alt=""
            fill
            className={styles.curveImg}
            priority
          />
        </div>

        {/* ── Overlapping image ── */}
        <div className={styles.imageContainer} aria-hidden="true">
          <Image
            src="/images/contact.jpg"
            alt="Sign In Visual"
            fill
            className={styles.visualImg}
            priority
          />
        </div>

      </div>
    </div>
  );
};

export default SignInModal;
