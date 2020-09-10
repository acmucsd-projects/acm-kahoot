import React from 'react';

import styles from '../styles/MoreQuestions.module.scss';
import MoreQuestionsCard from './MoreQuestionsCard';

export default function MoreQuestions({ questions }) {
  const selectedQuestions = questions.slice(0, 9);  // Limit to 8 (4*2) cards

  return (
    <div className={`${styles.container} ${styles.scroller}`}>
      {selectedQuestions.map(q => (<MoreQuestionsCard question={q.question} answers={q.answers} />))}
    </div>
  );
}