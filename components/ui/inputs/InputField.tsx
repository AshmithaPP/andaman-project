"use client";

import React from "react";
import styles from "./InputField.module.css";

export type InputFieldType = "text" | "email" | "tel" | "select";

export interface SelectOption {
  value: string;
  label: string;
}

export interface InputFieldProps {
  id: string;
  name: string;
  placeholder?: string;
  type?: InputFieldType;
  required?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  options?: SelectOption[];
  error?: string;
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
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
  options = [],
  error,
}) => {
  if (type === "select") {
    return (
      <div className={styles.fieldGroup}>
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
        {error && (
          <span id={`${id}-error`} className={styles.fieldError} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={styles.fieldGroup}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`${styles.inputField} ${error ? styles.errorState : ""}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span id={`${id}-error`} className={styles.fieldError} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

export default InputField;
