import React from 'react';

import styles from '../styles/TimeLimit.module.scss';

export default function TimeLimit() {
  return (
    <div className={styles.container}>
      Time Limit
      <div className={styles.time}>
        <input className={styles.timeInput} type='number' defaultValue='20' />
      </div>
    </div>
  );
}