import React from 'react';

import styles from './styles.module.scss';

export default function OverlayCard({ question, onClick, hidden = false }) {
  if (hidden) return <div className={`${styles.card} ${styles.hidden}`}></div>;

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.question}>
        <div className={styles.center}>{question.question}</div>
        </div>
        <div className={styles.answers}>
          <div className={styles.orange}>
            <div className={styles.center}>{question.answers[0] ? question.answers[0].answer : ''}</div>
            <div className={styles.pink}>
              <div className={styles.center}>{question.answers[1] ? question.answers[1].answer : ''}</div>
              <div className={styles.blue}>
                <div className={styles.center}>{question.answers[2] ? question.answers[2].answer : ''}</div>
                <div className={styles.green}>
                  <div className={styles.center}>{question.answers[3] ? question.answers[3].answer : ''}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlay}>
        <button className={styles.addButton} onClick={() => onClick(question)}>
          Add Question
        </button>
      </div>
    </div>
  );
}