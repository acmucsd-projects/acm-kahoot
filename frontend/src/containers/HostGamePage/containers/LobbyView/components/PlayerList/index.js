import React from 'react';

import styles from './styles.module.scss';

export default function PlayerList({ players = [] }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        PLAYERS: {players.length}
      </div>
      <div className={`${styles.players} ${styles.scroller}`}>
        {players.map((p, idx) => <div key={idx} className={styles.player}>{p.username}</div>)}
        {/* {players.map(p => p.username)} */}
      </div>
    </div>
  );
}