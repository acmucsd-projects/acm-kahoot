import React from 'react';

import styles from '../styles/LoadingView.module.scss';

export default function LoadingView() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        Loading...
      </div>
    </div>
  );
}