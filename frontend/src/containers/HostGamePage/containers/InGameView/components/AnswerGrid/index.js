import React from 'react';

import styles from './styles.module.scss';
import AnswerCard from './components/AnswerCard';

export default function AnswerGrid({ answers, showAnswer = false }) {
  return (
    <div className={styles.AnswerGrid}>
      {!showAnswer || answers[0].correct ? <AnswerCard shape='triangle' label={answers[0].answer} /> : <AnswerCard shape='triangle' label={answers[0].answer} disabled />}
      {!showAnswer || answers[1].correct ? <AnswerCard shape='star' label={answers[1].answer} /> : <AnswerCard shape='star' label={answers[1].answer} disabled />}
      {!showAnswer || answers[2].correct ? <AnswerCard shape='circle' label={answers[2].answer} /> : <AnswerCard shape='circle' label={answers[2].answer} disabled />}
      {!showAnswer || answers[3].correct ? <AnswerCard shape='square' label={answers[3].answer} /> : <AnswerCard shape='square' label={answers[3].answer} disabled />}
    </div>
  );
}