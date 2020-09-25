import React from 'react';

import styles from './styles.module.scss';
import MatchInfo from '../../../../components/MatchInfo.js';
import ButtonGrid from './components/AnswerGrid';

export default function ButtonsView({ numAnswers, onAnswer }) {
  return (
    <div>
      <MatchInfo />
      <ButtonGrid num={numAnswers} onClick={onAnswer} />
    </div>
  );
}