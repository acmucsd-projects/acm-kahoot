import React from 'react';

import styles from './styles.module.scss';

export default function Bar({ shape, count = 0, height }) {
  let bar = null;
  if (count > 0) {
    bar = (
      <div className={styles.Bar}>
        <div>{count || ''}</div>
        <div className={`${styles.box} ${styles[shape]}`}></div>
      </div>
    );
  }

  return bar;
}