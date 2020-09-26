import React from 'react';

import styles from '../styles/DecksView.module.scss';
import DeckList from '../components/DeckList';

export default function DecksView() {
  return (
    <div className={styles.DecksView}>
      <div className={styles.header}>My Games</div>
      <DeckList />
    </div>
  );
}