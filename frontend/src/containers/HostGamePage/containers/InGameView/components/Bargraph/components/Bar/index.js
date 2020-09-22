import React from 'react';

import styles from './styles.module.scss';

function Bar(props) {
  return (
    <div className={styles.Bar}>
      <div>{props.count || ''}</div>
      <div className={`${styles.box} ${styles[props.shape]}`}></div>
    </div>
  );
}

export default Bar;