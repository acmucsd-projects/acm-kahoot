import React from 'react';

import styles from '../styles/HostScreen.module.scss';
import MatchInfo from '../components/MatchInfo';
import AnswerGrid from '../components/AnswerGrid';
import QuestionCard from '../components/QuestionCard';
import BarGraph from '../components/BarGraph';

function HostScreen() {
  return (
    <div className={styles.HostScreen}>
      <MatchInfo />
      <QuestionCard />
      <div className={styles.layout}>
        <BarGraph />
        <AnswerGrid />
      </div>
    </div>
  );
}

export default HostScreen;