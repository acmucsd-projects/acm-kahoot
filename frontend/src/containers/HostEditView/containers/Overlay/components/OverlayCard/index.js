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
          {/* {answers.map(ans => (<div>{ans}</div>))} */}
          <div className={styles.orange}>
            <div className={styles.center}>{question.answers ? question.answers[0].text : ''}</div>
            <div className={styles.pink}>
              <div className={styles.center}>{question.answers ? question.answers[1].text : ''}</div>
              <div className={styles.blue}>
                <div className={styles.center}>{question.answers ? question.answers[2].text : ''}</div>
                <div className={styles.green}>
                  <div className={styles.center}>{question.answers ? question.answers[3].text : ''}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlay}>
        <button className={styles.addButton} onClick={() => onClick(question)}>
          Add Card
        </button>
      </div>
    </div>
  );
}