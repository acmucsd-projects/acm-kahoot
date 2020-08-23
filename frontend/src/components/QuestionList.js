import React from 'react';

import styles from '../styles/QuestionList.module.scss';
import QuestionListCard from './QuestionListCard';

function QuestionList(props) {
  return (
    <div className={styles.QuestionList + ' ' + styles.scroller}>
      <QuestionListCard />
      <QuestionListCard />
      <QuestionListCard />
      <QuestionListCard />
      <QuestionListCard />
      <QuestionListCard />
    </div>
  );
}

export default QuestionList;