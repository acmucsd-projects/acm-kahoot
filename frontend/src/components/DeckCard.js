import React from 'react';

import styles from '../styles/DeckCard.module.scss';
import DualButton from '../components/DualButton';

export default function DeckCard() {
  return (
    <div className={styles.DeckCard}>
      <img className={styles.icon} src='' alt='' />
      <div className={styles.title}>Title</div>
      <div className={styles.buttons}>
        <DualButton left='edit' leftTo={`/host/edit/${12345}`} right='play' rightTo={`/host/room/${12345}`} />
      </div>
    </div>
  );
}