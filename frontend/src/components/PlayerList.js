import React from 'react';

import styles from '../styles/PlayerList.module.scss';
import List from './List';

export default function PlayerList(props) {
  const players = [];
  for (const p of players) {
    players.push(<div className={styles.player}>{p.username}</div>);
  }

  return (
    <List>
      {players}
    </List>
  );
}