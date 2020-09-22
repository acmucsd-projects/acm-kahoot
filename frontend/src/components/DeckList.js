import React from 'react';

import styles from '../styles/DeckList.module.scss';
import DeckCard from './DeckCard';

export default function DeckList({ packs = [] }) {
  return (
    <div className={styles.DeckList}>
      <div className={`${styles.content} ${styles.scroller}`}>
        {packs ? packs.map((p, idx) => <DeckCard key={idx} id={p[2]} name={p[0]} />) : null}
      </div>
    </div>
  );
}