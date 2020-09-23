import React from 'react';

import styles from '../styles/List.module.scss';

export default function List(props) {
  return (
    <div className={styles.List}>
      <div className={`${styles.content} ${styles.scroller}`}>
        {props.children}
      </div>
    </div>
  );
}