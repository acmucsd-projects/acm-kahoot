import React from 'react';

import styles from './styles.module.scss';
import AnswerCard from './components/AnswerCard';

export default function AnswerGrid({ answers, showAnswer = false }) {
  return (
    <div className={styles.AnswerGrid}>
      <AnswerCard shape='triangle' label={answers[0].name} />
      <AnswerCard shape='star' label={answers[1].name} />
      <AnswerCard shape='circle' label={answers[2].name} />
      <AnswerCard shape='square' label={answers[3].name} />
    </div>
  );
}