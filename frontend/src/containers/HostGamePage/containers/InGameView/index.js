import React from 'react';

import styles from './styles.module.scss';
import MatchInfo from '../../../../components/MatchInfo';
import AnswerGrid from './components/AnswerGrid';
import QuestionCard from './components/QuestionCard';
import BarGraph from './components/Bargraph';
import ActionButton from '../../components/ActionButton';
import PlayerCounter from './components/PlayerCounter';

export default function InGameView({ roomID, question, time, stats, onAction, showAnswer = false }) {
  return (
    <div className={styles.HostGameView}>
      <MatchInfo />
      {showAnswer ? <QuestionCard shape='' time={time} question={question.question} short /> : <QuestionCard shape='' time={time} question={question.question} />}
      <div className={styles.main}>
        <div className={styles.grid}>
          <BarGraph stats={stats} />
          {showAnswer ? <AnswerGrid answers={question.answers} showAnswer /> : <AnswerGrid answers={question.answers} />}
        </div>
        <div className={styles.side}>
          <PlayerCounter count={stats[0]} />
          {showAnswer ? <ActionButton label='next' color='green' /> : <ActionButton label='skip' color='red' />}
        </div>
      </div>
    </div>
  );
}