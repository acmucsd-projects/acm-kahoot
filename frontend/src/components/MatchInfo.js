import React from 'react';

import styles from '../styles/MatchInfo.module.scss';

function MatchInfo({ roomID, numQuestion }) {
  return (
    <div className={styles.MatchInfo}>
      <div className={styles['info-block']}>
        <div>CODE: {roomID}</div>
      </div>
      <div className={styles['info-block']}>
        Q#: {numQuestion || 'N/A'}
      </div>
    </div>
  );
}

export default MatchInfo;