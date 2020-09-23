import React from 'react';

import styles from './styles.module.scss';
import MatchInfo from '../../../../components/MatchInfo';
import AnswerGrid from './components/AnswerGrid';
import QuestionCard from './components/QuestionCard';
import BarGraph from './components/Bargraph';

export default function InGameView() {
  return (
    <div className={styles.HostGameView}>
      <MatchInfo />
      <QuestionCard shape='' />
      <div className={styles.layout}>
        <BarGraph />
        <AnswerGrid />
      </div>
    </div>
  );
}