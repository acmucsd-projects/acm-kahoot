import React from 'react';

import styles from './styles.module.scss';

export default function AnswerCard({ score, correct = false }) {
  return (     
    <div className={styles.centercontainer}>
      <div className={`${styles.waitingAsset} ${styles[(correct && 'correct') || 'incorrect']}`}>
        {correct ? 'CORRECT' : 'INCORRECT'}!
        <div className={styles.pointBox}>
          {/* + {score} pts */}
          {score} pts
        </div>
      </div>
    </div>
  );
}