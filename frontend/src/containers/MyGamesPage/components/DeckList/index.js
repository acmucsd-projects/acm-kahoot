import React from 'react';

import styles from './styles.module.scss';
import DeckCard from './components/DeckCard';

export default function DeckList({ packs = [] }) {
  return (
    <div className={styles.DeckList}>
      <div className={`${styles.content} ${styles.scroller}`}>
        {packs ? packs.map((pack, idx) => <DeckCard key={idx} id={pack[2]} name={pack[0]} />) : null}
      </div>
    </div>
  );
}