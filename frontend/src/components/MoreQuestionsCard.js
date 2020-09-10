import React from 'react';

import styles from '../styles/MoreQuestionsCard.module.scss';

export default function MoreQuestionsCard({ question, answers = [] }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.question}>
        <div className={styles.center}>{question}</div>
        </div>
        <div className={styles.answers}>
          {/* {answers.map(ans => (<div>{ans}</div>))} */}
          <div className={styles.orange}>
            <div className={styles.center}>{answers[0]}</div>
            <div className={styles.pink}>
              <div className={styles.center}>{answers[1]}</div>
              <div className={styles.blue}>
                <div className={styles.center}>{answers[2]}</div>
                <div className={styles.green}>
                  <div className={styles.center}>{answers[3]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlay}>
        a
      </div>
    </div>
  );
}