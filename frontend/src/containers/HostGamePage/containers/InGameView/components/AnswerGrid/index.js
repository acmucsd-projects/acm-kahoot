import React from 'react';

import styles from './styles.module.scss';
import AnswerCard from './components/AnswerCard';

const shapes = ['triangle', 'star', 'circle', 'square'];

export default function AnswerGrid({ answers, showAnswer = false }) {
  const cards = answers.map((ans, idx) => (!showAnswer || ans.correct) ?
      <AnswerCard key={idx} shape={shapes[idx]} label={ans.answer} />
      : <AnswerCard key={idx} shape={shapes[idx]} label={ans.answer} disabled />);

  return (
    <div className={styles.AnswerGrid}>
      {cards}
    </div>
  );
}