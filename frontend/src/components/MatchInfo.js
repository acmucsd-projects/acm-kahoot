import React from 'react';

import styles from '../styles/MatchInfo.module.scss';

function MatchInfo(props) {
  const gameCode = 123456;
  const userName = 'Appa';
  return (
    <div className={styles.MatchInfo}>
      <div className={styles['info-block']}>
        <div>CODE: {gameCode}</div>
        <div>Name: {userName}</div>
      </div>
      <div className={styles['info-block']}>
        Q: # / 20
      </div>
    </div>
  );
}

export default MatchInfo;