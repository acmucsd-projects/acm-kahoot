import React from 'react';

import styles from './styles.module.scss';

function Bar({ shape, count = 0, height }) {
  return (
    <div className={styles.Bar}>
      <div>{count || ''}</div>
      <div className={`${styles.box} ${styles[shape]}`}></div>
    </div>
  );
}

export default Bar;