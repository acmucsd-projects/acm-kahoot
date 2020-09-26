import React from 'react';

import styles from './styles.module.scss';
import QuestionListCard from './components/QuestionListCard';

function QuestionList({ questions, onChange }) {
  return (
    <div className={styles.QuestionList + ' ' + styles.scroller}>
      {questions.map((q, idx) => <QuestionListCard key={idx} number={idx+1} question={q.question} onClick={() => onChange(q)} />)}
    </div>
  );
}

export default QuestionList;