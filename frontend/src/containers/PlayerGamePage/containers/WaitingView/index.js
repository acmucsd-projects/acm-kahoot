import React from 'react';

import styles from './styles.module.scss';

import MatchInfo from '../../../../components/MatchInfo.js';
import WaitingCard from './components/WaitingCard';

export default function WaitingView({ shape }) {
  return (
    <div>
      <MatchInfo />            
      <div className={styles.centercontainer}>
        <WaitingCard shape={shape} />
      </div>
    </div>
  );
}