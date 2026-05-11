'use client';

import React, { useState } from 'react';
import BackButton from '../buttons/BackButton';
import InputField from '../inputs/InputField';
import Button from '../buttons/Button';
import styles from './LoginModal.module.css';

interface LoginModalProps {
  onClose: () => void;
  onBack?: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onBack }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <div className={styles.formInner}>
          <BackButton onClick={onBack || onClose} className={styles.backBtn} />
          
          <div className={styles.header}>
            <h1 className={styles.title}>Login</h1>
            <p className={styles.description}>
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputsStack}>
              <InputField
                id="email"
                name="email"
                placeholder="Email *"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <InputField
                id="password"
                name="password"
                placeholder="Password *"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.submitWrapper}>
              <Button 
                label="Login" 
                type="submit" 
                variant="primary" 
                className={styles.loginBtn} 
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
