import React from 'react';

import styles from './styles.module.scss';

export default function ActionButton({ label, color, onClick }) {
  return (
    <div className={styles.wrapper}>
      <button className={`${styles.button} ${styles[color]}`} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}