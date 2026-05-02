'use client';

import React, { useState } from 'react';
import styles from './FaqSection.module.css';

interface FaqItem {
  number: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    number: '01',
    question: 'Lorem Ipsum is a dummy text used in the typesetting industry around the year 1800s',
    answer:
      'Lorem Ipsum is a dummy text used in the typesetting industry around the year 1800s and is one of the important component in design system. Lorem Ipsum is a dummy text used in the typesetting industry around the year 1800s',
  },
  {
    number: '02',
    question: 'Lorem Ipsum is a dummy text used in the',
    answer:
      'Lorem Ipsum is a dummy text used in the typesetting industry around the year 1800s and is one of the important component in design system.',
  },
  {
    number: '03',
    question: 'Lorem Ipsum is a dummy text used in the',
    answer:
      'Lorem Ipsum is a dummy text used in the typesetting industry around the year 1800s and is one of the important component in design system.',
  },
  {
    number: '04',
    question: 'Lorem Ipsum is a dummy text used in the',
    answer:
      'Lorem Ipsum is a dummy text used in the typesetting industry around the year 1800s and is one of the important component in design system.',
  },
  {
    number: '05',
    question: 'Lorem Ipsum is a dummy text used in the',
    answer:
      'Lorem Ipsum is a dummy text used in the typesetting industry around the year 1800s and is one of the important component in design system.',
  },
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>

        <div className={styles.cardsRow}>
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;

            if (isActive) {
              return (
                <div key={faq.number} className={styles.activeCard}>
                  <p className={styles.activeNumber}>{faq.number}</p>
                  <p className={styles.activeQuestion}>{faq.question}</p>
                  <p className={styles.activeAnswer}>{faq.answer}</p>
                </div>
              );
            }

            return (
              <div
                key={faq.number}
                className={styles.inactiveCard}
                onClick={() => setActiveIndex(index)}
              >
                <p className={styles.inactiveNumber}>{faq.number}</p>
                <p className={styles.inactiveQuestion}>{faq.question}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
