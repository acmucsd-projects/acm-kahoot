import React from 'react';

import styles from './styles.module.scss';

export default function PlayerCounter({ count = 0 }) {
  return (
    <div className={styles.container}>
      <div className={styles.count}>
        {count}
      </div>
      <div className={styles.answers}>
        answers
      </div>
    </div>
  );
}