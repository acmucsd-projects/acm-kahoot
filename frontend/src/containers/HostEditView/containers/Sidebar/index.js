import React from 'react';

import styles from './styles.module.scss';
import QuestionList from './containers/QuestionList';
import DualButton from '../../../../components/DualButton';

function QuestionSidebar({ questions, onChange, onAddQuestion, onMoreQuestions }) {
  return (
    <div className={styles.QuestionSidebar}>
      <QuestionList questions={questions} onChange={onChange} />
      <div className={styles.buttons}>
        <DualButton left="More Questions" onClickLeft={onMoreQuestions} right="New Question" onClickRight={onAddQuestion} vertical />
      </div>
    </div>
  );
}

export default QuestionSidebar;