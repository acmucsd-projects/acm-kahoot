import React from 'react';

import styles from './styles.module.scss';
import MatchInfo from '../../../../components/MatchInfo';
import AnswerGrid from './components/AnswerGrid';
import QuestionCard from './components/QuestionCard';
import BarGraph from './components/Bargraph';
import ActionButton from '../../components/ActionButton';
import PlayerCounter from './components/PlayerCounter';

export default function InGameView({ roomID, questionState, time, stats, onAction, showAnswer = false }) {
  return (
    <div className={styles.HostGameView}>
      <MatchInfo roomID={roomID} numQuestion={questionState.number} />
      {showAnswer ? <QuestionCard shape='' time={time} question={questionState.question.question} showAnswer /> : <QuestionCard shape='' time={time} question={questionState.question.question} />}
      <div className={styles.main}>
        <div className={styles.grid}>
          <BarGraph stats={stats} />
          {showAnswer ? <AnswerGrid answers={questionState.question.answers} showAnswer /> : <AnswerGrid answers={questionState.question.answers} />}
        </div>
        <div className={styles.side}>
          <PlayerCounter count={stats.total} />
          {showAnswer ? <ActionButton label='next' onClick={onAction} color='green' /> : <ActionButton label='skip' onClick={onAction} color='red' />}
        </div>
      </div>
    </div>
  );
}