'use client';

import React, { useState } from 'react';
import BackButton from '../buttons/BackButton';
import Button from '../buttons/Button';
import InputField from '../inputs/InputField';
import styles from './ServiceProviderRegistrationModal.module.css';

interface ServiceProviderRegistrationModalProps {
  onClose: () => void;
  onBack?: () => void;
}

const ServiceProviderRegistrationModal: React.FC<ServiceProviderRegistrationModalProps> = ({ onClose, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    location: '',
    experience: '',
    hourlyRate: '',
    primaryField: '',
    description: '',
    secondaryField: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    // Handle submission logic
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <div className={styles.container}>
          <BackButton onClick={onBack || onClose} className={styles.backBtn} />
          
          <div className={styles.header}>
            <h1 className={styles.title}>Service Provider Registration</h1>
            <p className={styles.description}>
              Fill out your details to join our platform and start offering your services
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Personal Information */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Personal Information</h2>
              <div className={styles.fieldsGrid}>
                <InputField
                  id="fullName"
                  name="fullName"
                  label="Full Name *"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address *"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <InputField
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  label="Contact Number *"
                  placeholder="+91 1234567890"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
                <InputField
                  id="location"
                  name="location"
                  label="Service Area / Location *"
                  placeholder="e.g., Mumbai, Bangalore North"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
            </section>

            {/* Professional Experience */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Professional Experience</h2>
              <div className={styles.fieldsGrid}>
                <InputField
                  id="experience"
                  name="experience"
                  label="Years of Experience *"
                  placeholder="5"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
                <InputField
                  id="hourlyRate"
                  name="hourlyRate"
                  label="Hourly Rate (₹) Optional"
                  placeholder="500"
                  value={formData.hourlyRate}
                  onChange={handleChange}
                />
              </div>
            </section>

            {/* Service Details */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Service Details</h2>
              <div className={styles.fieldsGrid}>
                <InputField
                  id="primaryField"
                  name="primaryField"
                  label="Primary Field of Service *"
                  placeholder="e.g., Plumbing, Web Design"
                  value={formData.primaryField}
                  onChange={handleChange}
                  required
                />
                <InputField
                  id="description"
                  name="description"
                  type="textarea"
                  label="Primary Service Description *"
                  placeholder="Describe your expertise, specializations, and what makes your service unique"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                />
                <InputField
                  id="secondaryField"
                  name="secondaryField"
                  label="Secondary Field of Service Optional"
                  placeholder="e.g., Electrical Work"
                  value={formData.secondaryField}
                  onChange={handleChange}
                />
              </div>
            </section>

            {/* Portfolio / Work Images */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Portfolio / Work Images</h2>
              <div className={styles.uploadArea}>
                <div className={styles.uploadInner}>
                  <p className={styles.uploadTitle}>Click to upload images of your work</p>
                  <p className={styles.uploadDesc}>PNG, JPG up to 10MB each</p>
                </div>
              </div>
            </section>

            <div className={styles.submitWrapper}>
              <Button 
                label="Submit Registration" 
                type="submit" 
                variant="primary" 
                className={styles.submitBtn} 
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderRegistrationModal;
