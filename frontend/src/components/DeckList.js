import React from 'react';

import styles from '../styles/DeckList.module.scss';
import DeckCard from './DeckCard';

export default function DeckList(props) {
  return (
    <div className={styles.DeckList}>
      <div className={styles.content + ' ' + styles.scroller}>
        <DeckCard />
        <DeckCard />
        <DeckCard />
        {/* <DeckCard /> */}
      </div>
    </div>
  );
}