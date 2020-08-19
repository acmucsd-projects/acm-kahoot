import React from 'react';

import styles from '../styles/QuestionCard.module.scss';

function QuestionCard(props) {
  return (
    <div className={styles.QuestionCard}>
      {/* TODO: Add question number-circle */}
      <div className={styles.number}><div>12</div></div>
      <div className={styles.label}>This is the question.</div>
    </div>
  );
}

export default QuestionCard;