import React from 'react';

import styles from './styles.module.scss';
import MatchInfo from '../../../../components/MatchInfo.js';
import ButtonGrid from './components/AnswerGrid';

export default function ButtonsView({ onAnswer }) {
  return (
    <div>
      <MatchInfo />
      <ButtonGrid onClick={onAnswer} />
      {/* { correct ? <IsCorrectCard color={answer} isCorrect={correct}/> : <PlayerAnswerButton onAnswerClick={handleAnswerClick} onCorrectClick={handleCorrectClick} /> } */}
    </div>
  );
}