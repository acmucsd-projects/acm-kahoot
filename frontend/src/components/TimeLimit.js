import React from 'react';

import styles from '../styles/TimeLimit.module.scss';

export default function TimeLimit({ time, onChange }) {
  return (
    <div className={styles.container}>
      Time Limit
      <div className={styles.time}>
        <input className={styles.timeInput} type='number' min='5' max='99' value={time} onChange={onChange} />
      </div>
    </div>
  );
}