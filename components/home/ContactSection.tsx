"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import InputField, { SelectOption } from "@/components/ui/inputs/InputField";
import styles from "./ContactSection.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  source: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

// ─── Source options ───────────────────────────────────────────────────────────

const SOURCE_OPTIONS: SelectOption[] = [
  { value: "google", label: "Google Search" },
  { value: "social_media", label: "Social Media" },
  { value: "friend", label: "Friend / Referral" },
  { value: "advertisement", label: "Advertisement" },
  { value: "other", label: "Other" },
];

// ─── Validation ───────────────────────────────────────────────────────────────

function validate(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  return errors;
}

const INITIAL: ContactFormData = { name: "", email: "", phone: "", source: "" };

// ─── Component ────────────────────────────────────────────────────────────────

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(async () => {
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setSubmitted(true);
      setForm(INITIAL);
      setErrors({});
      setTimeout(() => setSubmitted(false), 4500);
    } finally {
      setLoading(false);
    }
  }, [form]);

  return (
    <section className={styles.sectionWrapper} aria-labelledby="contact-heading">
      <div className={styles.container}>

        {/* ── White Card (left) ── */}
        <div className={styles.card}>
          <div className={styles.formInner}>

            {/* Heading block */}
            <div className={styles.headingBlock}>
              <h2 id="contact-heading" className={styles.headingTitle}>
                Get in Touch with Us
              </h2>
              <p className={styles.headingDesc}>
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
                molestie vel, ornare non id blandit netus.
              </p>
            </div>

            {/* Success banner */}
            {submitted && (
              <div className={styles.successBanner} role="status">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="8" stroke="#22c55e" strokeWidth="1.5"/>
                  <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Thanks! We&apos;ll be in touch shortly.
              </div>
            )}

            {/* Input fields */}
            <div className={styles.fieldsStack}>
              <InputField
                id="name"
                name="name"
                type="text"
                placeholder="Name *"
                required
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />
              <InputField
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
              <InputField
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone number *"
                required
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
              />
              <InputField
                id="source"
                name="source"
                type="select"
                placeholder="How did you find us?"
                value={form.source}
                onChange={handleChange}
                options={SOURCE_OPTIONS}
              />
            </div>

            {/* Submit button */}
            <button
              type="button"
              className={styles.btnSubmit}
              onClick={handleSubmit}
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? "..." : "Submit"}
            </button>

            {/* Contact info row */}
            <div className={styles.contactRow}>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <Image
                    src="/icons/contactus/phone.png"
                    alt="Phone"
                    width={28}
                    height={28}
                  />
                </span>
                <div className={styles.contactText}>
                  <span className={styles.cLabel}>PHONE</span>
                  <a href="tel:0354321234" className={styles.cValue}>03 5432 1234</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <Image
                    src="/icons/contactus/fax.png"
                    alt="Fax"
                    width={28}
                    height={28}
                  />
                </span>
                <div className={styles.contactText}>
                  <span className={styles.cLabel}>FAX</span>
                  <span className={styles.cValue}>03 5432 1234</span>
                </div>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>
                  <Image
                    src="/icons/contactus/mail.png"
                    alt="Email"
                    width={28}
                    height={28}
                  />
                </span>
                <div className={styles.contactText}>
                  <span className={styles.cLabel}>EMAIL</span>
                  <a href="mailto:info@marcc.com.au" className={styles.cValue}>info@marcc.com.au</a>
                </div>
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
            alt="Contact Andaman"
            fill
            className={styles.contactImg}
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;