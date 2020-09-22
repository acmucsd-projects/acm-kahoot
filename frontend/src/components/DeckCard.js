import React from 'react';

import styles from '../styles/DeckCard.module.scss';
import DualButton from '../components/DualButton';

export default function DeckCard({ id, name }) {
  return (
    <div className={styles.DeckCard}>
      <img className={styles.icon} src='' alt='' />
      <div className={styles.title}>
        {name}
      </div>
      <div className={styles.buttons}>
        <DualButton left='edit' leftTo={`/host/edit/${id}`} right='play' rightTo={`/host/room/${id}`} />
      </div>
    </div>
  );
}