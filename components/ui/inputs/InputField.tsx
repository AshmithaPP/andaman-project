"use client";

import React from "react";
import styles from "./InputField.module.css";

export type InputFieldType = "text" | "email" | "tel" | "select" | "textarea" | "number" | "password";

export interface SelectOption {
  value: string;
  label: string;
}

export interface InputFieldProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  type?: InputFieldType;
  required?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  options?: SelectOption[];
  error?: string;
  rows?: number;
}

const ChevronIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M3.5 5.25L7 8.75L10.5 5.25"
      stroke="#000000"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
  options = [],
  error,
  rows = 4,
}) => {
  const renderPlaceholder = (text: string) => {
    if (!text) return null;
    const parts = text.split('*');
    return (
      <label className={`${styles.placeholderLabel} ${value ? styles.hidden : ''}`} htmlFor={id}>
        {parts[0]}
        {text.includes('*') && <span className={styles.requiredStar}>*</span>}
        {parts[1]}
      </label>
    );
  };

  const renderLabel = () => {
    if (!label) return null;
    const parts = label.split('*');
    return (
      <label className={styles.externalLabel} htmlFor={id}>
        {parts[0]}
        {label.includes('*') && <span className={styles.requiredStar}>*</span>}
        {parts[1]}
      </label>
    );
  };

  const renderField = () => {
    if (type === "select") {
      return (
        <div className={styles.selectWrap}>
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            className={`${styles.inputField} ${!value ? styles.placeholderActive : ""} ${
              error ? styles.errorState : ""
            }`}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
          >
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className={styles.selectArrow} aria-hidden="true">
            <ChevronIcon />
          </span>
        </div>
      );
    }

    if (type === "textarea") {
      return (
        <div className={styles.inputWrap}>
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            className={`${styles.inputField} ${styles.textareaField} ${error ? styles.errorState : ""}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
          />
          {placeholder && renderPlaceholder(placeholder)}
        </div>
      );
    }

    return (
      <div className={styles.inputWrap}>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={`${styles.inputField} ${error ? styles.errorState : ""}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {placeholder && renderPlaceholder(placeholder)}
      </div>
    );
  };

  return (
    <div className={styles.fieldGroup}>
      {renderLabel()}
      {renderField()}
      {error && (
        <span id={`${id}-error`} className={styles.fieldError} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
