import React from 'react';
import PlayerList from './components/PlayerList';

import styles from './styles.module.scss';

export default function LobbyView({ roomID, users = [], onStartGame }) {
  const codeMessage = (
    <div className={styles.code}>
      <span className={`${styles.accent} ${styles.large}`}>CODE:</span>
      <span className={styles.large}>{roomID}</span>
    </div>
  );

  return (
    <div className={styles.container}>
      {codeMessage}
      <button className={styles.start} onClick={onStartGame}>START</button>
      <PlayerList players={users} />
    </div>
  );
}